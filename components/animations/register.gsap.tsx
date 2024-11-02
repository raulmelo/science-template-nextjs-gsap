"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const RegisterGSAP = () => {
  useGSAP(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  return null;
};

export default RegisterGSAP;
