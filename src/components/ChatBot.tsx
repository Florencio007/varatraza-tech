import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getChatResponse } from "@/lib/openai";

type Message = {
  id: string;
  role: "system" | "user" | "assistant";
  text: string;
  options?: string[];
};

const formatText = (text: string) => {
  if (!text) return text;
  let formatted = text.replace(/\*\*\*/g, ""); // Remove ***
  const parts = formatted.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-extrabold text-slate-900">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{
      part.split("\n").map((line, j, arr) => (
        <span key={j}>
          {line}
          {j < arr.length - 1 && <br />}
        </span>
      ))
    }</span>;
  });
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const initialMessage: Message = {
    id: "1",
    role: "assistant",
    text: "Bonjour ! Je suis l'assistant Varatraza. Je suis là pour vous aider à trouver la solution digitale parfaite pour votre établissement, sans termes techniques compliqués. 😊",
    options: ["Aidez-moi à choisir une offre", "C'est quoi Varatraza ?", "Juste une question"]
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => setMessages([initialMessage]), 500);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const handleOpenChat = (event: CustomEvent<{ message: string }>) => {
      setIsOpen(true);
      if (event.detail?.message) {
        // Delay slightly to ensure the window is open and initial message is handled
        setTimeout(() => {
          handleSend(event.detail.message);
        }, 600);
      }
    };

    window.addEventListener("varatraza:open-chat" as any, handleOpenChat);
    return () => window.removeEventListener("varatraza:open-chat" as any, handleOpenChat);
  }, [messages]); // Include messages in deps or use a ref for handleSend if needed, but handleSend is stable. Actually better use a ref for messages or ensure handleSend works.

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Call OpenAI
    const chatHistory = messages.map(m => ({ role: m.role, content: m.text }));
    chatHistory.push({ role: "user", content: text });
    
    const responseText = await getChatResponse(chatHistory);
    
    setIsTyping(false);
    const botMsg: Message = { 
      id: (Date.now() + 1).toString(), 
      role: "assistant", 
      text: responseText || "Désolé, j'ai rencontré un souci." 
    };
    setMessages(prev => [...prev, botMsg]);
  };

  const handleOptionClick = (option: string) => {
    handleSend(option);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[350px] sm:w-[450px] h-[600px] bg-white rounded-[32px] shadow-2xl border border-border flex flex-col overflow-hidden mb-4 glass"
          >
            {/* Header */}
            <div className="gradient-bg p-6 text-white flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 animate-pulse overflow-hidden p-1.5">
                  <img src="/favicon.svg" alt="Varatraza Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-bold text-sm tracking-wide">Assistant Varatraza AI</div>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                    <span className="text-[10px] uppercase font-black tracking-widest leading-none">GPT-4o Connecté</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-1">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.role === "assistant" ? -10 : 10, y: 5 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  className={`flex ${msg.role === "assistant" ? "justify-start" : "justify-end"}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm leading-relaxed ${
                    msg.role === "assistant" 
                      ? "bg-white text-slate-700 border border-slate-100 rounded-tl-none" 
                      : "gradient-bg text-white rounded-tr-none"
                  }`}>
                    {formatText(msg.text)}
                    
                    {/* Render options if any (only for initial message usually) */}
                    {msg.options && (
                      <div className="mt-4 flex flex-col gap-2">
                        {msg.options.map(opt => (
                          <button
                            key={opt}
                            onClick={() => handleOptionClick(opt)}
                            className="text-[11px] font-bold py-2 px-3 rounded-xl border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all text-left"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }}
                   className="flex justify-start"
                >
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center shadow-sm">
                    <span className="w-1 h-1 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1 h-1 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1 h-1 bg-slate-300 rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2 items-center">
              <input 
                type="text"
                placeholder="Posez votre question ici..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                className="flex-1 bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              />
              <button 
                onClick={() => handleSend(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 rounded-xl gradient-bg text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 relative group overflow-hidden ${
          isOpen ? "bg-white text-navy rotate-90" : "gradient-bg text-white"
        }`}
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        
        {/* Subtle notification dot */}
        {!isOpen && (
           <span className="absolute top-0 right-0 w-4 h-4 bg-teal rounded-full border-2 border-white flex items-center justify-center">
              <Sparkles size={8} className="text-white" />
           </span>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
