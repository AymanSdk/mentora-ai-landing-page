"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, Users, Video, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background/95 to-background" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm mb-8 group hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>Trusted by 10,000+ teams worldwide</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl text-balance"
          >
            <span className="block text-foreground">Build AI Agents.</span>
            <span className="block bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent mt-2">
              Call Smarter.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            Create custom AI agents and collaborate in real-time video calls with intelligent transcripts and post-call
            insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="group relative bg-primary text-primary-foreground hover:bg-primary/90 text-base px-10 h-14 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group text-base px-10 h-14 border-border/50 hover:bg-accent/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:shadow-lg"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { icon: Users, label: "Active Users", value: "50K+" },
              { icon: Video, label: "Calls Daily", value: "100K+" },
              { icon: Zap, label: "AI Agents", value: "1M+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center gap-2 group cursor-default"
              >
                <stat.icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 sm:mt-24"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Main container */}
              <div className="relative rounded-2xl border border-border/50 bg-gradient-to-b from-card/80 to-card/40 p-3 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:border-primary/40">
                <div className="aspect-video rounded-xl bg-muted overflow-hidden ring-1 ring-border/50">
                  <Image
                    src="/modern-ai-video-call-interface-with-multiple-parti.jpg"
                    alt="AI Video Call Interface"
                    width={1400}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                </div>

                {/* Floating UI elements overlay */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute top-8 left-8 bg-background/95 backdrop-blur-xl border border-border/50 rounded-lg px-4 py-2 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">AI Agent Active</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute top-8 right-8 bg-background/95 backdrop-blur-xl border border-border/50 rounded-lg px-4 py-2 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Live Transcription</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 sm:mt-32"
        >
          <p className="text-center text-sm font-medium text-muted-foreground/80 mb-10 tracking-wide uppercase">
            Powering teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16">
            {["Acme Corp", "TechStart", "InnovateLab", "FutureAI", "CloudSync"].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="relative group cursor-default"
              >
                <div className="text-xl font-bold text-foreground/60 group-hover:text-foreground transition-all duration-300 group-hover:scale-110">
                  {company}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
