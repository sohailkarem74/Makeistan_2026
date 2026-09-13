"use client"

import Image from "next/image"

interface Logo {
  name: string
  src: string
}

interface LogoMarqueeProps {
  logos: Logo[]
  title?: string
  speed?: number // seconds for one full loop, lower = faster
}

export function LogoMarquee({
  logos,
  title = "Our Partners",
  speed = 30,
}: LogoMarqueeProps) {
  return (
    <div className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {title && (
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-center mb-20">
            {title}
          </h2>
        )}

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: `${speed}s` }}>
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center shrink-0 mx-8 md:mx-16"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={240}
                  height={120}
                  className="h-16 md:h-24 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoMarquee