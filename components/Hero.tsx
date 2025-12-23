"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';
import Background3D from './Background3D';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const blurLayerRef = useRef<HTMLDivElement>(null);
  
  const [techStack, setTechStack] = useState('Scalable');
  const techWords = ['Scalable', 'Modern', 'Secure', 'Elite', 'Reliable'];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % techWords.length;
      setTechStack(techWords[i]);
    }, 2500);

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    if (titleRef.current) {
      const words = titleRef.current.innerText.split(" ");
      titleRef.current.innerHTML = words.map(word => 
        `<span class='word-wrapper inline-block overflow-hidden pb-1 mr-[0.25em]'>
          <span class='word inline-block translate-y-[115%]'>${word}</span>
        </span>`
      ).join("");
      
      tl.to(".word", {
        y: 0,
        stagger: 0.1,
        duration: 1.6,
      });
    }

    tl.from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 1.4,
    }, "-=1.2");

    tl.from(".cta-button-container", {
      y: 20,
      opacity: 0,
      duration: 1.4,
    }, "-=1.2");

    tl.fromTo(blurLayerRef.current, {
      backdropFilter: "blur(0px)",
      opacity: 0
    }, {
      backdropFilter: "blur(40px)",
      opacity: 1,
      duration: 2,
    }, 0);

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
      y: 120,
      opacity: 0.2,
      scale: 0.96,
      filter: "blur(4px)"
    });

    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-[#050505] flex flex-col items-center justify-center font-['Plus_Jakarta_Sans']">
      <Background3D />

      <div 
        ref={blurLayerRef}
        className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505] pointer-events-none"
        style={{ backdropFilter: 'blur(60px)', WebkitBackdropFilter: 'blur(60px)' }}
      />

      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.08),transparent_50%)] pointer-events-none" />

      <div ref={containerRef} className="relative z-[10] max-w-5xl w-full px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl mb-14 cursor-default group transition-colors hover:border-white/20">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white/80"></span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.4em] text-white/40 transition-colors uppercase select-none">Operational • v3.0</span>
        </div>

        <h1 ref={titleRef} className="text-[clamp(1.75rem,5.5vw,3.5rem)] font-extrabold tracking-tight text-white leading-[1.05] mb-8 select-none">
          BUILDING THE NEXT GENERATION
        </h1>

        <div className="flex flex-col items-center gap-6 mb-12">
          <p ref={subtitleRef} className="text-base md:text-lg text-white/30 max-w-2xl font-medium leading-relaxed">
            Architecting <span className="text-white font-semibold tracking-tight">{techStack}</span> digital ecosystems. High-fidelity infrastructure for the modern engineer.
          </p>
        </div>

        <div className="cta-button-container flex flex-col items-center gap-14">
          <MagneticButton>
            Initialize
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
          
          <div className="flex items-center gap-14 text-[9px] font-bold tracking-[0.5em] text-white/10 uppercase transition-opacity duration-700">
            <span className="hover:text-white/30 cursor-pointer transition-colors">Documentation</span>
            <span className="w-1 h-1 rounded-full bg-white/5" />
            <span className="hover:text-white/30 cursor-pointer transition-colors">Architecture</span>
            <span className="w-1 h-1 rounded-full bg-white/5" />
            <span className="hover:text-white/30 cursor-pointer transition-colors">Network</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
