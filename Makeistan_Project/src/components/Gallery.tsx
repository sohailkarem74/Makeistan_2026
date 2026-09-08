"use client"

import * as React from "react"

// Images are read from the public/images/gallary folder at runtime by the
// server page and passed in as a prop. This keeps the source of truth on disk
// and ensures only files actually present are shown.
//
// Layout: true height-balanced masonry.
// 1. Probe every image off-screen to read its naturalWidth / naturalHeight.
// 2. Compute each image's rendered height at the column's pixel width.
// 3. Greedy shortest-column pass: place each image into whichever column has
//    the least total rendered height so far.
//
// This is NOT CSS columns — that fills top-to-bottom and ignores height
// balance. Here every image goes into the currently-shortest column, so all
// three columns end at roughly the same height.

const COLUMNS = 3

interface Probe {
    naturalWidth: number
    naturalHeight: number
}

function probeImage(src: string): Promise<Probe> {
    return new Promise((resolve) => {
        const img = new Image()
        img.onload = () =>
            resolve({
                naturalWidth: img.naturalWidth || 1,
                naturalHeight: img.naturalHeight || 1,
            })
        img.onerror = () => resolve({ naturalWidth: 1, naturalHeight: 1 })
        img.src = src
    })
}

export function Gallery({ images = [] }: { images?: string[] }) {
    const [placement, setPlacement] = React.useState<number[] | null>(null)

    React.useEffect(() => {
        const list = images || []
        if (list.length === 0) {
            setPlacement([])
            return
        }

        let cancelled = false
        Promise.all(list.map(probeImage)).then((probes) => {
            if (cancelled) return

            // We don't know the actual column pixel width at this point
            // (measured once DOM lays out), but every column will have the
            // same width. So the relative heights between images are
            // proportional to (naturalHeight / naturalWidth) — the inverse
            // aspect ratio. That's sufficient input to the shortest-column
            // algorithm; the final on-screen balance is the same regardless
            // of the actual column width, because width is shared.
            const totals = Array<number>(COLUMNS).fill(0)
            const assigned: number[] = new Array(list.length)

            for (let i = 0; i < list.length; i++) {
                let minCol = 0
                for (let c = 1; c < COLUMNS; c++) {
                    if (totals[c] < totals[minCol]) minCol = c
                }
                assigned[i] = minCol
                const { naturalWidth: w, naturalHeight: h } = probes[i]
                // Visual weight: height contributed if rendered at unit width.
                totals[minCol] += h / w
            }

            setPlacement(assigned)
        })

        return () => {
            cancelled = true
        }
    }, [images])

    // Group images by assigned column, preserving original within-column order.
    const grouped: string[][] = Array.from({ length: COLUMNS }, () => [])
    const list = images || []
    if (placement && placement.length === list.length) {
        list.forEach((src, i) => {
            grouped[placement[i]].push(src)
        })
    } else {
        // Pre-measurement placeholder: round-robin so the layout isn't blank
        // for the first frame.
        list.forEach((src, i) => {
            grouped[i % COLUMNS].push(src)
        })
    }

    return (
        <section className="w-full py-20">
            <div className="mx-auto max-w-7xl px-4 mb-12 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
                    Gallery
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    Moments we've created together
                </h2>
            </div>

            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {grouped.map((colImages, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-4">
                        {colImages.map((src) => (
                            <div key={src} className="overflow-hidden rounded-xl">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt=""
                                    loading="lazy"
                                    style={{ maxHeight: "500px" }}
                                    className="block h-auto w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
