import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingContactButton from "@/components/FloatingContactButton";
import { CartProvider } from "@/components/CartProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} bg-background text-foreground antialiased font-sans`}
      >
        <CartProvider>{children}</CartProvider>
        <FloatingContactButton />
        <Analytics />
      </body>
    </html>
  );
}
