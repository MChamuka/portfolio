'use client';
import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  x: number;
  y: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, x, y }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    setIsDrawing(true);
  }, []);

  return (
    <text
      x={x}
      y={y}
      fontFamily="Tektur, sans-serif"
      fontSize="48"
      fill="none"
      stroke="#FFC0C0"
      strokeWidth="2"
      strokeDasharray="1000"
      strokeDashoffset={isDrawing ? '0' : '1000'}
      style={{ transition: 'stroke-dashoffset 4s ease' }}
    >
      {text}
    </text>
  );
};

export default function Animation({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone();
    }, 4000); // Match animation time
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#252425]">
      <svg width="800" height="400" viewBox="0 0 500 200">
        <AnimatedText text="MADDEWITHANAGE" x={30} y={40} />
        <AnimatedText text="CHAMUKA" x={135} y={100} />
        <AnimatedText text="UMESHA" x={155} y={160} />
      </svg>
    </div>
  );
}
