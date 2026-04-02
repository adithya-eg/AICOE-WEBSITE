import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Bot, 
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
  Mail,
  Languages,
  ShieldCheck,
  Database,
  Cog
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aiAssistantUI from "@/data/images/AI-ASSISTANT 1.png";
import ai1 from "@/data/images/AI-1.png";
import ai2 from "@/data/images/AI-2.png";
import aiAssistantCloudArch from "@/CLOUD ARCHITECTURE/AI ASSISTANT.png";
import ImageLightbox from "@/components/ImageLightbox";

// Carousel images array
const carouselImages = [aiAssistantUI, ai1, ai2];

// Core Features
const coreFeatures = [
  {
    icon: MessageSquare,
    title: "24/7 Conversational Support",
    description: "AI-driven chatbot providing human-like interaction, available round the clock for seamless user support and query resolution.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Support for English and Nordic languages (Danish, Swedish, Norwegian) with Finnish under development for diverse user accessibility.",
  },
  {
    icon: FileText,
    title: "Multi-Format Document Support",
    description: "Process and utilize knowledge from PDF, TXT, DOCX, Markdown files, and Web URLs for comprehensive information retrieval.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description: "Super Admin, Admin, End User, and Internal User roles with granular permissions for secure platform management.",
  },
  {
    icon: Search,
    title: "Real-Time Q&A with Citations",
    description: "Generate instant responses with citations linked to source documents, ensuring transparency and accuracy.",
  },
  {
    icon: Settings,
    title: "Widget Integration",
    description: "Embeddable chat widgets for simplified integration within parent products, with dedicated URL and API-based options.",
  },
];

// Technical Capabilities
const technicalCapabilities = [
  {
    icon: Brain,
    title: "AWS Bedrock Knowledge Base",
    description: "Centralized AI knowledge repository with LLM integration for accurate, context-aware response generation.",
  },
  {
    icon: Shield,
    title: "Guardrails & Content Filtering",
    description: "Advanced content policies including PII handling, word filtering, topic restrictions, and contextual grounding.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Built on AWS with VPC, ECS, ECR, S3, RDS, and serverless components for efficiency, scalability, and security.",
  },
  {
    icon: Database,
    title: "Intelligent Chunking",
    description: "Fixed, Hierarchical, and Semantic chunking strategies for optimal document processing and retrieval accuracy.",
  },
  {
    icon: Lock,
    title: "Keycloak SSO Authentication",
    description: "Secure Single Sign-On with role-based access control, JWT tokens, and optional authentication bypass.",
  },
  {
    icon: Cog,
    title: "LLM Inference Configuration",
    description: "Fine-tune AI responses with temperature, top-p, max tokens, latency optimization, and query transformation settings.",
  },
];

// External Integrations
const integrations = [
  {
    name: "Web Scraping",
    description: "Extract content from external web pages with dedicated configuration for noise-free data extraction.",
    icon: Globe,
  },
  {
    name: "Widget Integration",
    description: "Embed chat functionalities directly into your products with customizable sidebar options.",
    icon: Layers,
  },
  {
    name: "API Integration",
    description: "RESTful APIs for seamless communication between frontend and backend services.",
    icon: Server,
  },
  {
    name: "Keycloak Integration",
    description: "Enterprise identity and access management with SSO capabilities.",
    icon: ShieldCheck,
  },
];

// Solution Scope - Inclusions
const inclusions = [
  "24/7 Availability",
  "Multilingual Support",
  "Real-Time Q&A",
  "Document Processing",
  "Role Management",
  "Widget Integration",
  "Content Filtering",
  "PII Protection",
  "AWS Bedrock",
  "GDPR Compliance",
];

// Architecture Components
const architectureComponents = [
  {
    title: "React.js Frontend",
    description: "Interactive user interface with multilingual support, authentication, and dynamic components for seamless user experience.",
    features: ["Admin Dashboard", "Chat Interface", "Widget Integration", "Translation Support"],
  },
  {
    title: "Python Backend",
    description: "Advanced AI capabilities with efficient data handling, RESTful APIs, and integration with AWS services.",
    features: ["FastAPI", "Analysis Engine", "Event Tracking", "S3 Storage"],
  },
  {
    title: "AWS Infrastructure",
    description: "Cloud-native architecture with VPC, ECS, RDS, S3, CloudWatch, and GuardDuty for enterprise-grade reliability.",
    features: ["ECS Containers", "PostgreSQL RDS", "Redis Cache", "Load Balancer"],
  },
  {
    title: "AI/ML Services",
    description: "Amazon Bedrock Knowledge Base with LLMs for human-like conversational responses and intelligent processing.",
    features: ["Bedrock AI", "Knowledge Base", "Web Scraper", "LLM Models"],
  },
];

