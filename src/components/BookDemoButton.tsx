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
  const [isSending, setIsSending] = useState(false);
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsOpen(false);
    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
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
            className="relative w-full max-w-7xl overflow-y-auto rounded-2xl border border-border bg-white pt-8 px-16 pb-16 text-sm text-foreground shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 rounded-full p-2 text-muted hover:bg-card hover:text-foreground transition-colors"
              aria-label="Close contact form"
            >
              <X className="h-5 w-5" />
            </button>

            <form onSubmit={handleSubmit} className="flex flex-col items-center text-sm text-foreground">
              <h1 id="book-demo-title" className="text-4xl font-bold pt-0 pb-16 text-center tracking-tight">
                Let&apos;s Get In Touch.
              </h1>

              <div className="max-w-4xl w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <div className="flex flex-col">
                    <label htmlFor="demo-name" className="text-base font-medium">
                      Full Name
                    </label>
                    <div className="flex items-center mt-2 mb-8 h-14 pl-4 border border-border rounded-full focus-within:ring-2 focus-within:ring-brand/40 transition-all overflow-hidden bg-transparent">
                      <Mail className="h-6 w-6 text-muted" strokeWidth={1.75} />
                      <input
                        id="demo-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                        className="h-full px-3 w-full outline-none bg-transparent text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="demo-email" className="text-base font-medium">
                      Email Address
                    </label>
                    <div className="flex items-center mt-2 mb-8 h-14 pl-4 border border-border rounded-full focus-within:ring-2 focus-within:ring-brand/40 transition-all overflow-hidden bg-transparent">
                      <Mail className="h-6 w-6 text-muted" strokeWidth={1.75} />
                      <input
                        id="demo-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                        className="h-full px-3 w-full outline-none bg-transparent text-lg"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                </div>

                <label htmlFor="demo-message" className="text-base font-medium mt-10">
                  Message
                </label>
                <textarea
                  id="demo-message"
                  required
                  rows={10}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  className="w-full mt-2 p-4 bg-transparent border border-border rounded-lg resize-none outline-none focus:ring-2 focus:ring-brand/40 transition-all min-h-[300px] text-lg"
                  placeholder="Enter your message"
                ></textarea>

                <div className="flex justify-center mt-10">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="bg-brand hover:bg-brand-strong text-white py-2 px-8 rounded-full transition font-bold text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
