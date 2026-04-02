import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  ArrowLeft,
  Check,
  Brain,
  Shield,
  Search,
  MessageSquare,
  Users,
  BarChart3,
  Settings,
  Globe,
  Lock,
  Cloud,
  Layers,
  Server,
  Workflow,
  ExternalLink,
  Calculator,
  Rocket,
  Mail,
  Languages,
  ShieldCheck,
  Database,
  Cog,
  Upload,
  Download,
  Eye,
  Zap,
  BookOpen,
  Monitor,
  Smartphone,
  Code,
  HardDrive,
  Network,
  AlertTriangle,
  TrendingUp
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import docTransLogo from "@/data/images/doctrans.png";
import docTransCloudArch from "@/CLOUD ARCHITECTURE/DOCTRANS.png";
import ImageLightbox from "@/components/ImageLightbox";

// Core Features
const coreFeatures = [
  {
    icon: Upload,
    title: "Multi-Format Document Support",
    description: "Process PDF, Word (.docx), PowerPoint (.pptx), and image files with automatic format detection and validation.",
  },
  {
    icon: Languages,
    title: "100+ Language Support",
    description: "Translate documents into over 100 languages including English, Swedish, Polish, Norwegian, Danish, and Finnish.",
  },
  {
    icon: Eye,
    title: "OCR Text Extraction",
    description: "Advanced optical character recognition to extract and translate text from images and scanned documents.",
  },
  {
    icon: FileText,
    title: "Layout Preservation",
    description: "Maintain original document formatting, structure, and layout during translation process.",
  },
  {
    icon: BookOpen,
    title: "Custom Glossary Support",
    description: "Domain-specific terminology management with custom glossaries for technical and industry-specific terms.",
  },
  {
    icon: Shield,
    title: "GDPR Compliance",
    description: "Secure processing with user confirmation for sensitive data and full GDPR compliance measures.",
  },
];

// Technical Capabilities
const technicalCapabilities = [
  {
    icon: Brain,
    title: "Azure AI Services Integration",
    description: "Powered by Azure Document Intelligence, Text Translation, and OCR services for enterprise-grade accuracy.",
  },
  {
    icon: Shield,
    title: "Secure Cloud Architecture",
    description: "Built on Azure with Blob Storage, secure authentication, and encrypted data processing pipelines.",
  },
  {
    icon: Cloud,
    title: "Scalable Cloud Infrastructure",
    description: "AWS EC2 compute with Azure Blob Storage, Route 53 DNS, and API Gateway for high availability.",
  },
  {
    icon: Database,
    title: "PostgreSQL Metadata Storage",
    description: "Structured metadata storage with PostgreSQL for tracking translation jobs, status, and file relationships.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "JWT authentication, OAuth integration, and secure access controls for multi-tenant environments.",
  },
  {
    icon: Cog,
    title: "Workflow Orchestration",
    description: "Automated processing pipelines with error handling, retry mechanisms, and status notifications.",
  },
];

// External Integrations
const integrations = [
  {
    name: "Azure Document Intelligence",
    description: "Advanced document processing with key-value extraction and structured data parsing.",
    icon: FileText,
  },
  {
    name: "Azure Text Translation",
    description: "Neural machine translation with context awareness and custom glossary support.",
    icon: Languages,
  },
  {
    name: "Azure Communication Services",
    description: "Email and SMS notifications for translation completion and status updates.",
    icon: Mail,
  },
  {
    name: "Azure Blob Storage",
    description: "Secure, scalable storage for raw files, processed documents, and intermediate data.",
    icon: HardDrive,
  },
];

// Solution Scope - Inclusions
const inclusions = [
  "Multi-Format Document Support",
  "100+ Language Translation",
  "OCR Text Extraction",
  "Layout Preservation",
  "Custom Glossary",
  "GDPR Compliance",
  "Secure Authentication",
  "Email/SMS Notifications",
  "Azure AI Integration",
  "Cloud-Native Architecture",
];

// Architecture Components
const architectureComponents = [
  {
    title: "React.js Frontend",
    description: "Modern web interface with drag-and-drop upload, progress tracking, and translation results display.",
    features: ["File Upload UI", "Progress Tracking", "Translation Results", "Dashboard"],
  },
  {
    title: "FastAPI Backend",
    description: "High-performance Python backend handling file processing, Azure service integration, and workflow management.",
    features: ["File Validation", "Azure Integration", "Workflow Management", "API Endpoints"],
  },
  {
    title: "Azure Cloud Services",
    description: "Enterprise cloud infrastructure with AI services, storage, and communication capabilities.",
    features: ["Blob Storage", "AI Services", "Communication Services", "Security"],
  },
  {
    title: "PostgreSQL Database",
    description: "Relational database for metadata, user management, and translation job tracking.",
    features: ["Job Tracking", "User Management", "Audit Logs", "Performance Metrics"],
  },
];

