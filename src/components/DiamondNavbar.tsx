"use client";
import Link from "next/link";
import { FaHome, FaUserAlt, FaCog, FaProjectDiagram } from "react-icons/fa";

export default function DiamondNavbar() {
  const navItems = [
    { icon: <FaHome />, href: "/", label: "Home" },
    { icon: <FaUserAlt />, href: "/myself", label: "About" },
    { icon: <FaCog />, href: "/skills", label: "Skills" },
    { icon: <FaProjectDiagram />, href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex gap-6">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="group relative w-12 h-12 transform rotate-45 bg-[#FFC0C0] flex items-center justify-center shadow-md hover:bg-[#ff9aa2] transition duration-300"
        >
          <div className="transform -rotate-45 text-black text-xl">
            {item.icon}
          </div>
          {/* Tooltip */}
          <span className="absolute top-14 left-1/2 -translate-x-1/2 transform whitespace-nowrap bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
