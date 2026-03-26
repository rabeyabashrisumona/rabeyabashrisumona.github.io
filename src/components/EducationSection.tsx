import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "North South University, Dhaka",
    degree: "MS in Computer Science and Engineering",
    cgpa: "CGPA: 3.50/4.00",
    period: "2025 – Present",
  },
  {
    school: "Bangladesh University of Business and Technology (BUBT), Dhaka",
    degree: "BSc in Computer Science and Engineering",
    cgpa: "CGPA: 3.82/4.00",
    period: "2021 – 2025",
  },
  {
    school: "Shaheed Police Smrity College, Dhaka",
    degree: "Higher Secondary Certificate",
    cgpa: "CGPA: 5.00/5.00",
    period: "2020",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4 p-6 rounded-xl border border-border bg-background hover:border-glow/30 transition-colors"
            >
              <GraduationCap className="text-primary shrink-0 mt-1" size={24} />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <span className="text-xs text-muted-foreground font-mono">{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
                <p className="text-sm text-primary font-mono mt-1">{edu.cgpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
