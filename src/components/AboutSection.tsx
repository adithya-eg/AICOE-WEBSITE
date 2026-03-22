import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import homePageAiImage from "@/data/images/home page ai.webp";



const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              About AI CoE
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Empowering Business Units Through{" "}
              <span className="text-gradient">AI Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At EG, we harness Data & AI capabilities to fundamentally transform value 
              delivery to our customers. Our strategic focus centers on leveraging data 
              to enable informed decision-making, streamline operations, and deliver 
              personalized user experiences across our SaaS portfolio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The AI Center of Excellence (AI CoE) serves as the strategic enablement 
              partner for Business Units, facilitating the seamless integration of AI/ML 
              and Generative AI into organizational roadmaps. We provide comprehensive 
              AI enablement encompassing enterprise-ready tools and tailored solutions 
              designed for each unit's distinct requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Through our AI-driven analytics capabilities, we process both structured 
              and unstructured data to identify patterns, correlations, and actionable 
              insights that optimize business outcomes. We ensure seamless AI transformation 
              aligned with enterprise objectives, executed with precision and full compliance.
            </p>
            
            <a href="#contact" className="btn-accent inline-flex items-center gap-2">
              Connect With Us
            </a>
          </motion.div>

          {/* AI Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <img
              src={homePageAiImage}
              alt="AI Center of Excellence"
              className="w-full max-w-lg rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
