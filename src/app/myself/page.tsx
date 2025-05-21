import Image from 'next/image';
import pic from '../../images/pic.jpg';
import '../globals.css';
import DiamondNavbar from '../../components/DiamondNavbar';

export default function Myself() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#252425] text-[#FFC0C0] min-h-screen px-6 py-12 space-y-8 md:space-y-0 md:space-x-10">
      <DiamondNavbar />

      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src={pic}
          alt="My Profile"
          width={200}
          height={200}
          className="rounded-full object-cover shadow-lg"
        />
      </div>

      {/* About Section */}
      <div className="max-w-xl text-center md:text-left px-2">
        <p className="text-lg leading-relaxed">
          Hello! I&apos;m Chamuka Umesha — a passionate web developer with a knack for creating interactive and modern user experiences. I love working with technologies like React, Node.js, and Tailwind CSS, and I&apos;m always eager to learn more and grow as a developer.
        </p>
      </div>
    </div>
  );
}
