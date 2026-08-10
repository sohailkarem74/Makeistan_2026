"use client"

import { LogoMarquee } from "@/components/ui/logo-marquee"

const partnerLogos = [
  { name: "Accelerate Prosperity", src: "/images/partners/partner-1.webp" },
  { name: "Rupani Academy", src: "/images/partners/partner-2.png" },
  { name: "Partner 3", src: "/images/partners/partner-3.png" },
  { name: "Karakoram International University", src: "/images/partners/partner-4.png" },
  { name: "LuckyOne", src: "/images/partners/partner-5.jpg" },
  { name: "Partner 6", src: "/images/partners/partner-6.jpg" },
]

export function OurPartners() {
  return <LogoMarquee logos={partnerLogos} title="Our Partners" speed={30} />
}

export default OurPartners