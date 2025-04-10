"use client";
import { useState } from "react";
import "./globals.css";

const slides = [
  "Passionate Developer",
  "Creative Thinker",
  "UI/UX Enthusiast",
  "Team Collaborator",
  "Lifelong Learner",
];

export default function SliderPage() {
  const [current, setCurrent] = useState(0);

  const rotateNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const rotatePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="h-screen bg-[#252425] flex items-center justify-center relative overflow-hidden">
      <div className="relative w-[400px] h-[200px] perspective-[1000px]">
        <div
          className="w-full h-full relative transition-transform duration-700"
          style={{
            transform: `translateZ(-300px) rotateY(${current * -72}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {slides.map((text, index) => {
            const angle = index * 72;
            return (
              <div
                key={index}
                className="absolute w-full h-full flex items-center justify-center text-2xl font-bold text-[#FFC0C0]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(300px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                {text}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-10 flex gap-5">
        <button
          className="px-4 py-2 bg-[#FFC0C0] text-black font-semibold rounded"
          onClick={rotatePrev}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-[#FFC0C0] text-black font-semibold rounded"
          onClick={rotateNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
