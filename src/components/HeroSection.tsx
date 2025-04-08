// src/components/HeroSection.tsx
import React, { useState } from 'react';
import Balloons from './Balloons';

const HeroSection = () => {
  const [showBalloons, setShowBalloons] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-pink-100">
      <button
        onClick={() => setShowBalloons(!showBalloons)}
        className="z-10 bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        🎈 Click for Surprise!
      </button>
      <Balloons trigger={showBalloons} />
    </div>
  );
};

export default HeroSection;
