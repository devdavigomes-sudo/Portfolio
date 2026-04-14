import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Phone, Send, CheckCircle } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "E-mail",
    value: "devdavigomes@gmail.com",
    href: "mailto:devdavigomes@gmail.com",
    desc: "Mande uma mensagem",
    color: "#EA4335",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(21) 99500-6549",
    href: "https://wa.me/5521995006549",
    desc: "Vamos conversar",
    color: "#25D366",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@Cavallini_Davi",
    href: "https://instagram.com/Cavallini_Davi",
    desc: "Me siga",
    color: "#E1306C",
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (value, label) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 -left-48 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-space font-medium text-sm tracking-widest uppercase mb-3">
            Fale comigo
          </p>
          <h2 className="font-space font-bold text-3xl sm:text-4xl mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-muted-foreground font-inter text-base max-w-md mx-auto">
            Estou sempre aberto a novas oportunidades, parcerias e conversas sobre tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Hover background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${contact.color}08 0%, transparent 70%)` }}
              />

              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col items-center p-8 pb-4"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${contact.color}15`, border: `1px solid ${contact.color}30` }}
                >
                  <contact.icon size={24} style={{ color: contact.color }} />
                </div>
                <h3 className="font-space font-semibold text-base text-foreground mb-1">
                  {contact.label}
                </h3>
                <p className="font-inter text-xs text-muted-foreground mb-3">
                  {contact.desc}
                </p>
                <p className="font-inter text-xs text-center text-secondary-foreground break-all">
                  {contact.value}
                </p>
              </a>

              {/* Copy button */}
              <div className="relative px-4 pb-5">
                <button
                  onClick={() => handleCopy(contact.value, contact.label)}
                  className="w-full mt-3 py-2 rounded-lg bg-secondary hover:bg-muted text-xs font-inter text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {copied === contact.label ? (
                    <>
                      <CheckCircle size={12} className="text-green-500" />
                      <span className="text-green-500">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      Copiar
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground font-inter text-sm mb-4">
            Prefere mandar um e-mail direto?
          </p>
          <a
            href="mailto:devdavigomes@gmail.com"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-inter font-medium text-sm rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            devdavigomes@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}