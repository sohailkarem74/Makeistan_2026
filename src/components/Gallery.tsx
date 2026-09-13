"use client"

import * as React from "react"

// Images are read from the public/images/gallary folder at runtime by the
// server page and passed in as a prop. This keeps the source of truth on disk
// and ensures only files actually present are shown.

export function Gallery({ images = [] }: { images?: string[] }) {
    return (
        <section className="w-full py-24">
            <div className="mx-auto max-w-7xl px-4 mb-12 text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    Moments we've created together
                </h2>
            </div>

            {/* CSS columns give us true masonry: each image keeps its natural
                height, columns pack tightly, no fixed row heights, no empty
                gaps. break-inside-avoid prevents an image from being split
                across columns; mb-4 supplies the vertical gap inside a column
                while gap-4 supplies the horizontal gap between columns. */}
            <div className="mx-auto w-full max-w-6xl columns-1 gap-4 sm:columns-2 lg:columns-3">
                {(images || []).map((src, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        key={i}
                        src={src}
                        alt=""
                        loading="lazy"
                        className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl object-contain"
                    />
                ))}
            </div>
        </section>
    )
}

export default Gallery
