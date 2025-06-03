import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex  flex-col items-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1F2428] relative">
      {/* Content Container */}
      <div className="w-full min-h-screen relative z-10 flex justify-between items-center flex-col lg:flex-row py-20">
        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B0C10] via-[#1F2833] via-[#C5C6C7] via-[#66FCF1] to-[#45A29E] bg-[length:400%_400%] opacity-40"
          style={{
            animation: "gradientBG 8s ease infinite",
          }}
        />
        {/* Left Content */}
        <div className="text-white space-y-4 lg:w-1/2 px-20">
          <h2 className="text-xl font-medium">Hi, I am</h2>
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            Dinithi Liyanage
          </h1>
          <p className="text-[#66FCF1] text-lg">
            FULL-STACK DEVELOPER | CYBERSECURITY ENTHUSIAST
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="dinithi.adithya@gmail.com"
              className="bg-gray-600 p-3 rounded shadow hover:bg-gray-400"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/DinithiLiyanage"
              target="_blank"
              className="bg-gray-600 p-3 rounded shadow hover:bg-gray-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/dad-liyanage/"
              target="_blank"
              className="bg-gray-600 p-3 rounded shadow hover:bg-gray-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="lg:w-1/2 flex justify-left pt-1 pr-30 lg:pt-0">
          <Image
            src="/Dinithi.JPG" // Transparent PNG
            alt="Profile"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      {/* <div className="absolute z-20 top-6 right-10 flex justify-left gap-20 text-white text-sm">
        <a href="#about">About me</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <button className="bg-white text-black px-4 py-1 rounded-full font-medium shadow hover:scale-105 transition">
          Contact Me
        </button>
      </div> */}

      <div className="w-full flex justify-between items-center flex-col py-20 px-10">
        <h2 className="text-4xl font-medium text-white">About Me</h2>
        <p className="text-white text-center text-xl py-10 leading-relaxed px-20">
          I'm Dinithi Liyanage, a Computer Science and Engineering undergraduate
          at the University of Moratuwa, specializing in cybersecurity. As a
          passionate full-stack developer, I enjoy building web applications and
          exploring emerging technologies. My expertise includes Node.js, Java,
          and React, and I thrive on solving real-world problems through
          software development. I am highly motivated, analytical, and enjoy
          collaborating in dynamic teams.
          <br />
        </p>
      </div>

      <div className="w-full flex flex-col items-center py-20 px-10">
        <h2 className="text-4xl font-medium text-white">Education</h2>
        <div className="flex flex-row justify-center items-stretch gap-8 w-full py-10">
          <div className="flex-1 bg-[rgba(197,198,199,0.4)] rounded-lg shadow-lg p-6">
            <p className="text-white text-center text-xl leading-relaxed px-6">
              BSc in Computer Science and Engineering (Special) <br />
              University of Moratuwa, Sri Lanka <br />
              (2022 - Present)
            </p>
          </div>
          <div className="flex-1 bg-[rgba(197,198,199,0.4)] rounded-lg shadow-lg p-6">
            <p className="text-white text-center text-xl leading-relaxed px-6">
              G.C.E. Advanced Level
            </p>
          </div>
          <div className="flex-1 bg-[rgba(197,198,199,0.4)] rounded-lg shadow-lg p-6">
            <p className="text-white text-center text-xl leading-relaxed px-6">
              G.C.E. Ordinary Level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
