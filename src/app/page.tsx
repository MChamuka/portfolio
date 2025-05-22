"use client";
import { useState, useRef } from "react";
import { FaCog } from "react-icons/fa";
import { useRouter } from "next/navigation";
import "./globals.css";

const slides = [
  { title: "Who I Am", path: "/myself" },
  { title: "Projects", path: "/projects" },
  { title: "My Toolkit", path: "/skills" },
  { title: "Who I Am", path: "/myself" },
  { title: "Projects", path: "/projects" },
];

export default function SliderPage() {
  const [current, setCurrent] = useState(0);
  const [rotation, setRotation] = useState(0);
  const leftDashRef = useRef<HTMLDivElement>(null);
  const rightDashRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const triggerDashAnimation = () => {
    [leftDashRef.current, rightDashRef.current].forEach((el) => {
      if (el) {
        el.classList.remove("animate-dash-once");
        void el.offsetWidth;
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
      className="min-h-screen flex flex-col md:flex-row bg-[#252425] text-[#FFC0C0] font-sans px-6 py-12"
      style={{ fontFamily: "Tektur, sans-serif" }}
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mb-10 md:mb-0 md:px-16 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Hi there! Welcome to my portfolio 
        </h1>
        <p className="text-lg sm:text-xl max-w-md">
          This is where my fullstack development journey comes to life — through code, tools, and real-world projects.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative">
        {/* Cogwheel + Dashes */}
        <div className="flex items-center mb-10">
          <div ref={leftDashRef} className="dashed-line w-24 sm:w-32 md:w-40" />
          <FaCog
            className="text-[#FFC0C0] text-3xl mx-4 transition-transform duration-500"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
          <div ref={rightDashRef} className="dashed-line w-24 sm:w-32 md:w-40" />
        </div>

        {/* 3D Carousel */}
        <div className="relative w-[90vw] max-w-[400px] h-[200px] perspective-[1000px] mb-6">
          <div
            className="w-full h-full relative transition-transform duration-700"
            style={{
              transform: `translateZ(-300px) rotateY(${current * -72}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => {
              const angle = index * 72;
              return (
                <div
                  key={index}
                  className="absolute w-full h-full flex items-center justify-center text-xl sm:text-2xl font-bold cursor-pointer hover:underline text-center"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(300px)`,
                    backfaceVisibility: "hidden",
                  }}
                  onClick={() => router.push(slide.path)}
                >
                  {slide.title}
                </div>
              );
            })}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
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
