import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  ArrowLeft,
  Check,
  Brain,
  Shield,
  FileText,
  Users,
  Settings,
  Lock,
  Cloud,
  Layers,
  Server,
  Workflow,
  Rocket,
  Mail,
  Database,
  Target,
  BarChart3,
  Lightbulb,
  Star,
  ImageIcon,
  Calculator,
  MessageSquare,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pitchSyncCloudArch from "@/CLOUD ARCHITECTURE/PITCH SYNC.png";
import pitchSyncUI from "@/data/images/Pitchsyn ui.png";
import ImageLightbox from "@/components/ImageLightbox";

// Core Features
const coreFeatures = [
  {
    icon: Workflow,
    title: "Phase Based Workflow",
    description: "Guides users through structured phases of pitch creation — from problem definition and market analysis to solution framing and financial projections — ensuring comprehensive coverage.",
  },
  {
    icon: BarChart3,
    title: "Real-time Scoring System",
    description: "Dynamically scores user answers as they progress through each phase, providing immediate feedback on pitch quality and highlighting areas that need improvement.",
  },
  {
    icon: Zap,
    title: "Automated Pitch Generation",
    description: "Automatically generates polished, investor-ready pitch content including structured text narratives and supporting visuals based on the user's inputs.",
  },
  {
    icon: Brain,
    title: "AI-Powered Pitch Evaluation",
    description: "Multi-agent AI system evaluates pitch content across multiple dimensions — clarity, market fit, financial viability, and presentation quality — to deliver comprehensive assessments.",
  },
  {
    icon: Users,
    title: "Multi-Agent Analysis",
    description: "Orchestrates multiple specialized AI agents that independently analyse different aspects of the pitch and collaborate to provide a unified, high-confidence evaluation report.",
  },
  {
    icon: ImageIcon,
    title: "Content & Image Generation",
    description: "Generates the final pitch deck components including persuasive text, key visuals, and slide-ready content that users can export and present directly to investors.",
  },
];

// Cloud Components
const cloudComponents = [
  {
    icon: Cloud,
    title: "Frontend Application",
    description: "Responsive web interface guiding users through structured pitch phases with real-time scoring feedback and progress tracking.",
  },
  {
    icon: Server,
    title: "FastAPI Backend",
    description: "High-performance API layer orchestrating phase management, score calculation, agent coordination, and content delivery.",
  },
  {
    icon: Brain,
    title: "Multi-Agent Orchestrator",
    description: "Coordinates multiple specialised AI agents for pitch evaluation, ensuring comprehensive analysis across all pitch dimensions.",
  },
  {
    icon: Lightbulb,
    title: "LLM Service",
    description: "Large language model integration for natural language understanding, pitch content generation, and intelligent scoring of user responses.",
  },
  {
    icon: ImageIcon,
    title: "Image Generation Service",
    description: "AI-powered image generation to produce compelling visuals for pitch decks based on pitch context and brand guidelines.",
  },
  {
    icon: Database,
    title: "Data Store",
    description: "Persistent storage for user sessions, phase responses, scores, generated content, and evaluation history.",
  },
];

// Solution Scope
const inclusions = [
  "Phase-Based Pitch Workflow",
  "Real-time Answer Scoring",
  "Multi-Agent Evaluation",
  "Automated Text Generation",
  "AI Image Generation",
  "Investor-Ready Output",
  "Score Analytics Dashboard",
  "Session Management",
  "Export & Download",
  "Pitch Refinement Loop",
];

// Architecture Layers
const architectureComponents = [
  {
    title: "User Interaction Layer",
    description: "Web UI guiding users through structured pitch phases with live scoring, progress indicators, and phase-completion feedback.",
    features: ["Phase Navigation", "Live Scoring", "Progress Tracking", "Input Validation"],
  },
  {
    title: "Orchestration Layer",
    description: "FastAPI backend managing phase sequencing, coordinating multi-agent analysis, and aggregating scores into a unified evaluation.",
    features: ["Phase Management", "Agent Coordination", "Score Aggregation", "Session Handling"],
  },
  {
    title: "AI Processing Layer",
    description: "Specialised AI agents and LLM services evaluate pitch content, generate narratives, and create supporting images.",
    features: ["LLM Evaluation", "Content Generation", "Image Synthesis", "Quality Scoring"],
  },
  {
    title: "Storage & Output Layer",
    description: "Persistent storage of pitch data, scores, and generated content with export-ready formatting for investor presentations.",
    features: ["Data Persistence", "Score History", "Content Export", "Session Recovery"],
  },
];

// Workflow Steps
const workflowSteps = [
  {
    icon: Users,
    title: "Project Initialisation",
    description: "User creates a new pitch project and provides initial startup context — product idea, industry, and target audience.",
  },
  {
    icon: Workflow,
    title: "Guided Phase Input",
    description: "System walks the user through structured phases: Problem, Solution, Market, Business Model, Team, and Financials.",
  },
  {
    icon: BarChart3,
    title: "Real-time Scoring",
    description: "Each answer is scored instantly by the AI against pitch quality criteria, giving users immediate feedback per phase.",
  },
  {
    icon: Brain,
    title: "Multi-Agent Evaluation",
    description: "Specialised agents analyse each pitch dimension independently and collaborate to produce a comprehensive evaluation report.",
  },
  {
    icon: Lightbulb,
    title: "Pitch Refinement",
    description: "AI recommends targeted improvements based on low-scoring areas, helping users strengthen weak points before generating the final pitch.",
  },
  {
    icon: Zap,
    title: "Final Generation",
    description: "System generates the complete investor-ready pitch including structured narrative text and AI-created supporting visuals.",
  },
];

