import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background shadow-md border-2 border-foreground/80 hover:shadow-xl hover:shadow-foreground/20 hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md border-2 border-destructive/80 hover:shadow-xl hover:shadow-destructive/30 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border-2 border-border bg-background hover:border-foreground hover:text-foreground hover:bg-foreground/5 hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-muted text-muted-foreground shadow-sm border-2 border-border hover:shadow-lg hover:border-foreground/30 hover:text-foreground hover:-translate-y-0.5 hover:bg-muted/80 active:translate-y-0",
        ghost: "border-2 border-transparent hover:border-foreground/30 hover:bg-foreground/10 hover:text-foreground hover:-translate-y-0.5 active:translate-y-0",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
