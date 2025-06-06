import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import ProjectCards from "./components/ProjectCards";
import EducationSection from "./components/EducationDetails";

export default function Home() {
  return (
    <div className="min-h-screen flex  flex-col items-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1F2428] relative">
      {/* Content Container */}
      <div className="w-full min-h-screen relative z-10 flex justify-between items-center flex-col lg:flex-row py-20">
        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B0C10] via-[#1F2833] via-[#C5C6C7] via-[#66FCF1] to-[#45A29E] bg-[length:400%_400%] opacity-50"
          style={{
            animation: "gradientBG 7s ease infinite",
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
            <a
              href="https://medium.com/@dinithi.adithya"
              target="_blank"
              className="bg-gray-600 p-3 rounded shadow hover:bg-gray-400"
            >
              <FaMedium />
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

      <div className="w-full flex justify-between items-center flex-col py-20 px-10">
        <h2 className="text-4xl font-medium text-white">About Me</h2>
        <p className="text-white text-center text-xl leading-relaxed py-5 px-20">
          I'm Dinithi Liyanage, a Computer Science and Engineering undergraduate
          at the University of Moratuwa, specializing in cybersecurity. As a
          passionate full-stack developer, I enjoy building web applications and
          exploring emerging technologies. My expertise includes Node.js, Java,
          and React, and I thrive on solving real-world problems through
          software development. I am highly motivated, analytical, and enjoy
          collaborating in dynamic teams.
        </p>
      </div>
      <hr className="border-t-2 border-[#66FCF1] w-2/3 mx-auto my-8 opacity-80" />

      <div className="w-full flex flex-col items-center py-20 px-10">
        <h2 className="text-4xl font-medium text-white">Education</h2>
        <EducationSection />
      </div>

      <div className="w-full min-h-screen grid md:grid-cols-2 gap-4 text-white px-20 bg-[rgba(31,36,40,0.7)] rounded-lg py-10">
        {/* Achievements Timeline */}
        <div>
          <h3 className="text-4xl font-semibold mb-4">Achievements</h3>
          <div className="border-l-4 border-[#66FCF1] pl-4 space-y-6">
            <div>
              <h4 className="font-semibold">Semi-Finalist – Tech-Triathlon</h4>
              <p className="text-sm text-gray-300">
                2024 – Software Development competition organized by Rootcode
              </p>
            </div>
            <div>
              <h4 className="font-semibold">1st Runners-up – Cypher 2.0</h4>
              <p className="text-sm text-gray-300">
                2024 – Capture The Flag competition organized by KDU
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Semi Finalist – CyberZee</h4>
              <p className="text-sm text-gray-300">
                2024 – Cybersecurity quiz by University of Kelaniya
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                Participant – Microsoft Imagine Cup
              </h4>
              <p className="text-sm text-gray-300">
                2024 – Global tech startup competition by Microsoft
              </p>
            </div>
          </div>
        </div>

        {/* Volunteering Experience */}
        <div>
          <h3 className="text-4xl font-semibold mb-4">
            Volunteering Experience
          </h3>
          <div className="border-l-4 border-[#66FCF1] pl-4 space-y-6 text-sm text-gray-300">
            <div>
              <h4 className="text-base font-medium text-white">
                Mathematics Society, University of Moratuwa{" "}
                <span className="text-xs">| 2023–2024</span>
              </h4>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Assistant Secretary, Executive Committee (2023/24)</li>
                <li>MTutor – Lead, Editorial and Marketing Pillar</li>
                <li>MFlix – Editorial Committee Member</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-medium text-white">
                SLIOT – CSE Dept, University of Moratuwa{" "}
                <span className="text-xs">| 2023</span>
              </h4>
              <ul className="list-disc ml-5 mt-1">
                <li>Organizing Committee – Delegate Handling</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-medium text-white">
                UXPlore 2.0 – IEEE Student Branch{" "}
                <span className="text-xs">| 2024</span>
              </h4>
              <ul className="list-disc ml-5 mt-1">
                <li>Editorial Committee – Content for Promotions</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-medium text-white">
                EXMO Exhibition – University of Moratuwa{" "}
                <span className="text-xs">| 2023</span>
              </h4>
              <ul className="list-disc ml-5 mt-1">
                <li>Organizing Committee – Refreshments</li>
                <li>Assisted Mathematics Society in project demos</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-medium text-white">
                English Literary Association – Devi Balika Vidyalaya{" "}
                <span className="text-xs">| 2016–2019</span>
              </h4>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Senior Treasurer (2018/19) – Managed events and budget</li>
                <li>
                  Junior Committee Member (2016/17) – Organized English Day and
                  Fundraisers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center py-20 px-10">
        <h2 className="text-4xl font-medium text-white">Projects</h2>
        <ProjectCards />
      </div>
      {/* <div className="w-full flex justify-center items-center py-10 mt-auto">
        <Footer />
      </div> */}
    </div>
  );
}
