"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";

export default function HeroSection() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      <div ref={headerRef} className="container px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Next.js + GSAP
        </h1>
        <FadeIn delay={0.2} className="max-w-2xl mx-auto">
          <p className="text-xl text-muted-foreground mb-8">
            Create stunning scroll animations with the power of GSAP
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <ArrowDown className="animate-bounce w-8 h-8 mx-auto text-primary" />
        </FadeIn>
      </div>
    </section>
  );
}