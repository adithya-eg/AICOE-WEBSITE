import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import prakhyathPhoto from "@/data/people/Prakhyath.png";
import harshitPhoto from "@/data/people/Harshit.png";
import snehalPhoto from "@/data/people/Snehal.png";
import karthikaPhoto from "@/data/people/karthik.png";

const teamMembers = [
  {
    name: "Prakhyath Rai",
    role: "Team Manager",
    department: "Technology Integration and Transformation",
    image: prakhyathPhoto,
    email: "prrai@eg.dk",
    bio: "Leading AI initiatives and technology integration",
  },
  {
    name: "Nithin Nayak",
    role: "Data Scientist",
    image: "/src/data/people/nithin_nayak 2.jpg",
    bio: "Expert in data science and analytics",
  },
  {
    name: "Preetham Saldanha",
    role: "AI/ML Engineer",
    department: "Technology Integration and Transformation",
    image: "/src/data/people/Preetham-Photo-Compressed.jpg",
    bio: "AI/ML Engineer specializing in technology integration",
  },
  {
    name: "Karthika Ravichandran",
    role: "AI/ML Engineer",
    image: karthikaPhoto,
    objectPosition: "top center",
    bio: "AI/ML Engineer focused on innovative solutions",
  },
  {
    name: "Harshith Muttana",
    role: "AI/ML Engineer",
    department: "Technology Integration and Transform",
    image: harshitPhoto,
    bio: "AI/ML Engineer driving technology transformation",
  },
  {
    name: "Snehal Gloria Dsouza",
    role: "Junior AI/ML Engineer",
    department: "Technology Integration and Transformation",
    image: snehalPhoto,
    bio: "Junior AI/ML Engineer contributing to technology integration",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-primary py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold mb-6 uppercase tracking-wide">
            Our Team
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Discover Our Team Of Head Business Consultant Experts
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            A passionate team of experts driving AI innovation at AICOE
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="glass-card h-full bg-white/95 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    style={(member as any).objectPosition ? { objectPosition: (member as any).objectPosition } : {}}
                  />
                </div>

                {/* Info */}
                <div className="p-5 text-center flex-1 flex flex-col">
                  <h3 className="font-display font-semibold text-foreground mb-1 min-h-[3rem] flex items-center justify-center">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-semibold mb-2 min-h-[2.5rem] flex items-center justify-center">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs min-h-[3rem] flex items-start justify-center">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
