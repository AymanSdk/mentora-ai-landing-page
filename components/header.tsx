"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Video } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/60 bg-background/95 backdrop-blur-xl shadow-sm"
          : "border-border/40 bg-background/80 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-lg shadow-primary/30"
            >
              <Video className="h-5 w-5 text-primary-foreground" />
            </motion.div>
            <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              AgentCall
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#features", label: "Features" },
              { href: "#how-it-works", label: "How It Works" },
              { href: "#pricing", label: "Pricing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Log in
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
