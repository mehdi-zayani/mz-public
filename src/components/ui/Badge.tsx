// Badge.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge component
 *
 * - A small, styled UI element used to display status, categories, or labels.
 * - Built with `class-variance-authority` (CVA) for easily configurable style variants.
 *
 * Features:
 * - Supports `default`, `secondary`, and `outline` variants.
 * - Accepts custom `className` for style extension.
 * - Accessible with focus and ring states.
 *
 * Usage:
 * ```tsx
 * <Badge>Default</Badge>
 * <Badge variant="secondary">Muted</Badge>
 * <Badge variant="outline">Outline</Badge>
 * ```
 */

// Defines base classes and variant-specific styles
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent",
        secondary:
          "bg-muted text-muted-foreground hover:bg-muted/70 border-transparent",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Defines Badge props, extending HTML div attributes and CVA variant options
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

// Functional component returning a styled <div> based on variant and props
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
