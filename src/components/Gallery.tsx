"use client"

import * as React from "react"
import { LayoutGrid } from "@/components/ui/layout-grid"

// Images are read from the public/images/gallary folder at runtime by the
// server page and passed in as a prop. This keeps the source of truth on disk
// and ensures only files actually present are shown.

// Bento pattern from the original UI: [2-col, 1-col, 1-col] repeated. With 28
// images that's 7 full rows, then a final 2-col + 1-col row to use the last 3.
const colSpanPattern = [
    "md:col-span-2",
    "col-span-1",
    "col-span-1",
] as const

const captions = [
    "Inside the Robotics Lab",
    "Workshops in Action",
    "Energy Lab",
    "Climate Lab",
    "Building Together",
    "From the Community",
    "School Visits",
    "Demo Days",
    "Tooling & Prototyping",
    "Field Work",
    "Team Moments",
    "Classroom Sessions",
    "Community Meetups",
    "Hands-on Learning",
]

function makeCaption(i: number, src: string) {
    const title = captions[i % captions.length]
    return {
        title,
        description:
            "Moments captured across the Makeistan makerspace — students, mentors, and the work that brings ideas to life.",
    }
}

const Skeleton = ({ title, description }: { title: string; description: string }) => (
    <div>
        <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            {description}
        </p>
    </div>
)

export function Gallery({ images = [] }: { images?: string[] }) {
    const cards = (images || []).map((src, i) => {
        const className = colSpanPattern[i % colSpanPattern.length]
        const { title, description } = makeCaption(i, src)
        return {
            id: i + 1,
            content: <Skeleton title={title} description={description} />,
            className,
            thumbnail: src,
        }
    })

    return (
        <section className="w-full py-20">
            <div className="mx-auto max-w-7xl px-4 mb-12 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
                    Gallery
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    Moments weve created togather
                </h2>
            </div>

            <div className="w-full">
                <LayoutGrid cards={cards} />
            </div>
        </section>
    )
}

export default Gallery
