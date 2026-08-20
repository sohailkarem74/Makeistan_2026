"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import BookDemoButton from "@/components/BookDemoButton";

export default function HomeCta() {
  return (
    <section id="cta" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-brand text-brand-foreground px-6 py-12 sm:px-10 sm:py-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/85">
            Ready to Build Your AI &amp; Robotics Lab?
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build the future of education together.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-white/90">
            Whether you&apos;re a school, university, or educational organization, Makeistan
            can help you create an inspiring learning environment where students build,
            innovate, and lead the future.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <BookDemoButton
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground hover:bg-white/90 transition-colors min-w-44"
              showArrow
            >
            </BookDemoButton>
            <Link
              href="/team"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors min-w-44"
            >
              Talk to Our Team
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
