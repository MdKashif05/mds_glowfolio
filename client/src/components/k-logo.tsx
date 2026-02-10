import React from "react";

export default function KLogo({ className = "", width = "50", height = "50" }: { className?: string, width?: string, height?: string }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 300 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`drop-shadow-[0_0_10px_rgba(0,163,255,0.5)] ${className}`}
    >
      <defs>
        <linearGradient id="kFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <linearGradient id="kStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
        <linearGradient id="kAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00FFA3" />
          <stop offset="100%" stopColor="#00A3FF" />
        </linearGradient>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ULTRA-MODERN K LOGO DESIGN */}
      
      {/* 1. The Spine (Vertical Block) */}
      <path 
        d="M80 40 L80 140 L110 130 L110 40 L80 40 Z" 
        fill="url(#kFill)" 
        stroke="url(#kStroke)" 
        strokeWidth="12"
      />
      <path 
        d="M80 150 L80 260 L110 260 L110 160 L80 150 Z" 
        fill="url(#kFill)" 
        stroke="url(#kStroke)" 
        strokeWidth="12"
      />

      {/* 2. The Upper Wing (Futuristic Chevron) */}
      <path 
        d="M110 130 L180 50 L240 50 L140 150 L110 130 Z" 
        fill="url(#kFill)" 
        stroke="url(#kStroke)" 
        strokeWidth="12"
      />

      {/* 3. The Lower Kick (Heavy Base) */}
      <path 
        d="M130 160 L200 260 L250 260 L160 140 L130 160 Z" 
        fill="url(#kFill)" 
        stroke="url(#kStroke)" 
        strokeWidth="12"
      />
      
      {/* 4. NEON CIRCUITRY */}
      
      {/* Main Energy Line - Spine */}
      <path 
        d="M95 50 L95 250" 
        stroke="url(#kAccent)" 
        strokeWidth="16" 
        strokeLinecap="round"
        filter="url(#neon-glow)"
        strokeOpacity="1"
      />

      {/* Main Energy Line - Upper Wing */}
      <path 
        d="M190 65 L125 140" 
        stroke="url(#kAccent)" 
        strokeWidth="16" 
        strokeLinecap="round"
        filter="url(#neon-glow)"
        strokeOpacity="1"
      />

      {/* Main Energy Line - Lower Kick */}
      <path 
        d="M145 170 L215 250" 
        stroke="url(#kAccent)" 
        strokeWidth="16" 
        strokeLinecap="round"
        filter="url(#neon-glow)"
        strokeOpacity="1"
      />
      
      {/* Connection Dots */}
      <circle cx="95" cy="50" r="14" fill="#00FFA3" />
      <circle cx="95" cy="250" r="14" fill="#00A3FF" />
      <circle cx="190" cy="65" r="14" fill="#00FFA3" />
      <circle cx="215" cy="250" r="14" fill="#00A3FF" />

    </svg>
  );
}
