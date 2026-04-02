import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FileSearch, 
  ArrowLeft, 
  Check, 
  Brain,
  Shield,
  Search,
  FileText,
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
  Mail
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sashaUI from "@/data/images/sasha ui.png";
import sasha1 from "@/data/images/sasha 1.png";
import sasha2 from "@/data/images/sasha 2.png";
import sashaCloudArch from "@/CLOUD ARCHITECTURE/SASHA.png";
import ImageLightbox from "@/components/ImageLightbox";

// Carousel images array
const carouselImages = [sashaUI, sasha2, sasha1];

// Core Features
const coreFeatures = [
  {
    icon: Search,
    title: "Semantic Search",
    description: "Advanced AI-powered search that understands context and meaning, delivering precise answers from vast document repositories.",
  },
  {
    icon: MessageSquare,
    title: "Support Chatbot",
    description: "AI-driven chatbot with NLP integration, knowledge base systems, and context-aware response generation powered by AWS Bedrock.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Comprehensive document APIs supporting multiple formats, metadata extraction, vectorization, and intelligent processing.",
  },
  {
    icon: Users,
    title: "Tenant & User Management",
    description: "Multi-tenant architecture with role-based access control, user management, and business unit organization.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Built-in analytics tools with Cognos integration for statistical analysis and comprehensive reporting capabilities.",
  },
  {
    icon: Settings,
    title: "Widget Integration",
    description: "Embeddable chat widgets with token-based authentication for seamless integration into external websites and applications.",
  },
];

// Technical Capabilities
const technicalCapabilities = [
  {
    icon: Globe,
    title: "Language Detection & Translation",
    description: "Multi-lingual support with automatic language detection and translation capabilities for global operations.",
  },
  {
    icon: Brain,
    title: "Document Vectorization",
    description: "Convert documents into numerical representations for AI processing, enabling semantic search and question-answering.",
  },
  {
    icon: Cloud,
    title: "AWS Bedrock Integration",
    description: "Leverage advanced AI capabilities through AWS Bedrock for enhanced processing and intelligent responses.",
  },
  {
    icon: Layers,
    title: "Image Captioning",
    description: "Extract information from visual data within documents through advanced image processing capabilities.",
  },
  {
    icon: Server,
    title: "Batch Processing",
    description: "Handle time-consuming jobs sequentially with dedicated batch processing for document ingestion and analysis.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Service account authentication, JWT tokens, API key management, and role-based access control.",
  },
];

// External Integrations
const integrations = [
  {
    name: "Jira Integration",
    description: "Seamless issue tracking and project management with bi-directional Jira integration.",
    icon: Workflow,
  },
  {
    name: "Confluence Integration",
    description: "Knowledge sharing and documentation management with Confluence space ingestion.",
    icon: FileText,
  },
  {
    name: "ServiceNow Integration",
    description: "Enterprise service management integration for streamlined IT operations.",
    icon: Settings,
  },
  {
    name: "Website Integration",
    description: "Embed chat functionalities and access information directly on your websites.",
    icon: Globe,
  },
];

// Solution Scope - Inclusions
const inclusions = [
  "Tenant APIs",
  "Product APIs",
  "Document APIs",
  "User APIs",
  "Chat Functionality",
  "Widget Integration",
  "Analytics",
  "Cognos Integration",
  "AWS Bedrock",
  "ServiceNow Integration",
];

