"use client";  

import { useState, useEffect } from "react";

export default function Page() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
        Welcome to My Portfolio
      </h1>
      <p className="text-sm sm:text-base font-medium mt-3">Booting...</p>
      <div className=" w-full sm:w-140 md:w-180 lg:w-250 p-[2px] xl:w-300 2xl:w-350 h-15 bg-gray-300 mt-4 rounded-md overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
