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
    <>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block "/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
  </div>
</section>

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
          <div ref={itemRef} className="opacity-0">
            <ArrowDown className="animate-bounce w-8 h-8 mx-auto text-primary" />
          </div>
        </div>
      </section>
    </>
  );
}