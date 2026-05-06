import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full min-w-0 rounded-xl border-0 bg-muted/30 px-4 py-2 text-base text-foreground transition-all duration-300 outline-none backdrop-blur-sm",
        "placeholder:text-muted-foreground",
        "focus:bg-muted/50 focus:ring-2 focus:ring-primary/50",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "selection:bg-primary selection:text-primary-foreground",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
