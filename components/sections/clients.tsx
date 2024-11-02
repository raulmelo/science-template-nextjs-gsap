"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Star } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";


const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    content: "The animations have transformed our website completely. Our engagement metrics have never been better!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    company: "DesignHub",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    content: "Implementing these animations was seamless. The documentation is clear and the results are stunning.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Frontend Developer",
    company: "WebFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    content: "The performance optimization is impressive. Smooth animations without compromising load times.",
    rating: 5
  }
];

const clients = [
  { name: "Company 1", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format" },
  { name: "Company 2", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format" },
  { name: "Company 3", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format" },
  { name: "Company 4", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format" },
];

export default function ClientsSection() {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logos = logosRef.current;
    if (!logos) return;

    gsap.to(logos, {
      scrollTrigger: {
        trigger: logos,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".client-logo", {
      scrollTrigger: {
        trigger: logos,
        start: "top center+=100",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of companies already creating amazing user experiences
          </p>
        </FadeIn>

        <div
          ref={logosRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-20 opacity-0"
        >
          {clients.map((client, index) => (
            <div key={index} className="client-logo w-32 h-16 bg-card rounded-lg flex items-center justify-center p-4">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={testimonial.name}
              delay={index * 0.2}
              className="bg-card rounded-xl p-6 shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="flex gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}