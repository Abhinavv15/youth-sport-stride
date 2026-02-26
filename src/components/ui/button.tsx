import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sport-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-sport-blue text-white shadow-md shadow-sport-blue/20 hover:shadow-lg hover:shadow-sport-blue/40 hover:-translate-y-0.5",
        destructive: "bg-sport-red text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline: "border-2 border-sport-blue text-sport-blue bg-transparent hover:bg-sport-blue hover:text-white hover:shadow-md hover:-translate-y-0.5",
        secondary: "bg-sport-yellow text-sport-blue font-bold shadow-md shadow-sport-yellow/20 hover:shadow-lg hover:shadow-sport-yellow/40 hover:-translate-y-0.5",
        ghost: "hover:bg-sport-blue/10 hover:text-sport-blue",
        link: "text-sport-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-2xl px-8 text-base",
        icon: "h-11 w-11",
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

export { Button, buttonVariants };
