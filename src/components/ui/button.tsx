import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground hover:shadow-[0_0_0_1px_rgba(255,212,0,0.25),0_20px_50px_-15px_rgba(255,212,0,0.55)] hover:-translate-y-0.5",
        outline:
          "border border-border-strong text-foreground hover:border-accent/60 hover:bg-white/[0.04] hover:-translate-y-0.5",
        ghost: "text-foreground hover:bg-white/[0.06]",
        glass: "glass text-foreground hover:border-accent/40 hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-[13px]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
