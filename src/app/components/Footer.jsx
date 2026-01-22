"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#1A1C1E]">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Left: Name + Tagline + Location */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-semibold text-sm">Aashutosh Poudel</p>
          <p className="text-xs text-slate-500">Tech Enthusiast</p>
          <p className="flex items-center justify-center md:justify-start gap-1 text-xs text-slate-500">
            <FaMapMarkerAlt className="text-slate-400" />
            Nepal
          </p>
        </div>

        {/* Middle: Contact CTA */}
        <div className="text-xs text-slate-400 hover:text-white transition">
          <a
            href="mailto:aashutoshpoudel@example.com"
            className="flex items-center gap-2"
          >
            <FaEnvelope />
            poudelaashutosh27@gmail.com
          </a>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-4 text-slate-400 text-lg">
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
    </footer>
  );
};

export default Footer;
