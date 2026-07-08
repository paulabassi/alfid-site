import React from 'react';

interface OrganicPatternProps {
  className?: string;
  color1?: string;
  color2?: string;
  scale?: number;
}

export default function OrganicPattern({ 
  className = "", 
  color1 = "#f5a1c3", 
  color2 = "#fad062",
  scale = 1
}: OrganicPatternProps) {
  return (
    <div className={`pointer-events-none blur-2xl md:blur-3xl ${className}`} style={{ transform: `scale(${scale})` }}>
      <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path 
          fill={color1} 
          d="M45.7,-76.1C58.9,-69.3,69.1,-55.3,77.2,-40.5C85.3,-25.7,91.3,-10.1,89.5,4.7C87.7,19.5,78.1,33.5,67.6,45.6C57.1,57.7,45.7,67.9,32.2,74.3C18.7,80.7,3.1,83.3,-11.4,81.1C-25.9,78.9,-39.3,71.9,-51.1,62.1C-62.9,52.3,-73.1,39.7,-79.5,25.2C-85.9,10.7,-88.5,-5.7,-84.1,-20.3C-79.7,-34.9,-68.3,-47.7,-55.1,-54.9C-41.9,-62.1,-26.9,-63.7,-12.3,-64.1C2.3,-64.5,17.3,-63.7,32.5,-82.9Z" 
          transform="translate(100 100) scale(0.8)" 
        />
        <path 
          fill={color2} 
          d="M38.1,-63.5C49.9,-54.5,60.4,-44.1,68.4,-31.6C76.4,-19.1,81.9,-4.5,79.8,9.2C77.7,22.9,68,35.7,56.7,46.1C45.4,56.5,32.5,64.5,18.3,69.8C4.1,75.1,-11.4,77.7,-25.5,73.8C-39.6,69.9,-52.3,59.5,-62.4,47.1C-72.5,34.7,-80,20.3,-81.8,5.1C-83.6,-10.1,-79.7,-26.1,-70.5,-38.6C-61.3,-51.1,-46.8,-60.1,-32.5,-66.5C-18.2,-72.9,-4.1,-76.7,9.3,-74.2C22.7,-71.7,35.4,-62.9,38.1,-63.5Z" 
          transform="translate(120 80) scale(0.6)" 
        />
      </svg>
    </div>
  );
}
