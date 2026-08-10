"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { ExternalLink } from "lucide-react";

export default function EnergyLab() {
  const projects = [
    { emoji: "🔋", title: "Micro Wind Turbines", body: "Harnessing mountain winds for sustainable power" },
    { emoji: "🔥", title: "High-Efficiency Stoves", body: "Clean cooking solutions for mountain communities" },
    { emoji: "☀️", title: "Smart Solar Kits", body: "Affordable solar solutions for homes" },
    { emoji: "🔌", title: "Off-grid EV Chargers", body: "Sustainable mobility solutions" },
    { emoji: "🧊", title: "Battery Thermal Systems", body: "Specialized for cold climates" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackButton />

      {/* Hero */}
      <div className="relative h-[560px] w-full overflow-hidden">
        <Image
          src="/images/main5.jpg"
          alt="Green Energy Lab"
          fill
          className="object-cover object-center"
          priority
          quality={95}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              Lab
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Green Energy Lab
            </h1>
            <p className="mt-3 text-lg text-white/80">Makeistan Green Energy Lab</p>
            <p className="mt-1 text-sm text-white/70">
              Powering mountains sustainably with innovative energy solutions
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Powering Mountains, Sustainably
          </h2>
          <p className="text-sm leading-relaxed text-muted mb-3">
            Energy poverty is real in Gilgit-Baltistan — with towns and villages
            facing up to 20 hours of load shedding, deforestation rising, and
            families struggling to stay warm.
          </p>
          <p className="text-sm leading-relaxed text-muted">
            At Makeistan Energy, we&apos;re building clean, affordable, and
            locally-made energy solutions designed for life in the mountains.
          </p>
        </section>

        <section data-tone="green">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            🔬 What We&apos;re Working On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-background p-5 transition-colors hover:border-foreground/30"
              >
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {item.emoji} {item.title}
                </h3>
                <p className="text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section data-tone="green" className="text-center">
          <div className="rounded-2xl border border-border surface p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              🌟 Join Our Mission
            </h2>
            <p className="text-sm text-muted max-w-2xl mx-auto">
              We don&apos;t just prototype—we solve problems with our community.
              If you&apos;re an engineer, designer, or innovator passionate about
              green tech and energy justice, come build with us.
            </p>
          </div>
        </section>

        <section data-tone="orange" className="text-center">
          <div className="rounded-2xl border border-border surface p-10">
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Want to Collaborate?
            </h3>
            <p className="text-sm text-muted mb-6 max-w-2xl mx-auto">
              Interested in partnering with our Energy Lab or have a renewable
              energy project? We&apos;d love to hear from you and explore how we
              can work together.
            </p>
            <a
              href="mailto:Info@makeistan.com?subject=Energy Lab Collaboration&body=Hello Energy Lab team,%0D%0A%0D%0AI am interested in collaborating with your lab and would like to discuss potential opportunities.%0D%0A%0D%0AThank you!"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
            >
              Get In Touch
              <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
