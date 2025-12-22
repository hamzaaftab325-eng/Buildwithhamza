"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "py-4" : "py-4"
    }`}>
      <div className={`max-w-6xl mx-auto px-6 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/60 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl shadow-black/5" 
          : "bg-white/80 backdrop-blur-md border-b border-gray-200"
      }`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}>
          <div className="flex items-center gap-12">
            <div className={`font-semibold transition-all duration-500 ${
              isScrolled ? "text-lg" : "text-xl"
            }`}>buildwithhamza</div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-sm text-gray-600 hover:text-black transition relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
              </a>
              <a href="#about" className="text-sm text-gray-600 hover:text-black transition relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
              </a>
              <a href="#work" className="text-sm text-gray-600 hover:text-black transition relative group">
                Work
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
              </a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-black transition relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
              </a>
            </div>
          </div>
          <button className="hidden md:block text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            Resume
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border border-white/20 mt-2 mx-6 rounded-2xl shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-4">
            <a href="#home" className="text-gray-600 hover:text-black transition">Home</a>
            <a href="#about" className="text-gray-600 hover:text-black transition">About</a>
            <a href="#work" className="text-gray-600 hover:text-black transition">Work</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition">Contact</a>
            <button className="text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
