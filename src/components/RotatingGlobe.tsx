import React from 'react';

interface RotatingGlobeProps {
  size?: number;
  className?: string;
  isStatic?: boolean;
}

export default function RotatingGlobe({ size = 200, className = "", isStatic = false }: RotatingGlobeProps) {
  return (
    <div 
      className={`relative flex items-center justify-center bg-[#1da1d2] rounded-full overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <style>
        {`
          @keyframes globe-spin-right {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50px); }
          }
          .animate-globe-spin-right {
            animation: globe-spin-right 5s linear infinite;
          }
        `}
      </style>
      <svg 
        viewBox="0 0 100 100" 
        className="w-[82%] h-[82%] text-white rotate-90"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <clipPath id="globe-clip">
            <circle cx="50" cy="50" r="48" />
          </clipPath>
        </defs>

        {/* Outer Circle */}
        <circle cx="50" cy="50" r="48" />
        
        {/* Static Longitudes (Horizontal in rotated view) */}
        <ellipse cx="50" cy="50" rx="12" ry="48" />
        <line x1="50" y1="2" x2="50" y2="98" />
        <ellipse cx="50" cy="50" rx="32" ry="48" />

        {/* Animated Latitudes (Vertical in rotated view) */}
        <g clipPath="url(#globe-clip)">
          <g className={isStatic ? "" : "animate-globe-spin-right"}>
            {[0, 50, 100, 150].map((offset) => (
              <React.Fragment key={offset}>
                <ellipse cx="50" cy={25 + offset} rx="48" ry="12" />
                <line x1="2" y1={50 + offset} x2="98" y2={50 + offset} />
                <ellipse cx="50" cy={75 + offset} rx="48" ry="12" />
              </React.Fragment>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
