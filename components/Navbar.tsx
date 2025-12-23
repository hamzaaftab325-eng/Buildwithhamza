"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Command } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Navbar: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(headerRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, delay: 0.5 }
    );

    tl.from([logoRef.current, navRef.current, ctaRef.current], {
      opacity: 0,
      y: -10,
      stagger: 0.1,
      duration: 1
    }, "-=0.8");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-[#050505]/40 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div ref={logoRef} className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:rotate-[15deg]">
            <Command className="w-5 h-5 text-black" />
          </div>
          <span className="text-sm font-bold tracking-[0.3em] uppercase select-none">Axon</span>
        </div>

        <nav ref={navRef} className="hidden md:flex items-center gap-10">
          {['Network', 'Architecture', 'Solutions', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <div ref={ctaRef} className="flex items-center gap-6">
          <a href="#" className="hidden sm:block text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors duration-300">
            Sign In
          </a>
          <MagneticButton className="!px-5 !py-2.5 !text-[10px] !uppercase !tracking-[0.2em] !font-bold">
            Launch App
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
