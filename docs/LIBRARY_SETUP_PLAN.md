# 📦 Library Installation & Setup Plan

## 🎯 Overview
This document outlines the complete library setup for a professional, production-ready Next.js portfolio with advanced animations, 3D effects, and optimal Vercel deployment.

---

## 📚 Libraries to Install

### 1️⃣ **Animation & Motion** (CRITICAL)

#### GSAP - Advanced Scroll Animations
```bash
npm install gsap
```
**Includes:**
- ScrollTrigger (scroll-based animations)
- Timelines (complex sequences)
- Advanced tweening

**Usage Rules:**
- ✅ Use only in `"use client"` components
- ✅ Register plugins: `gsap.registerPlugin(ScrollTrigger)`
- ✅ Initialize in `useEffect` or `useGSAP` hook
- ❌ Never use in Server Components

#### Framer Motion - UI Animations
```bash
npm install framer-motion
```
**Best For:**
- Page transitions
- Button hover effects
- Card animations
- Layout animations
- Stagger effects

---

### 2️⃣ **3D & WebGL** (PREMIUM FEATURES)

#### Three.js - Core 3D Library
```bash
npm install three
```

#### React Three Fiber + Drei - React Integration
```bash
npm install @react-three/fiber @react-three/drei
```
**Why?**
- React-friendly API
- Optimized performance
- Built-in helpers (cameras, lights, controls)

**SSR Safety:**
```tsx
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("./Scene"), { ssr: false });
```

---

### 3️⃣ **Smooth Scrolling** (PREMIUM FEEL)

#### Lenis - Smooth Scroll
```bash
npm install lenis
```
**Note:** Package moved from `@studio-freight/lenis` to `lenis` (v1.1+)
**Features:**
- Buttery smooth scrolling
- Works perfectly with GSAP ScrollTrigger
- Momentum-based easing

---

### 4️⃣ **UI & Styling** (MUST HAVE)

#### Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### clsx - Conditional Classes
```bash
npm install clsx
```
**Usage:**
```tsx
import clsx from 'clsx';
const className = clsx('base-class', { 'active': isActive });
```

#### tailwind-merge - Merge Tailwind Classes
```bash
npm install tailwind-merge
```

---

### 5️⃣ **Icons & UI Helpers**

#### Lucide React - Modern Icons
```bash
npm install lucide-react
```
**Usage:**
```tsx
import { Github, Linkedin, Mail } from 'lucide-react';
```

---

### 6️⃣ **Performance & Utilities**

#### React Intersection Observer
```bash
npm install react-intersection-observer
```
**Use For:**
- Lazy loading animations
- Scroll-triggered effects
- Performance optimization

---

### 7️⃣ **OPTIONAL (ADVANCED)**

#### Lottie - JSON Animations
```bash
npm install lottie-react
```

#### Zustand - State Management
```bash
npm install zustand
```
**Use For:**
- Global state (theme, menu open/close)
- Lightweight alternative to Redux

---

## 🚀 Complete Installation Command

### **Option 1: Install All (Recommended)**
```bash
npm install gsap framer-motion three @react-three/fiber @react-three/drei lenis lucide-react clsx tailwind-merge react-intersection-observer lottie-react zustand
```

### **Option 2: Install Core Only**
```bash
npm install gsap framer-motion lucide-react clsx tailwind-merge react-intersection-observer
```

### **Option 3: Add 3D Later**
```bash
npm install three @react-three/fiber @react-three/drei
```

### **Dev Dependencies**
```bash
npm install -D tailwindcss postcss autoprefixer @types/three
```

---

## ⚙️ Configuration Files

### 1. **tailwind.config.ts**
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        accent: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
export default config;
```

### 2. **next.config.ts**
```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;
```
**Note:** `domains` is deprecated, use `remotePatterns` instead

### 3. **tsconfig.json** (Path Aliases)
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"]
    }
  }
}
```

---

## 🧩 Library Usage Strategy

### **Animation Decision Matrix**

| Use Case | Library | Example |
|----------|---------|---------|
| Hero text reveal | GSAP | Split text animation |
| Scroll parallax | GSAP ScrollTrigger | Background movement |
| Button hover | Framer Motion | Scale + color change |
| Card entrance | Framer Motion | Fade + slide up |
| Page transition | Framer Motion | Smooth route change |
| 3D hero scene | React Three Fiber | Floating objects |
| Smooth scroll | Lenis | Momentum scrolling |
| Icon animations | Lucide + Framer | Animated icons |

---

## ⚠️ CRITICAL RULES (Avoid Errors)

