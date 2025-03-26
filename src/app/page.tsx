"use client";  
import "./globals.css";
import { useState, useEffect } from "react";
import {Tektur} from "next/font/google";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["400","700"],
});
export default function Page() {
  const [progress, setProgress] = useState(0);
  const [loadText,setLoadText] = useState("Starting...")

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev < 100 ? prev + 10 : 100;
        
        if (newProgress <= 25) {
          setLoadText("Starting...");
        } else if (newProgress <= 50) {
          setLoadText("Please wait...");
        } else if (newProgress <= 75) {
          setLoadText("Almost finished...");
        } else {
          setLoadText("Completed");
        }

        return newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-[#252425]">
      <div className=" w-full sm:w-140 md:w-180 lg:w-250 p-[2px] xl:w-300 2xl:w-350 ">
        <p className={`text-2xl mt-2 text-[#FFC0C0] font-title ${tektur.variable} font-bold`}>B O O T I N G . . .</p>
        <div className=" w-full h-15 mt-6 bg-[#484848] rounded-md overflow-hidden">
          <div
            className="h-full bg-[#FFC0C0] transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm sm:text-base font-medium mt-3 text-[#FFC0C0]">{loadText}</p>
      </div>
    </div>
  );
}
