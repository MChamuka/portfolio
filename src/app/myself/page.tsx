import Image from 'next/image';
import pic from '../../images/pic.jpg';
import '../globals.css';
import DiamondNavbar from '../../components/DiamondNavbar';

export default function Myself() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#252425] text-[#FFC0C0] min-h-screen px-6 py-6 space-y-8 md:space-y-0 md:space-x-10">
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
          I’m a dedicated and fast-learning Full Stack Developer with a strong desire to grow and evolve in the ever-changing tech landscape. Passionate about building efficient, user-centric solutions, I continuously seek opportunities to apply my technical expertise in real-world scenarios.

My adaptability and quick learning ability allow me to tackle challenges head-on, while my strong communication and analytical skills support effective collaboration in team environments. Organized, cooperative, and committed to excellence, I thrive in group settings and value the power of teamwork to drive innovative outcomes.
        </p>
      </div>
    </div>
  );
}
