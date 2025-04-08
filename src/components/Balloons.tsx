// src/components/Balloons.tsx
import React, { useEffect, useRef } from 'react';
import './Balloons.css';

interface BalloonsProps {
  count?: number;
  trigger?: boolean;
}

const Balloons: React.FC<BalloonsProps> = ({ count = 20, trigger }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (trigger && containerRef.current) {
      containerRef.current.innerHTML = ''; // Clear previous balloons

      for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
        containerRef.current.appendChild(balloon);
      }
    }
  }, [trigger, count]);

  return <div ref={containerRef} className="balloons-container" />;
};

export default Balloons;