// Supported File Types
const supportedFormats = [
  { format: "PDF", description: "Portable Document Format", icon: FileText },
  { format: "DOCX", description: "Microsoft Word Document", icon: FileText },
  { format: "PPTX", description: "Microsoft PowerPoint", icon: FileText },
  { format: "PNG", description: "Portable Network Graphics", icon: Eye },
  { format: "JPEG", description: "Joint Photographic Experts Group", icon: Eye },
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



const DocTrans = () => {
  const featuresRef = useRef(null);
  const techRef = useRef(null);
  const architectureRef = useRef(null);
  const formatsRef = useRef(null);
  const integrationsRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isTechInView = useInView(techRef, { once: true, margin: "-100px" });
  const isArchitectureInView = useInView(architectureRef, { once: true, margin: "-100px" });
  const isFormatsInView = useInView(formatsRef, { once: true, margin: "-100px" });
  const isIntegrationsInView = useInView(integrationsRef, { once: true, margin: "-100px" });

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
                <FileText className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground text-sm font-medium">Cloud-Based AI Document Translator</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
              >
                EG DocTrans
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
              >
                A comprehensive cloud-based AI document translator that processes PDF, Word, PowerPoint, and image files
                while preserving original layout and formatting. Supports 100+ languages with OCR capabilities and
                custom glossary support for domain-specific terminology.
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
                  href="/pdfs/feasibilities/Technical Documentation DOCTRANS.pdf"
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
                  src={docTransLogo}
                  alt="DocTrans Interface"
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
                  Multilingual Communication Challenges
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>• Employees working in different languages across global organizations</p>
                  <p>• Manual translation processes that are slow and costly</p>
                  <p>• Loss of formatting and structure in translated documents</p>
                  <p>• Difficulty handling large volumes of documents efficiently</p>
                  <p>• Need for secure and compliant processing (GDPR)</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Solution Benefits */}
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
                  Our Solution
                </span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                  AI-Powered Document Translation
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Leveraging Microsoft Azure AI services and cloud architecture, DocTrans automatically translates
                  documents while maintaining formatting, using custom glossaries for domain-specific terms, and
                  providing a simple upload-translate-download interface.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The platform ensures security and compliance with GDPR requirements, user confirmation for
                  sensitive data processing, and enterprise-grade authentication and access control.
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

      {/* Supported Formats Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={formatsRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Supported Formats
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Multi-Format Document Processing
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Process various document types with automatic format detection and validation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {supportedFormats.map((format, index) => (
              <motion.div
                key={format.format}
                initial={{ opacity: 0, y: 30 }}
                animate={isFormatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="glass-card h-full p-6 lg:p-8 bg-white/95 text-center"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div
                    variants={iconHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <format.icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {format.format}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {format.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="section-white py-24 lg:py-32" ref={featuresRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Core Features
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Advanced Translation Capabilities
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive AI-powered features for seamless document translation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="glass-card h-full p-6 lg:p-8 bg-white"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div
                    variants={iconHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6"
                  >
                    <feature.icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">
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

      {/* Technical Capabilities Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={techRef}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Technical Capabilities
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Enterprise-Grade Architecture
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Built on Microsoft Azure AI services with robust cloud infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isTechInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="glass-card h-full p-6 lg:p-8 bg-white/95"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div
                    variants={iconHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6"
                  >
                    <capability.icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section className="section-white py-24 lg:py-32" ref={architectureRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isArchitectureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              System Architecture
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Step-by-Step Processing Pipeline
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive workflow from input to notification delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">
                    {component.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {component.description}
                  </p>
                  <ul className="space-y-2">
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-4 text-center">
              Cloud Architecture Diagram
            </h3>
            <ImageLightbox
              src={docTransCloudArch}
              alt="DocTrans Cloud Architecture Diagram"
              className="max-w-4xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={integrationsRef}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntegrationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Azure Services Integration
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Enterprise AI Services
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Powered by Microsoft's comprehensive AI and cloud services ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isIntegrationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="glass-card h-full p-6 lg:p-8 bg-white/95"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div
                    variants={iconHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6"
                  >
                    <integration.icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">
                    {integration.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {integration.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Section */}
      <section className="section-white py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Data Flow
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Simple Processing Pipeline
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Streamlined workflow from document upload to translation delivery
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 bg-white"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">Upload</h3>
                  <p className="text-muted-foreground text-sm">File validation & storage</p>
                </div>

                <div className="hidden md:block w-8 h-0.5 bg-accent/30"></div>
                <div className="md:hidden w-0.5 h-8 bg-accent/30"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">OCR</h3>
                  <p className="text-muted-foreground text-sm">Text extraction & structuring</p>
                </div>

                <div className="hidden md:block w-8 h-0.5 bg-accent/30"></div>
                <div className="md:hidden w-0.5 h-8 bg-accent/30"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Languages className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">Translate</h3>
                  <p className="text-muted-foreground text-sm">AI-powered translation</p>
                </div>

                <div className="hidden md:block w-8 h-0.5 bg-accent/30"></div>
                <div className="md:hidden w-0.5 h-8 bg-accent/30"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Download className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">Download</h3>
                  <p className="text-muted-foreground text-sm">Notification & delivery</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Pricing
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Cost Calculator
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Estimate your costs based on document volume and characteristics
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-8 lg:p-12 bg-white/95">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-6">Cost Based On:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-foreground">Number of Documents</p>
                        <p className="text-muted-foreground text-sm">Charged per document processed</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-foreground">Pages per Document</p>
                        <p className="text-muted-foreground text-sm">Processing complexity increases with pages</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-foreground">Character Count</p>
                        <p className="text-muted-foreground text-sm">Translation pricing based on character volume</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-foreground">Language Pairs</p>
                        <p className="text-muted-foreground text-sm">Complexity varies by language combinations</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-foreground">Custom Glossary</p>
                        <p className="text-muted-foreground text-sm">One-time setup cost for domain-specific terms</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-6">Cost Optimization:</h3>
                  <div className="space-y-4 bg-accent/5 p-6 rounded-lg">
                    <p className="text-muted-foreground leading-relaxed">
                      Use the <strong>Azure Cost Calculator</strong> for precise estimates based on your specific requirements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Costs depend on:
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• OCR processing minutes</li>
                      <li>• Translation requests per month</li>
                      <li>• Blob storage consumption</li>
                      <li>• Database transactions</li>
                      <li>• Communication service usage</li>
                    </ul>
                    <p className="text-muted-foreground text-sm pt-4 border-t border-accent/20">
                      <strong>Recommendation:</strong> Contact us for a detailed cost analysis based on your document volume and translation requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocTrans;