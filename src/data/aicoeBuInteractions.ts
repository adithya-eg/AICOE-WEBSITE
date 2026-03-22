import { Bot, Brain, Receipt, TrendingDown, MessageSquare, FileText, Shield, Zap, LucideIcon } from "lucide-react";

export interface AicoeBuInteraction {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  category: string;
  businessUnit: string;
  preparedBy: string;
  version: string;
  pdfPath: string;
  executiveSummary: string;
  objectives: string[];
  keyTechnologies: string[];
  theoreticalBackground: string[];
  risks: { risk: string; mitigation: string }[];
  limitations: string[];
  conclusion: string;
}

export const aicoeBuInteractions: AicoeBuInteraction[] = [
  {
    id: "jasmin-speech-to-text",
    title: "Jasmin - Speech to Text - HealthCare | InfoDoc",
    shortTitle: "Jasmin Speech to Text",
    tagline: "Speech Recognition for Healthcare Documentation",
    description: "Advanced speech-to-text solution for healthcare documentation and patient records.",
    icon: MessageSquare,
    category: "AI & Healthcare",
    businessUnit: "HealthCare | InfoDoc",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "",
    executiveSummary: "Speech to text for healthcare.",
    objectives: ["Accurate transcription", "Integration with EHR"],
    keyTechnologies: ["Speech recognition", "NLP"],
    theoreticalBackground: ["ASR models"],
    risks: [{ risk: "Accuracy", mitigation: "Model training" }],
    limitations: ["Accents"],
    conclusion: "Improves documentation."
  },
  {
    id: "bolig-accounting-usecase",
    title: "Bolig Accounting Usecase - Housing | Bolivian",
    shortTitle: "Bolig Accounting",
    tagline: "AI-Driven Accounting for Housing Management",
    description: "Automated accounting solutions for housing management in Bolivian context.",
    icon: Receipt,
    category: "AI & Finance",
    businessUnit: "Housing | Bolivian",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "",
    executiveSummary: "Accounting automation for housing.",
    objectives: ["Automate entries", "Compliance"],
    keyTechnologies: ["AI", "Accounting software"],
    theoreticalBackground: ["Automated accounting"],
    risks: [{ risk: "Errors", mitigation: "Audits" }],
    limitations: ["Local regulations"],
    conclusion: "Streamlines operations."
  },
  {
    id: "retail-chatbot",
    title: "Retail Chatbot - Retail & Wholesale",
    shortTitle: "Retail Chatbot",
    tagline: "Intelligent Chatbot for Retail Customer Service",
    description: "AI-powered chatbot for enhancing customer interactions in retail and wholesale.",
    icon: Bot,
    category: "AI & Customer Service",
    businessUnit: "Retail & Wholesale",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "",
    executiveSummary: "Chatbot for retail.",
    objectives: ["Customer support", "Sales assistance"],
    keyTechnologies: ["NLP", "Chatbot framework"],
    theoreticalBackground: ["Conversational AI"],
    risks: [{ risk: "Misunderstanding", mitigation: "Training" }],
    limitations: ["Complex queries"],
    conclusion: "Improves service."
  },
  {
    id: "deviation-usecase",
    title: "Deviation Usecase - ConstructionSite",
    shortTitle: "Deviation Analysis",
    tagline: "AI Analysis of Deviations in Construction Projects",
    description: "Analyzing deviations in construction projects using AI for better project management.",
    icon: FileText,
    category: "AI & Project Management",
    businessUnit: "ConstructionSite",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "",
    executiveSummary: "Deviation analysis in construction.",
    objectives: ["Identify deviations", "Risk mitigation"],
    keyTechnologies: ["AI", "Data analysis"],
    theoreticalBackground: ["Deviation detection"],
    risks: [{ risk: "False alarms", mitigation: "Thresholds" }],
    limitations: ["Data availability"],
    conclusion: "Enhances project control."
  },
  {
    id: "routines-usecase",
    title: "AI Aided Routine Search (RoutinesBot) - ConstructionSite",
    shortTitle: "AI Aided Routine Search",
    tagline: "Intelligent Document Retrieval and Optimization for Construction Routines",
    description: "An AI-powered chatbot system that optimizes access to organizational documents and routines in construction companies, providing fast, secure, and context-aware information retrieval.",
    icon: Brain,
    category: "AI & Operations",
    businessUnit: "ConstructionSite",
    preparedBy: "AI COE Team",
    version: "",
    pdfPath: "/pdfs/bu-collaborations/AI Aided Routine Search_Feasibility Report (1).pdf",
    executiveSummary: `The AI Aided Routine Search (RoutinesBot) is an intelligent chatbot system designed to revolutionize how construction companies access and utilize their organizational documents and routines. The system addresses critical challenges in document storage, retrieval, and access control by implementing advanced AI techniques including RAG (Retrieval-Augmented Generation), semantic search, and context-based filtering. By integrating Azure Blob Storage with AWS services, the solution provides secure, multilingual support for routine optimization across safety procedures, compliance rules, and operational workflows. The biggest challenge addressed is access control, ensuring users only see their authorized company and project data. The proposed solution leverages AWS Bedrock for AI processing and OpenSearch for vector-based search to deliver accurate, hallucination-free responses with direct document linking.`,
    objectives: [
      "Chat-Based Interface - Enable users to interact with documents using natural language chat",
      "Automated Ingestion - Automatically add new documents to the knowledge base without manual intervention",
      "Security Enforcement - Implement strict access controls based on company, project, and user role",
      "Multilingual Support - Provide support for English and Norwegian language queries",
      "Document Linking - Deliver answers with direct links to original source documents",
      "Contextual Access - Filter results based on company ID, project ID, and user permissions"
    ],
    keyTechnologies: [
      "AWS Bedrock - Hosts AI models for response generation and embedding creation",
      "OpenSearch - Vector database for storing embeddings and performing similarity search",
      "RAG (Retrieval-Augmented Generation) - Combines retrieval and generation for accurate answers",
      "Embeddings - Converts text into vectors for semantic search capabilities",
      "Azure Blob Storage - Primary storage for organizational documents",
      "Amazon S3 - Temporary storage for cross-cloud data processing"
    ],
    theoreticalBackground: [
      "RAG Pipeline: Retrieval-Augmented Generation works by first retrieving relevant data from the knowledge base, then using AI to generate accurate answers based only on retrieved content, eliminating hallucinations",
      "Semantic Search: Goes beyond keyword matching to understand the meaning and context of user queries, providing more relevant results",
      "Vector Embeddings: Text is converted into numerical vectors that capture semantic meaning, enabling similarity-based search rather than exact keyword matches",
      "Context-Based Filtering: Results are filtered based on organizational hierarchy (company → project → user role) to ensure data security and relevance",
      "Step-by-Step RAG Execution: User query → Vector conversion → Similarity search → Content retrieval → AI generation → Final answer with citations"
    ],
    risks: [
      { risk: "AI Hallucination", mitigation: "Implement grounded responses using only retrieved data, add citations to source documents, and use prompt engineering to control AI behavior" },
      { risk: "Access Control Failures", mitigation: "Multi-layer validation including bearer tokens, API keys, and role-based filtering at database and application levels" },
      { risk: "Cross-Cloud Integration Issues", mitigation: "Secure connection protocols between Azure and AWS, with error handling and retry mechanisms for data transfer" },
      { risk: "Multilingual Processing Inaccuracies", mitigation: "Test and validate AI models for Norwegian language support, implement fallback mechanisms for unsupported queries" },
      { risk: "Document Processing Delays", mitigation: "Automated ingestion pipelines with status tracking, background processing, and user notifications for completion" }
    ],
    limitations: [
      "Documents must be stored as HTML in Azure Blob Storage for current processing pipeline",
      "Cross-cloud architecture requires secure connection management between Azure and AWS",
      "Multilingual support currently limited to English and Norwegian",
      "New documents require processing time before becoming searchable",
      "System depends on AWS Bedrock and OpenSearch availability"
    ],
    conclusion: "The AI Aided Routine Search (RoutinesBot) represents a significant advancement in organizational document management for construction companies. By implementing RAG-based AI with robust security controls, the system delivers faster information retrieval, improved productivity, and better compliance while maintaining strict access controls. The solution successfully addresses the core challenges of document accessibility, contextual access, and manual ingestion through automated, AI-driven optimization. Expected benefits include reduced search time, enhanced operational efficiency, and improved safety compliance through instant access to critical procedures and workflows."
  },
  {
    id: "dpa-tia-copilot-agent",
    title: "DPA Analysis Agent (Microsoft Copilot Studio)",
    shortTitle: "DPA Analysis Agent",
    tagline: "Automated DPA to TIA Legal Document Processing",
    description: "AI-powered agent that reads Data Processing Addendums, extracts critical information, and automatically fills Transfer Impact Assessment Excel templates for GDPR compliance.",
    icon: Shield,
    category: "AI & Legal",
    businessUnit: "Group Legal & Compliance",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "/pdfs/bu-collaborations/TIA_DPA_Analysis_Agent.pdf",
    executiveSummary: `The DPA Analysis Agent is an AI-powered solution built on Microsoft Copilot Studio that automates the processing of Data Processing Addendums (DPAs) and Transfer Impact Assessments (TIAs). The agent reads legal documents, extracts precise information without hallucination, and populates TIA Excel templates automatically. This eliminates manual effort, improves accuracy, and ensures GDPR compliance for international data transfers. The system handles missing data tracking, maintains exact data extraction, and preserves Excel template structure while providing a user-friendly interface for legal teams.`,
    objectives: [
      "Automate DPA document reading and information extraction",
      "Populate TIA Excel templates with extracted data automatically",
      "Ensure no hallucination - only extract existing data from documents",
      "Track missing information and mark unspecified fields appropriately",
      "Maintain Excel template compliance and formatting integrity"
    ],
    keyTechnologies: [
      "Microsoft Copilot Studio - Agent creation and orchestration platform",
      "Natural Language Processing - Document text extraction and parsing",
      "Excel Integration - Template population and cell mapping",
      "GDPR Compliance Framework - Legal document processing standards",
      "Prompt Engineering - System instructions for accurate data extraction"
    ],
    theoreticalBackground: [
      "Transfer Impact Assessment (TIA): Evaluates safety of international data transfers under GDPR Article 44-50",
      "Schrems II Judgment: 2020 ruling requiring additional safeguards for data transfers",
      "Standard Contractual Clauses (SCC): Legal mechanisms for compliant data transfers",
      "Data Processing Addendum (DPA): Defines data processing responsibilities and safeguards",
      "Automated Legal Document Processing: AI extraction vs manual interpretation trade-offs"
    ],
    risks: [
      { risk: "Legal interpretation errors", mitigation: "Strict no-assumption rules and human review requirements" },
      { risk: "Missing critical compliance data", mitigation: "Comprehensive missing field tracking and alerts" },
      { risk: "Template structure corruption", mitigation: "Read-only Excel handling with cell mapping validation" },
      { risk: "GDPR compliance gaps", mitigation: "Legal expert validation and audit trail requirements" },
      { risk: "External link processing limitations", mitigation: "Explicit rules against following URLs or external references" }
    ],
    limitations: [
      "Cannot interpret legal context or meaning beyond exact text extraction",
      "Unable to follow external links or access referenced documents",
      "Limited to DPA and TIA document types and Excel template formats",
      "Requires human review for complex legal interpretations",
      "Dependent on document quality and completeness for accurate extraction"
    ],
    conclusion: "The DPA Analysis Agent successfully automates the tedious process of legal document processing while maintaining high precision and compliance standards. By combining AI extraction capabilities with strict validation rules, it significantly reduces manual effort while ensuring accuracy. The system's ability to track missing information and maintain template integrity makes it a valuable tool for legal teams, though it works best as part of a hybrid approach combining automation with human expertise for complex legal assessments."
  },
  {
    id: "churn-prediction-nordic",
    title: "Churn Prediction for Nordic Market",
    shortTitle: "Churn Prediction",
    tagline: "Predictive Customer Retention Across Verticals",
    description: "A data-driven approach to predict and mitigate customer churn across diverse vertical software products tailored for Healthcare & Citizen Welfare, Industry & Trade Management, and Construction & Property Management in the Nordics.",
    icon: TrendingDown,
    category: "AI & Business Analytics",
    businessUnit: "Nordic Markets",
    preparedBy: "Tarun G",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/Churn Prediction.pdf",
    executiveSummary: `This churn prediction initiative empowers organizations to proactively identify at-risk customers, understand root causes of potential departure, and implement targeted retention strategies.

Key Focus Areas:
• Healthcare & Citizen Welfare vertical
• Industry & Trade Management sector  
• Construction & Property Management domain

Core Capabilities:
• Predictive modeling with ensemble algorithms
• Real-time risk scoring dashboards
• Automated retention playbooks
• Cross-vertical churn definition adaptation

Expected Business Impact:
• Up to 15% increase in renewal rates
• Reduced support costs through preemptive action
• Enhanced lifetime value via targeted upsell opportunities

Solution Approach:
• Tailored churn definitions per vertical
• Domain-specific metrics integration
• Advanced feature engineering pipeline
• Explainable AI outputs for stakeholder trust`,
    objectives: [
      "Identify At-Risk Customers - Predict which specific customers (doctors, clinics, businesses, builders, property managers) are likely to churn in 30/60/90 days",
      "Understand Churn Drivers - Analyze key factors (declining usage, unresolved tickets, payment issues, unutilized features) contributing to churn risk per vertical",
      "Enable Timely Intervention - Predict timeframe for churn enabling prioritized retention efforts on high-value accounts",
      "Quantify Financial Impact - Calculate potential revenue loss associated with at-risk customers to prioritize retention",
      "Optimize Retention Strategies - Determine most impactful actions (targeted training, proactive support, special offers) per customer segment"
    ],
    keyTechnologies: [
      "Ensemble ML Algorithms - Calibrated per vertical with explainable outputs for churn prediction",
      "Data Integration Connectors - Seamless integration with ERP, CRM, EMR, and billing systems",
      "Real-time Dashboard - Risk scoring, segment filters, and action recommendations",
      "Automated Retention Playbooks - Email/SMS campaigns, in-app prompts, and account manager task lists",
      "Feature Engineering Pipeline - Domain-specific metrics (patient no-show rates, project milestones missed)",
      "NPS/CSAT Analytics - Customer satisfaction and loyalty score integration"
    ],
    theoreticalBackground: [
      "Healthcare Churn: Doctors/Clinics discontinuing EHR, practice management, or telehealth subscriptions - indicated by drop in patient records, appointments, logins, or license non-renewal",
      "Industry & Trade Churn: Companies cancelling ERP, supply chain, or trade documentation software - signaled by decreased transaction volumes, infrequent logins, or integration failures",
      "Construction Churn: Builders ending project management, BIM, or estimation software use - warning signs include drop in new projects, underutilization of collaboration features",
      "Property Management Churn: Property managers stopping tenant communication or rent collection software - signaled by low tenant interactions, unresolved maintenance tickets",
      "Data Categories: Customer Account/Subscription, Product Usage/Engagement, Support/Interaction, Vertical-Specific Metrics, Feedback/Sentiment"
    ],
    risks: [
      { risk: "Data quality issues across systems", mitigation: "ETL validation and data quality monitoring" },
      { risk: "Model accuracy varies by vertical", mitigation: "Vertical-specific model calibration and continuous retraining" },
      { risk: "Privacy concerns (especially healthcare)", mitigation: "Strict adherence to data privacy regulations and anonymization" },
      { risk: "Intervention fatigue from customers", mitigation: "Intelligent throttling of retention actions based on customer preferences" },
      { risk: "External market factors unaccounted", mitigation: "Integration of economic indicators and regulatory change signals" }
    ],
    limitations: [
      "Churn definitions and indicators differ significantly across verticals requiring tailored models",
      "Healthcare data requires strict privacy compliance (HIPAA-equivalent in Nordics)",
      "External factors (market changes, competitor activities) may not be fully captured",
      "Model effectiveness depends on quality and completeness of historical data"
    ],
    conclusion: "By investing in this tailored Churn Prediction solution, each product division can proactively identify and retain valuable customers, fostering sustainable growth. Expected ROI includes up to 15% increase in renewal rates, reduced support costs through issue preemption, and boosted lifetime value via upsell opportunities. The implementation roadmap covers Data Collection & Preparation, Model Development & Validation per vertical, Pilot Program & Deployment, and Monitoring & Iteration phases."
  }
];