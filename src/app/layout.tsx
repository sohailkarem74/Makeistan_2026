import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingContactButton from "@/components/FloatingContactButton";
import { CartProvider } from "@/components/CartProvider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Makeistan Shop",
  description:
    "Tools, kits, and prototypes from the Makeistan makerspace in Gilgit Baltistan — robotics, AI, climate, and green energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased font-sans`}
      >
        <CartProvider>{children}</CartProvider>
        <FloatingContactButton />
        <Analytics />
      </body>
    </html>
  );
}
