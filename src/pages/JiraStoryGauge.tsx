import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
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
  ExternalLink,
  Calculator,
  Rocket,
  Mail,
  Database,
  Zap,
  Target,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jiraBanner from "@/data/images/JIRA BANNER MAIN.png";
import jiraUI from "@/data/images/jira 1.png";
import jiraCloudArch from "@/CLOUD ARCHITECTURE/JIRA.png";
import ImageLightbox from "@/components/ImageLightbox";

// Core Features
const coreFeatures = [
  {
    icon: BarChart3,
    title: "AI-Powered Classification",
    description: "Automatically classifies Jira tickets as Good, Moderate, or Bad based on relevance and completeness using AWS Bedrock LLMs.",
  },
  {
    icon: Target,
    title: "Quality Scoring",
    description: "Assigns quantifiable quality scores to each ticket, providing measurable readiness assessment for sprint planning.",
  },
  {
    icon: Zap,
    title: "JQL-Based Extraction",
    description: "Input custom JQL queries to target specific subsets of tickets for analysis, enabling flexible and precise filtering.",
  },
  {
    icon: FileText,
    title: "Actionable Recommendations",
    description: "AI-generated suggestions for improving poorly written or ambiguous tickets to enhance clarity and completeness.",
  },
  {
    icon: Database,
    title: "Backlog Health Insights",
    description: "Dashboards and reports that help teams and managers monitor and enhance overall ticket hygiene.",
  },
  {
    icon: Users,
    title: "Team Enablement",
    description: "Empowers project managers with actionable insights into backlog health and team readiness for sprints.",
  },
];

// Cloud Components
const cloudComponents = [
  {
    icon: Cloud,
    title: "AWS Amplify",
    description: "Hosts the frontend web application where users input JQL and view classification results with real-time updates.",
  },
  {
    icon: Server,
    title: "FastAPI on ECS",
    description: "Backend API layer that orchestrates the workflow, receives JQL input, and submits processing jobs to AWS Batch.",
  },
  {
    icon: Layers,
    title: "AWS Batch",
    description: "Executes asynchronous, containerized jobs for data extraction, preprocessing, and LLM evaluation.",
  },
  {
    icon: Brain,
    title: "AWS Bedrock",
    description: "Provides Claude 3 Haiku LLM capabilities to classify, score, and analyze Jira tickets with contextual understanding.",
  },
  {
    icon: Database,
    title: "PostgreSQL on EC2",
    description: "Central data store for classification results, scores, suggestions, job metadata, and token usage tracking.",
  },
  {
    icon: Lock,
    title: "Keycloak SSO",
    description: "Single Sign-On with OAuth2-based authentication, role-based access control, and enterprise security.",
  },
];

// Solution Scope - Inclusions
const inclusions = [
  "JQL Query Input",
  "Ticket Classification",
  "Quality Scoring",
  "AI Recommendations",
  "Keycloak SSO",
  "AWS Bedrock",
  "Batch Processing",
  "Analytics Dashboard",
  "Export to CSV",
  "Token Tracking",
];

// Architecture Components
const architectureComponents = [
  {
    title: "User Interaction Layer",
    description: "Web UI for JQL input with SSO authentication through Keycloak, delivering classification results and quality insights.",
    features: ["JQL Input", "SSO Auth", "Results Display", "Export Options"],
  },
  {
    title: "Application Interface Layer",
    description: "FastAPI backend managing HTTP requests, orchestrating workflows, and serving classified ticket data.",
    features: ["REST APIs", "Job Orchestration", "Status Tracking", "JWT Auth"],
  },
  {
    title: "Data Processing Layer",
    description: "AWS Batch for scalable extraction and preprocessing, integrated with AWS Bedrock for AI classification.",
    features: ["AWS Batch", "Data Extraction", "LLM Inference", "Result Parsing"],
  },
  {
    title: "Storage Layer",
    description: "PostgreSQL database for persistent storage of queries, jobs, tickets, classifications, and usage metrics.",
    features: ["PostgreSQL", "AWS ECR", "Connection Pooling", "Audit Logs"],
  },
];

// Workflow Steps
const workflowSteps = [
  {
    icon: Users,
    title: "User Input via UI",
    description: "User selects a Jira project and composes a JQL query through the web application interface.",
  },
  {
    icon: Server,
    title: "API Request Handling",
    description: "FastAPI backend validates the JQL query and dispatches it to AWS Batch for asynchronous processing.",
  },
  {
    icon: Workflow,
    title: "Data Extraction",
    description: "AWS Batch authenticates with Jira API and retrieves matching tickets including metadata and descriptions.",
  },
  {
    icon: Brain,
    title: "LLM Evaluation",
    description: "AWS Bedrock analyzes ticket content and classifies each as Good, Moderate, or Bad with quality scores.",
  },
  {
    icon: Database,
    title: "Result Storage",
    description: "Classification results, scores, and suggestions are persisted to the database for retrieval.",
  },
  {
    icon: BarChart3,
    title: "Insights Delivery",
    description: "Results are displayed in the UI with aggregated statistics and exportable reports.",
  },
];

// Animation variants
const cardHoverVariants = {
  rest: { scale: 1, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
  hover: { 
    scale: 1.03, 
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
  }
};

const iconHoverVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.15, 
    rotate: 5,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
  }
};

const buttonHoverVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const }
  }
};

