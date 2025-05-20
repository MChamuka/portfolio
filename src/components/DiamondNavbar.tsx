import { FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";

export default function DiamondNavbar() {
  const navItems = [
    { icon: <FaHome />, href: "#home" },
    { icon: <FaUserAlt />, href: "#about" },
    { icon: <FaEnvelope />, href: "#contact" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex gap-6">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="w-12 h-12 transform rotate-45 bg-[#FFC0C0] flex items-center justify-center shadow-md hover:bg-[#ff9aa2] transition duration-300"
        >
          <div className="transform -rotate-45 text-black text-xl">
            {item.icon}
          </div>
        </a>
      ))}
    </nav>
  );
}
