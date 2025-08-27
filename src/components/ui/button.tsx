import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:size-4 [&_svg]:shrink-0 hover:[&_svg]:scale-110",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary-hover",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-secondary-hover",
        tertiary: "bg-transparent text-muted-foreground hover:bg-primary hover:text-primary-foreground shadow-tertiary-hover",
        outline: "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground shadow-outline-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        white: "bg-transparent text-white border border-white hover:bg-secondary hover:text-secondary-foreground hover:border-secondary shadow-outline-hover",
        hero: "bg-gradient-cta text-primary-foreground hover:opacity-90 transition-opacity shadow-lg",
      },
      size: {
        default: "min-h-[42px] px-6 py-3",
        sm: "min-h-[42px] px-4 py-2 text-sm",
        lg: "min-h-[42px] px-8 py-4 text-base",
        icon: "min-h-[42px] w-[42px]",
      },
    },
    defaultVariants: {
      variant: "primary",
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
