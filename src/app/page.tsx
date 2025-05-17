"use client";
import Image from "next/image";
import { useState } from "react";

// Import all images
import pic from "../images/pic.jpg";

const frontend = [
  {
    main: { image: pic, text: "JavaScript" },
    subSkills: [
      { text: "React", image: pic },
      { text: "Node.js", image: pic },
      { text: "Express", image: pic },
    ],
  },
  {
    main: { image: pic, text: "Python" },
    subSkills: [
      { text: "Flask", image: pic },
      { text: "FastAPI", image: pic },
    ],
  },
  {
    main: { image: pic, text: "SQL" },
    subSkills: [],
  },
  {
    main: { image: pic, text: "PHP" },
    subSkills: [],
  },
  {
    main: { image: pic, text: "MongoDB" },
    subSkills: [],
  },
  {
    main: { image: pic, text: "C++" },
    subSkills: [],
  },
  {
    main: { image: pic, text: "HTML" },
    subSkills: [],
  },
  {
    main: { image: pic, text: "CSS" },
    subSkills: [
      { text: "SCSS", image: pic },
      { text: "Tailwind", image: pic },
    ],
  },
];
const soft = [
  { image: pic, text: "Problem Solving" },
  { image: pic, text: "Communication" },
  { image: pic, text: "Adaptability" },
  { image: pic, text: "Critical Thinking" },
];

export default function Skills() {
  const [activeIndexes, setActiveIndexes] = useState(frontend.map(() => -1)); // -1 means main skill

  const handleNext = (i: number) => {
    const skill = frontend[i];
    const total = skill.subSkills.length;
    if (total === 0) return;

    setActiveIndexes((prev) => {
      const updated = [...prev];
      const next = prev[i] + 1;
      updated[i] = next >= total ? -1 : next; // Reset to main after last subskill
      return updated;
    });
  };

  return (
    <div className="p-10 space-y-10">
      <h2 className="text-2xl font-bold mb-4">Tech Skills</h2>
      <div className="overflow-x-auto flex gap-6">
        {frontend.map((skill, i) => {
          const isMain = activeIndexes[i] === -1 || skill.subSkills.length === 0;
          const current = isMain
            ? skill.main
            : skill.subSkills[activeIndexes[i]];

          return (
            <div
              key={i}
              className="min-w-[150px] flex-shrink-0 bg-gray-800 rounded-xl p-4 text-center text-white relative"
            >
              <Image
                src={current.image}
                alt={current.text}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-lg font-bold">{current.text}</h3>

              {skill.subSkills.length > 0 && (
                <button
                  onClick={() => handleNext(i)}
                  className="absolute top-2 right-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full transition"
                  title="Next sub-skill"
                >
                  →
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="overflow-x-auto flex gap-6">
        {soft.map((skill, index) => (
          <div
            key={index}
            className="min-w-[150px] flex-shrink-0 bg-pink-100 rounded-xl p-4 text-center"
          >
            <Image
              src={skill.image}
              alt={skill.text}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-2"
            />
            <p className="text-black font-semibold">{skill.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
