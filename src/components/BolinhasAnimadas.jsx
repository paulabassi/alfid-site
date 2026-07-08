import { useEffect, useState } from "react";

const bolinhas = [
  { id: 1, cx: 79.67, cy: 24.95, r: 4.11, color: "#e67818" }, // laranja
  { id: 2, cx: 87.49, cy: 35.37, r: 7.70, color: "#f8c301" }, // amarela
  { id: 3, cx: 77.24, cy: 42.63, r: 7.79, color: "#dd127b" }, // rosa
  { id: 4, cx: 81.96, cy: 53.85, r: 9.33, color: "#007cc2" }, // azul
  { id: 5, cx: 69.41, cy: 55.51, r: 5.70, color: "#277738" }, // verde
  { id: 6, cx: 73.27, cy: 68.32, r: 7.32, color: "#f8c301" }, // amarela
  { id: 7, cx: 65.10, cy: 73.60, r: 4.41, color: "#dd127b" }, // rosa
];

export default function BolinhasAnimadas({ width = 400 }) {
  const [visible, setVisible] = useState([]);
  const height = (13415 / 21000) * width;

  useEffect(() => {
    setVisible([]);
    const timers = bolinhas.map((b, i) =>
      setTimeout(() => setVisible((prev) => [...prev, b.id]), i * 150)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ position: "relative", width, height }}>
      {bolinhas.map((b) => {
        const size = (b.r / 100) * width * 2;
        const left = (b.cx / 100) * width - size / 2;
        const top  = (b.cy / 100) * height - size / 2;
        const isVisible = visible.includes(b.id);
        return (
          <div
            key={b.id}
            style={{
              position: "absolute",
              left,
              top,
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: b.color,
              mixBlendMode: "multiply",
              transform: isVisible ? "scale(1)" : "scale(0)",
              opacity: isVisible ? 1 : 0,
              transition: "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease",
              transformOrigin: "center center",
            }}
          />
        );
      })}
    </div>
  );
}
