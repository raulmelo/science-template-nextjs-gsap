"use client";

import { Code, Rocket, Sparkles } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";

const features = [
  {
    icon: Rocket,
    title: "Fast Performance",
    description: "Lightning-fast page loads and smooth transitions",
  },
  {
    icon: Sparkles,
    title: "Beautiful Animations",
    description: "Engaging animations powered by GSAP",
  },
  {
    icon: Code,
    title: "Modern Development",
    description: "Built with the latest web technologies",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn
              key={feature.title}
              delay={index * 0.2}
              className="bg-background rounded-xl p-6 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}