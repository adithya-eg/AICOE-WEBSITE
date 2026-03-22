import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  ArrowLeft, 
  Check, 
  Brain,
  Shield,
  FileText,
  Users,
  Settings,
  Globe,
  Lock,
  Cloud,
  Layers,
  Server,
  Workflow,
  ExternalLink,
  Rocket,
  Mail,
  Mic,
  Stethoscope,
  Database,
  FileAudio,
  ClipboardList,
  Languages,
  ShieldCheck,
  Activity,
  Cog
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jasminBanner from "@/data/images/JASMIN BANNER.png";

// Core Features
const coreFeatures = [
  {
    icon: Mic,
    title: "Speech-to-Text Transcription",
    description: "Automated transcription using Azure Cognitive Services Speech-to-Text with support for medical terminology and speaker identification.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Support for multiple languages including English (en-US) and Danish (da-DK) with configurable language settings per session.",
  },
  {
    icon: ClipboardList,
    title: "Customizable Journal Notes",
    description: "Generate structured output templates (SOAP, DAP, narrative summary) with configurable sections tailored to different specialties.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description: "Super Admin, Admin, End User, and Internal User roles with granular permissions for secure platform management.",
  },
  {
    icon: FileText,
    title: "AI-Powered Summarization",
    description: "Generate structured journal notes using Azure OpenAI, enriched with contextual medical knowledge and formatted for clinical use.",
  },
  {
    icon: Settings,
    title: "Phrase List Customization",
    description: "Client-specific phrase lists to enhance speech recognition accuracy with domain-specific medical terminology.",
  },
];

// Technical Capabilities
const technicalCapabilities = [
  {
    icon: Brain,
    title: "Azure OpenAI Integration",
    description: "Leverage Azure OpenAI Service for intelligent summarization and context-aware response generation with GPT-4o model.",
  },
  {
    icon: Shield,
    title: "HIPAA-Aligned Practices",
    description: "Implementation of secure authentication, authorization, and encryption of data in transit and at rest following healthcare compliance.",
  },
  {
    icon: Cloud,
    title: "Azure Cloud Architecture",
    description: "Built on Azure with Web Apps, Blob Storage, Cosmos DB, Cognitive Services, and OpenAI for enterprise-grade reliability.",
  },
  {
    icon: Database,
    title: "Cosmos DB Storage",
    description: "NoSQL database for storing transcriptions, summaries, and metadata with fast querying and retrieval capabilities.",
  },
  {
    icon: Lock,
    title: "JWT Authentication",
    description: "Secure authentication using JWT tokens with encrypted client secrets for protected API access.",
  },
  {
    icon: Cog,
    title: "Template Management",
    description: "Flexible prompt and template management system enabling healthcare-specific documentation standards and workflows.",
  },
];

// External Integrations
const integrations = [
  {
    name: "Azure Blob Storage",
    description: "Secure storage for audio files with organized container structures based on user or session IDs.",
    icon: Cloud,
  },
  {
    name: "Azure Cognitive Services",
    description: "Speech-to-Text API with medical vocabulary support and speaker diarization capabilities.",
    icon: Mic,
  },
  {
    name: "Azure OpenAI",
    description: "GPT-4o powered summarization for generating clinical journal notes from transcriptions.",
    icon: Brain,
  },
  {
    name: "Azure Cosmos DB",
    description: "Scalable NoSQL database for metadata, transcriptions, and structured clinical data.",
    icon: Database,
  },
];

// Solution Scope - Inclusions
const inclusions = [
  "Audio Upload API",
  "Speech-to-Text",
  "AI Summarization",
  "Journal Notes",
  "Multi-language",
  "Role Management",
  "HIPAA Aligned",
  "Data Encryption",
  "Azure Cloud",
  "GDPR Compliance",
];

// Architecture Components
const architectureComponents = [
  {
    title: "FastAPI Backend",
    description: "Python-based backend with FastAPI for handling HTTP requests, audio processing, and API endpoints.",
    features: ["Audio Upload", "Transcription API", "Report Generation", "Prompt Management"],
  },
  {
    title: "Azure Services",
    description: "Comprehensive Azure integration with Cognitive Services, OpenAI, Blob Storage, and Cosmos DB.",
    features: ["Speech-to-Text", "OpenAI GPT-4o", "Blob Storage", "Cosmos DB"],
  },
  {
    title: "Data Management",
    description: "Secure data handling with encryption at rest and in transit, following HIPAA and GDPR guidelines.",
    features: ["Encryption", "Audit Logging", "Metadata Tracking", "Secure Storage"],
  },
  {
    title: "Processing Pipeline",
    description: "Intelligent audio processing workflow from upload through transcription to summarized clinical notes.",
    features: ["Audio Processing", "Speaker Diarization", "Medical Vocabulary", "Note Generation"],
  },
];

