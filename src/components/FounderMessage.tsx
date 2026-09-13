import React from 'react';

export default function FounderMessage() {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Founder's Message</h2>
      </div>

      <div className="w-full max-w-md mx-auto rounded-2xl border border-border bg-card p-10 md:p-14 flex flex-col items-center text-center gap-8 min-h-[28rem]">
        <div className="flex-shrink-0">
          {/* Reuse existing team image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/team/ehsam.jpg"
            alt="Ehsam Ullah Baig — CEO & Founder"
            className="h-32 w-32 md:h-36 md:w-36 rounded-full object-cover border border-border"
          />
        </div>

        <div className="min-w-0 w-full">
          <h3 className="text-lg font-semibold text-foreground">Ehsam Ullah Baig</h3>
          <p className="text-sm font-medium tone-text mb-4">CEO &amp; Founder</p>

          <p className="text-base leading-relaxed text-muted max-w-prose mx-auto">
            "I've never believed that innovation belongs only in labs or big
            tech hubs. It starts wherever someone dares to ask, 'What if we built
            something better?' At Makeistan, we cultivate curiosity, hands-on
            learning, and practical solutions — from clean energy and climate
            tech to smart agriculture and education initiatives across
            Pakistan. Our goal is simple: empower young makers to turn ideas
            into meaningful impact. Join us on this journey — together we can
            create things that matter."
          </p>
        </div>
      </div>
    </section>
  );
}
