"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const galleryImages = [
    { src: "/images/gallary/_DSC6602.JPG" },
    { src: "/images/gallary/_DSC6640.JPG" },
    { src: "/images/gallary/_DSC6640 (1).JPG" },
    { src: "/images/gallary/_DSC6644.JPG" },
    { src: "/images/gallary/_DSC6649.JPG" },
    { src: "/images/gallary/_DSC6654.JPG" },
    { src: "/images/gallary/_DSC6808.jpg" },
    { src: "/images/gallary/_DSC6903.jpg" },
    { src: "/images/gallary/_DSC6912.jpg" },
    { src: "/images/gallary/E1.jpeg" },
    { src: "/images/gallary/E2.jpeg" },
    { src: "/images/gallary/E3.jpeg" },
    { src: "/images/gallary/E4.jpeg" },
    { src: "/images/gallary/home1.JPG" },
    { src: "/images/gallary/K1.jpg" },
    { src: "/images/gallary/K2.jpeg" },
    { src: "/images/gallary/K3.jpg" },
    { src: "/images/gallary/WhatsApp Image 2026-07-28 at 3.49.50 PM.jpeg" },
    { src: "/images/gallary/WhatsApp Image 2026-08-03 at 10.43.56 AM.jpeg" },
    { src: "/images/gallary/WhatsApp Image 2026-08-03 at 10.43.56 AM (1).jpeg" },
    { src: "/images/gallary/WhatsApp Image 2026-08-03 at 10.44.00 AM.jpeg" },
    { src: "/images/gallary/WhatsApp Image 2026-08-03 at 10.44.01 AM.jpeg" },
    { src: "/images/gallary/WhatsApp Image 2026-08-03 at 10.44.01 AM (1).jpeg" },
    { src: "/images/gallary/WhatsApp Image 2026-08-03 at 10.44.02 AM.jpeg" },
    { src: "/images/gallary/WhatsApp Image 2026-08-03 at 10.44.02 AM (1).jpeg" },
    { src: "/images/gallary/WhatsApp Image 2026-08-03 at 10.44.03 AM.jpeg" },
    { src: "/images/gallary/WhatsApp Image 2026-08-03 at 10.44.03 AM (1).jpeg" },
    { src: "/images/gallary/WhatsApp Image 2026-08-03 at 10.44.04 AM.jpeg" },
]

// Stable default ratio per image (used before the photo loads, or if it fails).
// Each card sizes itself to the photo's natural aspect ratio once loaded, so
// no cropping happens — the whole picture is always visible.
function defaultRatioForIndex(i: number): number {
    return i % 2 === 0 ? 3 / 4 : 4 / 3
}

export function ImageGallery() {
    // Distribute images into 3 columns roughly evenly.
    const columns: { src: string; key: string }[][] = [[], [], []]
    galleryImages.forEach((img, i) => {
        columns[i % 3].push({ src: img.src, key: `${i}-${img.src}` })
    })

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center py-10 px-4">
            <div className="mx-auto w-full max-w-7xl mb-16 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
                    Gallery
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    Moments we've created together
                </h2>
            </div>

            <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {columns.map((col, colIdx) => (
                    <div key={colIdx} className="grid gap-6 auto-rows-min">
                        {col.map((item, index) => {
                            const globalIndex = colIdx + index * 3
                            return (
                                <AnimatedImage
                                    key={item.key}
                                    alt={`Gallery image ${item.key}`}
                                    src={item.src}
                                    defaultRatio={defaultRatioForIndex(globalIndex)}
                                />
                            )
                        })}
                    </div>
                ))}
            </div>
        </section>
    )
}

interface AnimatedImageProps {
    alt: string
    src: string
    className?: string
    placeholder?: string
    defaultRatio: number
}

function AnimatedImage({ alt, src, defaultRatio, placeholder }: AnimatedImageProps) {
    const ref = React.useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, { once: true })
    const [isLoading, setIsLoading] = React.useState(true)
    const [imgSrc, setImgSrc] = React.useState(src)
    // Each card sizes itself to the photo's natural aspect ratio so the whole
    // image is shown — no cropping, ever.
    const [ratio, setRatio] = React.useState(defaultRatio)

    const handleError = () => {
        if (placeholder) setImgSrc(placeholder)
    }

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget
        if (img.naturalWidth && img.naturalHeight) {
            setRatio(img.naturalWidth / img.naturalHeight)
        }
        setIsLoading(false)
    }

    return (
        <AspectRatio
            ref={ref}
            ratio={ratio}
            // Subtle background fills the brief moment before the image loads
            // and any micro-letterboxing during ratio transitions.
            className="bg-muted relative size-full overflow-hidden rounded-lg border border-border"
        >
            <img
                alt={alt}
                src={imgSrc}
                // object-contain shows the whole picture inside the frame.
                // Because the frame's aspect ratio is set from naturalWidth /
                // naturalHeight, the image fits edge-to-edge with no crop.
                className={cn(
                    "mx-auto h-auto w-auto max-h-full max-w-full rounded-lg object-contain opacity-0 transition-opacity duration-1000 ease-in-out",
                    isInView && !isLoading && "opacity-100",
                )}
                onLoad={handleLoad}
                loading="lazy"
                onError={handleError}
            />
        </AspectRatio>
    )
}

export default ImageGallery
