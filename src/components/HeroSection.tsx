import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            AI / ML Engineer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Rabeya Bashri{" "}
            <span className="text-gradient">Sumona</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            MS CSE student & AI researcher with hands-on experience in
            Machine Learning, Deep Learning, and Computer Vision.
            Published in Elsevier Q1.
          </p>
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <MapPin size={14} className="text-primary" />
            Dhaka, Bangladesh
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="https://github.com/rabeyabashrisumona"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-surface text-foreground hover:border-glow/50 transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sumona18"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-surface text-foreground hover:border-glow/50 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
