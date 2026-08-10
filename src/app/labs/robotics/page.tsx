"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { ExternalLink } from "lucide-react";

export default function RoboticsLab() {
  const [showFullText, setShowFullText] = useState(false);

  const technologies = [
    { emoji: "🤖", title: "Robotics", body: "Build and program autonomous robots for real-world applications" },
    { emoji: "🧠", title: "Artificial Intelligence", body: "Develop smart solutions using machine learning and AI" },
    { emoji: "📱", title: "Internet of Things", body: "Create connected devices and smart systems" },
    { emoji: "🚁", title: "Drones", body: "Design and develop drone solutions for various applications" },
    { emoji: "🥽", title: "AR/VR", body: "Build immersive experiences and applications" },
  ];

  const audiences = [
    { emoji: "📚", title: "Students", body: "Learn and experiment with emerging technologies" },
    { emoji: "👩‍🏫", title: "Educators", body: "Design future-ready curricula" },
    { emoji: "💡", title: "Innovators", body: "Develop tech-driven solutions" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackButton />

      {/* Hero */}
      <div className="relative h-[560px] w-full overflow-hidden">
        <Image
          src="/images/robotics-lab.jpg"
          alt="Robotics Lab"
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
              Robotics, AI & Emerging Technologies
            </h1>
            <p className="mt-3 text-lg text-white/80">Makeistan Robotics Lab</p>
            <p className="mt-1 text-sm text-white/70">
              Building the future with robotics, AI, IoT, drones, and AR/VR
              technologies
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <section data-tone="purple">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Robotics, AI & Emerging Technologies
          </h2>
          <div className="text-sm leading-relaxed text-muted">
            <p className="mb-3">
              At Makeistan, we are advancing innovation by integrating
              Robotics, Artificial Intelligence (AI), Internet of Things (IoT),
              drones, and AR/VR into learning and product development. Our
              programs cater to both students and professionals—providing
              schools, universities, and organizations with the tools, training,
              and collaborative space to explore and apply emerging
              technologies in meaningful ways.
            </p>
            {showFullText && (
              <p className="mb-3">
                From building autonomous robots and smart IoT systems to
                developing drone solutions and immersive AR/VR experiences, we
                enable participants to experiment, prototype, and solve
                real-world challenges. Whether you&apos;re an educator designing
                future-ready curricula, a researcher exploring intelligent
                systems, or a startup developing tech-driven solutions,
                Makeistan offers the platform, expertise, and ecosystem to bring
                your ideas to life.
              </p>
            )}
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-sm font-medium tone-text hover:underline"
            >
              {showFullText ? "Read Less" : "Read More"}
            </button>
          </div>
        </section>

        <section data-tone="purple">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            💻 Our Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technologies.map((item) => (
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

        <section data-tone="purple">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            🌟 Who Can Join?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-background p-5 text-center transition-colors hover:border-foreground/30"
              >
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {item.emoji} {item.title}
                </h3>
                <p className="text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section data-tone="purple" className="text-center">
          <div className="rounded-2xl border border-border surface p-10">
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Want to Collaborate?
            </h3>
            <p className="text-sm text-muted mb-6 max-w-2xl mx-auto">
              Interested in partnering with our Robotics Lab or have a project
              idea? We&apos;d love to hear from you and explore how we can work
              together.
            </p>
            <a
              href="mailto:Info@makeistan.com?subject=Robotics Lab Collaboration&body=Hello Robotics Lab team,%0D%0A%0D%0AI am interested in collaborating with your lab and would like to discuss potential opportunities.%0D%0A%0D%0AThank you!"
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
