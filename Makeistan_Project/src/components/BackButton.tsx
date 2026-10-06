"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className = "" }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`fixed top-24 left-6 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:border-foreground transition-colors shadow-md ${className}`}
      aria-label="Go back"
    >
      <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
      Back
    </button>
  );
}
