// src/components/Balloons.tsx
import React, { useEffect } from "react";
import "./Balloons.css";

const Balloon = ({ style, emoji }: { style: React.CSSProperties; emoji?: string }) => {
  const handleHover = () => {
    const audio = new Audio("/uia-cat-birthday.mp3");
    audio.play();
  };
  const pastelColors = [
    'bg-pastelPink/80',
    'bg-pastelBlue/80',
    'bg-pastelPurple/80',
    'bg-pastelMint/80',
    'bg-pastelYellow/80',
  ];
  
  return (
    <div className="balloon-wrapper" style={style} onMouseEnter={handleHover}>
      <div className="balloon">
        {emoji && <span className="emoji">{emoji}</span>}
        <div className="ribbon" />
      </div>
    </div>
  );
};

const Balloons = () => {
  useEffect(() => {
    (import("canvas-confetti") as Promise<{ default: any }>).then(({ default: confetti }) => {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    });
  }, []);

  const emojis = ["🎁", "💖", "🎀", "🌟", "🩷", "🎊"];
  const colors = ["#f472b6", "#facc15", "#a78bfa", "#34d399", "#60a5fa", "#f87171"];

  return (
    <div className="balloons-container">
      {Array.from({ length: 20 }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const emoji = i % 3 === 0 ? emojis[i % emojis.length] : undefined;
        const color = colors[i % colors.length];

        return (
          <Balloon
            key={i}
            emoji={emoji}
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              background: `linear-gradient(to top, ${color}, white)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Balloons;
