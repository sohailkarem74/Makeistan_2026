"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  href: string;
  tone: "blue" | "purple" | "amber" | "orange" | "pink" | "green" | "teal" | "indigo";
  badge: string;
  isFounder?: boolean;
}

const founder: TeamMember = {
  name: "Ehsam Ullah Baig",
  role: "CEO & Founder",
  image: "/images/team/ehsam.jpg",
  href: "https://www.linkedin.com/in/ehsamullahbaig",
  tone: "blue",
  badge: "CEO",
  isFounder: true,
  bio: `"I've never believed that innovation belongs only in labs or big tech hubs. I believe it starts wherever someone dares to ask, 'What if we built something better?' That belief sparked Makeistan not as a typical startup, but as a space for young minds to explore, build, and create solutions that truly matter. Over the years, this journey has taken me into clean energy, climate tech, smart agriculture, and real world education across Pakistan. I'm still learning every step of the way. But I'm driven by the idea that meaningful change doesn't need to be massive it just needs to be made."`,
};

const members: TeamMember[] = [
  {
    name: "Sohail Karim",
    role: "Data Science Student | GIKI Institute",
    image: "/images/team/sohail.jpg",
    href: "https://www.linkedin.com/in/sohail-karim-a7902a200",
    tone: "purple",
    badge: "Team Member",
    bio: `"I've always been curious about how technology can make life better. Lately, I've been diving into the world of AI and machine learning. It's all new to me, but I'm genuinely excited to learn and grow. Being part of Makeistan gives me the chance to explore these areas, contribute to real projects, and turn my interest into something meaningful."`,
  },
  {
    name: "Ajmal Yaqoob",
    role: "Electrical Engineer | Power Systems & Renewable Energy",
    image: "/images/team/ajmal.png",
    href: "https://www.linkedin.com/in/ajmal-yaqoob-47485b267?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5EdjoEXeTy262vEWw0yTIw%3D%3D",
    tone: "amber",
    badge: "Team Member",
    bio: `"I am an Electrical Engineer specializing in power systems, renewable energy, and innovative electrical design. I have proven expertise in leading projects from concept to execution with precision and efficiency. I am skilled in MATLAB, Simulink, and advanced simulation tools for performance optimization. I am dedicated to delivering reliable, sustainable, and high-impact engineering solutions."`,
  },
  {
    name: "Yazdan Ali Khan",
    role: "Electrical Engineering Student | GIKI Institute",
    image: "/images/team/yazdan.jpg",
    href: "https://www.linkedin.com/in/yazdan-ali-khan-9525742ba/",
    tone: "orange",
    badge: "Team Member",
    bio: `"I humbly attempt within my best efforts to design, build, and innovate with a focus on real-world application. As an electrical engineering student, I'm passionate about creating smart, efficient, and sustainable systems that solve problems and drive progress."`,
  },
  {
    name: "Malaika Mashroof Khan",
    role: "Electrical Engineering Student | Purpose-Driven Innovator",
    image: "/images/team/malaika.jpg",
    href: "https://www.linkedin.com/in/malayika-mashroof-a5917029b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPCELj%2FbYRZi3X77Exkt9pg%3D%3D",
    tone: "pink",
    badge: "Team Member",
    bio: `"With every circuit I design and every system I build, I aim to bring ideas to life. I'm passionate about applying technology to solve real-world challenges — smart, scalable, and sustainable."`,
  },
  {
    name: "Natasha Mehmood",
    role: "Team Member – Entrepreneurship, Makeistan",
    image: "/images/team/natasha.jpg",
    href: "https://www.linkedin.com/in/natasha-m-36279892?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bo23F9ingS%2Ba%2BQnR1YR78uQ%3D%3D",
    tone: "green",
    badge: "Team Member",
    bio: `"I lead the entrepreneurship vertical at Makeistan, where I work to nurture innovation, creativity, and problem-solving among youth through STEM and maker-centered education. I design programs that equip young changemakers with the tools, mindset, and mentorship to turn ideas into impactful ventures. Committed to inclusive growth, I am driving a movement that connects education, entrepreneurship, and hands-on learning to build a resilient and future-ready generation."`,
  },
  {
    name: "Nisha",
    role: "Mechanical Engineering Graduate | GIKI Institute",
    image: "/images/team/nishajpg.jpg",
    href: "https://www.linkedin.com/in/nisha-sher-675865187?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bz12K6keTQTao8SExLnZxkg%3D%3D",
    tone: "teal",
    badge: "Team Member",
    bio: `"I graduated in Mechanical Engineering from GIKI, where I worked on projects ranging from an alternate motion-controlled wheelchair for quadriplegics to electric vehicle systems and other mechanical design innovations. Alongside my core engineering work, I've also explored machine learning and deep learning, applying them to create smarter, more adaptive technologies. Pakistan's first collaborative makerspace feels like the perfect space to combine these skills, collaborate with a creative community, and help ideas grow into real-world impact."`,
  },
  {
    name: "Mohsin",
    role: "Computer Engineering Graduate | COMSATS Islamabad",
    image: "/images/team/mohsin.jpg",
    href: "https://www.linkedin.com/in/mohsin-aziz-41a805290?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsTEeAMpMSX2CQZ3QlVzeEQ%3D%3D",
    tone: "indigo",
    badge: "Team Member",
    bio: `"I am a Computer Engineering graduate from COMSATS University Islamabad with a deep passion for technology, innovation, and problem-solving. With a strong foundation in both hardware and software systems, I focus on developing efficient, reliable, and scalable solutions. My academic background and hands-on project experience have equipped me with skills in programming, embedded systems, IoT applications, and system optimization. I'm driven by a curiosity to explore emerging technologies and a strong commitment to delivering impactful results, which I believe makes me a valuable contributor to any tech-driven initiative."`,
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article
      data-tone={member.tone}
      className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/30 flex flex-col"
    >
      <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover"
        />
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full surface px-2.5 py-0.5 text-[10px] font-medium tone-text border tone-border">
          {member.badge}
        </span>
      </div>
      <h3 className="mt-3 text-center text-base font-semibold text-foreground">
        {member.name}
      </h3>
      <p className="text-center text-xs font-medium tone-text mb-3">
        {member.role}
      </p>
      <p className="text-xs leading-relaxed text-muted text-center flex-1">
        {member.bio}
      </p>
      <a
        href={member.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex h-8 w-8 self-center items-center justify-center rounded-full border border-border text-foreground hover:border-foreground transition-colors"
        title={`${member.name} on LinkedIn`}
        aria-label={`${member.name} on LinkedIn`}
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <BackButton />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Team
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Meet our Leadership & Team
            </h1>
            <p className="mt-3 text-lg text-muted">
              Innovators Behind Makeistan
            </p>
            <p className="mt-3 text-sm text-muted max-w-2xl mx-auto">
              Brilliant minds united by a shared mission: transforming education
              through hands-on innovation and empowering the next generation of
              creators.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          {/* Founder */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-md">
              <TeamCard member={founder} />
            </div>
          </div>

          {/* Core Team */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Our Core Team
            </h2>
            <p className="mt-2 text-sm text-muted">
              The dedicated professionals making our vision a reality
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* CTA */}
          <section className="mt-20 text-center">
            <div className="rounded-2xl border border-border bg-card p-10">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Ready to Make Impact?
              </h3>
              <p className="text-sm text-muted mb-6 max-w-2xl mx-auto">
                Join a team where your creativity shapes the future. Together,
                we&apos;re building more than projects—we&apos;re cultivating
                tomorrow&apos;s innovators.
              </p>
              <a
                href="mailto:Info@makeistan.com"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
              >
                Get In Touch
              </a>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
