"use client"

import { Video, FileText, MessageSquare, Zap, Shield, Clock, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: Video,
    title: "Real-time AI Video Calls",
    description: "Connect with custom AI agents in high-quality video calls with zero latency.",
  },
  {
    icon: FileText,
    title: "Instant Transcripts",
    description: "Automatic transcription with speaker identification and searchable content.",
  },
  {
    icon: MessageSquare,
    title: "Context-Aware AI Chat",
    description: "Post-call AI assistant that understands your meeting context and answers questions.",
  },
  {
    icon: Zap,
    title: "Custom Agent Roles",
    description: "Create specialized AI agents with unique personalities and expertise areas.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption and compliance with SOC 2 and GDPR standards.",
  },
  {
    icon: Clock,
    title: "Meeting Summaries",
    description: "AI-generated summaries with action items and key takeaways delivered instantly.",
  },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
      >
        <Icon className="h-6 w-6" />
      </motion.div>
      <h3 className="mt-4 text-lg font-semibold text-card-foreground">{feature.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Features</span>
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            <span className="text-foreground">Everything you need for </span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              intelligent collaboration
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            Powerful features that transform how you work with AI agents
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
