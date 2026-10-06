"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail, Send, ArrowLeft } from "lucide-react";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [previousPage, setPreviousPage] = useState("/");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const router = useRouter();

  useEffect(() => {
    setPreviousPage(window.location.pathname);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:Info@makeistan.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
    setIsOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => {
          setPreviousPage(window.location.pathname);
          setIsOpen(true);
        }}
        className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-header text-brand-foreground shadow-lg hover:bg-brand-header-strong transition-colors"
        aria-label="Contact Us"
      >
        <Mail className="h-5 w-5" strokeWidth={1.75} />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl">
            <div className="flex items-center p-6 border-b border-border">
              <button
                onClick={() => {
                  setIsOpen(false);
                  router.push(previousPage);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1.5 text-xs font-medium text-brand-foreground transition-colors hover:bg-brand-strong"
                aria-label="Go back"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
                Back
              </button>
              <h2 className="flex-1 text-center text-lg font-semibold text-foreground">
                Contact Us
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-card transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
                >
                  <Send className="h-4 w-4" strokeWidth={1.75} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
