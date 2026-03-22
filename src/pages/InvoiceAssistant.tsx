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
  TrendingUp,
  Receipt,
  DollarSign,
  Calendar,
  FileCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Core Features
const coreFeatures = [
  {
    icon: Upload,
    title: "Document Upload",
    description: "Securely upload invoices and receipts in various formats including PDF, images, and scanned documents."
  },
  {
    icon: Brain,
    title: "AI-Powered Extraction",
    description: "Advanced AI using AWS Bedrock (Claude) intelligently reads and extracts key data from financial documents."
  },
  {
    icon: Database,
    title: "Structured JSON Output",
    description: "Converts extracted data into clean, structured JSON format with vendor details, amounts, dates, and expense types."
  },
  {
    icon: ShieldCheck,
    title: "High Accuracy",
    description: "Combines AI processing with validation to ensure accurate extraction of financial data with confidence scores."
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Cloud-based architecture ensures quick processing and response times for efficient workflow integration."
  },
  {
    icon: Lock,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with Keycloak authentication and secure data handling for sensitive financial information."
  }
];

// Technical Capabilities
const technicalCapabilities = [
  {
    icon: FileText,
    title: "Multi-Format Support",
    description: "Supports PDF, JPG, PNG, and other common document formats for maximum compatibility."
  },
  {
    icon: Search,
    title: "Intelligent Classification",
    description: "Automatically classifies documents as invoices or receipts for appropriate processing."
  },
  {
    icon: BarChart3,
    title: "Data Validation",
    description: "Built-in validation ensures extracted data meets quality standards and business rules."
  },
  {
    icon: Network,
    title: "API Integration",
    description: "RESTful API design allows seamless integration with existing financial systems and workflows."
  },
  {
    icon: HardDrive,
    title: "Cloud Storage",
    description: "Secure file storage in Amazon S3 with automatic backup and disaster recovery capabilities."
  },
  {
    icon: Cog,
    title: "Scalable Architecture",
    description: "AWS Fargate-based deployment ensures automatic scaling to handle varying workloads."
  }
];

// Supported Formats
const supportedFormats = [
  { format: "PDF", description: "Portable Document Format", icon: FileText },
  { format: "JPG", description: "JPEG Image Format", icon: FileText },
  { format: "PNG", description: "PNG Image Format", icon: FileText },
  { format: "DOCX", description: "Microsoft Word Documents", icon: FileText }
];

// System Architecture Components
const architectureComponents = [
  {
    icon: Server,
    title: "FastAPI Backend",
    description: "High-performance Python web framework handling API requests and business logic."
  },
  {
    icon: Cloud,
    title: "AWS Cloud Services",
    description: "Route 53, Application Load Balancer, Fargate, and S3 for scalable cloud infrastructure."
  },
  {
    icon: Brain,
    title: "AWS Bedrock (Claude)",
    description: "Advanced LLM for intelligent document processing and data extraction."
  },
  {
    icon: Database,
    title: "MongoDB Database",
    description: "NoSQL database for storing structured extracted data and metadata."
  },
  {
    icon: Shield,
    title: "Keycloak Security",
    description: "Identity and access management for secure authentication and authorization."
  }
];

// Integrations
const integrations = [
  {
    icon: Cloud,
    title: "AWS Route 53",
    description: "Domain routing and DNS management for reliable service access."
  },
  {
    icon: Network,
    title: "Application Load Balancer",
    description: "Distributes incoming traffic across multiple targets for high availability."
  },
  {
    icon: Server,
    title: "AWS Fargate",
    description: "Serverless container execution without managing underlying infrastructure."
  },
  {
    icon: HardDrive,
    title: "Amazon S3",
    description: "Object storage service for secure file storage and retrieval."
  }
];

// Cost Factors
const costFactors = [
  {
    factor: "Input Tokens",
    cost: "$0.0024",
    description: "Cost per 1K input tokens processed by Claude AI"
  },
  {
    factor: "Output Tokens",
    cost: "$0.04",
    description: "Cost per 1K output tokens generated by Claude AI"
  },
  {
    factor: "Compute Resources",
    cost: "$0.0007",
    description: "AWS Fargate compute costs for processing"
  },
  {
    factor: "Storage",
    cost: "Variable",
    description: "Amazon S3 storage costs based on usage"
  },
  {
    factor: "Data Transfer",
    cost: "Variable",
    description: "Network costs for data transfer and API calls"
  }
];

