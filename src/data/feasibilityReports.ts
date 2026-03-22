import { Bot, FileSearch, Database, Brain, Receipt, TrendingDown, Wallet, LayoutDashboard, Shield, Code, BarChart3, Smartphone, Cloud, Zap, LucideIcon } from "lucide-react";

export interface FeasibilityReport {
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

export const feasibilityReports: FeasibilityReport[] = [
  {
    id: "secops-agent",
    title: "SecOps Agent (AI Security Scanning over Git Repository)",
    shortTitle: "SecOps Agent",
    tagline: "AI-Powered Security Scanning for Git Repositories",
    description: "Intelligent agent that scans Git repositories to detect exposed secrets, API keys, and sensitive information using advanced detection methods including pattern-based, entropy-based, and AI-enhanced analysis.",
    icon: Shield,
    category: "AI & Security",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/Feasibility Study for SecOps Agent (2).pdf",
    executiveSummary: `The SecOps Agent represents a comprehensive AI-powered security solution designed to proactively identify and prevent data leaks in Git repositories. By implementing a triple detection engine combining pattern-based scanning, entropy analysis, and detect-secrets library integration, the system addresses critical security challenges in modern development workflows. The agent automatically scans repositories for exposed secrets, API keys, credentials, and sensitive information, providing real-time alerts through Microsoft Teams with confidence scoring to minimize false positives. This solution is particularly crucial in today's collaborative development environment where code sharing increases the risk of accidental secret exposure. The system integrates seamlessly with GitHub API for repository access and employs intelligent filtering and rate limiting to ensure efficient, scalable security monitoring.`,
    objectives: [
      "Implement Triple Detection Engine - Combine pattern-based, entropy-based, and detect-secrets library for comprehensive secret detection",
      "Provide Confidence Scoring - Assign scores from 0.0 to 1.0 to each finding to reduce false positives and prioritize real threats",
      "Enable Secure Notifications - Send masked alerts to Microsoft Teams, protecting sensitive data in notifications",
      "Optimize Performance - Filter binary/large files and implement rate limiting to handle GitHub API constraints",
      "Deliver Proactive Security - Scan repositories automatically before issues reach production, preventing data breaches"
    ],
    keyTechnologies: [
      "GitHub API - Secure repository access and ZIP download functionality for scanning",
      "detect-secrets Library - Pre-built security rules for detecting private keys, Base64 strings, and passwords",
      "Pattern-Based Detection - Regex patterns for identifying known formats like AWS keys and API tokens",
      "Entropy Analysis - Statistical analysis to detect random-looking strings that may be secrets",
      "Microsoft Teams Integration - Secure notification system with data masking for alerts",
      "Confidence Scoring Algorithm - Machine learning-based scoring system to evaluate threat likelihood"
    ],
    theoreticalBackground: [
      "Triple Detection Methodology: Pattern-based detection uses predefined regex for known secret formats, entropy analysis identifies high-randomness strings, and detect-secrets provides rule-based scanning for complex patterns",
      "Confidence Scoring: Each detection receives a score from 0.0-1.0 based on multiple factors including pattern match strength, entropy levels, and contextual analysis to reduce false positive rates",
      "Repository Scanning Pipeline: System downloads repository as ZIP, extracts files, applies filtering, runs parallel detection engines, scores findings, and triggers notifications above threshold",
      "Security Context Awareness: Unlike traditional tools, the agent considers file type, location, and usage context to provide more accurate threat assessment",
      "Rate Limiting and Performance: Implements intelligent queuing and API limit management to ensure continuous scanning without service disruption"
    ],
    risks: [
      { risk: "High false positive rates", mitigation: "Implement confidence scoring and threshold filtering to only alert on high-confidence findings" },
      { risk: "GitHub API rate limiting", mitigation: "Intelligent rate limiting, queuing, and distributed scanning to stay within API limits" },
      { risk: "Detection of legitimate test data", mitigation: "Context-aware scanning that considers file paths, comments, and test environments" },
      { risk: "Performance impact on large repositories", mitigation: "File filtering, parallel processing, and incremental scanning strategies" },
      { risk: "Alert fatigue from developers", mitigation: "Masked notifications, clear risk explanations, and customizable alert thresholds" }
    ],
    limitations: [
      "Primarily designed for GitHub repositories with limited support for other Git platforms",
      "Detection accuracy depends on the quality and recency of pattern libraries and rules",
      "May not detect highly obfuscated or encrypted secrets without additional analysis",
      "Performance may degrade with extremely large repositories despite filtering optimizations",
      "Requires proper GitHub token permissions and API access for full functionality"
    ],
    conclusion: "The SecOps Agent successfully addresses the critical need for intelligent, automated security scanning in modern development environments. By combining multiple detection methodologies with confidence scoring and secure alerting, it provides a significant improvement over traditional pattern-based tools. The system's ability to reduce false positives while maintaining high detection accuracy makes it a valuable addition to any organization's security toolkit. While it has some limitations compared to enterprise-grade solutions, its flexibility, open-source nature, and AI-enhanced capabilities position it well for integration with existing security workflows. Future enhancements including commit history scanning, CI/CD integration, and multi-platform support will further strengthen its security posture."
  },
  {
    id: "azure-rag-chatbot",
    title: "Azure RAG Chatbot",
    shortTitle: "Azure RAG Chatbot",
    tagline: "Enterprise-Grade AI System with RAG Architecture",
    description: "An enterprise-grade AI system built using a Retrieval-Augmented Generation (RAG) architecture that stores documents, searches them intelligently, retrieves relevant chunks, generates grounded answers, and provides citations.",
    icon: Bot,
    category: "AI & Cloud Solutions",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/Azure_Rag_Chatbot.pdf",
    executiveSummary: `The Azure RAG Chatbot is an enterprise-grade AI system built using a Retrieval-Augmented Generation (RAG) architecture. Instead of relying only on a Large Language Model (LLM) (which can hallucinate or guess answers), this system stores documents, searches them intelligently, retrieves relevant chunks, generates grounded answers, and provides citations. This makes it accurate, traceable, scalable, and enterprise-ready. It integrates Azure OpenAI, Azure AI Search, Azure Blob Storage, PostgreSQL, Docling, and Streamlit (Frontend). The study concludes that the solution is technically feasible, production-ready, and suitable for enterprise deployment with manageable risks.`,
    objectives: [
      "Multi-format Document Ingestion - Supports PDF, DOCX, PPTX, XLSX, Images, HTML, TXT using Docling for normalization into clean structured markdown",
      "Full RAG Pipeline Implementation - Integrates Azure Blob Storage (Storage), Azure AI Search (Retrieval), Azure OpenAI (Embeddings & Chat), PostgreSQL (Database), and Streamlit (UI)",
      "Citation-Based Q&A - Returns answers with source document citations, blob URLs, and chunk ID mapping for auditability and transparency",
      "Production Readiness - Includes logging, error handling, config validation, session management, and persistent chat history",
      "User-Friendly Interface - Streamlit-based real-time chat with file upload, session tracking, and document management"
    ],
    keyTechnologies: [
      "Azure OpenAI - Embeddings (1536-dimensional vectors) and GPT Chat Model",
      "Azure AI Search - Hybrid search combining vector similarity and keyword matching with kNN",
      "Azure Blob Storage - Object-based petabyte-scale storage with Hot/Cool/Archive tiers and geo-redundancy",
      "PostgreSQL - ACID-compliant database with JSONB support for conversations, messages, and documents",
      "Docling - Document intelligence engine for multi-format parsing, OCR, layout preservation, and table retention",
      "Streamlit - Frontend UI for real-time chat and file upload"
    ],
    theoreticalBackground: [
      "RAG solves LLM limitations (hallucination, no access to private documents) through Retrieval + Augmentation + Generation flow",
      "Azure Blob Storage acts as raw document repository with secure access (AAD, SAS, Encryption) and citation link support",
      "Azure AI Search is the brain of retrieval with vector search, hybrid search, and index schema including content_vector, filename, chunk_id, blob_url",
      "PostgreSQL maintains chat history, preserves context, enables session continuity with UUID-based sessions",
      "Docling ensures clean text extraction and logical chunk boundaries for better embedding quality - bad chunking leads to bad retrieval and hallucination"
    ],
    risks: [
      { risk: "Hallucination", mitigation: "RAG grounding with document retrieval" },
      { risk: "Poor chunking quality", mitigation: "Docling structured extraction" },
      { risk: "High operational cost", mitigation: "Token optimization and caching" },
      { risk: "Response latency", mitigation: "Hybrid search optimization" },
      { risk: "Data privacy concerns", mitigation: "Azure security controls (AAD, encryption)" }
    ],
    limitations: [
      "Depends on embedding quality for accurate retrieval",
      "Large files increase processing cost",
      "LLM responses are not fully deterministic",
      "Requires Azure ecosystem for full functionality"
    ],
    conclusion: "This Azure RAG Chatbot is technically viable, scalable, secure, production-ready, and enterprise compliant. It provides grounded AI responses, traceable citations, structured document intelligence, and persistent conversation memory. This is a strong enterprise AI solution blueprint."
  },
  {
    id: "ai-aided-filtering",
    title: "AI-Driven Natural Language Filtering for Silver Bucket",
    shortTitle: "AI-Aided Filtering",
    tagline: "Natural Language Query Filtering for Resource Allocation",
    description: "A backend solution that allows users to filter and access extensive data (employees, allocations, availability, projects, competencies) using natural language queries, enhancing the Silver Bucket resource allocation platform with AI-driven NLP capabilities.",
    icon: FileSearch,
    category: "AI & Enterprise Solutions",
    preparedBy: "Preetham Saldhana, Nithin Nayak",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/SilverBucket - AI Aided Filtering_FeasibilityReport.pdf",
    executiveSummary: `This application enhances user experience by allowing users to filter and access extensive data (employees, allocations, availability, projects, competencies, etc.) using natural language queries. The enhancement streamlines data navigation, making it more intuitive for resource managers, project managers, senior management, and employees. The FastAPI-based backend leverages AWS Bedrock LLM for natural language parsing, returning structured JSON filters. Initial tests show ~90% accuracy in extracting filters with properly engineered prompts. The system is modular, maintainable, and future-proof for enhancements like schema awareness or fine-tuned models.`,
    objectives: [
      "Enable Natural Language Filtering - Allow users to query extensive resource data using plain English without complex filter interfaces",
      "Streamline Data Navigation - Make data access intuitive for resource managers, project managers, senior management, and employees",
      "API-First Design - Provide RESTful backend that can integrate with existing services, pipelines, or systems with minimal overhead",
      "Structured Output Generation - Extract filters from natural language and return structured JSON (project name, user role, date range, etc.)",
      "Cost-Effective Implementation - Leverage open-source components and usage-based LLM APIs to reduce overall expenses"
    ],
    keyTechnologies: [
      "FastAPI - Modern async Python web framework with automatic OpenAPI docs, request validation, OAuth2/JWT support",
      "AWS Bedrock - Fully managed serverless access to foundation models (Anthropic, AI21, Cohere, Meta) via API",
      "PostgreSQL - ACID-compliant database with JSONB support, advanced indexing, and query optimization",
      "Amazon ECR - Fully managed Docker container registry with IAM security and vulnerability scanning",
      "Amazon ECS - Container orchestration with Fargate mode for serverless container management",
      "JWT Authentication - Secure API request authentication and audit logging"
    ],
    theoreticalBackground: [
      "FastAPI provides high performance comparable to Node.js/Go, with built-in async support for non-blocking I/O and interactive Swagger UI documentation",
      "AWS Bedrock offers serverless access to multiple foundation models with enterprise-grade security and AWS service integration (S3, Lambda, SageMaker)",
      "PostgreSQL provides strong ACID consistency, advanced indexing, JSONB for semi-structured data, and extensibility with custom functions",
      "Amazon ECS with Fargate eliminates server management, supports blue/green deployments, and is cost-effective for predictable workloads",
      "The workflow: User Request → Backend Validation → LLM Processing → Filter Extraction → Summary Generation → Structured JSON Response"
    ],
    risks: [
      { risk: "LLM misinterprets vague input", mitigation: "Implement prompt templates and validation" },
      { risk: "Slow LLM response time (300-1000ms)", mitigation: "Async processing and caching of common queries" },
      { risk: "API misuse or overload", mitigation: "Rate limiting and authentication required" },
      { risk: "Multi-tenancy data leakage", mitigation: "Isolation enforced at post-processing level with role-based filters" },
      { risk: "LLM hallucination or field omission", mitigation: "Precise prompt engineering and post-validation" }
    ],
    limitations: [
      "LLM output may vary depending on prompt clarity",
      "Dynamic data like dropdowns are not yet linked to real-time filters",
      "LLMs may occasionally hallucinate or omit fields unless prompts are precise",
      "Multi-tenancy and access control must be enforced post-filter extraction"
    ],
    conclusion: "The proposed FastAPI-based backend is highly feasible for implementation and scalable for various use cases. Leveraging LLMs for natural language query parsing reduces the complexity of data access and supports broader integration possibilities. The system architecture is modular, maintainable, and future-proof for enhancements like schema awareness or fine-tuned models. Initial tests show ~90% accuracy with properly engineered prompts. Estimated OPEX is approximately $0.0218 per filter execution."
  },
  {
    id: "churn-prediction",
    title: "Churn Prediction for Nordic Market",
    shortTitle: "Churn Prediction",
    tagline: "Predictive Customer Retention Across Verticals",
    description: "A data-driven approach to predict and mitigate customer churn across diverse vertical software products tailored for Healthcare & Citizen Welfare, Industry & Trade Management, and Construction & Property Management in the Nordics.",
    icon: TrendingDown,
    category: "AI & Business Analytics",
    preparedBy: "Tarun G",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/Churn Prediction.pdf",
    executiveSummary: `This churn prediction initiative empowers organizations to proactively identify at-risk customers, understand root causes of potential departure, and implement targeted retention strategies. By leveraging data unique to each domain (Healthcare & Citizen Welfare, Industry & Trade Management, Construction & Property Management), we develop nuanced understanding of churn drivers. The solution includes tailored churn definitions per vertical, predictive modeling with ensemble algorithms, real-time risk scoring dashboards, and automated retention playbooks. Expected benefits include up to 15% increase in renewal rates, reduced support costs, and boosted lifetime value through upsell opportunities.`,
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
  },
  {
    id: "jira-dashboard-automation",
    title: "JIRA Dashboard – Graph Development Using SQL",
    shortTitle: "JIRA Dashboard",
    tagline: "Automated Sprint Analytics & Performance Metrics",
    description: "An integrated data pipeline and analytics solution to evaluate Jira Agile sprint performance, combining data extraction from Jira's REST API with structured querying using MS SQL and Python for actionable insights into sprint planning and execution.",
    icon: LayoutDashboard,
    category: "DevOps & Analytics",
    preparedBy: "Sidhanth Kamath",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/JIRA Dashboard Automation Usecase Feasibility Report.pdf",
    executiveSummary: `This report presents an integrated data pipeline and analytics solution to evaluate Jira Agile sprint performance. It combines data extraction from Jira's REST API with structured querying using MS SQL and Python. The objective is to provide actionable insights into sprint planning and execution through metrics such as Story Points Committed vs Completed, Sprint Scope Change, Sprint Rolling Status, Issue Type Breakdown (time spent), Defects Created vs Resolved, and Average Time in Status. The framework supports continuous improvement of Agile processes, retrospective analysis, and strategic sprint planning. The solution is extensible to different types of Agile boards and custom Jira configurations.`,
    objectives: [
      "Extract & Transform Data - Seamless extraction of board, sprint, and issue data from Jira API and backend SQL database (Jira 9.0 schema)",
      "Sprint Performance Analytics - Measure Story Points Committed vs Completed with completion percentage per sprint",
      "Rolling Status Tracking - Classify issues as New or Rolling (carried from previous sprints) to assess sprint predictability",
      "Scope Change Detection - Identify issues Added, Removed, or Unchanged mid-sprint to track backlog volatility",
      "Time & Defect Analysis - Calculate Average Time in Status and track Defects Created vs Resolved weekly"
    ],
    keyTechnologies: [
      "Jira REST API - Atlassian-python-API library for programmatic access to Agile boards, sprints, and issues",
      "MS SQL Server - Direct queries on Jira 9.0 backend schema (jiraissue, project, customfield, changegroup tables)",
      "Python & pandasql - SQL-like analysis on in-memory DataFrames for flexible reporting",
      "Personal Access Token (PAT) - Secure token-based authentication for API access",
      "Window Functions (LAG, LEAD) - SQL analytics for rolling status and time-in-status calculations",
      "CSV Export - Automated file outputs for dashboarding and stakeholder reporting"
    ],
    theoreticalBackground: [
      "Data Sources: Jira REST API (via Atlassian-python-API) for board/sprint/issue data + Jira 9.0 SQL backend for deep historical analytics",
      "Key Tables: jiraissue (main issues), project (metadata), customfieldvalue (story points), AO_60DB71_SPRINT (sprint data), changegroup/changeitem (change history)",
      "Master Table Structure: Merged board-sprint-issue dataset with dimensions (project_key, board_id, sprint_id, issue_key) and metrics (story_points, completion rates)",
      "Rolling Issue Detection: Uses LAG() window function to identify issues spanning multiple sprints - partitioned by issue_key and board_id",
      "Scope Change Logic: Compares issue added_to_sprint_at timestamp vs sprint start_date to classify as Added/Removed/Unchanged"
    ],
    risks: [
      { risk: "Board/Project data unavailable in DB", mitigation: "Fallback to Jira REST API with Personal Access Token" },
      { risk: "Custom field ID inconsistency", mitigation: "Standardize custom field IDs (e.g., Story Points) across boards" },
      { risk: "Data duplication from multiple sources", mitigation: "Preprocessing cleanup and centralized data governance" },
      { risk: "API pagination and rate limits", mitigation: "Dynamic paginated handling in Python client" },
      { risk: "Data freshness lag in preprod", mitigation: "Document refresh dates and compare with prod for validation" }
    ],
    limitations: [
      "Current granularity: Project → Board → Sprint → Issues; need BU → Product → Project mapping for fuller hierarchy",
      "Custom field usage (story points) must be standardized and consistently maintained across boards",
      "Some queries require Board-level data only available via API, not in Jira_Test DB",
      "Preprod data refresh lag may cause metric discrepancies vs production"
    ],
    conclusion: "The analysis successfully consolidated Jira sprint data using both API and backend SQL methods, enabling extraction of key performance insights. Recommendations include building dashboard visualizations for sprint trends, standardizing Jira configuration across projects, consolidating data to adhere to JIRA 9.0 data model, and incorporating Business Unit to Product to Project correlation mapping for enhanced data granularity."
  },
  {
    id: "figma2react",
    title: "Technical Documentation for Figma2React Agent",
    shortTitle: "Figma2React",
    tagline: "Automated Figma Design to React Component Conversion",
    description: "A system leveraging Model Context Protocol (MCP) for seamless Figma-to-React code generation with Claude AI integration, enabling designers and developers to convert designs into production-ready components.",
    icon: Code,
    category: "Design Automation",
    preparedBy: "AICOE Team",
    version: "Phase 2",
    pdfPath: "/pdfs/feasibilities/Technical_Report_Figma2React 1.pdf",
    executiveSummary: "The Figma2React Agent represents an advanced integration of Model Context Protocol (MCP) technology with AI-driven development workflows. The system provides seamless Figma-to-React code generation through intelligent orchestration of MCP Server connectivity, Claude AI integration, and specialized design conversion tools. Phase 2 has successfully implemented 13 specialized tools and established reliable bi-directional communication between the Streamlit frontend and MCP server infrastructure.",
    objectives: [
      "Create seamless MCP Server and Client architecture for Figma-to-React conversion",
      "Integrate Claude AI (claude-sonnet-4-20250514 model) for intelligent code generation",
      "Implement robust tool execution pipeline with 13 specialized conversion tools",
      "Build 3-part modular architecture: MCP Server, MCP Client, and User Interface",
      "Enable real-time design-to-code conversion with quality assurance"
    ],
    keyTechnologies: [
      "Model Context Protocol (MCP) - Bidirectional JSON-RPC 2.0 communication",
      "TypeScript - MCP Server implementation with stdio-based transport",
      "Claude AI (claude-sonnet-4-20250514) - LLM for intelligent code generation",
      "Python/Streamlit - User interface and MCP Client implementation",
      "Figma REST API - Design extraction and component parsing",
      "JSON-RPC 2.0 - Request/response protocol via stdin/stdout"
    ],
    theoreticalBackground: [
      "MCP Server Architecture: TypeScript implementation with stdio-based transport, listens on stdin, writes to stdout, uses JSON-RPC 2.0 message format",
      "MCP Client Architecture: Python-based HTTP communication layer with session management, request serialization, and response parsing",
      "Tool Execution Flow: Client sends tools/call → Server validates parameters → Executes tool logic → Returns structured results",
      "Session Management: HTTP session maintains headers (Content-Type: application/json), handles timeouts, and manages connection lifecycle",
      "Bidirectional Communication: JSON-RPC calls flow through subprocess spawning with real-time stdin/stdout stream processing"
    ],
    risks: [
      { risk: "MCP Server process instability", mitigation: "Implement health checks and automatic restart mechanisms" },
      { risk: "Figma API rate limiting", mitigation: "Implement request queuing and caching layer" },
      { risk: "Claude AI response inconsistency", mitigation: "Structured prompts with validation and retry logic" },
      { risk: "Large design file processing", mitigation: "Chunked processing with progress indicators" },
      { risk: "Tool execution timeout", mitigation: "Configurable timeouts with graceful degradation" }
    ],
    limitations: [
      "Current Phase 2 implementation - some advanced features still in development",
      "Requires active Figma API access token and Claude API credentials",
      "Complex nested components may require manual refinement",
      "Style conversion accuracy depends on Figma design structure consistency",
      "Real-time collaboration features not yet implemented"
    ],
    conclusion: "The Figma2React Agent demonstrates successful implementation of MCP architecture for design-to-code automation. Phase 2 has delivered 13 functional tools with reliable Claude AI integration and Streamlit-based user interface. The modular architecture enables future extension with additional tools while maintaining stable core functionality. Next phases will focus on enhanced component recognition, improved style fidelity, and collaborative features."
  },
  {
    id: "pii-scanner",
    title: "PII Detection POC with Dual Validation Pipelines",
    shortTitle: "PII Scanner",
    tagline: "Dual-Pipeline PII Detection with AWS & Azure",
    description: "A proof-of-concept implementing dual-layered PII detection and masking pipelines using AWS Comprehend + Bedrock and Azure AI Language + OpenAI for compliance with GDPR and HIPAA regulations.",
    icon: Shield,
    category: "Security & Compliance",
    preparedBy: "Nithin Nayak",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/PII Scanner.pdf",
    executiveSummary: "This POC addresses the challenge of detecting and redacting Personally Identifiable Information (PII) in user-generated content such as support tickets, feedback forms, and chats. Two parallel pipelines were implemented—AWS (Comprehend + Bedrock) and Azure (AI Language + OpenAI)—each featuring a primary detection layer followed by LLM-based validation to reduce false positives/negatives. The dual-pipeline approach ensures robust, accurate PII masking while maintaining compliance with privacy regulations like GDPR and HIPAA.",
    objectives: [
      "Implement dual-layered PII detection pipeline using AWS Comprehend (primary) + AWS Bedrock (validation)",
      "Implement parallel pipeline using Azure AI Language (primary) + Azure OpenAI (validation)",
      "Evaluate effectiveness, latency, and cost of each pipeline",
      "Ensure compliance with privacy regulations (GDPR, HIPAA)",
      "Reduce manual effort and errors in data handling workflows",
      "Improve customer trust by securing personal data"
    ],
    keyTechnologies: [
      "AWS Comprehend - Pre-trained NLP for PII detection (SSNs, emails, credit cards)",
      "AWS Bedrock (Claude/Titan) - LLM validation via prompt engineering",
      "Azure AI Language Service - Text Analytics with PII detection and redaction",
      "Azure OpenAI (GPT-4) - Contextual validation for false positive/negative reduction",
      "Python 3.10+ with boto3, langchain, openai, pandas",
      "Amazon S3 / Azure Blob Storage - Cloud object storage for input/output"
    ],
    theoreticalBackground: [
      "AWS Comprehend: Fully managed NLP service with pre-trained PII detection API supporting entity recognition (names, SSNs, emails, financial data) with confidence scoring (0-1)",
      "AWS Bedrock: Managed LLM service (Claude, Titan, Llama 3) for contextual PII validation through prompt engineering, detecting ambiguous patterns like 'user[at]domain.com'",
      "Azure AI Language: Deep-learning PII detection optimized for 20+ languages with configurable redaction actions (masking, replacement, removal) and threshold control",
      "Azure OpenAI: Enterprise GPT-4 access for dispute resolution, flagging false positives with natural language explanations, and detecting implied PII",
      "Dual-Layer Approach: Primary cloud-native detection followed by LLM validation reduces both false positives and false negatives for compliance-critical applications"
    ],
    risks: [
      { risk: "Model Drift - PII types evolve over time", mitigation: "Periodic model validation and prompt updates with feedback loops" },
      { risk: "Latency in real-time applications", mitigation: "Async processing and caching for LLM inference optimization" },
      { risk: "False Negatives - Critical PII missed", mitigation: "Human-in-the-loop review for high-risk domains" },
      { risk: "Compliance failures (GDPR)", mitigation: "Comprehensive audit trail and logging of each redaction step" },
      { risk: "Cost escalation with Azure OpenAI", mitigation: "Use AWS Bedrock (Claude Haiku) for cost-sensitive workloads" }
    ],
    limitations: [
      "AWS Comprehend lacks domain-specific PII detection (proprietary employee IDs, internal codes)",
      "LLM inference slower (~500ms-2s) compared to static APIs (~200ms)",
      "Azure OpenAI significantly more expensive ($0.06/1K tokens) vs Claude 3 Haiku ($0.00025/1K tokens)",
      "Non-deterministic LLM outputs may vary across model versions or prompts",
      "Regional compliance: Azure redaction rules may not align with Asia-Pacific data privacy laws"
    ],
    conclusion: "The dual-pipeline approach ensures robust and accurate PII masking in dynamic, user-generated data. Azure and AWS pipelines complement each other, offering trade-offs between cost and precision. Cost analysis shows Azure is more economical for short documents with bundled processing, while AWS offers better efficiency for large-scale or single-feature workloads. Next steps include pilot implementation on anonymized support tickets, user feedback evaluation, and production deployment with CI/CD pipelines and monitoring."
  },
  {
    id: "workspace-forecasting",
    title: "Worksense - Workspace Forecasting (Time Series Analysis)",
    shortTitle: "Workspace Forecasting",
    tagline: "Predictive analytics for workspace bookings and occupancy",
    description: "Time series forecasting system for workspace resource planning, optimizing facility management and energy usage through SARIMA-based prediction models.",
    icon: BarChart3,
    category: "AI & Analytics",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/Worksense - Workspace Forecasting_FeasibilityReport (2).pdf",
    executiveSummary: `The Worksense Workspace Forecasting project aims to predict future space bookings and occupancy using historical utilization data. By applying SARIMA (Seasonal ARIMA) models, the system captures recurring patterns and supports decision making for effective workspace utilization, energy management, and facility planning. The solution handles data preparation, feature engineering, and external influence factors like holidays and weather to deliver accurate forecasts, improve efficiency, and reduce over/under utilization risks.`,
    objectives: [
      "Predict future workspace bookings based on historical data",
      "Forecast occupancy trends to optimize resource allocation",
      "Integrate calendar and environmental variables (day-of-week, month, holidays, weather)",
      "Build a robust SARIMA-based time series model for weekly and seasonal patterns",
      "Enable data-driven planning to reduce wasted capacity and energy usage"
    ],
    keyTechnologies: [
      "Python (pandas, numpy) for data processing",
      "statsmodels SARIMA for time series modeling",
      "scikit-learn for evaluation metrics (MAE, RMSE, MAPE)",
      "matplotlib / seaborn for visualization",
      "Excel file ingestion for booking and occupancy datasets",
      "Feature engineering for lag/rolling and categorical calendar features"
    ],
    theoreticalBackground: [
      "Time Series Forecasting: using historical trends to anticipate future values",
      "SARIMA: modeling seasonality, trends, and autocorrelation in daily workspace data",
      "Stationarity: using differencing to stabilize mean and variance over time",
      "Autocorrelation and Partial Autocorrelation to select lag parameters",
      "External regressors (holidays, weather) to capture non-recurring effects"
    ],
    risks: [
      { risk: "Incomplete historical data", mitigation: "Enforce data completeness checks and imputation strategies" },
      { risk: "Non-stationary patterns", mitigation: "Apply differencing and transformation to stabilize series" },
      { risk: "Seasonality shifts (e.g., pandemics)", mitigation: "Retrain models frequently with new data and incorporate external factors" },
      { risk: "External factor inaccuracies (weather/holidays)", mitigation: "Use reliable data sources and flexible add-on variables" },
      { risk: "Model overfitting", mitigation: "Use cross-validation and horizon-based evaluation" }
    ],
    limitations: [
      "Requires sufficient historical booking and occupancy data for accurate forecasting",
      "Forecast accuracy drops for highly irregular events or sudden policy changes",
      "Dependent on quality of external feature datasets (weather, holiday calendars)",
      "SARIMA may require manual tuning for parameter selection",
      "Real-time deployment requires infrastructure for scheduled re-training and monitoring"
    ],
    conclusion: "The Worksense Workspace Forecasting feasibility study confirms that SARIMA-based time series models can reliably guide workspace planning and energy management. With proper feature engineering, regular calibration, and integration of external factors, the system is ready for production deployment in facility management workflows. Ongoing monitoring and continuous improvement are recommended to adapt to shifts in usage behavior."
  },
  {
    id: "finops-agent",
    title: "FinOps Agent (AI-Based Cloud Cost Management)",
    shortTitle: "FinOps Agent",
    tagline: "AI-Powered Cloud Cost Monitoring and Optimization",
    description: "Intelligent AI system that monitors cloud costs, analyzes resource usage, and helps organizations reduce unnecessary spending through automated optimization and real-time insights.",
    icon: Wallet,
    category: "AI & Finance",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/Feasibility Study for FinOps Agent (1).pdf",
    executiveSummary: `The FinOps Agent is a comprehensive AI-based system designed to revolutionize cloud cost management for organizations using AWS services. By combining real-time monitoring, intelligent analysis, and automated optimization actions, the system addresses the critical challenge of controlling escalating cloud expenses. The agent continuously tracks resource usage, identifies cost inefficiencies, and implements automated cost-saving measures while providing actionable insights through customizable dashboards and alerts. This solution bridges the gap between traditional financial operations and modern cloud infrastructure, enabling organizations to achieve optimal cost efficiency without compromising performance or security.`,
    objectives: [
      "Implement Real-Time Cost Analysis - Continuously monitor AWS costs and usage through API integration",
      "Enable Idle Resource Detection - Identify unused or underutilized resources using CPU metrics and activity logs",
      "Automate Cost-Saving Actions - Automatically stop/start instances and implement optimization rules",
      "Provide Actionable Alerts - Send notifications for cost spikes and unusual spending patterns",
      "Deliver Customizable Visualization - Create dashboards showing cost trends and usage patterns"
    ],
    keyTechnologies: [
      "AWS Cost Explorer - Billing data collection and cost analysis API",
      "AWS CloudWatch - Real-time metrics and monitoring for resource usage",
      "AWS EC2 - Primary cloud resource for cost and performance analysis",
      "FastMCP Server - Core processing engine for data analysis and automation",
      "Real-Time APIs - Direct integration with AWS services for live data",
      "Custom Rule Engine - Flexible configuration for alerts and automation rules"
    ],
    theoreticalBackground: [
      "FinOps Framework: Financial Operations combines finance, technology, and operations to optimize cloud spending through data-driven decision making",
      "Real-Time Cost Monitoring: Continuous tracking of cloud resources enables immediate identification of cost anomalies and optimization opportunities",
      "Idle Resource Detection: Advanced algorithms analyze CPU usage, network activity, and access logs to identify truly unused resources",
      "Automated Cost Optimization: Machine learning models predict usage patterns and automatically implement cost-saving actions within defined parameters",
      "Granular Cost Allocation: Breaking down costs by service, resource, team, and application enables precise financial accountability"
    ],
    risks: [
      { risk: "Unintended service disruption from automated actions", mitigation: "Implement approval workflows and gradual rollout of automation rules" },
      { risk: "Inaccurate cost data affecting optimization decisions", mitigation: "Cross-validate data from multiple AWS sources and implement data quality checks" },
      { risk: "Over-optimization leading to performance degradation", mitigation: "Set minimum performance thresholds and monitor application health metrics" },
      { risk: "Complex rule configurations causing unexpected behavior", mitigation: "Provide pre-built rule templates and extensive testing environments" },
      { risk: "Data privacy concerns with detailed usage analytics", mitigation: "Implement data anonymization and comply with relevant privacy regulations" }
    ],
    limitations: [
      "Primarily designed for AWS ecosystem with limited support for multi-cloud environments",
      "Requires appropriate AWS permissions and API access for full functionality",
      "Automated actions may need initial calibration to avoid service disruptions",
      "Complex organizational structures may require custom rule development",
      "Real-time processing may have slight delays for very large-scale deployments"
    ],
    conclusion: "The FinOps Agent represents a significant advancement in cloud cost management, successfully addressing the limitations of existing AWS tools through AI-powered automation and real-time insights. By providing customizable workflows, automated optimization, and comprehensive visualization, it enables organizations to achieve substantial cost savings while maintaining operational efficiency. The system's modular architecture supports future enhancements including multi-cloud support, predictive analytics, and advanced automation capabilities. While it requires proper setup and monitoring, the benefits of reduced cloud expenses and improved financial visibility make it a valuable investment for any organization serious about cloud cost optimization."
  },
  {
    id: "devops-agent",
    title: "DevOps Agent (Built as part of AI Build Challenge 2025)",
    shortTitle: "DevOps Agent",
    tagline: "AI-Powered DevOps Automation Agent",
    description: "Intelligent agent for DevOps operations and automation.",
    icon: Zap,
    category: "AI & DevOps",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "",
    executiveSummary: "AI agent for DevOps automation.",
    objectives: ["Automate DevOps tasks", "Improve efficiency"],
    keyTechnologies: ["AI", "DevOps tools"],
    theoreticalBackground: ["Agent-based automation"],
    risks: [{ risk: "Reliability", mitigation: "Testing" }],
    limitations: ["Complexity"],
    conclusion: "Enhances DevOps processes."
  },
  {
    id: "invoice-assistant",
    title: "EG Invoice Assistant - AI-Powered Invoice Processing",
    shortTitle: "EG Invoice Assistant",
    tagline: "AI-Powered Invoice Processing and Data Extraction",
    description: "An AI-powered system that reads invoices and receipts, automatically extracts important data, and converts it into structured JSON format for efficient financial workflow management.",
    icon: Receipt,
    category: "AI & Finance",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "/pdfs/feasibilities/Brandsoft - EG Invoice Assistant_FeasibilityReport (2).pdf",
    executiveSummary: `The EG Invoice Assistant is an AI-powered system that reads invoices and receipts, automatically extracts important data, and converts it into structured JSON format. It helps finance teams save time and avoid manual work by intelligently processing financial documents. The system combines FastAPI backend, AWS cloud services, and Claude AI for accurate data extraction with confidence scores.`,
    objectives: [
      "Automatically extract key data from invoices and receipts",
      "Convert extracted data into structured JSON format",
      "Improve accuracy and speed of financial data processing",
      "Reduce manual work and human errors in invoice processing",
      "Provide scalable cloud-based solution for document processing"
    ],
    keyTechnologies: [
      "FastAPI - High-performance Python web framework for API development",
      "AWS Bedrock (Claude) - Advanced AI for intelligent document processing",
      "AWS Route 53 - Domain routing and DNS management",
      "Application Load Balancer - Traffic distribution for high availability",
      "AWS Fargate - Serverless container execution",
      "Amazon S3 - Secure file storage and retrieval",
      "MongoDB - NoSQL database for structured data storage",
      "Keycloak - Identity and access management"
    ],
    theoreticalBackground: [
      "AI-powered document processing leverages machine learning to understand document structure and extract relevant information",
      "Cloud-native architecture ensures scalability and reliability for processing varying document volumes",
      "Structured data extraction transforms unstructured document content into machine-readable JSON format",
      "Confidence scoring provides quality assurance for extracted data accuracy",
      "Multi-format support enables processing of various document types (PDF, images, etc.)"
    ],
    risks: [
      { risk: "AI extraction accuracy may vary with document quality", mitigation: "Implement confidence scoring and human validation workflows" },
      { risk: "High processing costs for large document volumes", mitigation: "Optimize AI usage and implement caching strategies" },
      { risk: "Data security concerns with financial documents", mitigation: "Use encrypted storage and secure API communications" },
      { risk: "Integration challenges with existing systems", mitigation: "Provide comprehensive API documentation and support" },
      { risk: "Scalability issues during peak usage", mitigation: "Use AWS auto-scaling and load balancing" }
    ],
    limitations: [
      "Processing accuracy depends on document quality and clarity",
      "Currently supports specific document formats (PDF, images)",
      "AI processing may have latency for complex documents",
      "Requires AWS infrastructure for full functionality",
      "May need manual intervention for highly irregular document formats"
    ],
    conclusion: "The EG Invoice Assistant represents a significant advancement in automated financial document processing. By combining AI-powered extraction with cloud-native architecture, it provides a scalable, accurate, and efficient solution for invoice processing workflows. The system's ability to transform unstructured documents into structured data reduces manual effort, minimizes errors, and improves overall financial operation efficiency."
  }
];
