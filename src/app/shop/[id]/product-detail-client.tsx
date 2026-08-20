"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/components/CartProvider";
import type { Product } from "@/data/products";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const formatPrice = (value: number) =>
  `PKR ${new Intl.NumberFormat("en-PK", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)}`;

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const prefersReducedMotion = useReducedMotion();
  const motionInitial = prefersReducedMotion ? false : "hidden";
  const motionAnimate = prefersReducedMotion ? undefined : "show";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div initial={motionInitial} animate={motionAnimate} variants={containerVariants} className="mb-10">
            <motion.p variants={itemVariants} className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Product Details
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              {product.name}
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {product.description}
            </motion.p>
          </motion.div>

          <motion.div
            initial={motionInitial}
            animate={motionAnimate}
            variants={containerVariants}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <motion.div variants={itemVariants} className="overflow-hidden rounded-2xl border border-border bg-background">
              <div className="relative aspect-[4/5] bg-card">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">{product.category}</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">{formatPrice(product.price)}</p>
                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                  >
                    Add to Cart
                  </button>
                  <Link
                    href="/cart"
                    onClick={() => addToCart(product)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
                  >
                    Buy
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-2xl border border-border bg-background p-6 sm:p-8">
              <div className="space-y-6">
                {product.detailSections?.map((section) => (
                  <div key={section.title} className="space-y-2">
                    <h2 className="text-base font-semibold text-foreground">{section.title}</h2>
                    <ul className="space-y-1 text-sm leading-relaxed text-muted">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
