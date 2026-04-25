"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Thornton",
    role: "Founder, Zenith AI",
    content: "The team at CyberShield didn't just build a website; they built a revenue engine. Our conversion rate tripled within the first three months of launching the new platform.",
    stars: 5,
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    name: "Sarah Jenkins",
    role: "CMO, Global Retailers",
    content: "The attention to detail and performance optimization is unmatched. Our mobile sales exploded after the redesign. They truly understand the modern digital landscape.",
    stars: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "David Chen",
    role: "CEO, Nexa Logistics",
    content: "Professional, data-driven, and incredibly talented. CyberShield's strategy took our organic traffic from 10k to 50k monthly sessions in record time. Truly a growth partner.",
    stars: 5,
    avatar: "https://i.pravatar.cc/150?u=david",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent uppercase tracking-widest font-bold text-sm mb-4 block">Satisfied Clients</span>
          <h2 className="text-5xl md:text-7xl font-display italic leading-tight">
            Voices of <span className="text-muted">Success</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group p-10 rounded-[3rem] bg-background border border-stroke hover:border-accent transition-all duration-500 relative flex flex-col justify-between"
            >
              <div className="mb-8">
                <div className="mb-6 flex gap-1">
                  {[...new Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-display italic leading-relaxed text-muted group-hover:text-foreground transition-colors duration-300 mb-8">
                  "{testimonial.content}"
                </p>
                <Quote className="absolute top-10 right-10 w-12 h-12 text-stroke opacity-30 group-hover:text-accent group-hover:opacity-20 transition-all duration-500" />
              </div>
              
              <div className="flex items-center gap-4 border-t border-stroke pt-8">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-stroke grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted uppercase tracking-widest">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
