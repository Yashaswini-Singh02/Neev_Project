"use client";

import { ChevronRight, Mic, Pause, Play } from "lucide-react";
import { useState } from "react";

export const Features: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <section className="py-10 px-32 h-screen w-full">
      <h1 className="text-3xl font-bold mb-8">Features</h1>
      <div className="flex items-center justify-center gap-x-6 relative">
        <p className="text-lg font-medium border w-max px-10 rounded-lg py-2 flex items-center justify-center gap-x-2 shadow-lg">
          Start Consultation
          <button
            onClick={handleToggle}
            className={`relative flex items-center justify-center w-10 h-10 rounded-full text-app-crayola
            transition-all duration-200 ease-in-out shadow-lg
            ${!isPlaying ? "animate-glow" : "bg-app-royal-blue/80 text-white"}`}
          >
            {!isPlaying ? <Play size={18} /> : <Pause size={18} />}
            {!isPlaying && (
              <div
                className="absolute inset-0 rounded-full bg-blue-500 opacity-50 blur-md"
                aria-hidden="true"
              />
            )}
          </button>
        </p>

        <div className="text-xl font-medium flex items-center justify-center text-gray-400 mx-4">
          - - - - - - <ChevronRight size={24} className="mx-4" />
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className={`absolute inset-0 flex gap-1 justify-center items-center z-0`}
            aria-hidden="true"
          >
            {[...Array(16)].map((_, idx) => (
              <div
                key={idx}
                className={`w-5 h-40 rounded-lg transition-all ${
                  isPlaying ? "block animate-wave-bars opacity-70" : "hidden"
                }`}
                style={{
                  animationDelay: `${idx * 0.2}s`,
                  position: "absolute",
                  left: `${(idx - 1) * 20}%`,
                  zIndex: idx < 1 ? 0 : 1,
                  background: `linear-gradient(45deg, 
                    #FFFFFF,
                    #607aff, 
                    #2463eb, 
                    #88caff)`,
                  boxShadow: isPlaying
                    ? "0px 0px 15px rgba(38, 99, 235, 0.6)"
                    : "none",
                }}
              />
            ))}
          </div>

          {/* Mic Icon */}
          <div className="relative p-6 border border-app-royal-blue rounded-xl bg-white z-10 -right-24">
            <Mic
              size={50}
              className="text-app-crayola relative bg-white rounded-full shadow-xl"
            />
          </div>
        </div>

        {/* Next Arrow Divider */}
        <div className="text-xl font-medium flex items-center justify-center text-gray-400 ml-48">
          - - - - - <ChevronRight size={24} className="mx-4" />
        </div>
      </div>
    </section>
  );
};
