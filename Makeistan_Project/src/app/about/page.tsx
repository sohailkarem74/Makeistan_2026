import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import { Mail } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <BackButton />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              About
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Welcome to Makeistan
            </h1>
            <p className="mt-3 text-lg text-muted">
              Gilgit Baltistan&apos;s First Ever Makerspace
            </p>
            <p className="mt-1 text-base text-muted">Where Ideas Come Alive</p>
          </div>
        </section>

        {/* Main Content */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
          {/* Our Story */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground text-center mb-8">
              Our Story
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  tone: "blue" as const,
                  emoji: "🚀",
                  title: "Innovation Hub",
                  body: "Pakistan's first collaborative makerspace, built to empower people with tools, skills, and community needed to turn bold ideas into real-world solutions.",
                },
                {
                  tone: "purple" as const,
                  emoji: "🌍",
                  title: "Local Impact",
                  body: "Rooted in Gilgit-Baltistan, we're addressing real challenges like energy access, climate resilience, and livelihood generation through hands-on learning.",
                },
                {
                  tone: "green" as const,
                  emoji: "🤝",
                  title: "Community Driven",
                  body: "Democratizing innovation by providing access to cutting-edge tools, expert mentorship, and collaborative environment for local innovators.",
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

          {/* What We Do */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground text-center mb-8">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  tone: "blue" as const,
                  emoji: "🔬",
                  title: "Innovation Labs",
                  body: "Our specialized labs focus on climate innovation, green energy solutions, and robotics & AI, providing hands-on experience with cutting-edge technology.",
                },
                {
                  tone: "purple" as const,
                  emoji: "📚",
                  title: "Training Programs",
                  body: "We offer comprehensive training workshops and fellowship programs designed to build technical skills and foster entrepreneurial thinking.",
                },
                {
                  tone: "green" as const,
                  emoji: "🤝",
                  title: "Community Building",
                  body: "We create a vibrant ecosystem where like-minded individuals collaborate, share knowledge, and support each other's innovative endeavors.",
                },
                {
                  tone: "orange" as const,
                  emoji: "🚀",
                  title: "Project Development",
                  body: "From concept to prototype, we guide innovators through the entire product development cycle, providing mentorship and resources.",
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

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground text-center mb-8">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { value: "500+", label: "Students Trained", tone: "blue" as const },
                { value: "50+", label: "Projects Completed", tone: "purple" as const },
                { value: "3", label: "Specialized Labs", tone: "green" as const },
              ].map((stat) => (
                <div
                  key={stat.label}
                  data-tone={stat.tone}
                  className="rounded-xl border border-border surface p-6"
                >
                  <p className="text-3xl font-semibold tone-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Get In Touch */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground text-center mb-3">
              Get In Touch
            </h2>
            <p className="text-sm text-muted text-center mb-8 max-w-xl mx-auto">
              Ready to be part of Gilgit-Baltistan&apos;s innovation revolution?
              We&apos;d love to hear from you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="rounded-xl border border-border bg-background p-6">
                <div className="text-2xl mb-2">📍</div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  Location
                </h4>
                <p className="text-sm text-muted">Gilgit-Baltistan, Pakistan</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-6">
                <div className="text-2xl mb-2">📧</div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  Email
                </h4>
                <a
                  href="mailto:Info@makeistan.com?subject=Inquiry about Makeistan&body=Hello Makeistan team,%0D%0A%0D%0AI would like to learn more about your work and initiatives.%0D%0A%0D%0AThank you!"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-muted transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.75} />
                  Info@makeistan.com
                </a>
              </div>
              <div className="rounded-xl border border-border bg-background p-6">
                <div className="text-2xl mb-2">🌐</div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  Website
                </h4>
                <p className="text-sm text-muted">www.makeistan.com</p>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
