import * as React from "react"

import { cn } from "@/src/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-8 2xl:h-10 w-full rounded-md border border-[#C1C1C1] bg-transparent px-3 py-2 text-xs ring-offset-[#C1C1C1] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#C1C1C1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }