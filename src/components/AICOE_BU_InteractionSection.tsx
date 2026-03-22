import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { aicoeBuInteractions } from "@/data/aicoeBuInteractions";

const AICOE_BU_InteractionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  
  const displayedInteractions = showAll ? aicoeBuInteractions : aicoeBuInteractions.slice(0, 9);

  return (
    <section id="aicoe-bu-interactions" className="section-white py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
            BU &lt;&gt; AI COE Engagements
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Collaborative <span className="text-gradient">Innovations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our engagements and collaborations between Business Units and AI COE
          </p>
        </motion.div>

        {/* Interaction cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedInteractions.map((interaction, index) => (
            <motion.div
              key={interaction.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card h-full p-6 lg:p-8 bg-white/95 hover:bg-white transition-all duration-300 hover:shadow-2xl flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <interaction.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3 self-start">
                  {interaction.businessUnit}
                </span>
                <h3 className="font-display font-bold text-xl text-foreground mb-2 min-h-[56px]">
                  {interaction.shortTitle}
                </h3>
                <p className="text-accent font-semibold text-sm mb-3">
                  {interaction.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {interaction.description}
                </p>

                {/* CTA for Jasmin */}
                {interaction.id === "jasmin-speech-to-text" && (
                  <Link
                    to="/jasmin"
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all mt-auto"
                  >
                    View More Details <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                {/* CTA for Churn Prediction */}
                {interaction.id === "churn-prediction-nordic" && (
                  <Link
                    to="/bu-interaction/churn-prediction-nordic"
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all mt-auto"
                  >
                    View More Details <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                {/* CTA for Routine Search */}
                {interaction.id === "routines-usecase" && (
                  <Link
                    to="/bu-interaction/routines-usecase"
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all mt-auto"
                  >
                    View More Details <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less button */}
        {aicoeBuInteractions.length > 9 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold transition-all hover:shadow-lg"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  Show More ({aicoeBuInteractions.length - 9} more) <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AICOE_BU_InteractionSection;