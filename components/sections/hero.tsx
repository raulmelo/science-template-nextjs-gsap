"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger, useGSAP);
// }

export default function HeroSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: -50,
          duration: 1.5,
          ease: "power3.out",
        });
      });
      
      gsap.to(itemRef.current, {
        backgroundColor: "red",
        opacity: 1,
        delay: 1, // 1 segundo de delay
        scrollTrigger: {
          trigger: container.current,
          start: "center center",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });
    }, { scope: container });

  return (
    <section
      className="relative min-h-[40vh] flex items-center justify-center"
      id="header"
      ref={container}
    >
      <div ref={headerRef} className="container px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Next.js + GSAP
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-muted-foreground mb-8">
            Create stunning scroll animations with the power of GSAP
          </p>
        </div>
        <div ref={itemRef} >
          <ArrowDown className="animate-bounce w-8 h-8 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
}