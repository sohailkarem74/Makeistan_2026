"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Rozgar Program Gilgit Baltistan",
    description: "Empowering communities through digital skills and employment opportunities",
    status: "Completed",
    statusTone: "green" as const,
  },
  {
    id: 2,
    title: "Sustainable Housing for Flood-Affected Communities – Sindh",
    description: "Building resilient homes for disaster-affected families",
    status: "Ongoing",
    statusTone: "blue" as const,
  },
  {
    id: 3,
    title: "Solar Powered Clean Water Access in Sindh",
    description: "Providing clean water solutions through renewable energy",
    status: "Completed",
    statusTone: "green" as const,
  },
  {
    id: 4,
    title: "Smart Traditional Stove - Reimagining Heating for Mountain Communities",
    description: "Re-engineering traditional stoves for fuel efficiency and smart heat distribution",
    status: "Ongoing",
    statusTone: "blue" as const,
  },
];

export default function OurWork() {
  const [activeTab, setActiveTab] = useState(0);
  const active = projects[activeTab];

  return (
    <section id="our-work" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Our Work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Projects with real-world impact.
          </h2>
          <p className="mt-4 text-base text-muted max-w-2xl mx-auto">
            Discover the impactful projects we&apos;ve undertaken to create
            positive change in communities across Pakistan.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {projects.map((project, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(index)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-muted hover:border-foreground hover:text-foreground"
                }`}
              >
                <span className="line-clamp-1 max-w-[28rem]">{project.title}</span>
              </button>
            );
          })}
        </div>

        <article className="rounded-xl border border-border bg-background p-6 sm:p-8 transition-colors hover:border-foreground/30">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <div
                data-tone="blue"
                className="surface rounded-lg aspect-video flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-sm text-muted">Project Image</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-3">
                <span
                  data-tone={active.statusTone}
                  className="inline-flex items-center rounded-full surface px-2.5 py-0.5 text-xs font-medium tone-text"
                >
                  {active.status}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {active.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/projects/${active.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
                >
                  View Details
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </Link>
                <Link
                  href={`/projects/${active.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
