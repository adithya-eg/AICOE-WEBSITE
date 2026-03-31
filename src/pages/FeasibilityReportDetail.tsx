import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { 
  ArrowLeft, 
  AlertTriangle,
  Shield,
  CheckCircle,
  Mail,
  Eye
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { feasibilityReports } from "@/data/feasibilityReports";

const cardHoverVariants = {
  rest: { scale: 1, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
  hover: { 
    scale: 1.02, 
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
  }
};

const FeasibilityReportDetail = () => {
  const { id } = useParams<{ id: string }>();
  const normalizedId = decodeURIComponent(id ?? "").trim().toLowerCase();
  
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

  const report = feasibilityReports.find((r) => {
    const reportId = r.id.trim().toLowerCase();
    if (reportId === normalizedId) {
      return true;
    }

    // Allow legacy URL styles where separators may differ.
    const compactReportId = reportId.replace(/[-_\s]+/g, "");
    const compactIncomingId = normalizedId.replace(/[-_\s]+/g, "");
    return compactReportId === compactIncomingId;
  });

  if (!report) {
    return <Navigate to="/404" replace />;
  }

  const ReportIcon = report.icon;

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

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/#feasibilities"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Feasibility Reports</span>
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6"
            >
              <ReportIcon className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">{report.category}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
              {report.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-primary-foreground/80 mb-6 leading-relaxed"
            >
              {report.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <span className="px-3 py-1 rounded-full bg-white/10 text-primary-foreground/80 text-sm">
                Prepared by: {report.preparedBy}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-primary-foreground/80 text-sm">
                Version: {report.version}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-start"
            >
              {report.pdfPath ? (
                <a
                  href={report.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent px-6 py-3 inline-flex items-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  View PDF Document
                </a>
              ) : (
                <span className="text-primary-foreground/50 text-sm">PDF not available</span>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="section-white py-24 lg:py-32 relative overflow-hidden" ref={summaryRef}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSummaryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="glass-card p-8 bg-white max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
                Executive Summary
              </span>
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {report.executiveSummary}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={objectivesRef}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isObjectivesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Objectives
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-8">
              Project Goals
            </h2>
            
            <div className="glass-card p-8 bg-white/95">
              <ul className="space-y-4">
                {report.objectives.map((objective, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isObjectivesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <p className="text-muted-foreground leading-relaxed">{objective}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Technologies Section */}
      <section className="section-white py-24 lg:py-32 relative overflow-hidden" ref={techRef}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Technology Stack
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
              Key Technologies
            </h2>
            
            <div className="glass-card p-8 bg-white">
              <ul className="space-y-4">
                {report.keyTechnologies.map((tech, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isTechInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground leading-relaxed">{tech}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Theoretical Background Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={theoryRef}>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTheoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Theoretical Background
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-8">
              Deep Technical Foundation
            </h2>
            
            <div className="glass-card p-8 bg-white/95">
              <ul className="space-y-4">
                {report.theoreticalBackground.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isTheoryInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risks & Mitigation Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={risksRef}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRisksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Risk Assessment
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-6">
              Risks & Mitigation
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-primary-foreground font-semibold">Risk</th>
                    <th className="text-left py-4 px-4 text-primary-foreground font-semibold">Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  {report.risks.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isRisksInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="border-b border-white/10"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                          <span className="text-primary-foreground/90">{item.risk}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-primary-foreground/80">{item.mitigation}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations Section */}
      <section className="section-white py-24 lg:py-32 relative overflow-hidden" ref={limitationsRef}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLimitationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Limitations
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
              Known Limitations
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="glass-card p-8 bg-white"
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
            >
              <div className="space-y-4">
                {report.limitations.map((limitation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isLimitationsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <XCircle className="w-3.5 h-3.5 text-orange-600" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{limitation}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
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
              Conclusion
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-6">
              Final Summary
            </h2>
            
            <motion.div 
              className="glass-card p-8 bg-white/95 mb-8 text-left"
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {report.conclusion}
                </p>
              </div>
            </motion.div>

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
                Please reach out for questions or feedback:
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
              <button
                onClick={() => setShowPdfViewer(true)}
                className="btn-accent px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View PDF Document
              </button>
              <Link
                to="/#feasibilities"
                className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-primary-foreground font-semibold transition-all hover:bg-white/20 inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Feasibility Reports
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeasibilityReportDetail;
