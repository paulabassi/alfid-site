import React from 'react';

export default function InterwindSpinner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
    >
      <style>
        {`
          @keyframes orbit-1 {
            0%, 100% { transform: translateX(0px) scale(0.8); opacity: 1; }
            50% { transform: translateX(40px) scale(1.4); opacity: 0.7; }
          }
          @keyframes orbit-2 {
            0%, 100% { transform: translateX(0px) scale(1.4); opacity: 0.7; }
            50% { transform: translateX(-40px) scale(0.8); opacity: 1; }
          }
          .dot {
            transform-box: fill-box;
            transform-origin: center;
          }
          .dot-1 {
            animation: orbit-1 1.2s infinite ease-in-out;
          }
          .dot-2 {
            animation: orbit-2 1.2s infinite ease-in-out;
          }
        `}
      </style>
      <circle className="dot dot-1" cx="30" cy="50" r="12" fill="#f5a1c3" />
      <circle className="dot dot-2" cx="70" cy="50" r="12" fill="#56ad84" />
    </svg>
  );
}
