"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const workspaceImages = [
    "/images/main4.jpg",
    "/images/main1.jpg",
    "/images/main2.jpg",
    "/images/climate-lab.jpg",
    "/images/main3.jpg",
    "/images/robotics-lab.jpg",
  ];

  const goToPrevious = () =>
    setCurrentImageIndex((prev) => (prev === 0 ? workspaceImages.length - 1 : prev - 1));
  const goToNext = () => setCurrentImageIndex((prev) => (prev + 1) % workspaceImages.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % workspaceImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [workspaceImages.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {workspaceImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`MAKEISTAN Workspace ${index + 1}`}
              fill
              className={`object-cover object-center transition-all duration-700 ${
                isHovered ? "brightness-30 scale-105" : "brightness-50"
              }`}
              style={{ objectPosition: "center 40%" }}
              priority={index === 0}
            />
          </div>
        ))}

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 transition-colors"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {workspaceImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-6" : "bg-white/50 w-2 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className={`text-4xl md:text-6xl font-semibold text-white tracking-tight transition-transform duration-700 ${
            isHovered ? "scale-[1.02]" : "scale-100"
          }`}
        >
          Ready to Build Your AI &amp; Robotics Lab?
        </h1>
        <div className="mt-6 space-y-4 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-white font-light">
            Let&apos;s build the future of education together.
          </p>
          <p className="text-base md:text-lg text-white/95 leading-relaxed">
            Whether you&apos;re a school, university, or educational organization, Makeistan
            can help you create an inspiring learning environment where students build,
            innovate, and lead the future.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-center items-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-foreground text-sm font-medium hover:bg-white/90 transition-colors w-56 justify-center"
          >
            Book a Demo
          </Link>
          <Link
            href="/team"
            className="inline-flex items-center px-6 py-2.5 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors w-56 justify-center"
          >
            Talk to Our Team
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
