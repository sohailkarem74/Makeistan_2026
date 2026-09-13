"use client";

import React from "react";

export default function About() {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          About Makeistan
        </h2>
        <p className="text-[18px] font-medium leading-[1.75] text-[#4B5563] max-w-[720px] mx-auto">
          Makeistan designs and builds fully equipped makerspaces for schools, universities, and communities — with applied learning in{" "}
          <span className="text-[#7C3AED]">Artificial Intelligence</span>,{" "}
          <span className="text-[#F04E23]">Robotics</span>,{" "}
          <span className="text-[#16A34A]">Climate Action</span>, and{" "}
          <span className="text-[#D4A017]">Green Energy</span>. From hardware and curriculum to teacher training and ongoing technical support, we provide everything institutions need to inspire innovation.
        </p>
      </div>
    </section>
  );
}