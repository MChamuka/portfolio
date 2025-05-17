"use client";
import Image from "next/image";

const frontend = [
  {
    image: "/images/pic.jpg",
    text: "JavaScript",
    subSkills: ["React", "Node.js", "Express"],
  },
  {
    image: "/images/pic.jpg",
    text: "Python",
    subSkills: ["Flask", "FastAPI"],
  },
  { image: "/images/pic.jpg", text: "SQL", subSkills: [] },
  { image: "/images/pic.jpg", text: "PHP", subSkills: [] },
  { image: "/images/pic.jpg", text: "MongoDB", subSkills: [] },
  { image: "/images/pic.jpg", text: "C++", subSkills: [] },
  { image: "/images/pic.jpg", text: "HTML", subSkills: [] },
  { image: "/images/pic.jpg", text: "CSS", subSkills: [] },
];

const soft = [
  { image: "/images/pic.jpg", text: "Problem Solving" },
  { image: "/images/pic.jpg", text: "Communication" },
  { image: "/images/pic.jpg", text: "Adaptability" },
  { image: "/images/pic.jpg", text: "Critical Thinking" },
];

export default function Skills() {
  return (
    <div className="p-10 space-y-10">
      {/* Tech Skills */}
      <div className="overflow-x-auto flex gap-6">
        {frontend.map((skill, index) => (
          <div
            key={index}
            className="min-w-[150px] flex-shrink-0 bg-gray-800 rounded-xl p-4 text-center text-white"
          >
            <Image
              src={skill.image}
              alt={skill.text}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-lg font-bold">{skill.text}</h3>
            {skill.subSkills.length > 0 && (
              <div className="mt-3 max-h-24 overflow-y-auto space-y-1">
                {skill.subSkills.map((sub, idx) => (
                  <p key={idx} className="text-sm text-gray-300">
                    {sub}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Soft Skills */}
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
