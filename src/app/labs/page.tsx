'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import { ExternalLink, MapPin, Target, Lightbulb, X, Zap, Leaf, Bot, LucideIcon } from 'lucide-react';

interface Lab {
  id: number;
  title: string;
  description: string;
  location: string;
  focus: string;
  image: string;
  category: string;
  link: string;
  tone: 'green' | 'orange' | 'purple';
  icon: LucideIcon;
  keyAreas: string[];
  impact: string[];
}

const labs: Lab[] = [
  {
    id: 1,
    title: 'Climate Innovation Lab',
    description:
      'Building solutions for climate challenges in Gilgit Baltistan through design thinking, community engagement, and sustainable innovation.',
    location: 'Makeistan Makerspace, Gilgit',
    focus: 'Climate Solutions & Sustainability',
    image: '🌱',
    category: 'Climate & Environment',
    link: '/labs/climate',
    tone: 'green',
    icon: Leaf,
    keyAreas: [
      'Renewable Energy Systems',
      'Water Conservation Technologies',
      'Sustainable Agriculture Solutions',
      'Eco-Architecture & Green Building',
      'Climate Data & Monitoring',
      'Community Resilience Planning',
    ],
    impact: [
      'Climate-resilient solutions for mountain communities',
      'Sustainable innovation prototypes developed',
      'Community engagement in climate action',
      'Local capacity building in green technologies',
    ],
  },
  {
    id: 2,
    title: 'Green Energy Lab',
    description:
      'Powering mountains sustainably with innovative energy solutions, addressing energy poverty through micro wind turbines, smart solar systems, and community-based renewable energy projects.',
    location: 'Makeistan Makerspace, Gilgit',
    focus: 'Renewable Energy & Power Systems',
    image: '⚡',
    category: 'Energy & Power',
    link: '/labs/energy',
    tone: 'orange',
    icon: Zap,
    keyAreas: [
      'Micro Wind Turbine Systems',
      'Smart Solar Kit Development',
      'Energy Storage Solutions',
      'Grid Integration Technologies',
      'Energy Efficiency Systems',
      'Community Power Planning',
    ],
    impact: [
      'Reduced energy poverty in remote areas',
      'Sustainable power solutions for 20+ hour load shedding',
      'Community-owned renewable energy systems',
      'Local technical capacity in green energy',
    ],
  },
  {
    id: 3,
    title: 'Robotics, AI & Emerging Technologies',
    description:
      'Exploring the future of technology through robotics, artificial intelligence, IoT, drones, and AR/VR, enabling participants to experiment, prototype, and solve real-world challenges.',
    location: 'Makeistan Makerspace, Gilgit',
    focus: 'Advanced Technologies & Innovation',
    image: '🤖',
    category: 'Technology & AI',
    link: '/labs/robotics',
    tone: 'purple',
    icon: Bot,
    keyAreas: [
      'Autonomous Robotics Systems',
      'Artificial Intelligence Applications',
      'Internet of Things (IoT) Solutions',
      'Drone Technology & Applications',
      'Augmented & Virtual Reality',
      'Smart Automation Systems',
    ],
    impact: [
      'Next-generation technology skills development',
      'Innovation in automation and AI applications',
      'Smart solutions for local challenges',
      'Future-ready workforce preparation',
    ],
  },
];