// Architecture Components
const architectureComponents = [
  {
    title: "Next.js Frontend",
    description: "Client-side application with dynamic routes for Admin, Chat, Login, and Widget functionality.",
    features: ["Admin Dashboard", "Chat Interface", "Widget Integration", "Multi-language Support"],
  },
  {
    title: "FastAPI Backend",
    description: "RESTful API layer with service layer architecture, repository pattern, and Pydantic validation.",
    features: ["Versioned APIs", "Service Layer", "Repository Pattern", "Pydantic Schemas"],
  },
  {
    title: "FastAPI Batch",
    description: "Dedicated batch processing for time-consuming operations like document ingestion.",
    features: ["AWS Knowledge Bases", "Confluence Analyzer", "Job Strategies", "LLM Integration"],
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS-based architecture ensuring scalability, reliability, and high availability.",
    features: ["AWS Services", "S3 Storage", "OpenSearch", "Bedrock AI"],
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

// Carousel Gallery Component
const CarouselGallery = ({ isInView }: { isInView: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
    >
      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20"
        style={{ aspectRatio: "16 / 9" }}
      >
        {carouselImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`SASHA Dashboard ${index + 1}`}
            className="absolute inset-0 w-full h-full object-contain"
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-accent w-8"
                : "bg-white/30 hover:bg-white/50 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Sasha = () => {
  const featuresRef = useRef(null);
  const techRef = useRef(null);
  const architectureRef = useRef(null);
  const integrationsRef = useRef(null);
  const galleryRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isTechInView = useInView(techRef, { once: true, margin: "-100px" });
  const isArchitectureInView = useInView(architectureRef, { once: true, margin: "-100px" });
  const isIntegrationsInView = useInView(integrationsRef, { once: true, margin: "-100px" });
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
                <FileSearch className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground text-sm font-medium">Smart AI Search Assistant</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
              >
                SASHA
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
              >
                Developed by NGA Artificial Intelligence, SASHA provides AI-driven assistance and document processing 
                with APIs for business units, tenant management, document management, chat functionalities, 
                widget integration, analytics, and authentication. Integrated with AWS Bedrock and Cognos for 
                advanced AI processing and statistical analysis.
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
                  href="https://egit.egsasha.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent px-6 py-3 inline-flex items-center justify-center gap-2"
                  variants={buttonHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Rocket className="w-5 h-5" />
                  Experience SASHA
                </motion.a>
                <motion.a
                  href="https://egonline.sharepoint.com/:f:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/SASHA?csf=1&web=1&e=gSSB7y"
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
                  src={sashaUI}
                  alt="SASHA Interface"
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
                  Organizations face significant challenges in efficiently managing and utilizing information. 
                  This includes streamlining access to data, automating processes, and providing intelligent 
                  assistance to users.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  SASHA aims to improve productivity, reduce response times, and enhance decision-making 
                  by leveraging cutting-edge AI technologies to transform how enterprises interact with 
                  their knowledge repositories.
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
                  Comprehensive AI Platform
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SASHA is a comprehensive AI application that offers a suite of tools and APIs to manage 
                  various aspects of organizational data and user interaction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  It provides a centralized platform for accessing and processing information, with features 
                  like document management, intelligent chat, and analytics. The solution incorporates 
                  AWS Bedrock integration to leverage advanced AI capabilities.
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
              Core Features
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Powerful Enterprise Capabilities
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              SASHA provides a comprehensive suite of AI-driven functionalities for modern enterprises
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

      {/* Technical Capabilities Section */}
      <section id="technical" className="section-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={techRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Data Management
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Advanced Technical Capabilities
            </h2>
            <p className="text-muted-foreground text-lg">
              Sophisticated data processing and AI integration for enterprise-scale operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isTechInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="glass-card h-full p-6 lg:p-8 bg-white"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div 
                    className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-6"
                    variants={iconHoverVariants}
                  >
                    <capability.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
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

      {/* Architecture Section */}
      <section id="architecture" className="section-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={architectureRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isArchitectureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Technical Architecture
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Cloud-Native Architecture
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Built on AWS for scalability, reliability, and high availability
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
                  className="glass-card h-full p-6 lg:p-8 bg-white/95"
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

      {/* External Integrations Section */}
      <section id="integrations" className="section-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={integrationsRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntegrationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Integrations
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Seamless External Integrations
            </h2>
            <p className="text-muted-foreground text-lg">
              Connect SASHA with your existing enterprise tools and systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isIntegrationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="glass-card h-full p-6 bg-white text-center"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div 
                    className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto"
                    variants={iconHoverVariants}
                  >
                    <integration.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {integration.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {integration.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - See SASHA in Action */}
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
              See SASHA in Action
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Intuitive interface designed for maximum productivity
            </p>
          </motion.div>

          <CarouselGallery isInView={isGalleryInView} />

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <motion.a
              href="https://egit.egsasha.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-6 py-3 inline-flex items-center gap-2"
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
            >
              <ExternalLink className="w-5 h-5" />
              Try SASHA Now
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
              Cloud Architecture
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Cloud Architecture
            </h2>
            <p className="text-muted-foreground text-lg">
              Visual representation of SASHA's cloud infrastructure and system architecture
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
                src={sashaCloudArch}
                alt="SASHA Cloud Architecture Diagram"
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
              Ready to Transform Your Document Search?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get in touch with our team to see how SASHA can revolutionize 
              how your organization finds and utilizes information.
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
                href="mailto:aicoe@egindia.com" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-lg font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5" />
                aicoe@egindia.com
              </motion.a>
            </motion.div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <motion.a
                href="https://egit.egsasha.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-8 py-4 inline-flex items-center justify-center gap-2"
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <Rocket className="w-5 h-5" />
                Experience SASHA
              </motion.a>
              <motion.a
                href="https://egonline.sharepoint.com/:f:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/SASHA?csf=1&web=1&e=gSSB7y"
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
                href="https://egonline.sharepoint.com/:x:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/SASHA/Sasha%20cost%20calculator.xlsx?d=w21baeb63126348259d8dbdfe5b79ad84&csf=1&web=1&e=fqUrkz"
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

export default Sasha;
