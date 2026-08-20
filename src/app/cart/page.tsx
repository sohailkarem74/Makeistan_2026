"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Minus, Plus, X } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/components/CartProvider";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const formatPrice = (value: number) =>
  `PKR ${new Intl.NumberFormat("en-PK", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)}`;

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const prefersReducedMotion = useReducedMotion();

  const motionInitial = prefersReducedMotion ? false : "hidden";
  const motionAnimate = prefersReducedMotion ? undefined : "show";

  const subtotal = cartTotal;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={motionInitial}
            animate={motionAnimate}
            variants={containerVariants}
            className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <motion.p
                variants={itemVariants}
                className="text-xs font-medium uppercase tracking-[0.2em] text-muted"
              >
                Cart
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
              >
                {cartItems.length === 0 ? "Your cart is empty" : "Your selected gear"}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-4 max-w-xl text-base leading-relaxed text-muted"
              >
                Review your items, adjust quantities, and proceed to checkout.
              </motion.p>
            </div>

            <motion.div variants={itemVariants}>
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted"
              >
                <span>Continue Shopping</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>

          {cartItems.length === 0 ? (
            <motion.div
              initial={motionInitial}
              animate={motionAnimate}
              variants={itemVariants}
              className="rounded-xl border border-border bg-card py-24 text-center"
            >
              <p className="text-sm font-medium text-foreground">Nothing here yet.</p>
              <p className="mt-2 text-sm text-muted">
                Add tools or kits from the shop to get started.
              </p>
              <Link
                href="/shop"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
              >
                Browse Shop
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </motion.div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[1.6fr_0.8fr]">
              <motion.ul
                initial={motionInitial}
                animate={motionAnimate}
                variants={containerVariants}
                className="space-y-3"
              >
                {cartItems.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={itemVariants}
                    className="flex flex-col gap-4 rounded-xl border border-border bg-background p-4 sm:flex-row sm:items-center"
                  >
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-card">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                          {item.category}
                        </p>
                        <h3 className="mt-1 truncate text-base font-medium text-foreground">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted">
                          {formatPrice(item.price)} each
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="inline-flex items-center rounded-full border border-border">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="flex h-9 w-9 items-center justify-center text-foreground transition-colors hover:bg-card"
                            aria-label={`Decrease quantity for ${item.name}`}
                          >
                            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="min-w-8 text-center text-sm font-medium tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex h-9 w-9 items-center justify-center text-foreground transition-colors hover:bg-card"
                            aria-label={`Increase quantity for ${item.name}`}
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                        </div>

                        <p className="w-20 text-right text-sm font-medium text-foreground tabular-nums">
                          {formatPrice(item.price * item.quantity)}
                        </p>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-card hover:text-foreground"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <X className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.aside
                initial={motionInitial}
                animate={motionAnimate}
                variants={itemVariants}
                className="lg:sticky lg:top-32 lg:self-start"
              >
                <div className="rounded-xl border border-border bg-background p-6">
                  <h2 className="text-base font-medium text-foreground">Order Summary</h2>

                  <dl className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center justify-between text-muted">
                      <dt>Subtotal</dt>
                      <dd className="tabular-nums text-foreground">{formatPrice(subtotal)}</dd>
                    </div>
                    <div className="flex items-center justify-between text-muted">
                      <dt>Shipping</dt>
                      <dd className="text-foreground">Free</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-border pt-3 text-base font-medium">
                      <dt className="text-foreground">Total</dt>
                      <dd className="tabular-nums text-foreground">{formatPrice(total)}</dd>
                    </div>
                  </dl>

                  <button
                    type="button"
                    onClick={() =>
                      alert("Checkout is ready for integration with your payment provider.")
                    }
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
                  >
                    Checkout
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>

                  <p className="mt-4 text-xs text-muted">
                    This is a placeholder order summary for now.
                  </p>
                </div>
              </motion.aside>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
