"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "AgentCall has transformed how our team collaborates. The AI agents are incredibly responsive and the transcripts save us hours every week.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "TechStart",
    rating: 5,
  },
  {
    quote:
      "The post-call AI chat is a game-changer. It's like having a meeting assistant that remembers everything and can answer any question.",
    author: "Michael Rodriguez",
    role: "Engineering Lead",
    company: "InnovateLab",
    rating: 5,
  },
  {
    quote:
      "We've reduced meeting follow-up time by 80%. The automatic summaries and action items are incredibly accurate.",
    author: "Emily Watson",
    role: "Operations Director",
    company: "FutureAI",
    rating: 5,
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.2, delay: index * 0.1 + i * 0.05 }}
          >
            <Star className="h-4 w-4 fill-primary text-primary" />
          </motion.div>
        ))}
      </div>
      <blockquote className="text-sm text-card-foreground leading-relaxed mb-4">
        "{testimonial.quote}"
      </blockquote>
      <div className="border-t border-border pt-4">
        <div className="font-semibold text-card-foreground">
          {testimonial.author}
        </div>
        <div className="text-sm text-muted-foreground">
          {testimonial.role} at {testimonial.company}
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-background">
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
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm mb-6"
          >
            <Quote className="h-3.5 w-3.5" />
            <span>Testimonials</span>
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            <span className="text-foreground">Loved by </span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              teams everywhere
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            See what our customers have to say about their experience
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
