import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL", "C++"],
  },
  {
    title: "ML & Data Analysis",
    skills: ["Supervised Learning", "Unsupervised Learning", "Classification", "Model Evaluation", "Cross-validation", "Feature Engineering"],
  },
  {
    title: "Deep Learning",
    skills: ["CNNs", "Transfer Learning", "ResNet", "Xception", "Image Segmentation"],
  },
  {
    title: "NLP & LLMs",
    skills: ["Prompt Engineering", "Text Preprocessing", "Embeddings", "Transformer Fundamentals"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "OpenCV"],
  },
  {
    title: "Tools & Databases",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "Jira", "ClickUp", "LaTeX", "Canva"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-background hover:border-glow/30 transition-colors"
            >
              <h3 className="font-semibold text-primary font-mono text-sm mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
