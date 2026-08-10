"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/components/CartProvider";
import { categories, products } from "@/data/products";

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
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart, cartCount } = useCart();
  const prefersReducedMotion = useReducedMotion();

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        query === "" ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const motionInitial = prefersReducedMotion ? false : "hidden";
  const motionAnimate = prefersReducedMotion ? undefined : "show";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={motionInitial}
            animate={motionAnimate}
            variants={containerVariants}
            className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <motion.p
                variants={itemVariants}
                className="text-xs font-medium uppercase tracking-[0.2em] text-muted"
              >
                Shop
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                Tools, kits, and prototypes for your next build.
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-5 max-w-xl text-base leading-relaxed text-muted"
              >
                Curated hardware from the Makeistan makerspace — built and tested in our climate, energy, and robotics labs.
              </motion.p>
            </div>

            <motion.div variants={itemVariants}>
              <Link
                href="/cart"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                <span>View Cart</span>
                {cartCount > 0 && (
                  <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-foreground/20 px-1.5 text-xs font-semibold">
                    {cartCount}
                  </span>
                )}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={motionInitial}
            animate={motionAnimate}
            variants={containerVariants}
            className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="relative w-full max-w-xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted">
                <Search className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search products, categories, or features"
                aria-label="Search products"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 pl-11 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background text-muted hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-xl border border-border bg-card py-24 text-center">
              <p className="text-sm font-medium text-foreground">No products match your search.</p>
              <p className="mt-2 text-sm text-muted">Try a different category or clear the search.</p>
            </div>
          ) : (
            <motion.div
              initial={motionInitial}
              animate={motionAnimate}
              variants={containerVariants}
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filteredProducts.map((product) => (
                <motion.article
                  key={product.id}
                  variants={itemVariants}
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors hover:border-foreground/30"
                >
                  <Link href="/cart" onClick={() => addToCart(product)} className="block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-card">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                        {product.category}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {formatPrice(product.price)}
                      </p>
                    </div>

                    <h2 className="text-base font-medium text-foreground">{product.name}</h2>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
                      {product.description}
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
                      >
                        Add to Cart
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </button>
                      <Link
                        href="/cart"
                        onClick={() => addToCart(product)}
                        className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                      >
                        Buy
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
