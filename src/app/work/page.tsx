"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { ExternalLink, MapPin, Target } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Rozgar Program Gilgit Baltistan",
    description:
      "Empowering communities through digital skills training and creating sustainable employment opportunities in remote mountainous regions.",
    location: "Gilgit Baltistan, Pakistan",
    beneficiaries: "180+ Youth",
    status: "Completed",
    statusTone: "green" as const,
    image: "💻",
    category: "Digital Skills",
    impact: [
      "85% employment rate among participants",
      "3 community tech centers established",
      "200+ women empowered",
      "15 local startups launched",
    ],
  },
  {
    id: 2,
    title: "Sustainable Housing for Flood-Affected Communities - Sindh",
    description:
      "Building climate-resilient housing solutions for communities affected by devastating floods using sustainable materials and innovative construction techniques.",
    location: "Sindh Province, Pakistan",
    beneficiaries: "300+ Families",
    status: "In Progress",
    statusTone: "blue" as const,
    image: "🏠",
    category: "Climate Resilience",
    impact: [
      "150 flood-resistant homes completed",
      "Local construction skills training",
      "Sustainable material sourcing",
      "Community-led implementation",
    ],
  },
  {
    id: 3,
    title: "Project Water - Solar-Powered Clean Water Access in Sindh",
    description:
      "A community-driven initiative that harnesses renewable energy to provide safe, reliable, and sustainable access to drinking water through solar-powered water tubewells in remote villages.",
    location: "Sindh Province, Pakistan",
    beneficiaries: "Multiple Villages",
    status: "Active",
    statusTone: "green" as const,
    image: "💧",
    category: "Water & Energy",
    impact: [
      "Clean groundwater access for multiple villages",
      "Reduced water-related health issues",
      "Environmental protection through renewable energy",
      "Enhanced community resilience to climate challenges",
    ],
  },
  {
    id: 4,
    title: "Smart Traditional Stove - Reimagining Heating for Mountain Communities",
    description:
      "Re-engineering traditional stoves for fuel efficiency and smart heat distribution in high mountain regions where winters are long and harsh.",
    location: "Gilgit-Baltistan & Chitral, Pakistan",
    beneficiaries: "Mountain Communities",
    status: "Prototyping",
    statusTone: "amber" as const,
    image: "🔥",
    category: "Innovation & Sustainability",
    impact: [
      "Currently prototyping with local families",
      "Incorporating community feedback for practical design",
      "Testing durability in harsh mountain conditions",
      "Developing maintenance protocols for long-term use",
    ],
  },
  {
    id: 5,
    title: "Community Robotics Program",
    description:
      "Taking innovation to every corner of Gilgit-Baltistan through mobile robotics camps that bring cutting-edge technology and hands-on learning directly to students—no matter how remote.",
    location: "Across Gilgit-Baltistan",
    beneficiaries: "Hundreds of Students",
    status: "Active",
    statusTone: "green" as const,
    image: "🤖",
    category: "Technology & Education",
    impact: [
      "10 successful camps across Gilgit-Baltistan",
      "Hundreds of students trained in robotics and AI",
      "Dozens of student-built robots and prototypes",
      "New generation of makers and changemakers",
    ],
  },
];

export default function OurWorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackButton />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Our Work
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Transforming Communities Through Innovation
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {/* Our Impact */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground text-center mb-8">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tone: "blue" as const,
                emoji: "🚀",
                title: "Innovation Projects",
                body: "Transforming communities through technology-driven solutions that address real-world challenges across Pakistan.",
              },
              {
                tone: "purple" as const,
                emoji: "🌍",
                title: "Community Impact",
                body: "Reaching over 1850+ lives across 3 provinces with sustainable solutions for education, housing, and digital empowerment.",
              },
              {
                tone: "green" as const,
                emoji: "🤝",
                title: "Collaborative Approach",
                body: "Working hand-in-hand with local communities, universities, and organizations to create lasting positive change.",
              },
            ].map((card) => (
              <article
                key={card.title}
                data-tone={card.tone}
                className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/30"
              >
                <div className="text-2xl mb-3">{card.emoji}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground text-center mb-8">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{project.image}</span>
                  <span
                    data-tone={project.statusTone}
                    className="inline-flex items-center rounded-full surface px-2.5 py-0.5 text-xs font-medium tone-text"
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted mb-4">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs text-muted mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Target className="h-3.5 w-3.5" strokeWidth={1.5} />
                    <span className="line-clamp-1">{project.category}</span>
                  </div>
                </div>
                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-foreground mb-2">
                    Key Impact
                  </h4>
                  <ul className="space-y-1.5 text-xs text-muted">
                    {project.impact.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Learn More
                  <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="rounded-2xl border border-border bg-card p-10">
            <h2 className="text-3xl font-semibold text-foreground mb-3">
              Want to Collaborate?
            </h2>
            <p className="text-sm text-muted mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for partners, volunteers, and supporters
              to help us expand our impact. Join us in creating positive change
              in communities across Pakistan.
            </p>
            <a
              href="mailto:Info@makeistan.com?subject=Inquiry about Makeistan Projects&body=Hello Makeistan team,%0D%0A%0D%0AI am interested in learning more about your projects and would like to get in touch.%0D%0A%0D%0AThank you!"
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
