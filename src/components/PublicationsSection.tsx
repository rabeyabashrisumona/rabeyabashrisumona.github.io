import { motion } from "framer-motion";
import { BookOpen, Trophy } from "lucide-react";

const publications = [
  {
    title: "An Integrated Deep Learning Approach for Enhancing Brain Tumor Diagnosis",
    journal: "Elsevier Q1 Journal, 2025",
    doi: "10.1016/j.health.2025.100421",
    role: "Co-author",
  },
  {
    title: "BanglaVegNet: A Comprehensive Multiclass Image Dataset of Traditional Bangladeshi Vegetables for AI Applications",
    journal: "Data In Brief (Under Review)",
    role: "Author",
  },
];

const awards = [
  "Champion — Poster Presentation, BCS ICT Fest 2025, IICT, BUET",
  "Champion — Hardware-Based Innovative Idea Pitching, Brainstorming Week 2024",
  "3rd Place — Research Poster Presentation (AI Mode), Brainstorming Week 2024",
  "Finalist — Coding Sprint 2024 (Machine Learning Competition)",
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Publications & <span className="text-gradient">Awards</span>
        </motion.h2>

        {/* Publications */}
        <div className="space-y-4 mb-16">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-glow/30 transition-colors"
            >
              <div className="flex gap-3">
                <BookOpen className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-sm leading-relaxed">{pub.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{pub.journal} · {pub.role}</p>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-primary hover:underline font-mono mt-1 inline-block"
                    >
                      DOI: {pub.doi}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold mb-6 flex items-center gap-2"
        >
          <Trophy className="text-primary" size={22} />
          Awards & Achievements
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-4 rounded-lg border border-border bg-card text-sm text-muted-foreground hover:border-glow/30 transition-colors"
            >
              <span className="text-primary mr-2">🏆</span>
              {award}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
