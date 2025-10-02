"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-9 w-16 rounded-full bg-muted" />
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-9 w-16 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 transition-colors hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute inset-0.5 w-8 rounded-full bg-gradient-to-br from-primary/90 to-primary shadow-lg"
        initial={false}
        animate={{
          x: isDark ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0.7 : 1,
            opacity: isDark ? 0.4 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="h-4 w-4 text-background" />
        </motion.div>
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0.7,
            opacity: isDark ? 1 : 0.4,
          }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="h-4 w-4 text-background" />
        </motion.div>
      </div>

      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
