// Card.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card component
 *
 * - A flexible container component used for grouping content with consistent spacing and style.
 * - Includes `CardHeader` and `CardContent` subcomponents for structured layout.
 * - Fully accessible and compatible with `forwardRef` for better integration in forms or modals.
 *
 * Features:
 * - Rounded corners, soft borders, and subtle shadows for modern UI.
 * - Customizable via `className` prop.
 *
 * Example:
 * ```tsx
 * <Card>
 *   <CardHeader>Title</CardHeader>
 *   <CardContent>Body content here...</CardContent>
 * </Card>
 * ```
 */

// Root container of the Card
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// Header section — used for titles or main actions
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pb-0", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

// Content section — used for main text, forms, or visuals
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardContent };
