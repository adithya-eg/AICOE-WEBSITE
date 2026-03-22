import { Bot, Database, Receipt, LucideIcon } from "lucide-react";

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
    preparedBy: "AI COE Team",
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
    preparedBy: "AI COE Team",
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
    title: "On-Prem Chatbot - Version 1 - Danish Defense",
    shortTitle: "On-Prem Chatbot",
    tagline: "Secure On-Premises Chatbot for Danish Defense",
    description: "On-premises chatbot solution for secure communications in defense applications.",
    icon: Bot,
    category: "AI & Security",
    preparedBy: "AI COE Team",
    version: "v1.0",
    pdfPath: "",
    executiveSummary: "Secure chatbot for defense.",
    objectives: ["Secure chat", "On-prem"],
    keyTechnologies: ["AI", "Security"],
    theoreticalBackground: ["Secure AI"],
    risks: [{ risk: "Security breaches", mitigation: "Isolation" }],
    limitations: ["Scalability"],
    conclusion: "For sensitive applications."
  }
];