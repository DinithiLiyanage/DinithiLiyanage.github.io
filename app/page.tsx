import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import ProjectCards from "./components/ProjectCards";
import EducationSection from "./components/EducationDetails";

export default function Home() {
    return (
        <div className="min-h-screen flex  flex-col items-center bg-gradient-to-br from-[#E6F7FF] via-[#b2ebf2] to-[#FFF8B8] relative">
            {/* Content Container */}
            <div className="w-full min-h-screen relative z-10 flex justify-between items-center flex-col lg:flex-row py-20">
                {/* Animated Gradient Background */}
                <div
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-[#00AEFF] via-[#B8E7FF] via-[#8AD8FF] via-[#2EB9FF] to-[#FFF38A] bg-[length:400%_400%] opacity-40"
                    style={{
                        animation: "gradientBG 7s ease infinite",
                    }}
                />
                {/* Left Content */}
                <div className="text-gray-800 space-y-4 lg:w-1/2 px-20 animate-slideInLeft">
                    <h2 className="text-xl font-medium">Hi, I am</h2>
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
                        Dinithi Liyanage
                    </h1>
                    <p className="text-[#0277bd] text-lg font-semibold">
                        FULL-STACK DEVELOPER | CYBERSECURITY ENTHUSIAST
                    </p>

                    <div className="flex gap-4 pt-4">
                        <a
                            href="mailto:madinithi.adithya@gmail.com"
                            className="bg-white text-cyan-600 p-3 rounded shadow-md hover:bg-cyan-50 hover:shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6"
                        >
                            <FaEnvelope />
                        </a>
                        <a
                            href="https://github.com/DinithiLiyanage"
                            target="_blank"
                            className="bg-white text-cyan-600 p-3 rounded shadow-md hover:bg-cyan-50 hover:shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/dinithiL/"
                            target="_blank"
                            className="bg-white text-cyan-600 p-3 rounded shadow-md hover:bg-cyan-50 hover:shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://medium.com/@dinithi.adithya"
                            target="_blank"
                            className="bg-white text-cyan-600 p-3 rounded shadow-md hover:bg-cyan-50 hover:shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6"
                        >
                            <FaMedium />
                        </a>
                    </div>
                </div>

                {/* Right Profile Image */}
                <div className="lg:w-1/2 flex justify-left pt-1 pr-30 lg:pt-0 animate-slideInRight">
                    <Image
                        src="/Dinithi.JPG" // Transparent PNG
                        alt="Profile"
                        width={500}
                        height={500}
                        className="object-cover rounded-lg shadow-lg animate-float"
                        priority
                    />
                </div>
            </div>

            <div
                className="w-full flex justify-between items-center flex-col py-15 px-10 animate-fadeInUp"
                style={{ animationDelay: "0.2s", opacity: 0 }}
            >
                <h2 className="text-4xl font-medium text-gray-900">About Me</h2>
                <p className="text-gray-700 text-center text-xl leading-relaxed py-5 px-30">
                    I'm Dinithi Liyanage, a Computer Science and Engineering
                    undergraduate at the University of Moratuwa, specializing in
                    cybersecurity. As a passionate full-stack developer, I enjoy
                    building web applications and exploring emerging
                    technologies. My expertise includes Node.js, Java, and
                    React, and I thrive on solving real-world problems through
                    software development. I am highly motivated, analytical, and
                    enjoy collaborating in dynamic teams.
                </p>
            </div>
            <hr className="border-t-2 border-cyan-400 w-2/3 mx-auto my-2 opacity-60" />

            <div
                className="w-full flex flex-col items-center py-20 px-10 animate-fadeInUp"
                style={{ animationDelay: "0.3s", opacity: 0 }}
            >
                <h2 className="text-4xl font-medium text-gray-900">
                    Education
                </h2>
                <EducationSection />
            </div>

            <div
                className="w-full min-h-screen grid md:grid-cols-2 gap-4 text-gray-800 px-20 bg-white/70 backdrop-blur-sm rounded-lg py-10 animate-scaleIn shadow-lg"
                style={{ animationDelay: "0.4s", opacity: 0 }}
            >
                {/* Achievements Timeline */}
                <div>
                    <h3 className="text-4xl font-semibold mb-4 text-gray-900">
                        Achievements
                    </h3>
                    <div className="border-l-4 border-cyan-500 pl-4 space-y-6">
                        <div className="transition-all duration-300 hover:pl-2 hover:scale-105">
                            <h4 className="font-semibold text-gray-900">
                                Semi-Finalist – Tech-Triathlon
                            </h4>
                            <p className="text-base text-gray-600">
                                2024 – Software Development competition
                                organized by Rootcode
                            </p>
                        </div>
                        <div className="transition-all duration-300 hover:pl-2 hover:scale-105">
                            <h4 className="font-semibold text-gray-900">
                                1st Runners-up – Cypher 2.0
                            </h4>
                            <p className="text-base text-gray-600">
                                2024 – Capture The Flag competition organized by
                                KDU
                            </p>
                        </div>
                        <div className="transition-all duration-300 hover:pl-2 hover:scale-105">
                            <h4 className="font-semibold text-gray-900">
                                Semi Finalist – CyberZee
                            </h4>
                            <p className="text-base text-gray-600">
                                2024 – Cybersecurity quiz by University of
                                Kelaniya
                            </p>
                        </div>
                        <div className="transition-all duration-300 hover:pl-2 hover:scale-105">
                            <h4 className="font-semibold text-gray-900">
                                Participant – Microsoft Imagine Cup
                            </h4>
                            <p className="text-base text-gray-600">
                                2024 – Global tech startup competition by
                                Microsoft
                            </p>
                        </div>
                    </div>
                </div>

                {/* Volunteering Experience */}
                <div>
                    <h3 className="text-4xl font-semibold mb-4 text-gray-900">
                        Volunteering Experience
                    </h3>
                    <div className="border-l-4 border-cyan-500 pl-4 space-y-6 text-sm text-gray-700">
                        <div className="transition-all duration-300 hover:pl-2">
                            <h4 className="text-base font-medium text-gray-900">
                                Mathematics Society, University of Moratuwa{" "}
                                <span className="text-base text-gray-600">
                                    | 2023–2024
                                </span>
                            </h4>
                            <ul className="list-disc ml-5 mt-1 space-y-1">
                                <li>
                                    Assistant Secretary, Executive Committee
                                    (2023/24)
                                </li>
                                <li>
                                    MTutor – Lead, Editorial and Marketing
                                    Pillar
                                </li>
                                <li>MFlix – Editorial Committee Member</li>
                            </ul>
                        </div>

                        <div className="transition-all duration-300 hover:pl-2">
                            <h4 className="text-base font-medium text-gray-900">
                                SLIOT – CSE Dept, University of Moratuwa{" "}
                                <span className="text-base text-gray-600">
                                    | 2023
                                </span>
                            </h4>
                            <ul className="list-disc ml-5 mt-1">
                                <li>
                                    Organizing Committee – Delegate Handling
                                </li>
                            </ul>
                        </div>

                        <div className="transition-all duration-300 hover:pl-2">
                            <h4 className="text-base font-medium text-gray-900">
                                UXPlore 2.0 – IEEE Student Branch{" "}
                                <span className="text-base text-gray-600">
                                    | 2024
                                </span>
                            </h4>
                            <ul className="list-disc ml-5 mt-1">
                                <li>
                                    Editorial Committee – Content for Promotions
                                </li>
                            </ul>
                        </div>

                        <div className="transition-all duration-300 hover:pl-2">
                            <h4 className="text-base font-medium text-gray-900">
                                EXMO Exhibition – University of Moratuwa{" "}
                                <span className="text-base text-gray-600">
                                    | 2023
                                </span>
                            </h4>
                            <ul className="list-disc ml-5 mt-1">
                                <li>Organizing Committee – Refreshments</li>
                                <li>
                                    Assisted Mathematics Society in project
                                    demos
                                </li>
                            </ul>
                        </div>

                        <div className="transition-all duration-300 hover:pl-2">
                            <h4 className="text-base font-medium text-gray-900">
                                English Literary Association – Devi Balika
                                Vidyalaya{" "}
                                <span className="text-base text-gray-600">
                                    | 2016–2019
                                </span>
                            </h4>
                            <ul className="list-disc ml-5 mt-1 space-y-1">
                                <li>
                                    Senior Treasurer (2018/19) – Managed events
                                    and budget
                                </li>
                                <li>
                                    Junior Committee Member (2016/17) –
                                    Organized English Day and Fundraisers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="w-full flex flex-col items-center py-20 px-10 animate-fadeInUp"
                style={{ animationDelay: "0.5s", opacity: 0 }}
            >
                <h2 className="text-4xl font-medium text-gray-900">Projects</h2>
                <ProjectCards />
            </div>
            {/* <div className="w-full flex justify-center items-center py-10 mt-auto">
        <Footer />
      </div> */}
        </div>
    );
}
