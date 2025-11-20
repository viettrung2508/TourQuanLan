"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",

    thumbnail: "/hero1.jpg",
  },
  {
    title: "Cursor",

    thumbnail: "/hero2.jpg",
  },
  {
    title: "Rogue",

    thumbnail: "/hero3.jpg",
  },

  {
    title: "Editorially",

    thumbnail: "/hero4.jpg",
  },
  {
    title: "Editrix AI",

    thumbnail: "/hero5.jpg",
  },
  {
    title: "Pixel Perfect",

    thumbnail: "/hero6.jpg",
  },

  {
    title: "Algochurn",

    thumbnail: "/hero7.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/hero8.jpg",
  },

  {
    title: "SmartBridge",

    thumbnail: "/hero10.jpg",
  },
  {
    title: "Renderwork Studio",

    thumbnail: "/hero11.jpg",
  },

  {
    title: "Creme Digital",

    thumbnail: "/hero12.jpg",
  },
  {
    title: "Golden Bells Academy",

    thumbnail: "/hero13.jpg",
  },
  {
    title: "Invoker Labs",

    thumbnail: "/hero15.jpg",
  },
  {
    title: "E Free Invoice",

    thumbnail: "/hero14.jpg",
  },
];
