import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  width?: number | string;
  height?: number | string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  className = '', 
  width = 240, 
  height = 'auto' 
}) => {
  const textColor = variant === 'light' ? '#ffffff' : '#1A2340';
  const techColor = '#0B5FFF';

  return (
    <svg 
      viewBox="0 0 310 70" 
      width={width} 
      height={height} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon Square */}
      <rect x="2" y="2" width="66" height="66" rx="15" fill="#0B5FFF"/>
      
      {/* Swirls (Official paths from Kit) */}
      <path 
        d="M10,50 C10,50 13,25 24,16 C30,11 32,18 28,26 C23,34 15,37 18,45 C20,52 30,56 36,49 C42,42 40,30 36,23" 
        stroke="#fff" 
        strokeWidth="3.8" 
        strokeLinecap="round" 
        fill="none"
      />
      <path 
        d="M17,52 C17,52 20,28 30,19 C36,14 39,21 35,29 C30,37 22,40 25,47 C27,53 37,57 43,50 C49,43 47,31 43,24" 
        stroke="rgba(255,255,255,.68)" 
        strokeWidth="2.9" 
        strokeLinecap="round" 
        fill="none"
      />
      <path 
        d="M24,53 C24,53 27,31 36,22 C42,17 45,24 41,32 C36,40 28,43 31,50 C33,56 43,59 49,52 C55,45 53,33 49,26" 
        stroke="#00D4AA" 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        fill="none" 
        opacity=".95"
      />
      <path 
        d="M31,54 C31,54 34,34 42,25 C48,20 51,27 47,35 C42,43 34,46 37,52 C39,57 49,60 55,53 C61,46 59,34 55,27" 
        stroke="#00D4AA" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        fill="none" 
        opacity=".5"
      />
      <path 
        d="M38,55 C38,55 41,37 48,28 C54,23 58,30 54,38 C49,46 41,49 44,54 C46,59 56,61 62,54" 
        stroke="#00D4AA" 
        strokeWidth="1" 
        strokeLinecap="round" 
        fill="none" 
        opacity=".25"
      />
      
      {/* Wordmark */}
      <text 
        x="82" 
        y="30" 
        fontFamily="DM Sans, system-ui, sans-serif" 
        fontSize="22" 
        fontWeight="700" 
        fill={textColor} 
        letterSpacing="-.5"
      >
        VARATRAZA
      </text>
      <text 
        x="84" 
        y="53" 
        fontFamily="DM Sans, system-ui, sans-serif" 
        fontSize="13.5" 
        fontWeight="300" 
        fill={techColor} 
        letterSpacing="6"
      >
        TECH
      </text>
    </svg>
  );
};

export default Logo;
