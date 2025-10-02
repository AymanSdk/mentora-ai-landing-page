"use client"

import { UserPlus, Video, FileSearch, Workflow } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    icon: UserPlus,
    title: "Create Your AI Agent",
    description:
      "Customize your AI agent with specific roles, expertise, and personality traits. Define how they communicate and what they know.",
    image: "/ai-agent-customization-interface-with-role-setting.jpg",
  },
  {
    icon: Video,
    title: "Start a Video Call",
    description:
      "Launch real-time video calls with your AI agents. Experience natural conversations with intelligent responses and visual engagement.",
    image: "/video-call-interface-with-ai-agent-avatar.jpg",
  },
  {
    icon: FileSearch,
    title: "Access Full Insights",
    description:
      "Review complete transcripts, watch playback, and chat with AI about your meeting. Get summaries and action items automatically.",
    image: "/meeting-transcript-and-ai-chat-interface.jpg",
  },
]

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`flex flex-col gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center`}
    >
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold shadow-lg shadow-primary/30"
          >
            {index + 1}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
          >
            <Icon className="h-6 w-6" />
          </motion.div>
        </div>
        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
        <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
      </div>

      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative rounded-xl border border-border bg-card p-2 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-300"
        >
          <div className="aspect-video rounded-lg bg-muted overflow-hidden">
            <Image
              src={step.image || "/placeholder.svg"}
              alt={step.title}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-accent/30">
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
            <Workflow className="h-3.5 w-3.5" />
            <span>Simple Process</span>
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              How it works
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            Get started in three simple steps and transform your workflow
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-5xl space-y-20">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
