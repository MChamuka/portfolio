import Image from 'next/image'
import pic from '../../images/pic.jpg'
import ".././globals.css";


export default function Myself() {
  return (
    <div className="flex items-center justify-center bg-[#252425] text-[#FFC0C0] min-h-screen px-8">
      {/* Image Section */}
      <div className="mr-10">
        <Image
          src={pic}
          alt="My Profile"
          width={200}
          height={200}
          className="rounded-full object-cover shadow-lg"
        />
      </div>

      {/* About Section */}
      <div className="max-w-xl ">
        <text className=" text-lg leading-relaxed ">
          Hello! i&apos;m Chamuka Umesha — a passionate web developer with a knack for creating interactive and modern user experiences. I love working with technologies like React, Node.js, and Tailwind CSS, and i&apos;m always eager to learn more and grow as a developer.
        </text>
      </div>
    </div>
  )
}
