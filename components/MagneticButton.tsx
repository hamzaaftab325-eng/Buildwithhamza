"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, onClick, className = '' }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 100) {
        gsap.to(button, {
          x: deltaX * 0.2,
          y: deltaY * 0.2,
          duration: 0.4,
          ease: "power2.out"
        });
      } else {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-4 font-semibold tracking-tight rounded-full transition-all duration-300 transform bg-white text-black hover:bg-zinc-100 active:scale-95 shadow-sm group ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default MagneticButton;
