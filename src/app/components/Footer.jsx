// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
//         <div className='container p-12 flex justify-between'>
//             <span>LOGO </span>
//             <p className='text-slate-600'>All rights reserved.</p>
//             </div>
//     </footer>
//   )
// }

// export default Footer
"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#1A1C1E]">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold">Aashutosh Poudel</h2>
          <p className="text-slate-500 mt-2">
            Software Engineer • Web Developer • Tech Enthusiast
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-slate-500">
            <li>
              <Link href="#about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-white transition">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-slate-500 text-xl">
            <a
              href="https://github.com/samarpanpdl"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#33353F] px-6 py-4 flex flex-col md:flex-row justify-between items-center text-slate-600">
        <p>© {year} Aashutosh Poudel. All rights reserved.</p>

        <button
          onClick={scrollToTop}
          className="mt-2 md:mt-0 flex items-center gap-2 text-slate-500 hover:text-white transition"
        >
          Back to top <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
