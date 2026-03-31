import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  AlertTriangle,
  Shield,
  CheckCircle,
  XCircle,
  Mail,
  Eye
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { aicoeBuInteractions } from "@/data/aicoeBuInteractions";

const cardHoverVariants = {
  rest: { scale: 1, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
  }
};

const BUInteractionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const normalizedId = decodeURIComponent(id ?? "").trim().toLowerCase();
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  const summaryRef = useRef(null);
  const objectivesRef = useRef(null);
  const techRef = useRef(null);
  const theoryRef = useRef(null);
  const risksRef = useRef(null);
  const limitationsRef = useRef(null);

  const isSummaryInView = useInView(summaryRef, { once: true, margin: "-100px" });
  const isObjectivesInView = useInView(objectivesRef, { once: true, margin: "-100px" });
  const isTechInView = useInView(techRef, { once: true, margin: "-100px" });
  const isTheoryInView = useInView(theoryRef, { once: true, margin: "-100px" });
  const isRisksInView = useInView(risksRef, { once: true, margin: "-100px" });
  const isLimitationsInView = useInView(limitationsRef, { once: true, margin: "-100px" });

  const interaction = aicoeBuInteractions.find((r) => {
    const interactionId = r.id.trim().toLowerCase();
    if (interactionId === normalizedId) {
      return true;
    }

    const compactInteractionId = interactionId.replace(/[-_\s]+/g, "");
    const compactIncomingId = normalizedId.replace(/[-_\s]+/g, "");
    return compactInteractionId === compactIncomingId;
  });

  if (!interaction) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              to="/#aicoe-bu-interactions"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to BU Interactions
            </Link>

            <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <interaction.icon className="w-10 h-10 text-primary-foreground" />
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 uppercase tracking-wide">
              {interaction.businessUnit}
            </span>

            <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
              {interaction.title}
            </h1>

            <p className="text-muted-foreground text-xl mb-8">
              {interaction.tagline}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold">
                {interaction.category}
              </span>
              <span className="px-4 py-2 rounded-lg bg-secondary/10 text-secondary font-semibold">
                Version {interaction.version}
              </span>
              {interaction.pdfPath && (
                <button
                  onClick={() => setShowPdfViewer(!showPdfViewer)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold hover:bg-accent/20 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  {showPdfViewer ? 'Hide PDF' : 'View PDF'}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDF Viewer */}
      {showPdfViewer && interaction.pdfPath && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <iframe
                src={interaction.pdfPath}
                className="w-full h-[600px] border rounded-lg"
                title={`${interaction.title} PDF`}
              />
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Executive Summary */}
            <motion.div
              ref={summaryRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isSummaryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 lg:p-10"
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                Executive Summary
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {interaction.executiveSummary}
              </p>
            </motion.div>

            {/* Objectives */}
            <motion.div
              ref={objectivesRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isObjectivesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 lg:p-10"
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                Objectives
              </h2>
              <ul className="space-y-3">
                {interaction.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Key Technologies */}
            <motion.div
              ref={techRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isTechInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 lg:p-10"
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                Key Technologies
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {interaction.keyTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-primary/5">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Theoretical Background */}
            <motion.div
              ref={theoryRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isTheoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 lg:p-10"
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                Theoretical Background
              </h2>
              <ul className="space-y-3">
                {interaction.theoreticalBackground.map((theory, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{theory}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Risks & Mitigations */}
            <motion.div
              ref={risksRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isRisksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-8 lg:p-10"
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                Risks & Mitigations
              </h2>
              <div className="space-y-4">
                {interaction.risks.map((risk, index) => (
                  <motion.div
                    key={index}
                    variants={cardHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    className="p-6 rounded-lg bg-red-50 border border-red-200"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-red-800 mb-2">{risk.risk}</h3>
                        <p className="text-red-700">
                          <strong>Mitigation:</strong> {risk.mitigation}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Limitations */}
            <motion.div
              ref={limitationsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isLimitationsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card p-8 lg:p-10"
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                Limitations
              </h2>
              <ul className="space-y-3">
                {interaction.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{limitation}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-card p-8 lg:p-10"
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                Conclusion
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {interaction.conclusion}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BUInteractionDetail;