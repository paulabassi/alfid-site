import { useEffect, useState } from "react";

export default function BotaoAnimado({ width = 320 }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
    const t1 = setTimeout(() => setStep(1), 100);   // amarelo expande
    const t2 = setTimeout(() => setStep(2), 600);   // rosa surge
    const t3 = setTimeout(() => setStep(3), 900);   // seta desce
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  const h = width * 0.22;
  const r = h / 2;

  return (
    <div style={{ position: "relative", width: width + r * 0.4, height: h, overflow: "hidden" }}>

      {/* AMARELO */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        height: h,
        width: step >= 1 ? width : 0,
        backgroundColor: "#fad062",
        borderRadius: h / 2,
        transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }} />

      {/* ROSA */}
      <div style={{
        position: "absolute",
        top: 0,
        left: step >= 2 ? width - r * 2 + r * 0.4 : 0,
        width: r * 2,
        height: r * 2,
        borderRadius: "50%",
        backgroundColor: "#f5a1c3",
        opacity: step >= 2 ? 1 : 0,
        transition: step < 2 ? "none" : "left 0.3s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.01s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
        overflow: "hidden",
      }}>

        {/* SETA */}
        <div style={{
          transform: step >= 3 ? "translateY(0)" : "translateY(-140%)",
          opacity: step >= 3 ? 1 : 0,
          transition: "transform 0.25s cubic-bezier(0.34, 1.4, 0.64, 1), opacity 0.15s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <svg width={r * 1.3} height={r * 1.3} viewBox="0 0 24 24" fill="none">
            <path d="M12 3v14M5 11l7 7 7-7" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

    </div>
  );
}