const JiraStoryGauge = () => {
  const featuresRef = useRef(null);
  const cloudRef = useRef(null);
  const architectureRef = useRef(null);
  const workflowRef = useRef(null);
  const galleryRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isCloudInView = useInView(cloudRef, { once: true, margin: "-100px" });
  const isArchitectureInView = useInView(architectureRef, { once: true, margin: "-100px" });
  const isWorkflowInView = useInView(workflowRef, { once: true, margin: "-100px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-primary min-h-screen relative overflow-hidden flex items-center pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Back button */}
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
                <BarChart3 className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground text-sm font-medium">Intelligent Ticket Quality Assessment</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
              >
                Jira Story Gauge
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
              >
                An AI-powered web application that automatically evaluates and scores Jira tickets using 
                AWS Bedrock LLMs. Classify tickets as Good, Moderate, or Bad, receive quality scores, 
                and get actionable improvement suggestions to enhance sprint planning efficiency.
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
                <motion.a
                  href="https://nga.jiraagent.egaiassistant.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent px-6 py-3 inline-flex items-center justify-center gap-2"
                  variants={buttonHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Rocket className="w-5 h-5" />
                  Experience Jira Story Gauge
                </motion.a>
                <motion.a
                  href="https://egonline.sharepoint.com/:b:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/Jira%20Issue%20Guage/Technical%20Documentation%20-Jira%20Story%20Guage%20v1.pdf?csf=1&web=1&e=jbSiTT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent px-6 py-3 inline-flex items-center justify-center gap-2"
                  variants={buttonHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <FileText className="w-5 h-5" />
                  View Technical Documentation
                </motion.a>
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
                  src={jiraBanner}
                  alt="Jira Story Gauge Interface"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="section-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Problem Statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
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
                  Software development teams frequently encounter inconsistent quality in Jira tickets, 
                  with user stories and tasks often lacking clarity, completeness, or actionable detail. 
                  This leads to inaccurate effort estimation, decreased productivity, and increased technical debt.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Current manual review processes for evaluating ticket quality are time-consuming, 
                  subjective, and error-prone, further exacerbating inefficiencies across the development lifecycle.
                </p>
              </motion.div>
            </motion.div>

            {/* Proposed Solution */}
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
                  AI-Powered Quality Assessment
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Jira Story Gauge is a web-based solution built with FastAPI that leverages artificial intelligence 
                  to automatically evaluate and score Jira tickets using AWS Bedrock Large Language Models.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Users input JQL queries to dynamically retrieve ticket data, which is processed through 
                  AWS Batch and classified by the LLM as Good, Moderate, or Bad with actionable improvement suggestions.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Scope Section */}
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
              <ul className="space-y-3">
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

      {/* Core Features Section */}
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
              Intelligent Quality Assessment
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              AI-driven classification and scoring for better sprint planning
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

      {/* Workflow Section */}
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
              End-to-End Workflow
            </h2>
            <p className="text-muted-foreground text-lg">
              From JQL input to actionable insights in six streamlined steps
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

      {/* Cloud Components Section */}
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
              AWS-Powered Architecture
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Enterprise-grade cloud components for scalability and reliability
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

      {/* Architecture Section */}
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
              Multi-layered architecture for robust and scalable operations
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
                      <motion.span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--accent), 0.2)" }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Static Image */}
      <section id="gallery" className="section-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={galleryRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              User Interface
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              See Jira Story Gauge in Action
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Intuitive interface for ticket quality assessment and insights
            </p>
          </motion.div>

          {/* Static Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={jiraUI}
                alt="Jira Story Gauge Dashboard"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <motion.a
              href="https://nga.jiraagent.egaiassistant.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-6 py-3 inline-flex items-center gap-2"
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
            >
              <ExternalLink className="w-5 h-5" />
              Try Jira Story Gauge Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Diagrams Section */}
      <section id="diagrams" className="section-white py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Architecture Diagrams
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              System Architecture
            </h2>
            <p className="text-muted-foreground text-lg">
              Visual representation of Jira Story Gauge's cloud infrastructure and system architecture
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 bg-white"
            >
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Cloud Architecture Diagram
              </h3>
              <ImageLightbox
                src={jiraCloudArch}
                alt="Jira Story Gauge Cloud Architecture Diagram"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              Ready to Improve Your Sprint Planning?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get in touch with our team to see how Jira Story Gauge can help 
              your development teams deliver with better quality and efficiency.
            </p>

            {/* Contact Information */}
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
                href="mailto:USR_aicoe@eg.dk" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-lg font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5" />
                USR_aicoe@eg.dk
              </motion.a>
            </motion.div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <motion.a
                href="https://nga.jiraagent.egaiassistant.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-8 py-4 inline-flex items-center justify-center gap-2"
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <Rocket className="w-5 h-5" />
                Experience Jira Story Gauge
              </motion.a>
              <motion.a
                href="https://egonline.sharepoint.com/:b:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/Jira%20Issue%20Guage/Technical%20Documentation%20-Jira%20Story%20Guage%20v1.pdf?csf=1&web=1&e=jbSiTT"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg bg-accent/10 text-accent font-semibold transition-all hover:bg-accent/20 inline-flex items-center justify-center gap-2"
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <FileText className="w-5 h-5" />
                View Technical Documentation
              </motion.a>
              <motion.a
                href="https://egonline.sharepoint.com/:x:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/Jira%20Issue%20Guage/Jira%20Issue%20Gauge%20-%20Cost%20Calculator.xlsx?d=wf9540e20dc87429da88a96d468c9e163&csf=1&web=1&e=HHlF7c"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg bg-accent/10 text-accent font-semibold transition-all hover:bg-accent/20 inline-flex items-center justify-center gap-2"
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <Calculator className="w-5 h-5" />
                View Cost Calculation
              </motion.a>
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

export default JiraStoryGauge;
