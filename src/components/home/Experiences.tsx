"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/comment1.jpg",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/comment1.jpg",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "/comment2.jpg",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "/comment3.jpg",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/comment4.jpg",
  },
];
export function Experiences() {
  return (
    <div className="h-screen w-full flex justify-center relative overflow-hidden bg-black">
      <motion.img
        src="/hero12.jpg"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />

      <div className="w-full h-full py-20 flex items-center justify-center flex-col">
        <h2 className="max-w-7xl mb-24 mt-16 pl-4 mx-auto text-xl md:text-6xl text-center font-bold text-white dark:text-neutral-200 font-sans">
          Trải nghiệm tuyệt vời
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}