### 1️⃣ **Client Components for Animations**
```tsx
"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AnimatedSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation code here
  }, []);
  
  return <div>Content</div>;
}
```

### 2️⃣ **GSAP + ScrollTrigger Setup**
```tsx
"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  const ref = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
      });
    });
    
    return () => ctx.revert(); // Cleanup
  }, []);
  
  return <div ref={ref}>Animated Content</div>;
}
```

### 3️⃣ **Three.js SSR Safety**
```tsx
// components/Scene3D.tsx
"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Scene3D() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      {/* 3D objects */}
    </Canvas>
  );
}

// app/page.tsx
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/Scene3D'), { 
  ssr: false,
  loading: () => <div>Loading 3D...</div>
});
```

### 4️⃣ **Lenis Smooth Scroll Setup**
```tsx
"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

### 5️⃣ **Framer Motion Variants**
```tsx
"use client";

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Card() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Content
    </motion.div>
  );
}
```

---

## 🚫 DO NOT

❌ Access `window` outside hooks  
❌ Run animations in Server Components  
❌ Mix GSAP and Framer Motion on same element  
❌ Forget to cleanup GSAP contexts  
❌ Use Three.js without `ssr: false`  
❌ Install unused libraries  

---

## ✅ DO

✅ Mark animation components as `"use client"`  
✅ Use `useEffect` for GSAP initialization  
✅ Cleanup animations on unmount  
✅ Use `dynamic` import for Three.js  
✅ Register GSAP plugins before use  
✅ Use Framer Motion for simple UI animations  
✅ Use GSAP for complex scroll animations  

---

## 📂 Utility Functions

### **lib/utils.ts**
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Usage:**
```tsx
import { cn } from '@/lib/utils';

<div className={cn('base-class', { 'active': isActive }, className)} />
```

---

## 🎨 Component Structure

### **Animation Components**
```
components/
├── animations/
│   ├── FadeIn.tsx          # Framer Motion fade wrapper
│   ├── SlideIn.tsx         # Framer Motion slide wrapper
│   ├── ScrollReveal.tsx    # GSAP scroll reveal
│   └── SmoothScroll.tsx    # Lenis wrapper
├── 3d/
│   ├── Scene3D.tsx         # Main 3D scene
│   ├── FloatingObjects.tsx # Animated 3D objects
│   └── ParticleField.tsx   # Particle effects
└── ui/
    ├── Button.tsx          # Animated button
    ├── Card.tsx            # Animated card
    └── SectionHeading.tsx  # Animated heading
```

---

## 🧪 Testing Checklist

- [ ] All animations work in production build
- [ ] No hydration errors
- [ ] No console warnings
- [ ] Smooth 60fps animations
- [ ] 3D scenes load without SSR errors
- [ ] Smooth scroll works on all devices
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No layout shifts during animation

---

## 🚀 Build & Deploy Commands

### **Local Development**
```bash
npm run dev
```

### **Production Build**
```bash
npm run build
npm start
```

### **Deploy to Vercel**
```bash
git add .
git commit -m "Add animation libraries and setup"
git push origin main
```

Vercel will auto-deploy on push.

---

## 📊 Performance Targets

| Metric | Target | Library Impact |
|--------|--------|----------------|
| First Contentful Paint | < 1.5s | Minimal |
| Largest Contentful Paint | < 2.5s | Optimize images |
| Time to Interactive | < 3.5s | Code splitting |
| Cumulative Layout Shift | < 0.1 | Avoid layout animations |
| Bundle Size | < 300KB | Tree-shaking enabled |

---

## 🔄 Next Steps

1. **Initialize Project**
   ```bash
   npx create-next-app@latest . --typescript --tailwind --app
   ```

2. **Install Libraries**
   ```bash
   npm install gsap framer-motion three @react-three/fiber @react-three/drei lenis lucide-react clsx tailwind-merge react-intersection-observer
   ```

3. **Configure Files**
   - Update `tailwind.config.ts`
   - Update `next.config.js`
   - Create `lib/utils.ts`

4. **Create Base Components**
   - SmoothScroll wrapper
   - Animation wrappers
   - UI components

5. **Build Sections**
   - Hero with GSAP
   - About with Framer Motion
   - Projects with scroll animations
   - 3D scene (optional)

6. **Test & Deploy**
   - Local build test
   - Push to GitHub
   - Deploy on Vercel

---

## 📚 Resources

- [GSAP Docs](https://greensock.com/docs/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- [Lucide Icons](https://lucide.dev/)

---

**Status:** Ready for Implementation 🚀  
**Last Updated:** December 2025  
**Vercel Compatible:** ✅ 100%
