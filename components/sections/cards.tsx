"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CardsSection() {
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.from(".card", {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      stagger: 0.2,
    });
  }, []);

  return (
    <section ref={cardsRef} className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Explore More</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card bg-card p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Getting Started</h3>
          <p className="text-muted-foreground mb-4">
            Begin your journey with our comprehensive documentation and examples.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Learn More
          </button>
        </div>
        <div className="card bg-card p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Resources</h3>
          <p className="text-muted-foreground mb-4">
            Access tutorials, guides, and best practices for building amazing websites.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
            View Resources
          </button>
        </div>
      </div>
    </section>
  );
}