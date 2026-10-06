"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { ExternalLink } from "lucide-react";

export default function ClimateLab() {
  const focuses = [
    { title: "⚡ Renewable Energy", body: "Solar | Wind | Micro-hydro" },
    { title: "🏠 Eco-Architecture", body: "Sustainable Housing" },
    { title: "🌱 Climate-Smart Agriculture", body: "Sustainable farming solutions" },
    { title: "💧 Water Innovation", body: "Clean water technologies" },
    { title: "♻️ Waste-to-Resource", body: "Circular economy solutions" },
  ];

  const whatWeDo = [
    {
      title: "Build Climate Tech",
      body: "Low-cost, high-impact climate solutions",
    },
    {
      title: "Empower Communities",
      body: "Design solutions with local expertise",
    },
    {
      title: "Train Youth",
      body: "Climate innovation and green skills",
    },
    {
      title: "Prototype Solutions",
      body: "Real-world eco-solutions",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackButton />

      {/* Hero */}
      <div className="relative h-[560px] w-full overflow-hidden">
        <Image
          src="/images/main3.jpg"
          alt="Climate Innovation Lab"
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
              Climate Innovation Lab
            </h1>
            <p className="mt-3 text-lg text-white/80">
              Makeistan Climate Innovation Lab
            </p>
            <p className="mt-1 text-sm text-white/70">
              Fighting climate challenges with design, innovation, and community
              power
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">Why MCIL?</h2>
          <p className="text-sm leading-relaxed text-muted">
            Climate change is real—and it&apos;s here. From glacier melt to water
            crises, Pakistan is at the frontline. MCIL is Makeistan&apos;s bold
            new initiative to fight climate challenges with design, innovation,
            and community power.
          </p>
        </section>

        <section data-tone="green">
          <h2 className="text-2xl font-semibold text-foreground mb-6">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatWeDo.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-background p-5 transition-colors hover:border-foreground/30"
              >
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section data-tone="green">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Focus Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {focuses.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-background p-5 text-center transition-colors hover:border-foreground/30"
              >
                <p className="text-base font-semibold text-foreground mb-1.5">
                  {item.title}
                </p>
                <p className="text-xs text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section data-tone="blue" className="text-center">
          <div className="rounded-2xl border border-border surface p-10">
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Want to Collaborate?
            </h3>
            <p className="text-sm text-muted mb-6 max-w-2xl mx-auto">
              Interested in partnering with our Climate Lab or have a
              sustainability project? We&apos;d love to hear from you and explore
              how we can work together.
            </p>
            <a
              href="mailto:Info@makeistan.com?subject=Climate Lab Collaboration&body=Hello Climate Lab team,%0D%0A%0D%0AI am interested in collaborating with your lab and would like to discuss potential opportunities.%0D%0A%0D%0AThank you!"
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
