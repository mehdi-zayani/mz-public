// Separator.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Separator component
 *
 * - Provides a visual divider between sections or components.
 * - Can be used horizontally or vertically.
 * - Lightweight and accessible (`role="separator"` included).
 *
 * Props:
 * - `orientation`: "horizontal" | "vertical" — controls the direction of the separator (default: "horizontal").
 * - `className`: additional Tailwind classes for customization.
 *
 * Example:
 * ```tsx
 * <Separator className="my-4" /> // horizontal line
 * <Separator orientation="vertical" className="mx-2" /> // vertical line
 * ```
 */
export function Separator({
  className,
  orientation = "horizontal",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      role="separator"
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  );
}
