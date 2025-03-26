import { useState, useEffect } from "react";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => (oldProgress < 100 ? oldProgress + 10 : 100));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-blue-500 h-3 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default LoadingBar;
