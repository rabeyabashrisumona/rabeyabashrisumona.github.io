import { motion } from "framer-motion";
import { Brain, Code, FlaskConical, BookOpen } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Machine Learning", desc: "End-to-end ML pipelines" },
  { icon: Code, label: "Deep Learning", desc: "CNNs & Transfer Learning" },
  { icon: FlaskConical, label: "Computer Vision", desc: "Medical image analysis" },
  { icon: BookOpen, label: "Published Research", desc: "Elsevier Q1 journal" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            AI/ML Engineer and MS CSE student with strong hands-on experience in Machine Learning, Deep Learning, and Computer Vision. 
            Experienced in building end-to-end ML pipelines including data preprocessing, model training, hyperparameter tuning, 
            and performance evaluation. Skilled in PyTorch, TensorFlow, and Scikit-learn with exposure to NLP and Large Language Models. 
            Passionate about Generative AI and real-world AI system development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-glow/30 transition-all group"
            >
              <h.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-semibold mb-1">{h.label}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
