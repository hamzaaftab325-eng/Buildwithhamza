"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 150 : 400;
    const maxDistance = isMobile ? 1.5 : 2.0;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 18;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x6366f1,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const linePositions = [];
    const positions = posArray;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      for (let j = i + 1; j < particleCount; j++) {
        const j3 = j * 3;
        const dist = Math.sqrt(
          Math.pow(positions[i3] - positions[j3], 2) +
          Math.pow(positions[i3 + 1] - positions[j3 + 1], 2) +
          Math.pow(positions[i3 + 2] - positions[j3 + 2], 2)
        );

        if (dist < maxDistance) {
          linePositions.push(
            positions[i3], positions[i3 + 1], positions[i3 + 2],
            positions[j3], positions[j3 + 1], positions[j3 + 2]
          );
        }
      }
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    });
    
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    const createGlowBlob = (color: number) => {
      const geometry = new THREE.SphereGeometry(2, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.03,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, -5);
      return { mesh, speed: Math.random() * 0.005 + 0.002 };
    };

    const blobs = [
      createGlowBlob(0x6366f1),
      createGlowBlob(0x3b82f6),
      createGlowBlob(0x818cf8)
    ];
    blobs.forEach(b => scene.add(b.mesh));

    const animate = () => {
      blobs.forEach(b => {
        b.mesh.position.y += Math.sin(Date.now() * b.speed) * 0.005;
        b.mesh.position.x += Math.cos(Date.now() * b.speed) * 0.005;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-40 select-none" />;
};

export default Background3D;
