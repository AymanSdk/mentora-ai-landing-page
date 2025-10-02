"use client"

import Link from "next/link"
import { Video, Twitter, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
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
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Build AI agents and collaborate smarter with intelligent video calls.
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <motion.div key={label} whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "Product",
              links: [
                { href: "#features", label: "Features" },
                { href: "#pricing", label: "Pricing" },
                { href: "#", label: "API" },
                { href: "#", label: "Changelog" },
              ],
            },
            {
              title: "Company",
              links: [
                { href: "#", label: "About" },
                { href: "#", label: "Blog" },
                { href: "#", label: "Careers" },
                { href: "#", label: "Contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { href: "#", label: "Privacy" },
                { href: "#", label: "Terms" },
                { href: "#", label: "Security" },
              ],
            },
          ].map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: (columnIndex + 1) * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: (columnIndex + 1) * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="relative text-sm text-muted-foreground hover:text-foreground transition-colors group inline-block"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 border-t border-border pt-8"
        >
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AgentCall. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
