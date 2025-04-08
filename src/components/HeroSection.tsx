import React, { useState } from 'react';
import Balloons from './Balloons';
import  OiaSticker  from './OiaSticker';
import confetti from 'canvas-confetti';

const HeroSection = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleClick = () => {
    setShowSurprise(true);

    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });

    // Play audio
    const audio = new Audio('/uia-cat-birthday.mp3');
    audio.play();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-auroraBlue text-center px-4 font-birthday relative overflow-hidden">
      {!showSurprise ? (
        <button
          onClick={handleClick}
          className="bg-pastelPink text-white text-lg font-bold px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition-transform"
        >
          Click for Surprise
        </button>
      ) : (
        <>
          <h1 className="text-4xl sm:text-6xl font-bold text-auroraPink mb-6 drop-shadow-md z-10">
            🎉 Happy Birthday Sridevi! 🎈
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 max-w-xl z-10">
            You’re officially one year wiser... and still not a constant 😌
          </p>
          <OiaSticker />
          <Balloons />
        </>
      )}
    </div>
  );
};

export default HeroSection;
