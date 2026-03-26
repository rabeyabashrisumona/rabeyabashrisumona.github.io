import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "rabeyabashrisumona@gmail.com", href: "mailto:rabeyabashrisumona@gmail.com" },
  { icon: Phone, label: "Phone", value: "+8801619629965", href: "tel:+8801619629965" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sumona18", href: "https://linkedin.com/in/sumona18" },
  { icon: Github, label: "GitHub", value: "github.com/rabeyabashrisumona", href: "https://github.com/rabeyabashrisumona" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            I'm always open to discussing AI research, collaboration opportunities, or new challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl border border-border bg-background hover:border-glow/40 hover:glow-shadow transition-all group"
            >
              <c.icon className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-xs text-muted-foreground mb-1">{c.label}</p>
              <p className="text-sm font-medium break-all">{c.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
