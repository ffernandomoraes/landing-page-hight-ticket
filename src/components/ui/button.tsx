import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn-icon-hover [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
        variant: {
          primary: 
            "bg-primary text-primary-foreground hover:bg-primary/90 btn-shadow-primary border-2 border-transparent",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/90 btn-shadow-secondary border-2 border-transparent",
          tertiary:
            "bg-muted text-foreground hover:bg-muted/80 hover:text-primary btn-shadow-tertiary border-2 border-border",
          outline:
            "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground btn-shadow-primary",
          ghost: 
            "text-foreground hover:bg-muted hover:text-primary transition-colors",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90 btn-shadow-primary border-2 border-transparent",
          hero: 
            "bg-gradient-to-r from-primary to-blue-600 text-primary-foreground hover:from-primary/90 hover:to-blue-600/90 btn-shadow-primary border-2 border-transparent",
          link: 
            "text-primary underline-offset-4 hover:underline p-0 h-auto",
        },
      size: {
        sm: "h-10 px-4 text-sm [&_svg]:size-4",
        default: "h-12 px-6 text-base [&_svg]:size-5", 
        lg: "h-14 px-8 text-lg [&_svg]:size-6",
        icon: "h-12 w-12 [&_svg]:size-5",
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
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && <span data-icon>{icon}</span>}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
