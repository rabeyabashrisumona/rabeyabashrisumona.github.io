import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Research Assistant",
    company: "Peer Research Lab",
    period: "Oct 2025 – Present",
    points: [
      "Developed hybrid CNN models for multi-class brain tumor classification using PyTorch.",
      "Implemented transfer learning with ResNet and Xception architectures.",
      "Applied data augmentation, preprocessing, and stratified data splitting techniques.",
      "Evaluated models using Accuracy, Precision, Recall, F1-score, ROC-AUC, and Confusion Matrix.",
      "Optimized model performance using hyperparameter tuning and learning rate scheduling.",
      "Contributed to Q1 journal publication through experimental validation and technical documentation.",
    ],
  },
  {
    title: "Business Analyst",
    company: "Munshe IT",
    period: "Jul 2025 – Aug 2025",
    points: [
      "Analyzed software requirements and mapped functional workflows.",
      "Collaborated with developers to clarify requirements and resolve ambiguities.",
      "Assisted in documentation, task tracking, and basic reporting activities.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Professional <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="relative border-l-2 border-border pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              
              <div className="p-6 rounded-xl border border-border bg-card hover:border-glow/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-primary text-sm font-mono">{exp.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
