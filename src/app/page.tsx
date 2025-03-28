"use client";
import "./globals.css";

interface SectionProps {
  text: string;
}

const Sections: React.FC<SectionProps> = ({ text }) => {
  return (
    <div className="flex justify-end h-30 mr-10 ">
      <div className="group">
        <h1
          className="text-8xl font-bold text-[#FFC0C0] transition-transform duration-500
                     origin-right [transform:perspective(500px)_rotateY(-40deg)]
                     group-hover:[transform:perspective(500px)_rotateY(-30deg)]"
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col items-end bg-[#252425]" >
      <Sections text={"Hero Section"} />
      <Sections text={"Skills & Tech Stack"} />
      <Sections text={"Projects"} />
      <Sections text={"Experience"} />
      <Sections text={"Education"} />
      <Sections text={"Contact"} />
      <Sections text={"Extras"} />
    </div>
  );
}