export default function LabsPage() {
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackButton />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Labs
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Innovation Labs
          </h1>
          <p className="mt-3 text-lg text-muted">Where Technology Meets Impact</p>
          <p className="mt-4 text-sm text-muted max-w-2xl mx-auto leading-relaxed">
            Explore our specialized labs where cutting-edge technology,
            sustainable innovation, and community impact converge to solve
            real-world challenges.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {/* Our Innovation Ecosystem */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground text-center mb-8">
            Our Innovation Ecosystem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tone: 'green' as const,
                emoji: '🌱',
                title: 'Climate Innovation',
                body: 'Developing sustainable solutions for climate challenges through community-centered design and innovative technologies.',
              },
              {
                tone: 'blue' as const,
                emoji: '⚡',
                title: 'Green Energy',
                body: 'Powering mountain communities with renewable energy solutions, addressing energy poverty through innovative technologies.',
              },
              {
                tone: 'purple' as const,
                emoji: '🤖',
                title: 'Emerging Technologies',
                body: 'Exploring robotics, AI, IoT, and AR/VR to create smart solutions for local and global challenges.',
              },
            ].map((card) => (
              <article
                key={card.title}
                data-tone={card.tone}
                className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/30"
              >
                <div className="text-2xl mb-3">{card.emoji}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Specialized Labs */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground text-center mb-3">
            Our Specialized Labs
          </h2>
          <p className="text-sm text-muted text-center mb-8 max-w-2xl mx-auto">
            Each lab focuses on specific technological domains while fostering
            interdisciplinary collaboration and community impact.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {labs.map((lab) => {
              const Icon = lab.icon;
              return (
                <article
                  key={lab.id}
                  data-tone={lab.tone}
                  onClick={() => setSelectedLab(selectedLab?.id === lab.id ? null : lab)}
                  className="group cursor-pointer rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/30"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{lab.image}</span>
                    <Icon className="h-5 w-5 tone-text" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{lab.title}</h3>
                  <p className="text-sm leading-relaxed text-muted mb-4">{lab.description}</p>
                  <div className="space-y-1.5 text-xs text-muted mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span>{lab.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Target className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span>{lab.focus}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-muted uppercase tracking-wide">
                      {lab.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {lab.keyAreas.slice(0, 3).map((area) => (
                      <span
                        key={area}
                        className="rounded-full surface px-2.5 py-0.5 text-xs text-foreground"
                      >
                        {area}
                      </span>
                    ))}
                    {lab.keyAreas.length > 3 && (
                      <span className="rounded-full surface px-2.5 py-0.5 text-xs text-foreground">
                        +{lab.keyAreas.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link
                    href={lab.link}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
                  >
                    Explore Lab
                    <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* Selected lab inline detail */}
        {selectedLab && (
          <section data-tone={selectedLab.tone}>
            <div className="rounded-2xl border border-border bg-background overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-2xl font-semibold text-foreground">{selectedLab.title}</h2>
                <button
                  onClick={() => setSelectedLab(null)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted hover:text-foreground hover:border-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-sm text-foreground leading-relaxed mb-6">
                  {selectedLab.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 tone-text" strokeWidth={1.75} />
                      Key Focus Areas
                    </h3>
                    <ul className="space-y-2">
                      {selectedLab.keyAreas.map((area) => (
                        <li
                          key={area}
                          className="flex items-start gap-2 rounded-lg surface p-3"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                          <span className="text-sm text-foreground">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4 tone-text" strokeWidth={1.75} />
                      Expected Impact
                    </h3>
                    <ul className="space-y-2">
                      {selectedLab.impact.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 rounded-lg surface p-3"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border text-center">
                  <Link
                    href={selectedLab.link}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
                  >
                    Visit {selectedLab.title}
                    <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center">
          <div className="rounded-2xl bg-brand p-10 text-brand-foreground">
            <h2 className="text-3xl font-semibold mb-3">Ready to Innovate?</h2>
            <p className="text-sm text-white/85 mb-6 max-w-2xl mx-auto">
              Join our labs and be part of Gilgit-Baltistan&apos;s innovation
              revolution. Whether you&apos;re a student, researcher, or
              innovator, there&apos;s a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:Info@makeistan.com?subject=Lab Collaboration Inquiry&body=Hello Makeistan Team,%0D%0A%0D%0AI am interested in collaborating with your innovation labs and would like to discuss potential opportunities.%0D%0A%0D%0AThank you!"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-brand hover:bg-white/90 transition-colors"
              >
                Get In Touch
                <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