// User Roles
const userRoles = [
  {
    title: "Super Admin",
    description: "Full platform control with product configuration, user management, and system monitoring capabilities.",
    permissions: ["Configure product settings", "Assign user roles", "Monitor usage metrics", "Manage integrations"],
  },
  {
    title: "Admin",
    description: "Content management with document upload, user role assignment, and workflow definition.",
    permissions: ["Upload documents", "Manage content", "Create user roles", "Access analytics"],
  },
  {
    title: "End User",
    description: "Conversational interaction with document selection, real-time chat, and feedback submission.",
    permissions: ["Select documents", "Chat with AI", "Provide feedback", "Download responses"],
  },
  {
    title: "Internal User",
    description: "Limited access to predefined assistants for internal chat sessions without administrative privileges.",
    permissions: ["View-only chat", "Limited navigation", "Predefined assistants", "No settings access"],
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
            alt={`AI Assistant Dashboard ${index + 1}`}
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

const AIAssistant = () => {
  const featuresRef = useRef(null);
  const techRef = useRef(null);
  const architectureRef = useRef(null);
  const rolesRef = useRef(null);
  const integrationsRef = useRef(null);
  const galleryRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isTechInView = useInView(techRef, { once: true, margin: "-100px" });
  const isArchitectureInView = useInView(architectureRef, { once: true, margin: "-100px" });
  const isRolesInView = useInView(rolesRef, { once: true, margin: "-100px" });
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
                <Bot className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground text-sm font-medium">Your Intelligent Virtual Helper</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
              >
                EG AI Assistant
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
              >
                The AI Assistant provides users with seamless, efficient, and intuitive access to information, 
                tutorials, and guides. With 24/7 availability and human-like interaction, it ensures users can 
                resolve queries quickly and effectively, reducing support workload while enhancing productivity.
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
                  href="https://aicoe.test.egaiassistant.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent px-6 py-3 inline-flex items-center justify-center gap-2"
                  variants={buttonHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Rocket className="w-5 h-5" />
                  Experience AI Assistant
                </motion.a>
                <motion.a
                  href="https://egonline.sharepoint.com/:b:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/AI%20Assistant/Ai%20Assistant%20techincal%20documentation%20-%20v1.pdf?csf=1&web=1&e=77jLrv"
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
                  src={aiAssistantUI}
                  alt="AI Assistant Interface"
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
            {/* Use Case */}
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
                  Use Case
                </span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                  The Challenge We Solve
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The AI Assistant aims to provide users with seamless, efficient, and intuitive access to information, 
                  tutorials, and guides related to a product or solution. By offering 24/7 availability, the assistant 
                  ensures users can get help whenever needed, improving their experience and productivity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For businesses, the AI Assistant reduces the workload on support teams by handling routine queries, 
                  allowing staff to focus on complex issues. It also provides analytics to identify user challenges 
                  and improve the product over time.
                </p>
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
                  Key Benefits
                </span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                  Comprehensive AI Platform
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Built on robust AWS cloud services, the solution is architected for reliability and scalability. 
                  It supports multiple integration methods including dedicated URL access, API-based integration, 
                  and widget-based embedding within parent products.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The platform incorporates EU GDPR compliance measures, PII protection, and content filtering 
                  to ensure data privacy and security best practices are maintained throughout.
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

      {/* User Roles Section */}
      <section id="roles" className="section-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={rolesRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              User Roles
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Role-Based Access Control
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Granular permissions for different user types ensuring secure platform management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {userRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isRolesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="glass-card h-full p-6 lg:p-8 bg-white/95"
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {role.description}
                  </p>
                  <div className="space-y-2">
                    {role.permissions.map((permission, pIndex) => (
                      <div key={pIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{permission}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="section-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={featuresRef}>
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
              Powerful Enterprise Capabilities
            </h2>
            <p className="text-muted-foreground text-lg">
              AI Assistant provides a comprehensive suite of AI-driven functionalities for modern enterprises
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
                  className="glass-card h-full p-6 lg:p-8 bg-white"
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
      <section id="technical" className="section-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={techRef}>
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
              Advanced AI & Security Features
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Sophisticated AI processing with enterprise-grade security and compliance
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
                  className="glass-card h-full p-6 lg:p-8 bg-white/95"
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
              Technical Architecture
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Cloud-Native Architecture
            </h2>
            <p className="text-muted-foreground text-lg">
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

      {/* External Integrations Section */}
      <section id="integrations" className="section-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={integrationsRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntegrationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Integrations
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Seamless Integration Options
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Connect AI Assistant with your existing enterprise tools and systems
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
                  className="glass-card h-full p-6 bg-white/95 text-center"
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

      {/* Gallery Section - See AI Assistant in Action */}
      <section id="gallery" className="section-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={galleryRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              User Interface
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              See AI Assistant in Action
            </h2>
            <p className="text-muted-foreground text-lg">
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
              href="https://aicoe.test.egaiassistant.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-6 py-3 inline-flex items-center gap-2"
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
            >
              <ExternalLink className="w-5 h-5" />
              Try AI Assistant Now
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
              Visual representation of AI Assistant's cloud infrastructure and system architecture
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
                src={aiAssistantCloudArch}
                alt="AI Assistant Cloud Architecture Diagram"
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
              Ready to Transform Your User Support?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get in touch with our team to see how AI Assistant can revolutionize
              how your organization provides 24/7 intelligent support.
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
                href="https://aicoe.test.egaiassistant.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-8 py-4 inline-flex items-center justify-center gap-2"
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <Rocket className="w-5 h-5" />
                Experience AI Assistant
              </motion.a>
              <motion.a
                href="https://egonline.sharepoint.com/:b:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/AI%20Assistant/Ai%20Assistant%20techincal%20documentation%20-%20v1.pdf?csf=1&web=1&e=77jLrv"
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
                href="https://egonline.sharepoint.com/:x:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/AI%20Assistant/AI%20Assistant%20-%20Cost%20Calculator.xlsx?d=we919c952b4a24381a9e2de318190a726&csf=1&web=1&e=VPfKgN"
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

export default AIAssistant;
