import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Hybrid Brain Tumor Classification (RDXNet)",
    desc: "Designed a hybrid CNN architecture combining Xception and ResNet50. Built an end-to-end ML pipeline including preprocessing, augmentation, training, and evaluation. Generated ROC curves, confusion matrices, and Grad-CAM visualizations.",
    tags: ["PyTorch", "CNN", "Transfer Learning", "Grad-CAM"],
  },
  {
    title: "3D MRI Brain Tumor Segmentation (BRATS2020)",
    desc: "Preprocessed volumetric MRI datasets for deep learning segmentation. Evaluated segmentation models using Dice coefficient and IoU metrics.",
    tags: ["3D MRI", "Segmentation", "Deep Learning"],
  },
  {
    title: "Real-Time Gesture Recognition System",
    desc: "Developed a CNN-based real-time gesture classification system. Implemented dataset preparation, training loop, and inference module.",
    tags: ["CNN", "Real-Time", "Computer Vision"],
  },
  {
    title: "CNN-Based Brain Tumor Analysis (Br35H)",
    desc: "Trained and compared multiple CNN architectures for tumor detection. Documented comparative performance analysis.",
    tags: ["CNN", "Medical Imaging", "Analysis"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-glow/30 hover:glow-shadow transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {proj.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary font-mono"
                  >
                    {tag}
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

export default ProjectsSection;
