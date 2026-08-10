"use client";

import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          About Makeistan
        </h2>
        <p className="mt-4 text-xl md:text-2xl text-muted">
          A makerspace where ideas become reality.
        </p>

        <p className="mt-6 text-base leading-relaxed text-muted max-w-3xl mx-auto">
          Makeistan is a makerspace empowering innovators to transform ideas into
          sustainable solutions through Robotics, Artificial Intelligence, Climate
          Action, and Green Energy.
        </p>
      </div>
    </section>
  );
}