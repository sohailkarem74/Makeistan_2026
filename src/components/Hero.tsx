"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';
import BookDemoButton from "@/components/BookDemoButton";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
            isHovered ? "brightness-30 scale-105" : "brightness-50"
          }`}
          src="/images/video/Background_video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
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
        <div className="mt-10 space-y-6 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-white font-medium">
            Let&apos;s build the future of education together.
          </p>
          <p className="text-base md:text-lg text-white font-medium leading-relaxed">
            Whether you&apos;re a school, university, or educational organization, Makeistan
            can help you create an inspiring learning environment where students build,
            innovate, and lead the future.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-center items-center mt-16">
          <BookDemoButton
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-foreground text-sm font-medium hover:bg-white/90 transition-colors w-56 justify-center"
          >
          </BookDemoButton>
          <Link
            href="/shop"
            className="inline-flex items-center px-8 py-3.5 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors w-56 justify-center"
          >
            Visit Shop
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
