"use client"

import { Button } from "@/components/ui/button"
import { Check, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const tiers = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small teams",
    features: ["5 AI agents", "100 minutes/month", "Basic transcripts", "Email support", "7-day history"],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing teams that need more",
    features: [
      "Unlimited AI agents",
      "500 minutes/month",
      "Advanced transcripts & summaries",
      "Priority support",
      "90-day history",
      "Custom agent training",
      "API access",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Unlimited minutes",
      "Dedicated support",
      "Unlimited history",
      "SSO & advanced security",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

function PricingCard({ tier, index }: { tier: (typeof tiers)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: tier.highlighted ? 0 : -8, scale: tier.highlighted ? 1 : 1.02 }}
      className={`relative rounded-xl border p-8 transition-all duration-300 ${
        tier.highlighted
          ? "border-primary bg-card shadow-lg shadow-primary/20 scale-105"
          : "border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
      }`}
    >
      {tier.highlighted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2"
        >
          <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/50">
            Most Popular
          </span>
        </motion.div>
      )}

      <div className="text-center">
        <h3 className="text-xl font-semibold text-card-foreground">{tier.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
        <div className="mt-6">
          <span className="text-4xl font-bold text-card-foreground">{tier.price}</span>
          {tier.price !== "Custom" && <span className="text-sm text-muted-foreground">/month</span>}
        </div>
      </div>

      <ul className="mt-8 space-y-3">
        {tier.features.map((feature, featureIndex) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
            className="flex items-start gap-3"
          >
            <Check className="h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          className={`mt-8 w-full transition-all duration-300 ${
            tier.highlighted
              ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {tier.cta}
        </Button>
      </motion.div>
    </motion.div>
  )
}

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-accent/30">
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
            <DollarSign className="h-3.5 w-3.5" />
            <span>Pricing</span>
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Simple, transparent pricing
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            Choose the plan that's right for your team and scale as you grow
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
