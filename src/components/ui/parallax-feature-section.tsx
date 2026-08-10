"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export interface ParallaxFeature {
  id: number
  title: string
  description: string
  imageUrl: string
  reverse?: boolean
}

interface ParallaxScrollFeatureSectionProps {
  features: ParallaxFeature[]
  openerTitle?: string
  openerKicker?: string
  openerSubtitle?: string
}

function ParallaxRow({
  feature,
  index,
  total,
}: {
  feature: ParallaxFeature
  index: number
  total: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Parallax — image drifts slowly, text drifts faster (only used by image now)
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 0.96])
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  // Row-level entry/exit — drives the fade-in animation as the row scrolls into view
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0],
  )
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [40, 0, 0, -30],
  )

  // Stacking — newer rows visually sit above earlier ones
  const rowZ = total - index

  const reversed = !!feature.reverse

  return (
    <section
      ref={ref}
      className="relative h-[80vh] w-full"
      style={{ zIndex: rowZ }}
    >
      <div className="sticky top-0 flex h-[80vh] w-full items-center overflow-hidden">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className={`mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="flex justify-center lg:col-span-5">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="relative aspect-square w-full max-w-[420px] overflow-hidden shadow-md"
            >
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 420px"
                priority={index === 0}
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {feature.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {feature.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function ParallaxScrollFeatureSection({
  features,
  openerTitle,
  openerKicker,
  openerSubtitle,
}: ParallaxScrollFeatureSectionProps) {
  return (
    <div className="bg-background">
      {(openerTitle || openerKicker || openerSubtitle) && (
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          {openerKicker && (
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              {openerKicker}
            </p>
          )}
          {openerTitle && (
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {openerTitle}
            </h2>
          )}
          {openerSubtitle && (
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {openerSubtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-6">
        {features.map((feature, index) => (
          <ParallaxRow
            key={feature.id}
            feature={feature}
            index={index}
            total={features.length}
          />
        ))}
      </div>
    </div>
  )
}

export default ParallaxScrollFeatureSection