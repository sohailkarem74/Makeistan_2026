"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Mail, Send, X } from "lucide-react";

type BookDemoButtonProps = {
  className: string;
  showArrow?: boolean;
};

export default function BookDemoButton({
  className,
  showArrow = false,
}: BookDemoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent("Book a Demo request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:Info@makeistan.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        Book a Demo
        {showArrow && <ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-demo-title"
            className="w-full max-w-lg overflow-y-auto rounded-3xl border border-border bg-background p-6 text-sm text-foreground shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-brand">
                  <Mail className="h-3.5 w-3.5" />
                  Contact Us
                </p>
                <h2 id="book-demo-title" className="mt-4 text-3xl font-semibold tracking-tight">
                  Let&apos;s get in touch.
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Tell us about your school, organization, or lab project and our team will get
                  back to you.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-muted hover:bg-card hover:text-foreground"
                aria-label="Close contact form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="demo-name" className="font-medium">
                  Full Name
                </label>
                <input
                  id="demo-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="mt-2 h-11 w-full rounded-full border border-border bg-transparent px-4 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="demo-email" className="font-medium">
                  Email Address
                </label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="mt-2 h-11 w-full rounded-full border border-border bg-transparent px-4 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="demo-message" className="font-medium">
                  Message
                </label>
                <textarea
                  id="demo-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  className="mt-2 w-full resize-none rounded-2xl border border-border bg-transparent p-4 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  placeholder="Tell us what you would like to explore..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand px-5 font-medium text-brand-foreground transition hover:bg-brand-strong"
              >
                Send Message
                <Send className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
