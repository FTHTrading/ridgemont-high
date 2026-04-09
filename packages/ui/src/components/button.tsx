import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-ridgemont-neonMagenta-500 text-white hover:bg-ridgemont-neonMagenta-600 shadow-neon-magenta hover:shadow-none focus-visible:ring-ridgemont-neonMagenta-400",
        secondary:
          "bg-ridgemont-electricBlue-500 text-white hover:bg-ridgemont-electricBlue-600 shadow-neon-blue hover:shadow-none focus-visible:ring-ridgemont-electricBlue-400",
        accent:
          "bg-ridgemont-warmGold-500 text-ridgemont-offBlack-900 hover:bg-ridgemont-warmGold-600 focus-visible:ring-ridgemont-warmGold-400",
        outline:
          "border-2 border-ridgemont-cassetteGray-400 bg-transparent text-ridgemont-cassetteGray-50 hover:bg-ridgemont-cassetteGray-700 hover:border-ridgemont-electricBlue-400",
        ghost:
          "bg-transparent text-ridgemont-cassetteGray-200 hover:bg-ridgemont-cassetteGray-700 hover:text-white",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
        link: "text-ridgemont-electricBlue-400 underline-offset-4 hover:underline bg-transparent",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
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
