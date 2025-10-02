"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary backdrop-blur-sm mb-8 shadow-lg shadow-primary/20"
          >
            <Rocket className="h-4 w-4" />
            <span>Start building today</span>
            <Sparkles className="h-4 w-4" />
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="text-foreground">Ready to </span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              transform your video calls?
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams already using AI agents to make their meetings more productive and insightful.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 border-border hover:bg-accent bg-transparent transition-all duration-300"
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            No credit card required • Free 14-day trial • Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
