"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "py-2" : "py-4"
    }`}>
      <div className={`max-w-6xl mx-auto px-6 transition-all duration-500 ${
        isScrolled
          ? "bg-white/60 backdrop-blur-xl border border-white/20 rounded-full shadow-xl"
          : "bg-white/80 backdrop-blur-md border-b border-gray-200"
      }`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "py-3" : "py-4"
        }`}>
          {/* Logo / Brand */}
          <div className="flex items-center gap-12">
            <div className={`font-bold transition-all duration-500 ${
              isScrolled ? "text-lg" : "text-xl"
            }`}>buildwithhamza</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {["Home", "About", "Work", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm text-gray-600 hover:text-black transition"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Resume / Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="hidden md:inline-block text-sm font-medium border border-gray-300 px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
            >
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border border-white/20 mt-2 mx-6 rounded-2xl shadow-lg transition-all duration-300">
          <div className="flex flex-col gap-4 px-6 py-4">
            {["Home", "About", "Work", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-black text-lg transition"
              >
                {item}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-center text-sm font-medium border border-gray-300 px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
