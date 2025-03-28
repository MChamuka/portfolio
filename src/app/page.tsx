"use client";
import "./globals.css";

interface SectionProps {
  text: string;
  height:string;
}

const Sections: React.FC<SectionProps> = ({ text,height }) => {
  return (
    <div className={ `flex justify-end ${height} mr-10 `}>
      <div className="group">
        <h1
          className={`text-9xl font-bold text-[#FFC0C0] transition-transform duration-500
                     origin-right [transform:perspective(500px)_rotateY(-40deg)]
                     group-hover:[transform:perspective(500px)_rotateY(-30deg)]`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col  bg-[#252425]" >
      <div className="mt-12">
        <Sections text={"Hero Section"} height="h-35" />
        <Sections text={"Skills & Tech Stack"} height="h-35"/>
        <Sections text={"Projects"} height="h-35"/>
        <Sections text={"Experience"} height="h-35"/>
        <Sections text={"Education"} height="h-35"/>
        <Sections text={"Contact"} height="h-35"/>
        <Sections text={"Extras"} height="h-35"/>
      </div>
      <div className="fixed bottom-15 left-10 text-2xl">
        <p>MADDEWITHANAGE</p>
        <p className="ml-12">CHAMUKA</p>
        <p className="ml-13">UMESHA</p>
      </div>
      
    </div>
  );
}
