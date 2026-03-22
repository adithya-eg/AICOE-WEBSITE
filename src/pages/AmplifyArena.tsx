import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Users,
  Target,
  Calendar,
  Award,
  BookOpen,
  Handshake,
  Globe,
  Trophy,
  Zap,
  Building,
  GraduationCap,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AmplifyArena = () => {
  const heroRef = useRef(null);
  const focusRef = useRef(null);
  const visionRef = useRef(null);
  const events2026Ref = useRef(null);
  const eventsQ4Ref = useRef(null);
  const eventsEarlyRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isFocusInView = useInView(focusRef, { once: true, margin: "-100px" });
  const isVisionInView = useInView(visionRef, { once: true, margin: "-100px" });
  const isEvents2026InView = useInView(events2026Ref, { once: true, margin: "-100px" });
  const isEventsQ4InView = useInView(eventsQ4Ref, { once: true, margin: "-100px" });
  const isEventsEarlyInView = useInView(eventsEarlyRef, { once: true, margin: "-100px" });

  const focusAreas = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hackathons & Innovation Challenges",
      description: "Competitive events where teams build AI solutions, automation, and digital efficiency solutions in a short time.",
      details: [
        "Turn ideas into working prototypes",
        "Encourages creativity and quick problem-solving",
        "Solves real business challenges rapidly"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Town Halls & Expert Talks",
      description: "Large sessions with internal leaders and external researchers sharing knowledge and AI trends.",
      details: [
        "Keeps employees updated on latest developments",
        "Builds a strong learning culture",
        "Facilitates knowledge sharing across teams"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Ideation & Pitch Sessions",
      description: "Sessions where employees present ideas, receive feedback, and improve concepts.",
      details: [
        "Creates a pipeline of useful innovations",
        "Encourages active participation",
        "Filters and refines the best ideas"
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Academic & Industry Collaborations",
      description: "Working with universities and research institutions on joint research and IP development.",
      details: [
        "Brings cutting-edge knowledge into the company",
        "Creates strong research foundation",
        "Builds innovation credibility"
      ]
    }
  ];

  const synergyInitiatives = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Amplify Academy",
      description: "Learning platform that converts hackathon outcomes into reusable learning content.",
      impact: "Continuous skill development and knowledge reuse"
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Amplify Alliances",
      description: "Builds partnerships with industry experts and organizations.",
      impact: "Access to real-world problems and mentorship opportunities"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Amplify Atlas & Arcade",
      description: "Showcase platform displaying successful projects and Proof of Concepts.",
      impact: "Visibility for innovation and encourages participation"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Amplify Awards",
      description: "Recognition system that rewards top AI achievements.",
      impact: "Motivation and healthy competition"
    }
  ];

  const objectives = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Employee Engagement",
      description: "Using hackathons, town halls, and expert talks to make employees actively participate in innovation."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Open Innovation",
      description: "Building platforms where anyone can contribute ideas through AI challenges and innovation showcases."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Cross-Unit Collaboration",
      description: "Connecting different departments to encourage knowledge sharing and skill development."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Impact Amplification",
      description: "Converting ideas into patents, research papers, and real products to create measurable business value."
    }
  ];

  const events2026 = [
    {
      date: "Oct–Jan 2026",
      title: "AI Infusion Program",
      domain: "Construction",
      description: "Integrate AI into business processes for real-world AI adoption."
    },
    {
      date: "Jan 29",
      title: "AI Team Building: Pitch Sync",
      description: "AI-assisted ideation workshop to improve idea generation and strengthen teamwork."
    },
    {
      date: "Feb 20",
      title: "Evolution of AI for Corporate Management",
      description: "Focus on AI in decision-making for corporate leaders and strategic AI adoption."
    },
    {
      date: "March 2",
      title: "Academic Hour (GL&C)",
      description: "Academic session combining AI with legal & compliance knowledge."
    }
  ];

  const eventsQ4 = [
    {
      date: "Oct 7",
      title: "Construction AI Day",
      description: "Panel discussions and expert sessions focused on AI in construction."
    },
    {
      date: "Oct 28",
      title: "AI First in EG for GL&C",
      description: "AI adoption in governance, legal and compliance areas."
    },
    {
      date: "Nov 6–8",
      title: "DevHost 2025",
      description: "Technical talks, hackathon, and networking for developer engagement."
    },
    {
      date: "Nov 11",
      title: "EG Intelligence Launch",
      description: "Launch event introducing AI roadmap and defining future direction."
    },
    {
      date: "Dec 10",
      title: "ProductOps with Nadine",
      description: "Keynote and interaction session focused on product operations."
    }
  ];

  const eventsEarly = [
    {
      date: "Dec 2024",
      title: "AI Christmas Hackathon",
      description: "Fun innovation event with mentoring and evaluation."
    },
    {
      date: "Dec 2024",
      title: "Construction AI Hackathon",
      description: "Domain-specific AI solutions organized by construction unit."
    },
    {
      date: "Aug 2025",
      title: "AI Build Challenge",
      description: "Large-scale innovation challenge with organization, mentoring, and evaluation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Innovation Hub
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Amplify Arena
            </h1>
            <p className="text-primary-foreground/80 text-lg lg:text-xl leading-relaxed mb-8">
              A collaborative nucleus of innovation connecting people, ideas, and technology.
              Where creativity meets AI-driven transformation.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-primary-foreground font-medium">Hackathons</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-primary-foreground font-medium">AI Challenges</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-primary-foreground font-medium">Innovation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas & Synergy Initiatives */}
      <section className="section-white py-24 lg:py-32 relative overflow-hidden" ref={focusRef}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFocusInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Core Activities
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Focus Areas & Synergy Initiatives
            </h2>
            <p className="text-muted-foreground text-lg">
              Our main activities and support systems that drive innovation and create measurable impact.
            </p>
          </motion.div>

          {/* Focus Areas */}
          <div className="mb-20">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground text-center mb-12">
              🎯 Focus Areas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFocusInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 bg-white"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-foreground mb-2">
                        {area.title}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Synergy Initiatives */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground text-center mb-12">
              🔗 Synergy Initiatives
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {synergyInitiatives.map((initiative, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFocusInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 bg-white text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                    {initiative.icon}
                  </div>
                  <h4 className="text-lg font-display font-bold text-foreground mb-2">
                    {initiative.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    {initiative.description}
                  </p>
                  <div className="text-xs text-accent font-medium">
                    {initiative.impact}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Objectives */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={visionRef}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Our Purpose
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Vision & Objectives
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              To become a collaborative nucleus of innovation connecting people, ideas, and technology.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Vision Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 lg:p-12 bg-white/95 text-center mb-16"
            >
              <blockquote className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                "To become a collaborative nucleus of innovation connecting people, ideas, and technology."
              </blockquote>
              <p className="text-muted-foreground">
                A central hub that brings together employees, ideas, and technology with a focus on engagement, ideation, and AI-driven transformation.
              </p>
            </motion.div>

            {/* Objectives */}
            <div className="grid md:grid-cols-2 gap-8">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 bg-white/95"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      {objective.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-foreground mb-3">
                        {objective.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Events */}
      <section className="section-white py-24 lg:py-32 relative overflow-hidden" ref={events2026Ref}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isEvents2026InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Future Roadmap
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              2026 Events
            </h2>
            <p className="text-muted-foreground text-lg">
              Strategic AI adoption and large-scale innovation programs planned for 2026.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {events2026.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isEvents2026InView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                        <Calendar className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent font-semibold">{event.date}</span>
                        {event.domain && (
                          <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                            {event.domain}
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-display font-bold text-foreground mb-2">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlight Event */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isEvents2026InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 glass-card p-8 bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  ⭐ Upcoming Highlight: AI Build Challenge 2k26
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our flagship event of the year featuring event organization, mentoring, and evaluation.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm">Large-scale innovation</span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm">Flagship event</span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm">Maximum impact</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Q4 2025 Events */}
      <section className="section-primary py-24 lg:py-32 relative overflow-hidden" ref={eventsQ4Ref}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isEventsQ4InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Recent Achievements
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Q4 2025 Events
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Expansion and structured innovation activities from the fourth quarter of 2025.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {eventsQ4.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isEventsQ4InView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 bg-white/95"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                        <Calendar className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent font-semibold">{event.date}</span>
                      </div>
                      <h4 className="text-lg font-display font-bold text-foreground mb-2">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2024 – Mid 2025 Events */}
      <section className="section-white py-24 lg:py-32 relative overflow-hidden" ref={eventsEarlyRef}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isEventsEarlyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
              Foundation Phase
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              2024 – Mid 2025 Events
            </h2>
            <p className="text-muted-foreground text-lg">
              The foundation stage that built our innovation ecosystem through initial hackathons and challenges.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {eventsEarly.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isEventsEarlyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                        <Calendar className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent font-semibold">{event.date}</span>
                      </div>
                      <h4 className="text-lg font-display font-bold text-foreground mb-2">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isEventsEarlyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 glass-card p-8 bg-gradient-to-r from-accent/5 to-secondary/5"
            >
              <h3 className="text-2xl font-display font-bold text-foreground text-center mb-6">
                🔁 Overall Innovation Journey
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">Foundation (2024–Mid 2025)</h4>
                  <p className="text-muted-foreground text-sm">Build foundation through hackathons</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">Expansion (Q4 2025)</h4>
                  <p className="text-muted-foreground text-sm">Add structured events and expert sessions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">Scale (2026)</h4>
                  <p className="text-muted-foreground text-sm">Strategic AI adoption and large programs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AmplifyArena;