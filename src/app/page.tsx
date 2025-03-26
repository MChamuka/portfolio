"use client";  

import { useState, useEffect } from "react";

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
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
        Welcome to My Portfolio
      </h1>
      <div className=" w-full sm:w-140 md:w-180 lg:w-250 p-[2px] xl:w-300 2xl:w-350 ">
        <p className="text-xl font-medium mt-3">BOOTING...</p>
        <div className=" w-full h-15 bg-gray-300 p-[2px] rounded-md overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm sm:text-base font-medium mt-3">{loadText}</p>
      </div>
    </div>
  );
}