// Animation variants
const cardHoverVariants = {
  rest: { scale: 1, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
  hover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const iconHoverVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: 5,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const buttonHoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const PitchSync = () => {
  const featuresRef = useRef(null);
  const cloudRef = useRef(null);
  const architectureRef = useRef(null);
  const workflowRef = useRef(null);
  const galleryRef = useRef(null);
  const diagramsRef = useRef(null);

  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isCloudInView = useInView(cloudRef, { once: true, margin: "-100px" });
  const isArchitectureInView = useInView(architectureRef, { once: true, margin: "-100px" });
  const isWorkflowInView = useInView(workflowRef, { once: true, margin: "-100px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const isDiagramsInView = useInView(diagramsRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="section-primary min-h-screen relative overflow-hidden flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6"
              >
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground text-sm font-medium">AI-Powered Pitch Platform</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
              >
                Pitch‑Sync
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
              >
                An AI-powered platform that helps users create, refine, and evaluate startup pitches
                using automated multi-agent analysis. Pitch‑Sync guides users through structured phases,
                scores their answers in real time, and generates investor-ready pitch content including
                text and images.
              </motion.p>

              {/* Key features list */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 gap-3 mb-8"
              >
                {inclusions.slice(0, 6).map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <span className="text-primary-foreground/90 text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4"
              >
                <motion.button
                  className="btn-accent px-6 py-3 inline-flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
                  variants={buttonHoverVariants}
                  initial="rest"
                  disabled
                >
                  <Rocket className="w-5 h-5" />
                  Coming Soon
                </motion.button>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={pitchSyncUI}
                  alt="Pitch-Sync Interface"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section id="overview" className="section-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className="glass-card p-8 bg-white h-full"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
                  Problem Statement
                </span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                  The Challenge We Solve
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Creating a compelling startup pitch is one of the hardest challenges founders face.
                  Without structured guidance, pitches often lack critical elements — well-defined market
                  sizing, clear value propositions, or credible financial projections — that investors
                  look for.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Manual feedback from mentors is slow and subjective, leaving founders uncertain about
                  the quality of their pitch until it is too late to refine it before an investor meeting.
                </p>
              </motion.div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className="glass-card p-8 bg-white h-full"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
                  Proposed Solution
                </span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                  Automated Multi-Agent Pitch Platform
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pitch‑Sync guides founders through every critical section of a startup pitch using a
                  structured phase-based workflow. At each phase, AI agents evaluate the quality of
                  responses in real time and provide a score.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Once all phases are complete, the platform automatically generates a polished,
                  investor-ready pitch — complete with narrative content and AI-generated supporting
                  visuals — ready to present or export.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Scope */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 uppercase tracking-wide">
                What's Included
              </span>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                Solution Scope
              </h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <ul className="grid sm:grid-cols-2 gap-3">
                {inclusions.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section id="features" className="section-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={featuresRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Key Features
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Intelligent Pitch Creation
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              End-to-end AI assistance from idea to investor-ready pitch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="glass-card h-full p-6 lg:p-8 bg-white/95"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div
                    className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-6"
                    variants={iconHoverVariants}
                  >
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workflow ── */}
      <section id="workflow" className="section-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={workflowRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWorkflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              How It Works
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Phase-Based Workflow
            </h2>
            <p className="text-muted-foreground text-lg">
              From idea to investor-ready pitch in six structured steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isWorkflowInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="glass-card h-full p-6 lg:p-8 bg-white relative"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">{index + 1}</span>
                  </div>
                  <motion.div
                    className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-6"
                    variants={iconHoverVariants}
                  >
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cloud Components ── */}
      <section id="cloud" className="section-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={cloudRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCloudInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Cloud Infrastructure
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              AI-Powered Architecture
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Scalable, multi-agent cloud components powering every pitch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudComponents.map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isCloudInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="glass-card h-full p-6 lg:p-8 bg-white/95"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div
                    className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-6"
                    variants={iconHoverVariants}
                  >
                    <component.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {component.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {component.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture Layers ── */}
      <section id="architecture" className="section-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={architectureRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isArchitectureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              System Design
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Architecture Layers
            </h2>
            <p className="text-muted-foreground text-lg">
              Multi-layered design for robust, scalable pitch generation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isArchitectureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="glass-card h-full p-6 lg:p-8 bg-white"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {component.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {component.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {component.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery (placeholder) ── */}
      <section id="gallery" className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={galleryRef}>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              UI Showcase
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              See Pitch‑Sync in Action
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Screenshots and demo visuals will be available here soon
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={pitchSyncUI}
                alt="Pitch-Sync UI"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Cloud Architecture Diagram ── */}
      <section id="diagrams" className="section-white py-24 lg:py-32 relative overflow-hidden" ref={diagramsRef}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDiagramsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Cloud Architecture
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Cloud Architecture
            </h2>
            <p className="text-muted-foreground text-lg">
              Visual representation of Pitch‑Sync's cloud infrastructure and system architecture
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isDiagramsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 bg-white"
            >
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Cloud Architecture Diagram
              </h3>
              <ImageLightbox
                src={pitchSyncCloudArch}
                alt="Pitch-Sync Cloud Architecture Diagram"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Get Started
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Ready to Perfect Your Pitch?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get in touch with our team to learn how Pitch‑Sync can help your startup craft a
              compelling, investor-ready pitch with AI-powered guidance.
            </p>

            {/* Contact card */}
            <motion.div
              className="glass-card p-8 bg-white mb-8"
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
            >
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-4">
                Please reach out to the following for questions or feedback:
              </p>
              <motion.a
                href="mailto:aicoe@egindia.com"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-lg font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5" />
                aicoe@egindia.com
              </motion.a>
            </motion.div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Link
                to="/#products"
                className="px-8 py-4 rounded-lg border border-muted text-foreground font-semibold transition-all hover:bg-secondary inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PitchSync;
