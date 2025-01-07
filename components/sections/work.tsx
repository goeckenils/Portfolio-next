"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ROUTINE BUILDER - IMPROVING THE SKINCARE PRODUCT SHOPPING EXPERIENCE",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80&w=1000",
    tags: ["UX/UI PRODUCT DESIGN", "BRANDING", "PROBLEM SOLVING"],
  },
  // Add more projects as needed
];

export function Work() {
  return (
    <section id="works" className="min-h-screen px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-16">WORKS</h2>
        
        <div className="project-grid">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <div className="flex flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button className="p-2 hover:opacity-50 transition-opacity">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button className="p-2 hover:opacity-50 transition-opacity">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}