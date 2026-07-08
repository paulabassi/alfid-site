import { useEffect, useState } from "react";

export default function SetaDiagonal({ size = 80, color = "#222", animated = true }) {
  const arrowSize = size * 0.7;
  const lineWidth = size;
  const lineH = size * 0.08 * 1.6;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: size }}>

      {animated && (
        <style>{`
          @keyframes seta-loop {
            0%   { transform: translate(0, 0);                                          opacity: 1; }
            15%  { transform: translate(${arrowSize * 0.6}px, ${-arrowSize * 0.6}px);  opacity: 0; }
            16%  { transform: translate(${-arrowSize * 0.6}px, ${arrowSize * 0.6}px);  opacity: 0; }
            26%  { transform: translate(${-arrowSize * 0.6}px, ${arrowSize * 0.6}px);  opacity: 0; }
            37.5% { transform: translate(0, 0);                                          opacity: 1; }
            100% { transform: translate(0, 0);                                          opacity: 1; }
          }
          .seta-icon-animated {
            animation: seta-loop 4.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `}</style>
      )}

      {/* SETA — anima em loop se animated for true */}
      <div style={{ overflow: "hidden", width: arrowSize, height: arrowSize * 0.75 }}>
        <div className={animated ? "seta-icon-animated" : ""} style={{ width: arrowSize, height: arrowSize, display: "flex", alignItems: "flex-start", justifyContent: "center", marginLeft: -arrowSize * 0.12 }}>
          <svg width={arrowSize} height={arrowSize} viewBox="0 0 24 24" fill="none">
            <line x1="7.7" y1="16.3" x2="19" y2="5" stroke={color} strokeWidth="3" strokeLinecap="round"/>
            <polyline points="9,5 19,5 19,15" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      </div>

      {/* LINHA — estática */}
      <div style={{
        width: lineWidth * 0.6,
        height: lineH * 0.75,
        backgroundColor: color,
        borderRadius: lineH * 0.75,
        marginTop: size * 0.07,
      }} />

    </div>
  );
}
