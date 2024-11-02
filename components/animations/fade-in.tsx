"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  distance = 50,
  className = "",
}: FadeInProps) {
  const element = useRef<HTMLDivElement>(null);




  useGSAP(() => {
    const el = element.current;
    if (!el) return;

    const directionMap = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
    };

    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
      ...directionMap[direction],
      opacity: 0,
      duration: 1,
      delay,
      ease: "power3.out",
    });
  }, { scope: element });

  return (
    <div ref={element} className={className}>
      {children}
    </div>
  );
}