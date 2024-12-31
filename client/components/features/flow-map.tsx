"use client";

import { ChevronRight, Download, Mic, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Prescription } from "../shared/prescription";

export const FlowMap: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLastArrow, setShowLastArrow] = useState(false);

  const handleToggle = () => {
    setIsPlaying((prevState) => !prevState);
    if (!isPlaying) {
      setShowLastArrow(false);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setShowLastArrow(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <section className="py-10 px-32 w-full h-screen">
      <h1 className="text-3xl font-bold mb-8">Flow Map</h1>

      <div className="text-xl font-medium flex items-center justify-center gap-4 mb-8">
        <p className="border px-6 py-2 rounded-lg shadow-lg">Record Yourself</p>
        <ChevronRight size={24} className="text-gray-400" />
        <p className="border px-6 py-2 rounded-lg shadow-lg">
          Transcribe Conversations
        </p>
        <ChevronRight size={24} className="text-gray-400" />
        <p className="border px-6 py-2 rounded-lg shadow-lg">
          Automate Documentation
        </p>
        <ChevronRight size={24} className="text-gray-400" />
        <p className="border px-6 py-2 rounded-lg shadow-lg">
          Empower Patients And Doctors
        </p>
      </div>

      <p className="text-lg text-center font-semibold text-gray-600 mb-8">
        Visualize the flow by clicking the play button below:
      </p>

      <div className="flex items-center justify-center gap-x-6 relative">
        <p className="text-lg font-medium border w-max px-10 rounded-lg py-2 flex items-center justify-center gap-x-2 shadow-lg">
          Start Consultation
          <button
            onClick={handleToggle}
            className={`relative flex items-center justify-center w-6 h-6 rounded-full text-app-crayola
            transition-all duration-1000 ease-in-out shadow-lg
            ${!isPlaying ? "animate-glow" : "bg-app-royal-blue/80 text-white"}`}
          >
            {!isPlaying ? <Play size={16} /> : <Pause size={16} />}
            {!isPlaying && (
              <div
                className="absolute inset-0 rounded-full bg-blue-500 opacity-50 blur-md"
                aria-hidden="true"
              />
            )}
          </button>
        </p>

        <div className="text-xl font-medium flex items-center justify-center text-gray-400 ml-2">
          - - - - - - <ChevronRight size={24} className="mx-4" />
        </div>

        <div className="relative flex items-center justify-center">
          {!isPlaying && (
            <div
              className="absolute inset-0 flex gap-1 justify-center items-center z-0"
              aria-hidden="true"
            >
              {[...Array(16)].map((_, idx) => (
                <div
                  key={idx}
                  className="w-3 h-40 rounded-lg bg-gradient-to-b from-app-crayola via-white to-app-royal-blue opacity-70"
                  style={{
                    animation: "none",
                    position: "absolute",
                    left: `${(idx - 0.2) * 20}%`,
                    zIndex: idx < 1 ? 0 : 1,
                  }}
                />
              ))}
            </div>
          )}

          {isPlaying && (
            <div
              className="absolute inset-0 flex gap-1 justify-center items-center z-0"
              aria-hidden="true"
            >
              {[...Array(16)].map((_, idx) => (
                <div
                  key={idx}
                  className="w-5 h-48 rounded-lg animate-wave-bars opacity-70"
                  style={{
                    animationDelay: `${idx * 0.2}s`,
                    position: "absolute",
                    left: `${(idx - 0.2) * 20}%`,
                    zIndex: idx < 1 ? 0 : 1,
                    background: `linear-gradient(45deg, 
                      #FFFFFF,
                      #607aff, 
                      #2463eb, 
                      #88caff)`,
                    boxShadow: "0px 0px 15px rgba(38, 99, 235, 0.6)",
                  }}
                />
              ))}
            </div>
          )}

          <div className="relative p-4 border border-app-royal-blue rounded-xl bg-white z-10 -right-24">
            <Mic
              size={50}
              className="text-app-crayola relative bg-white rounded-full shadow-xl"
            />
          </div>
        </div>

        <div className="text-xl font-medium flex items-center justify-center text-gray-400 ml-48">
          - - - - - <ChevronRight size={24} className="ml-4" />
        </div>

        <div className="ml-2">
          <Prescription isPlaying={isPlaying} />
        </div>

        {isPlaying && showLastArrow && (
          <>
            <div className="text-xl font-medium flex items-center justify-center text-gray-400 ml-2 animate-fade-in ease-in-out delay-700">
              - - - - - <ChevronRight size={24} className="ml-4" />
            </div>
            <div className="flex items-center gap-x-2 border border-app-gray rounded-lg p-2">
              <p className="text-lg font-semibold">PVS</p>
              <Download />
            </div>
          </>
        )}
      </div>
    </section>
  );
};
