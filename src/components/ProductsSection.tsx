import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Bot, FileSearch, BarChart3, FileText, ArrowRight, Zap } from "lucide-react";
import sashaUI from "@/data/images/SashaBanner.png";
import aiAssistantUI from "@/data/images/AI-ASSISTANT 1.png";
import jasminBanner from "@/data/images/JASMIN BANNER.png";
import jiraBanner from "@/data/images/JIRA BANNER MAIN.png";
import docTransImage from "@/data/images/doctrans.png";

const products = [
  {
    name: "SASHA",
    tagline: "Service And Support Help Assistant",
    description: "An intelligent search and retrieval system that understands context and delivers precise answers from vast document repositories.",
    icon: FileSearch,
    features: ["Semantic Search", "Document QA", "Multi-format Support"],
    image: sashaUI,
    link: "/sasha",
  },
  {
    name: "AI Assistant",
    tagline: "Your Intelligent Virtual Helper",
    description: "A versatile AI-powered assistant that handles queries, automates tasks, and provides intelligent recommendations.",
    icon: Bot,
    features: ["Natural Language", "Task Automation", "24/7 Availability"],
    image: aiAssistantUI,
    link: "/ai-assistant",
  },
  {
    name: "JASMIN",
    tagline: "Speech to Medical Report Generation",
    description: "An AI-driven platform that transforms doctor-patient conversations into structured, meaningful journal notes using Azure cloud services.",
    icon: MessageSquare,
    features: ["Speech-to-Text", "AI Summarization", "Clinical Notes"],
    image: jasminBanner,
    link: "/jasmin",
  },
  {
    name: "Jira Story Gauge",
    tagline: "Intelligent Ticket Quality Assessment",
    description: "AI-powered tool that evaluates Jira ticket quality, classifies tickets as Good/Moderate/Bad, and provides actionable improvement suggestions.",
    icon: BarChart3,
    features: ["AI Classification", "Quality Scoring", "Sprint Planning"],
    image: jiraBanner,
    link: "/jira-story-gauge",
  },
  {
    name: "Pitch‑Sync",
    tagline: "AI-Powered Startup Pitch Platform",
    description: "Create, refine, and evaluate startup pitches using automated multi-agent analysis. Guides users through structured phases, scores answers in real time, and generates investor-ready pitch content.",
    icon: Zap,
    features: ["Phase Workflow", "Real-time Scoring", "Pitch Generation"],
    link: "/pitch-sync",
  },
  {
    name: "DocTrans",
    tagline: "Intelligent Document Transformation",
    description: "Transform documents across formats while preserving structure, extracting insights, and enabling intelligent processing.",
    icon: FileText,
    features: ["Format Conversion", "Data Extraction", "Smart Parsing"],
    image: docTransImage,
    imageFit: "contain" as const,
    imageBg: "#ffffff",
    link: "/doc-trans",
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-primary py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
            Our Products
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            AI-Powered Solutions for Modern Enterprises
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Discover our suite of intelligent products designed to transform your business operations
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card h-full p-6 lg:p-8 bg-white/95 hover:bg-white transition-all duration-300 hover:shadow-2xl">
                {/* Product Image */}
                {product.image && (
                  <div
                    className="mb-6 -mx-6 -mt-6 lg:-mx-8 lg:-mt-8 flex items-center justify-center"
                    style={{ backgroundColor: (product as any).imageBg ?? "transparent" }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full rounded-t-lg ${ (product as any).imageFit === "contain" ? "h-44 object-contain p-6" : "h-40 object-cover" }`}
                    />
                  </div>
                )}

                {/* Rich banner — shown when no image */}
                {!product.image && (
                  <div className="mb-6 -mx-6 -mt-6 lg:-mx-8 lg:-mt-8 h-40 relative overflow-hidden rounded-t-lg"
                    style={{ background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 35%, #f97316 75%, #fb923c 100%)" }}
                  >
                    {/* Dot grid */}
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
                        backgroundSize: "18px 18px",
                      }}
                    />
                    {/* Decorative blobs */}
                    <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
                    <div className="absolute -bottom-8 left-8 w-20 h-20 rounded-full bg-black/10" />
                    <div className="absolute top-4 left-1/2 w-6 h-6 rounded-full bg-white/15 border border-white/20" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-between px-6">
                      {/* Left: text */}
                      <div className="flex-1 pr-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 bg-white/10 border border-white/20 px-2 py-0.5 rounded-full">
                          AI Startup Platform
                        </span>
                        <h3 className="text-white font-black text-2xl leading-tight mt-2 drop-shadow">
                          Pitch‑Sync
                        </h3>
                        <p className="text-white/75 text-xs mt-1 leading-relaxed">
                          From idea to investor-ready
                        </p>
                        {/* Mini score bar */}
                        <div className="flex items-center gap-1 mt-2">
                          {[100, 75, 90, 60, 85].map((w, i) => (
                            <div key={i} className="h-1 rounded-full bg-white/40" style={{ width: `${w * 0.2}px` }} />
                          ))}
                        </div>
                      </div>
                      {/* Right: icon stack */}
                      <div className="flex flex-col items-center gap-2 flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <product.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                        </div>
                        {/* Tiny bars representing scoring */}
                        <div className="flex items-end gap-0.5">
                          {[2, 3, 2, 4, 3].map((h, i) => (
                            <div key={i} className="w-1.5 rounded-sm bg-white/50" style={{ height: `${h * 4}px` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-300 via-orange-300 to-purple-400" />
                  </div>
                )}

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-accent font-semibold text-sm mb-3">
                  {product.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={product.link}
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
