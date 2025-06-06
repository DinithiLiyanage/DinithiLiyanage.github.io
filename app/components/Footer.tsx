"use client";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0B0C10] text-white px-15 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-12 w-full">
        {/* CTA & Contact */}
        <div>
          <h2 className="text-4xl font-semibold mb-3">Let’s work together!</h2>
          <p className="mb-4 text-gray-300">
            I'm open to opportunities and collaborations. Feel free to reach
            out.
          </p>
          <div className="flex items-center gap-3 text-[#66FCF1]">
            <FiMail size={20} />
            <a
              href="mailto:dinithi.adithya@gmail.com"
              className="hover:underline"
            >
              dinithi.adithya@gmail.com
            </a>
          </div>
        </div>

        {/* Social & Resume */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect with me</h3>
          <div className="flex items-center gap-5 mb-4 text-[#66FCF1]">
            <a
              href="https://github.com/DinithiLiyanage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/dad-liyanage/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          {/* <a
            href="/resume.pdf"
            download
            className="inline-block px-4 py-2 border border-[#66FCF1] rounded-md text-[#66FCF1] hover:bg-[#66FCF1] hover:text-black transition"
          >
            Download Resume
          </a> */}
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Dinithi Liyanage. Built with Next.js &
          Tailwind CSS.
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 mt-4 md:mt-0 text-[#66FCF1] hover:underline"
        >
          <FaArrowUp size={14} /> Back to Top
        </button>
      </div>
    </footer>
  );
}
