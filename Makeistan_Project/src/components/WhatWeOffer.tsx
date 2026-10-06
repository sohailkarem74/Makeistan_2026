"use client";

import React from "react";
import {
  Cpu,
  BookOpen,
  Code2,
  Bot,
  GraduationCap,
  Headset,
} from "lucide-react";

export default function WhatWeOffer() {
  const offerings = [
    {
      title: "Hardware",
      description:
        "Robotics kits, sensors, drones, 3D printers, and electronics — built for real, project-based work.",
      icon: Cpu,
      tone: "purple" as const,
      tags: null,
    },
    {
      title: "Learning Platform (LMS)",
      description:
        "Lessons, assignments, and progress tracking in one place — students and teachers always know what's next.",
      icon: BookOpen,
      tone: "blue" as const,
      tags: null,
    },
    {
      title: "Coding Platform",
      description:
        "Students write and run real code, with exercises that connect directly to the robots and sensors they're building.",
      icon: Code2,
      tone: "pink" as const,
      tags: null,
    },
    {
      title: "Curriculum",
      description:
        "AI, robotics, coding, electronics, IoT, design thinking, and engineering — sequenced by grade level.",
      icon: Bot,
      tone: "green" as const,
      tags: [
        "AI",
        "Robotics",
        "Coding",
        "Electronics",
        "IoT",
        "Design Thinking",
        "Engineering",
      ],
    },
    {
      title: "Teacher Training",
      description:
        "Workshops, lesson plans, and ongoing support so teachers can run the lab without an engineering background.",
      icon: GraduationCap,
      tone: "amber" as const,
      tags: null,
    },
    {
      title: "Technical Support",
      description:
        "Maintenance, software updates, and curriculum updates — support continues after installation, not just before.",
      icon: Headset,
      tone: "orange" as const,
      tags: null,
    },
  ];

  return (
    <section className="py-24 bg-background" id="what-we-offer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted animate-fade-in-up">
            What We Offer
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl animate-fade-in-up animation-delay-200">
            Everything a school needs to run a real AI &amp; Robotics Lab.
          </h2>
          <p className="mt-4 text-base text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            From equipment to curriculum to support — one system, not six
            vendors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {offerings.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                data-tone={item.tone}
                className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl surface">
                  <Icon className="h-5 w-5 tone-text" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                {item.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        data-tone={item.tone}
                        className="surface inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tone-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}