const InvoiceAssistant = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const formatsRef = useRef(null);
  const architectureRef = useRef(null);
  const workflowRef = useRef(null);
  const integrationsRef = useRef(null);
  const costRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true, margin: "-100px" });
  const isFormatsInView = useInView(formatsRef, { once: true, margin: "-100px" });
  const isArchitectureInView = useInView(architectureRef, { once: true, margin: "-100px" });
  const isWorkflowInView = useInView(workflowRef, { once: true, margin: "-100px" });
  const isIntegrationsInView = useInView(integrationsRef, { once: true, margin: "-100px" });
  const isCostInView = useInView(costRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="section-primary min-h-[70vh] relative overflow-hidden flex items-center pt-20">
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

        <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
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

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6"
            >
              <Receipt className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">AI Invoice Assistant</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
              Smart Invoice Processing with{" "}
              <span className="text-gradient">AI-Powered Extraction</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-primary-foreground/80 mb-6 leading-relaxed"
            >
              Transform your financial workflow with our AI-powered invoice assistant that automatically reads, extracts, and structures data from invoices and receipts, saving time and reducing manual errors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <span className="px-3 py-1 rounded-full bg-white/10 text-primary-foreground/80 text-sm">
                AI-Powered Data Extraction
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-primary-foreground/80 text-sm">
                Cloud-Based Processing
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-primary-foreground/80 text-sm">
                JSON Structured Output
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-start gap-4"
            >
              <a
                href="/pdfs/feasibilities/Brandsoft - EG Invoice Assistant_FeasibilityReport (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-6 py-3 inline-flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View PDF
              </a>
              <Link
                to="/feasibility/invoice-assistant"
                className="btn-secondary px-6 py-3 inline-flex items-center gap-2"
              >
                View More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="section-white py-24 lg:py-32 relative overflow-hidden" ref={featuresRef}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
              Powerful <span className="text-gradient">AI Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Experience the next generation of invoice processing with our comprehensive AI-powered features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card h-full p-6 lg:p-8 bg-white/95 hover:bg-white transition-all duration-300 hover:shadow-2xl">
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={capabilitiesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-primary-foreground text-sm font-semibold mb-6 uppercase tracking-wide">
              Technical Capabilities
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Advanced <span className="text-gradient">Processing Engine</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Built with cutting-edge technology to handle complex document processing requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card h-full p-6 lg:p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <capability.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Formats Section */}
      <section className="section-white py-24 lg:py-32 relative overflow-hidden" ref={formatsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Supported Formats
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Universal <span className="text-gradient">Document Support</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Process invoices and receipts in multiple formats for maximum flexibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportedFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isFormatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="glass-card p-6 bg-white/95 hover:bg-white transition-all duration-300 hover:shadow-2xl">
                  <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <format.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {format.format}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {format.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={architectureRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isArchitectureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-primary-foreground text-sm font-semibold mb-6 uppercase tracking-wide">
              System Architecture
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Cloud-Native <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Scalable, secure, and reliable architecture built on AWS cloud services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isArchitectureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card h-full p-6 lg:p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <component.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary-foreground mb-3">
                    {component.title}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {component.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-white py-24 lg:py-32 relative overflow-hidden" ref={workflowRef}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWorkflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Processing Workflow
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Seamless <span className="text-gradient">Document Processing</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From upload to structured output - experience our intelligent processing pipeline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWorkflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 bg-white max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">Document Upload</h3>
                  <p className="text-muted-foreground">User uploads invoice or receipt through secure API</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">Cloud Routing</h3>
                  <p className="text-muted-foreground">Request routed through Route 53 and Load Balancer to backend</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">File Storage</h3>
                  <p className="text-muted-foreground">Document securely stored in Amazon S3</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">AI Processing</h3>
                  <p className="text-muted-foreground">AWS Bedrock (Claude) analyzes document and extracts data</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">Data Storage</h3>
                  <p className="text-muted-foreground">Structured JSON data stored in MongoDB</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">Response</h3>
                  <p className="text-muted-foreground">System returns extracted data with confidence scores</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={integrationsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntegrationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-primary-foreground text-sm font-semibold mb-6 uppercase tracking-wide">
              AWS Integrations
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Enterprise-Grade <span className="text-gradient">Cloud Services</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Powered by AWS cloud services for reliability, scalability, and security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isIntegrationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="glass-card p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <integration.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
                    {integration.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {integration.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section className="section-white py-24 lg:py-32 relative overflow-hidden" ref={costRef}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCostInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Cost Analysis
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Transparent <span className="text-gradient">Pricing Model</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Understand the cost breakdown for AI-powered invoice processing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCostInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 bg-white max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {costFactors.map((factor, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {factor.factor}
                  </h3>
                  <p className="text-2xl font-bold text-accent mb-2">
                    {factor.cost}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-accent/5 rounded-lg">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                Total Cost Estimate
              </h3>
              <p className="text-muted-foreground mb-4">
                Approximate cost per document: <span className="font-bold text-accent">$0.043</span>
              </p>
              <p className="text-sm text-muted-foreground">
                * Costs may vary based on document complexity, size, and usage volume. Contact us for detailed pricing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvoiceAssistant;