"use client";

import { useEffect, useRef } from "react";
import styles from "./CursorGlow.module.css";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const mouse = useRef({ x: 50, y: 30 });      // target % of viewport
  const current = useRef({ x: 50, y: 30 });    // current lerped % of viewport
  const rafId = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      // Track relative to viewport since it's position: fixed
      mouse.current = { 
        x: (e.clientX / globalThis.innerWidth) * 100, 
        y: (e.clientY / globalThis.innerHeight) * 100 
      };
    };

    const animate = () => {
      // Lerp toward mouse — 0.07 is buttery smooth
      const ease = 0.07;
      current.current.x += (mouse.current.x - current.current.x) * ease;
      current.current.y += (mouse.current.y - current.current.y) * ease;

      if (glowRef.current) {
        const primaryColor = "rgba(3, 1, 62, 0.1)"; // #03013E 10%
        const secondaryColor = "rgba(26, 124, 153, 0.24)"; // #1A7C99 24%
        
        glowRef.current.style.background = `
          radial-gradient(
            circle 70vw at ${current.current.x}% ${current.current.y}%,
            ${secondaryColor} 0%,
            ${primaryColor} 25%,
            transparent 50%
          )
        `;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    globalThis.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      globalThis.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <div ref={glowRef} className={styles.glow} aria-hidden="true" />;
}
