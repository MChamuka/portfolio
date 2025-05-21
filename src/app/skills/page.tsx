"use client";
import "../globals.css";
import DiamondNavbar from "../../components/DiamondNavbar";

import Image from "next/image";
import { useState } from "react";
import c from "../../images/c.png";
import css from "../../images/css.png";
import html from "../../images/html.png";
import java from "../../images/java.png";
import js from "../../images/js.png";
import mongo from "../../images/mongo.png";
import node from "../../images/nodejs.png";

import python from "../../images/python.png";
import react from "../../images/react.png";
import sql from "../../images/sql.png";
import ts from "../../images/ts.png";

import flask from "../../images/Flask.png";
import idea from "../../images/idea.png";
import tw from "../../images/tw.png";
import php from "../../images/php.png";
import fapi from "../../images/FastApi.png";
import express from "../../images/Express.png";
import twork from "../../images/twork.png";
import coms from "../../images/coms.png";
import learn from "../../images/learn.png";
import ps from "../../images/ps.png";
import creativity from "../../images/creativity.png";


const frontend = [
  {
    main: { image: js, text: "JavaScript" },
    subSkills: [
      { text: "Typesript", image: ts },
      { text: "React", image: react },
      { text: "React Native", image: react },
      { text: "Node.js", image: node },
      { text: "Express", image: express },
      
    ],
  },
  {
    main: { image: python, text: "Python" },
    subSkills: [
      { text: "Flask", image: flask },
      { text: "FastAPI", image: fapi },
    ],
  },
  {
    main: { image: java, text: "Java" },
    subSkills: [],
  },
  {
    main: { image: sql, text: "SQL" },
    subSkills: [],
  },
  {
    main: { image: php, text: "PHP" },
    subSkills: [],
  },
  {
    main: { image: mongo, text: "MongoDB" },
    subSkills: [],
  },
  {
    main: { image: c, text: "C++" },
    subSkills: [],
  },
  {
    main: { image: html, text: "HTML" },
    subSkills: [],
  },
  {
    main: { image: css, text: "CSS" },
    subSkills: [
      { text: "SCSS", image: css },
      { text: "Tailwind", image: tw },
    ],
  },
];
const soft = [
  { image: ps, text: "Problem Solving" },
  { image: coms, text: "Communication" },
  { image: learn, text: "Fast learning" },
  { image: twork, text: "Teamwork" },
  { image: creativity, text: "Creativity" },
  { image: idea, text: "Critical Thinking" },
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
    <div className="min-h-screen bg-[#252425]">
    <DiamondNavbar />
      
    <div className="p-10 space-y-10  text-[#FFC0C0]">
      <h2 className="text-2xl font-bold mb-4">Tech Skills</h2>
      <div className="overflow-x-auto flex gap-6 pb-5">
        {frontend.map((skill, i) => {
          const isMain = activeIndexes[i] === -1 || skill.subSkills.length === 0;
          const current = isMain
            ? skill.main
            : skill.subSkills[activeIndexes[i]];

          return (
            <div
              key={i}
              className="min-w-[150px] flex-shrink-0 bg-[#FFC0C0] rounded-xl p-4 text-center text-black relative"
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
      <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>

      <div className="overflow-x-auto flex gap-6 pb-5">
        {soft.map((skill, index) => (
          <div
            key={index}
            className="min-w-[150px] flex-shrink-0 bg-[#FFC0C0] rounded-xl p-4 text-center"
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
    </div>
  );
}
