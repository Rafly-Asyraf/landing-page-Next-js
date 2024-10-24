import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  " text-sm focus:ring-0 focus:outline-none ", 
  {
    variants: {
      variant: {
        default: "border-input bg-background text-foreground placeholder:text-muted-foreground",
        custom: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-950 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
        error: "border-red-500 bg-red-50 text-red-900",
        success: "border-green-500 bg-green-50 text-green-900",
      },
      ukuran: {
        sm: "h-8 text-sm px-2",
        md: "h-10 text-base px-3",
        lg: "h-12 text-lg px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      ukuran: "md",
    },
  }
)

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ukuran, ...props }, ref) => {
    return (
      <input
        className={cn(
          inputVariants({ variant, ukuran }), // Hanya gunakan variant dan size di sini
          className // className diterapkan secara terpisah
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input, inputVariants }
