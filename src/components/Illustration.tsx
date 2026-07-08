import React from 'react';

export default function Illustration() {
  return (
    <div className="relative w-56 h-72 md:w-72 md:h-[360px] -my-10 md:-mx-10 z-10 flex-shrink-0">
      <svg viewBox="0 0 256 320" className="w-full h-full overflow-visible">
        {/* Red hat brim */}
        <ellipse cx="140" cy="100" rx="90" ry="35" fill="#fed0b9" transform="rotate(-15 140 100)" />
        
        {/* Light purple accent behind */}
        <path d="M150 120 L220 130 L180 160 Z" fill="#C4C4FF" />
        
        {/* Blue hood */}
        <path d="M78 140 C78 60, 178 60, 178 140 C178 190, 128 220, 128 220 C128 220, 78 190, 78 140 Z" fill="#0055FF" />
        
        {/* Face */}
        <ellipse cx="128" cy="150" rx="32" ry="42" fill="#FFB6C1" />
        
        {/* Hair */}
        <path d="M96 150 C96 100, 160 100, 160 150 C140 140, 116 140, 96 150 Z" fill="#222" />
        
        {/* Eyebrows */}
        <path d="M100 130 L104 126 L108 130 L112 126 L116 130" stroke="black" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <path d="M140 130 L144 126 L148 130 L152 126 L156 130" stroke="black" strokeWidth="2" fill="none" strokeLinejoin="round" />
        
        {/* Eyes */}
        <circle cx="110" cy="145" r="9" fill="white" />
        <circle cx="110" cy="145" r="4" fill="black" />
        <circle cx="146" cy="145" r="9" fill="white" />
        <circle cx="146" cy="145" r="4" fill="black" />
        
        {/* Lips */}
        <ellipse cx="128" cy="175" rx="10" ry="4" fill="#fed0b9" />
        
        {/* Earrings */}
        <circle cx="85" cy="165" r="12" fill="white" />
        <circle cx="85" cy="165" r="5" fill="black" />
        <circle cx="171" cy="165" r="12" fill="white" />
        <circle cx="171" cy="165" r="5" fill="black" />
        
        {/* Body Base */}
        <path d="M30 320 C30 220, 226 220, 226 320 Z" fill="#0055FF" />
        
        {/* Light purple sections */}
        <path d="M30 320 C40 260, 90 240, 128 240 L128 320 Z" fill="#C4C4FF" />
        <path d="M226 320 C216 260, 166 240, 128 240 L128 320 Z" fill="#E0E0FF" />
        
        {/* Blue center section */}
        <path d="M90 320 C90 260, 128 240, 128 240 C128 240, 166 260, 166 320 Z" fill="#0055FF" />

        {/* Target */}
        <circle cx="140" cy="280" r="55" fill="#fed0b9" />
        <circle cx="140" cy="280" r="35" fill="#0055FF" />
        <circle cx="140" cy="280" r="15" fill="#fed0b9" />
      </svg>
    </div>
  );
}
