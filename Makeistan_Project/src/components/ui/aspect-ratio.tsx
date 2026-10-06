"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
    ratio: number
}

/**
 * AspectRatio — preserves a given width/height ratio for its child.
 * Pure CSS implementation (padding-bottom trick), no extra deps.
 */
export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
    ({ ratio, className, style, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                style={{ position: "relative", width: "100%", paddingBottom: `${100 / ratio}%`, ...style }}
                className={cn(className)}
                {...props}
            >
                <div className="absolute inset-0">{children}</div>
            </div>
        )
    },
)
AspectRatio.displayName = "AspectRatio"
