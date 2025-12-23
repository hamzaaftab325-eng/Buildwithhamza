"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FloatingElementProps } from '../types';

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  className = '', 
  speed = 2, 
  range = 20,
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      y: `+=${range}`,
      x: `+=${range / 2}`,
      rotation: `+=${range / 4}`,
      duration: speed,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: delay
    });
  }, [speed, range, delay]);

  return (
    <div ref={elementRef} className={`absolute z-20 pointer-events-none select-none ${className}`}>
      {children}
    </div>
  );
};

export default FloatingElement;
