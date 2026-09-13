"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function useCountUp(target: number, startOnView = false) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;
    const duration = 900;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf.current = requestAnimationFrame(step);
    };
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target]);

  return [value, setValue] as const;
}

export default function Stats() {
  const prefersReduced = useReducedMotion();
  const stats = [
    { label: "Schools served", value: 120 },
    { label: "Students impacted", value: 4500 },
    { label: "Projects built", value: 860 },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto sm:grid-cols-3">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            className="rounded-lg bg-card p-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            <StatNumber to={s.value} />
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StatNumber({ to }: { to: number }) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    let rafId: number | null = null;
    let start: number | null = null;
    const duration = 900;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const cur = Math.floor(progress * to);
      setValue(cur);
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          rafId = requestAnimationFrame(step);
        }
      });
    };

    const io = new IntersectionObserver(onIntersect, { threshold: 0.6 });
    const el = document.getElementById(`stat-${to}`);
    if (el) io.observe(el);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      io.disconnect();
    };
  }, [to]);

  return (
    <div id={`stat-${to}`} className="text-2xl md:text-3xl font-semibold text-foreground">
      {value.toLocaleString()}
    </div>
  );
}
