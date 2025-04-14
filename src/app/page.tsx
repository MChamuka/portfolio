"use client";
import { useState, useRef } from "react";
import { FaCog } from "react-icons/fa";
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
  const [rotation, setRotation] = useState(0);
  const leftDashRef = useRef<HTMLDivElement>(null);
  const rightDashRef = useRef<HTMLDivElement>(null);

  const triggerDashAnimation = () => {
    [leftDashRef.current, rightDashRef.current].forEach((el) => {
      if (el) {
        el.classList.remove("animate-dash-once");
        void el.offsetWidth; // Force reflow to restart animation
        el.classList.add("animate-dash-once");
      }
    });
  };

  const rotateNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setRotation((prev) => prev + 90);
    triggerDashAnimation();
  };

  const rotatePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setRotation((prev) => prev - 90);
    triggerDashAnimation();
  };

  return (
    <div
      className="h-screen flex bg-[#252425] text-[#FFC0C0] font-sans"
      style={{ fontFamily: "Tektur, sans-serif" }}
    >
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h1 className="text-5xl font-bold mb-6">Hello, welcome to my portfolio</h1>
        <p className="text-xl">
          I’m Chamuka Umesha — a passionate developer with a love for modern web technologies.
          I enjoy creating beautiful and interactive user experiences.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center relative overflow-hidden flex-col">
        {/* Cogwheel + Flowing Dashes */}
        <div className="flex items-center mb-10">
          <div ref={leftDashRef} className="dashed-line w-40" />
          <FaCog
            className="text-[#FFC0C0] text-3xl mx-4 transition-transform duration-500"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
          <div ref={rightDashRef} className="dashed-line w-40" />
        </div>

        {/* Slider */}
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
                  className="absolute w-full h-full flex items-center justify-center text-2xl font-bold"
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

        {/* Navigation Buttons */}
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
    </div>
  );
}
