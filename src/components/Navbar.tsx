"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

interface DropdownItem {
  name: string;
  href: string;
  icon: string;
  title?: string;
  target?: string;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const { cartCount } = useCart();

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
      name: "Our Team",
      dropdown: [
        { name: "Our Team", href: "/team", icon: "👥", title: "About Team" },
      ],
    },
    {
      name: "Labs",
      dropdown: [
        { name: "Climate Innovation Lab", href: "/labs/climate", icon: "🌱" },
        { name: "Green Energy Lab", href: "/labs/energy", icon: "⚡" },
        { name: "Robotics & AI Lab", href: "/labs/robotics", icon: "🤖" },
      ],
    },
    { name: "Our Work", href: "/work" },
    { name: "Shop", href: "/shop" },
  ];

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className="fixed w-full bg-brand-header z-50 shadow-lg"
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto pl-1 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center h-20">
          {/* Logo — original ll logo, white on blue */}
          <div className="flex items-center h-full">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo/llogo.png"
                alt="MAKEISTAN"
                className="h-40 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 ml-auto">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (hoverTimeout) {
                    clearTimeout(hoverTimeout);
                    setHoverTimeout(null);
                  }
                  setActiveDropdown(item.name);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setActiveDropdown(null);
                  }, 150);
                  setHoverTimeout(timeout);
                }}
              >
                {item.dropdown ? (
                  <>
                    <button className="px-3 py-2 text-sm text-brand-foreground hover:text-white/80 font-medium transition-colors">
                      {item.name}
                    </button>
                    {activeDropdown === item.name && (
                      <div
                        className="absolute right-0 mt-1 w-64 rounded-lg bg-background border border-border shadow-2xl overflow-hidden"
                        onMouseEnter={() => {
                          if (hoverTimeout) {
                            clearTimeout(hoverTimeout);
                            setHoverTimeout(null);
                          }
                          setActiveDropdown(item.name);
                        }}
                        onMouseLeave={() => {
                          const timeout = setTimeout(() => {
                            setActiveDropdown(null);
                          }, 150);
                          setHoverTimeout(timeout);
                        }}
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              target={dropdownItem.target || "_self"}
                              title={dropdownItem.title || dropdownItem.name}
                              className="flex items-center px-4 py-3 text-sm text-foreground hover:bg-card transition-colors"
                            >
                              <span className="text-lg mr-3 opacity-70">
                                {dropdownItem.icon}
                              </span>
                              <span className="font-medium">{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className="px-3 py-2 text-sm text-brand-foreground hover:text-white/80 font-medium transition-colors inline-flex items-center gap-2"
                  >
                    {item.name}
                    {item.name === "Shop" && cartCount > 0 && (
                      <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-foreground text-brand px-1 text-[10px] font-semibold">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-foreground hover:text-white/80 transition-colors"
              aria-label="Open main menu"
            >
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-header-strong">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="px-3 py-2">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                      className="w-full text-left text-sm font-medium text-brand-foreground hover:text-white/80"
                    >
                      {item.name}
                    </button>
                    {activeDropdown === item.name && (
                      <div className="mt-2 pl-4 border-l border-white/20">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center py-2 text-sm text-brand-foreground/90 hover:text-brand-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="mr-2">{dropdownItem.icon}</span>
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className="block text-sm font-medium text-brand-foreground hover:text-white/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/cart"
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-brand-foreground hover:text-white/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Cart</span>
              <span className="rounded-full bg-brand-foreground text-brand px-2 py-0.5 text-xs font-semibold">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
