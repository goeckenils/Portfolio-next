"use client"
import {motion} from "framer-motion"
import {AnimatedText} from "@/components/AnimatedText"
interface WorkProps {}

const projects = [
  {
    id: 1,
    title: "ROUTINE BUILDER - IMPROVING THE SKINCARE PRODUCT SHOPPING EXPERIENCE",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80&w=1000",
    tags: ["UX/UI PRODUCT DESIGN", "BRANDING", "PROBLEM SOLVING"],
  },
  {
    id: 1,
    title: "ROUTINE BUILDER - IMPROVING THE SKINCARE PRODUCT SHOPPING EXPERIENCE",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80&w=1000",
    tags: ["UX/UI PRODUCT DESIGN", "BRANDING", "PROBLEM SOLVING"],
  },
  {
    id: 1,
    title: "ROUTINE BUILDER - IMPROVING THE SKINCARE PRODUCT SHOPPING EXPERIENCE",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80&w=1000",
    tags: ["UX/UI PRODUCT DESIGN", "BRANDING", "PROBLEM SOLVING"],
  },
  // Add more projects as needed
];

const Work: React.FC<WorkProps> = () => {
  return (
    <main>
      <AnimatedText text="Work" className="hero-title mb-8"/>
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
    </main>
  );
};

export default Work;