// User Roles
const userRoles = [
  {
    title: "Super Admin",
    description: "Full platform control with client management, system configuration, and monitoring capabilities.",
    permissions: ["Register new clients", "Manage system settings", "Monitor usage metrics", "Configure integrations"],
  },
  {
    title: "Admin",
    description: "Content and template management with prompt creation, user role assignment, and analytics access.",
    permissions: ["Create prompts", "Manage templates", "Assign user roles", "Access analytics"],
  },
  {
    title: "End User",
    description: "Clinical documentation with audio upload, transcription access, and report generation.",
    permissions: ["Upload audio files", "View transcriptions", "Generate reports", "Manage phrase lists"],
  },
  {
    title: "Internal User",
    description: "Limited access to predefined functionality for internal operations without administrative privileges.",
    permissions: ["View-only access", "Limited operations", "Predefined templates", "No settings access"],
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

const Jasmin = () => {
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
                <Stethoscope className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground text-sm font-medium">Speech to Medical Report Generation</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
              >
                HC-JASMIN
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
              >
                An AI-driven platform that transforms audio-based doctor-patient conversations into 
                structured, meaningful journal notes. Automate clinical documentation, reduce administrative 
                burden, and ensure accuracy with Generative AI and Azure-based services.
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
                  href="https://egonline.sharepoint.com/:b:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/Jasmin/Healthcare_InfoDoc_Jasmin_Technical%20Documentation.pdf?csf=1&web=1&e=JTZp6A"
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
                <motion.a
                  href="https://egonline.sharepoint.com/:b:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/Jasmin/Healthcare_InfoDoc_Jasmin_Functional%20Documentation.pdf?csf=1&web=1&e=wEQlLc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent px-6 py-3 inline-flex items-center justify-center gap-2"
                  variants={buttonHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <FileText className="w-5 h-5" />
                  View Functional Documentation
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
                  src={jasminBanner}
                  alt="HC-JASMIN Interface"
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
                  Problem Statement
                </span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                  The Challenge We Solve
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In clinical settings, accurately documenting conversations between doctors and patients 
                  is essential for maintaining comprehensive medical records, ensuring continuity of care, 
                  and reducing administrative burden on healthcare professionals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Manual note-taking during or after consultations is time-consuming and prone to omission 
                  or error. HC-JASMIN addresses the need for an automated, secure, and scalable solution to 
                  transcribe doctor-patient conversations and generate structured journal notes.
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
                  Proposed Solution
                </span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                  Intelligent Clinical Documentation
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Leveraging Generative AI and Azure-based services, HC-JASMIN transforms audio-based 
                  doctor-patient conversations into structured, meaningful journal notes. The platform 
                  automates transcription and summarization while ensuring clinical relevance and scalability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The solution enhances productivity by reducing manual effort, improving quality of 
                  patient records, and supporting seamless integration into existing clinical workflows 
                  with HIPAA-aligned data handling practices.
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
              Powerful Healthcare Capabilities
            </h2>
            <p className="text-muted-foreground text-lg">
              HC-JASMIN provides a comprehensive suite of AI-driven functionalities for clinical documentation
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
              Sophisticated AI processing with healthcare-grade security and compliance
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
              Azure Cloud Architecture
            </h2>
            <p className="text-muted-foreground text-lg">
              Built on Azure for scalability, reliability, and healthcare compliance
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
              Azure Services
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Cloud Component Integration
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Comprehensive Azure service integration for robust healthcare documentation
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

      {/* Gallery Section - See HC-JASMIN in Action */}
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
              See HC-JASMIN in Action
            </h2>
            <p className="text-muted-foreground text-lg">
              Intuitive interface designed for healthcare professionals
            </p>
          </motion.div>

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
                src={jasminBanner}
                alt="HC-JASMIN Dashboard"
                className="w-full h-auto"
              />
            </motion.div>
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
              Visual representations of HC-JASMIN's cloud architecture and functional flow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 bg-white"
            >
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Cloud Diagram
              </h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Cloud Diagram - Link to be updated</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 bg-white"
            >
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Functional Diagram
              </h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Functional Diagram - Link to be updated</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Get Started
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Transform Clinical Documentation?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Get in touch with our team to see how HC-JASMIN can revolutionize 
              how your organization handles medical transcription and documentation.
            </p>

            {/* Contact Information */}
            <motion.div 
              className="glass-card p-8 bg-white/95 mb-8"
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
                href="https://egonline.sharepoint.com/:b:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/Jasmin/Healthcare_InfoDoc_Jasmin_Technical%20Documentation.pdf?csf=1&web=1&e=JTZp6A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-8 py-4 inline-flex items-center justify-center gap-2"
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <FileText className="w-5 h-5" />
                View Technical Documentation
              </motion.a>
              <motion.a
                href="https://egonline.sharepoint.com/:b:/r/sites/EGAICOE/Shared%20Documents/AI%20COE%20Usecases%20Handover%20Documentation/Jasmin/Healthcare_InfoDoc_Jasmin_Functional%20Documentation.pdf?csf=1&web=1&e=wEQlLc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-primary-foreground font-semibold transition-all hover:bg-white/20 inline-flex items-center justify-center gap-2"
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <FileText className="w-5 h-5" />
                View Functional Documentation
              </motion.a>
              <Link
                to="/#products"
                className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-primary-foreground font-semibold transition-all hover:bg-white/20 inline-flex items-center justify-center gap-2"
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

export default Jasmin;
