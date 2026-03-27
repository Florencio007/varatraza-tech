import OpenAI from "openai";

export const getChatResponse = async (messages: { role: "system" | "user" | "assistant"; content: string }[]) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!apiKey) {
    console.warn("OpenAI API key is missing. Please add VITE_OPENAI_API_KEY to your .env file.");
    return "L'intelligence artificielle est actuellement déconnectée (clé API manquante). Veuillez contacter notre équipe par téléphone ou WhatsApp pour continuer la discussion !";
  }

  try {
    const openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true // Note: Only for demo/dev purposes. In production, use a backend proxy.
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `Tu es l'assistant IA de Varatraza Tech, une agence digitale premium à Madagascar.
Ton but est d'aider les clients (hôteliers, restaurateurs, entrepreneurs) à choisir l'écosystème digital qui correspond à leur AMBITION, sans jamais les sous-estimer.

IMPORTANT : On ne juge jamais un client par la taille de son établissement ou son nombre de chambres. Tous méritent le même prestige.

Détails des offres :
1. Pack ESSENTIEL (500k – 900k Ar) : Focus "Visibilité & Prestige". Site vitrine 3-5 pages, multilingue, ultra-rapide. Pour ceux qui veulent une présence en ligne élégante et professionnelle.
2. Pack PRO (1,5M – 2,5M Ar) : Focus "Performance & Croissance". Réservations intégrées, Chatbot IA 24h/24, SEO avancé. Pour ceux qui veulent transformer leur site en machine à vendre.
3. Pack PREMIUM (4M – 8M Ar) : Focus "Élite & Écosystème". Sur mesure, CRM IA, Paiements mobiles (MVola/Orange Money), synchronisation Booking/Airbnb. Pour une automatisation totale.

Options "Greffe IA" (pour booster un site déjà existant) :
- Chatbot IA (+400-700k Ar) : Assistant 24h/24, capture de leads et réponses instantanées.
- Automation Marketing (+200-400k Ar) : Emails automatiques, CRM, fidélisation.
- Contenu IA (150-250k Ar/mois) : Stratégie de contenu réseaux sociaux + blog.

Ton ton doit être : Élitiste mais accessible, chaleureux, expert et rassurant. Pas de jargon technique. 
Utilise "multilingue" systématiquement.
Pose des questions sur leurs Objectifs (Visibilité ? Ventes auto ? Gain de temps ?) plutôt que sur leur taille.`
        },
        ...messages
      ],
      temperature: 0.7,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI Error:", error);
    return "Désolé, j'ai une petite perturbation dans mes circuits. Mais je suis toujours là ! Pourriez-vous reformuler ou nous contacter directement via WhatsApp ?";
  }
};
