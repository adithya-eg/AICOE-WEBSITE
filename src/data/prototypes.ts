import { Bot, Database, Receipt, TrendingDown, Brain, LucideIcon } from "lucide-react";

export interface Prototype {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  category: string;
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

export const prototypes: Prototype[] = [
  {
    id: "invoice-assistant",
    title: "EG Invoice Assistant - AI-Powered Invoice Processing",
    shortTitle: "EG Invoice Assistant",
    tagline: "AI-Powered Invoice Processing and Data Extraction",
    description: "An AI-powered system that reads invoices and receipts, automatically extracts important data, and converts it into structured JSON format for efficient financial workflow management.",
    icon: Receipt,
    category: "AI & Finance",
    preparedBy: "AICOE Team",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/Brandsoft - EG Invoice Assistant_FeasibilityReport (2).pdf",
    executiveSummary: "The EG Invoice Assistant is an AI-powered system that reads invoices and receipts, automatically extracts important data, and converts it into structured JSON format. It helps finance teams save time and avoid manual work by intelligently processing financial documents.",
    objectives: [
      "Automatically extract key data from invoices and receipts",
      "Convert extracted data into structured JSON format",
      "Improve accuracy and speed of financial data processing",
      "Reduce manual work and human errors in invoice processing"
    ],
    keyTechnologies: [
      "FastAPI - High-performance Python web framework",
      "AWS Bedrock (Claude) - Advanced AI for document processing",
      "AWS Route 53 - Domain routing and DNS management",
      "Application Load Balancer - Traffic distribution",
      "AWS Fargate - Serverless container execution",
      "Amazon S3 - Secure file storage",
      "MongoDB - NoSQL database for data storage",
      "Keycloak - Identity and access management"
    ],
    theoreticalBackground: [
      "AI-powered document processing leverages machine learning to understand document structure",
      "Cloud-native architecture ensures scalability and reliability",
      "Structured data extraction transforms unstructured content into JSON format"
    ],
    risks: [
      { risk: "AI extraction accuracy may vary with document quality", mitigation: "Implement confidence scoring and validation" },
      { risk: "High processing costs for large volumes", mitigation: "Optimize AI usage and caching" },
      { risk: "Data security concerns", mitigation: "Use encrypted storage and secure communications" }
    ],
    limitations: [
      "Processing accuracy depends on document quality",
      "Currently supports specific document formats",
      "AI processing may have latency for complex documents"
    ],
    conclusion: "The EG Invoice Assistant represents a significant advancement in automated financial document processing, providing a scalable, accurate, and efficient solution for invoice processing workflows."
  },
  {
    id: "text-to-sql-aicoe",
    title: "Text to SQL - AICOE",
    shortTitle: "Text to SQL",
    tagline: "Natural Language to SQL Query Conversion",
    description: "Convert natural language queries to SQL statements for database interaction.",
    icon: Database,
    category: "AI & Data",
    preparedBy: "AICOE Team",
    version: "v1.0",
    pdfPath: "",
    executiveSummary: "NL to SQL conversion.",
    objectives: ["Simplify queries", "User-friendly"],
    keyTechnologies: ["NLP", "SQL"],
    theoreticalBackground: ["Query generation"],
    risks: [{ risk: "Ambiguity", mitigation: "Context" }],
    limitations: ["Complex queries"],
    conclusion: "Useful for non-experts."
  },
  {
    id: "on-prem-chatbot-danish-defense",
    title: "On-Prem Chatbot - Version 2 - Danish Defense",
    shortTitle: "On-Prem Chatbot v2",
    tagline: "Enhanced Secure On-Premises AI Chatbot for Danish Defense",
    description: "Version 2 of the fully air-gapped, on-premises AI chatbot for Danish Defense — featuring improved LLM capabilities, multi-document RAG, enhanced role-based access control, and a polished chat UI — all running entirely within the controlled environment with zero external data transmission.",
    icon: Bot,
    category: "AI & Security",
    preparedBy: "AICOE Team",
    version: "v2.0",
    pdfPath: "/pdfs/prototypes/onpremchatbot v2.pdf",
    executiveSummary: `On-Prem Chatbot Version 2 is an enhanced iteration of the secure, air-gapped AI chatbot solution designed for Danish Defense. Building on Version 1's foundational RAG pipeline and local LLM deployment, Version 2 introduces significant improvements across all layers — a more capable locally deployed language model, an expanded multi-source document ingestion pipeline, refined role-based access control with clearance-level filtering, and a redesigned user interface optimised for operational use.

The system continues to operate entirely within the organisation's on-premises infrastructure, ensuring classified documents, user queries, and generated responses never leave the controlled environment. Version 2 addresses the key limitations identified in Version 1: inference latency, multi-document cross-referencing accuracy, and user experience friction. The solution now supports richer query handling, session memory for multi-turn conversations, and structured document citation in responses.`,
    objectives: [
      "Upgrade Local LLM - Deploy a higher-capability quantised model for improved response quality and instruction-following within on-premises hardware constraints",
      "Multi-Source RAG Pipeline - Extend document ingestion to support multiple simultaneous knowledge bases with cross-source retrieval and ranking",
      "Session Memory & Multi-Turn Conversations - Implement conversation history context so users can ask follow-up questions without repeating prior context",
      "Structured Document Citations - Return answers with precise source citations (document name, section, page) to enable users to verify responses",
      "Enhanced Role-Based Access Control - Enforce granular clearance-level filtering at the retrieval layer with audit logging of all queries per user",
      "Improved UI/UX - Redesigned chat interface with message history, document source display, confidence indicators, and admin panel for knowledge base management",
      "Performance Optimisation - Reduce inference latency through model caching, optimised chunking strategies, and hardware-aware quantisation settings"
    ],
    keyTechnologies: [
      "Local LLM v2 (Ollama + LLaMA 3 / Mistral 7B Instruct) - Upgraded quantised models delivering better reasoning and instruction-following on-premises",
      "LangChain with Conversation Memory - Maintains multi-turn conversation context for coherent follow-up query handling",
      "ChromaDB (Persistent Mode) - Enhanced vector store with persistent collections per clearance level and metadata-based filtering",
      "Multi-Format Document Ingestion - Supports PDF, DOCX, TXT, and HTML formats with structure-preserving chunking",
      "FastAPI Backend v2 - Extended API layer with session management, audit logging, and admin knowledge-base endpoints",
      "React + TypeScript Frontend v2 - Redesigned chat UI with citation display, confidence scores, and document source cards",
      "Active Directory / LDAP Integration - Role and clearance level lookup per authenticated user, integrated with existing defence IAM",
      "On-Premises GPU Server - Optimised model loading with VRAM management for multi-user concurrent inference"
    ],
    theoreticalBackground: [
      "Version 2 LLM Upgrade: Moving from a base instruct model to a fine-tuned instruction-following variant improves response coherence, reduces hallucinations, and enables better structured output formatting within on-premises hardware budgets",
      "Multi-Turn Conversation Memory: LangChain's ConversationBufferWindowMemory maintains a rolling context window of recent exchanges, enabling the model to reference prior Q&A pairs without re-sending the full history on every token",
      "Multi-Source Retrieval with Re-Ranking: Documents from multiple knowledge bases are retrieved independently then re-ranked using a cross-encoder scoring model before being passed to the LLM — improving answer relevance across large document sets",
      "Clearance-Level Metadata Filtering: ChromaDB's metadata filtering capability enables pre-retrieval restriction of vector search scope to document collections tagged with the user's clearance level — preventing information leakage at the vector search layer",
      "Structured Citation Generation: The RAG prompt template is engineered to instruct the LLM to reference source document names and sections in its response, and the retrieval layer returns chunk metadata (filename, page, section) mapped to each cited passage",
      "Quantisation Trade-offs: 4-bit GGUF quantisation reduces model VRAM footprint by ~75% with less than 5% quality degradation on instruction tasks, enabling larger models to run on available hardware compared to full-precision deployment"
    ],
    risks: [
      { risk: "Increased VRAM demand from larger v2 model", mitigation: "Use 4-bit GGUF quantisation with llama.cpp backend; benchmark VRAM footprint vs. quality trade-off per available hardware" },
      { risk: "Conversation memory growing context length beyond model limit", mitigation: "Implement sliding window memory (last N turns) and automatic context trimming with summary compression for older turns" },
      { risk: "Cross-source retrieval returning conflicting information", mitigation: "Implement re-ranking with conflict detection; surface contradictions explicitly in response rather than silently resolving them" },
      { risk: "Clearance-level misassignment in Active Directory", mitigation: "Add secondary validation layer in the application tier; log all access attempts and trigger alerts on anomalous query patterns" },
      { risk: "Admin knowledge base management complexity", mitigation: "Provide a guided admin UI with dry-run ingestion, document preview, and rollback capability for knowledge base updates" },
      { risk: "Session state loss during server restart in air-gapped environment", mitigation: "Persist session state to local database with automatic session restoration on reconnect" }
    ],
    limitations: [
      "Response quality on complex multi-hop reasoning tasks is still constrained by locally deployable open-source model capabilities versus frontier cloud models",
      "Multi-turn memory window is bounded; very long conversations may lose early context requiring users to re-state older facts",
      "Cross-encoder re-ranking adds latency to retrieval phase — may require additional hardware to meet real-time response SLAs under concurrent load",
      "Document ingestion pipeline currently supports PDF, DOCX, TXT, and HTML; scanned image-based PDFs require OCR pre-processing before ingestion",
      "All model and knowledge base updates in air-gapped deployments require manual offline transfer via secured physical media",
      "Admin portal and audit logging capabilities add operational complexity requiring designated system administrator role"
    ],
    conclusion: "On-Prem Chatbot Version 2 represents a substantial evolution of the secure, air-gapped AI assistant for Danish Defence. The upgrade addresses all major limitations identified in Version 1 — delivering improved response quality through a stronger LLM, richer contextual understanding via multi-turn memory, more accurate retrieval through cross-source re-ranking, and a more usable interface with structured citations. The system remains fully self-contained, maintaining the non-negotiable zero-exfiltration security posture required for classified defence environments. Version 2 is production-ready for controlled rollout and provides a solid foundation for future enhancements including domain-specific fine-tuning and voice-interface integration."
  },
  {
    id: "churn-prediction-nordic",
    title: "Churn Prediction for Nordic Market",
    shortTitle: "Churn Prediction",
    tagline: "Predictive Customer Retention Across Verticals",
    description: "A data-driven approach to predict and mitigate customer churn across diverse vertical software products tailored for Healthcare & Citizen Welfare, Industry & Trade Management, and Construction & Property Management in the Nordics.",
    icon: TrendingDown,
    category: "AI & Business Analytics",
    preparedBy: "Tarun G",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/Churn Prediction.pdf",
    executiveSummary: `This churn prediction initiative empowers organisations to proactively identify at-risk customers, understand root causes of potential departure, and implement targeted retention strategies across Healthcare & Citizen Welfare, Industry & Trade Management, and Construction & Property Management verticals in the Nordic market. Core capabilities include predictive modelling with ensemble algorithms, real-time risk scoring dashboards, automated retention playbooks, and cross-vertical churn definition adaptation. Expected business impact includes up to 15% increase in renewal rates, reduced support costs through preemptive action, and enhanced lifetime value via targeted upsell opportunities.`,
    objectives: [
      "Identify At-Risk Customers - Predict which specific customers are likely to churn in 30/60/90 days across all verticals",
      "Understand Churn Drivers - Analyse key factors (declining usage, unresolved tickets, payment issues, unutilised features) contributing to churn risk per vertical",
      "Enable Timely Intervention - Predict timeframe for churn enabling prioritised retention efforts on high-value accounts",
      "Quantify Financial Impact - Calculate potential revenue loss associated with at-risk customers to prioritise retention",
      "Optimise Retention Strategies - Determine most impactful actions (targeted training, proactive support, special offers) per customer segment"
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
      "Healthcare Churn: Doctors/Clinics discontinuing EHR, practice management, or telehealth subscriptions — indicated by drop in patient records, appointments, logins, or licence non-renewal",
      "Industry & Trade Churn: Companies cancelling ERP, supply chain, or trade documentation software — signalled by decreased transaction volumes, infrequent logins, or integration failures",
      "Construction Churn: Builders ending project management, BIM, or estimation software use — warning signs include drop in new projects, underutilisation of collaboration features",
      "Property Management Churn: Property managers stopping tenant communication or rent collection software — signalled by low tenant interactions, unresolved maintenance tickets",
      "Data Categories: Customer Account/Subscription, Product Usage/Engagement, Support/Interaction, Vertical-Specific Metrics, Feedback/Sentiment"
    ],
    risks: [
      { risk: "Data quality issues across systems", mitigation: "ETL validation and data quality monitoring" },
      { risk: "Model accuracy varies by vertical", mitigation: "Vertical-specific model calibration and continuous retraining" },
      { risk: "Privacy concerns (especially healthcare)", mitigation: "Strict adherence to data privacy regulations and anonymisation" },
      { risk: "Intervention fatigue from customers", mitigation: "Intelligent throttling of retention actions based on customer preferences" },
      { risk: "External market factors unaccounted", mitigation: "Integration of economic indicators and regulatory change signals" }
    ],
    limitations: [
      "Churn definitions and indicators differ significantly across verticals requiring tailored models",
      "Healthcare data requires strict privacy compliance (HIPAA-equivalent in Nordics)",
      "External factors (market changes, competitor activities) may not be fully captured",
      "Model effectiveness depends on quality and completeness of historical data"
    ],
    conclusion: "By investing in this tailored Churn Prediction solution, each product division can proactively identify and retain valuable customers, fostering sustainable growth. Expected ROI includes up to 15% increase in renewal rates, reduced support costs through issue preemption, and boosted lifetime value via upsell opportunities."
  },
  {
    id: "routines-usecase",
    title: "AI Aided Routine Search (RoutinesBot) - ConstructionSite",
    shortTitle: "AI Aided Routine Search",
    tagline: "Intelligent Document Retrieval and Optimisation for Construction Routines",
    description: "An AI-powered chatbot system that optimises access to organisational documents and routines in construction companies, providing fast, secure, and context-aware information retrieval with strict role-based access control.",
    icon: Brain,
    category: "AI & Operations",
    preparedBy: "AICOE Team",
    version: "v1.0",
    pdfPath: "/pdfs/bu-collaborations/AI Aided Routine Search_Feasibility Report (1).pdf",
    executiveSummary: `The AI Aided Routine Search (RoutinesBot) is an intelligent chatbot system designed to revolutionise how construction companies access and utilise their organisational documents and routines. The system addresses critical challenges in document storage, retrieval, and access control by implementing advanced AI techniques including RAG (Retrieval-Augmented Generation), semantic search, and context-based filtering. By integrating Azure Blob Storage with AWS services, the solution provides secure, multilingual support for routine optimisation across safety procedures, compliance rules, and operational workflows. The biggest challenge addressed is access control, ensuring users only see their authorised company and project data.`,
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
      "Azure Blob Storage - Primary storage for organisational documents",
      "Amazon S3 - Temporary storage for cross-cloud data processing"
    ],
    theoreticalBackground: [
      "RAG Pipeline: Retrieval-Augmented Generation works by first retrieving relevant data from the knowledge base, then using AI to generate accurate answers based only on retrieved content, eliminating hallucinations",
      "Semantic Search: Goes beyond keyword matching to understand the meaning and context of user queries, providing more relevant results",
      "Vector Embeddings: Text is converted into numerical vectors that capture semantic meaning, enabling similarity-based search rather than exact keyword matches",
      "Context-Based Filtering: Results are filtered based on organisational hierarchy (company → project → user role) to ensure data security and relevance",
      "Step-by-Step RAG Execution: User query → Vector conversion → Similarity search → Content retrieval → AI generation → Final answer with citations"
    ],
    risks: [
      { risk: "AI Hallucination", mitigation: "Implement grounded responses using only retrieved data, add citations to source documents, and use prompt engineering to control AI behaviour" },
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
    conclusion: "The AI Aided Routine Search (RoutinesBot) represents a significant advancement in organisational document management for construction companies. By implementing RAG-based AI with robust security controls, the system delivers faster information retrieval, improved productivity, and better compliance while maintaining strict access controls."
  }
];