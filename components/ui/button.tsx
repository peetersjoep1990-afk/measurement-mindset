import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex h-11 items-center justify-center whitespace-nowrap rounded-sm px-5 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-foreground bg-foreground text-background hover:border-primary hover:bg-primary hover:text-primary-foreground",
        outline: "border border-foreground/40 bg-transparent text-foreground hover:border-primary hover:text-primary",
        secondary: "border border-primary/70 bg-transparent text-foreground hover:bg-primary/10",
        ghost: "px-0 text-foreground hover:text-primary",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

type ButtonLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    children: React.ReactNode;
  };

function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, ButtonLink, buttonVariants };
