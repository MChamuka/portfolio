import Image from 'next/image';
import pic from '../../images/pic.jpg';
import '../globals.css';
import DiamondNavbar from '../../components/DiamondNavbar';

export default function Myself() {
  return (
    <div className="bg-[#252425] text-[#FFC0C0] min-h-screen px-4 py-6">
      <DiamondNavbar />

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 max-w-screen-lg mx-auto w-full pt-40">
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
        <div className="w-full text-center md:text-left">
          <p className="text-lg leading-relaxed">
            I’m a dedicated and fast-learning Full Stack Developer with 1 year of internship experience in fullstack development. I have a strong desire to grow and evolve in the ever-changing tech landscape. Passionate about building efficient, user-centric solutions, I continuously seek opportunities to apply my technical expertise in real-world scenarios. My adaptability and quick learning ability allow me to tackle challenges head-on, while my strong communication and analytical skills support effective collaboration in team environments. Organized, cooperative, and committed to excellence, I thrive in group settings and value the power of teamwork to drive innovative outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
