import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 85, category: "Avançado", color: "#3B82F6" },
  { name: "HTML", level: 90, category: "Avançado", color: "#F97316" },
  { name: "CSS", level: 85, category: "Avançado", color: "#8B5CF6" },
  { name: "Java", level: 35, category: "Iniciante", color: "#EF4444" },
  { name: "JavaScript", level: 30, category: "Iniciante", color: "#EAB308" },
];

const tags = [
  "Git & GitHub",
  "Lógica de Programação",
  "Algoritmos",
  "Estrutura de Dados",
  "POO",
  "Banco de Dados",
  "Trabalho em Equipe",
  "Resolução de Problemas",
  "Aprendizado Rápido",
];

export default function SkillsSection() {
  return (
    <section id="habilidades" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-space font-medium text-sm tracking-widest uppercase mb-3">
            Competências
          </p>
          <h2 className="font-space font-bold text-3xl sm:text-4xl">
            Minhas <span className="text-primary">Habilidades</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill bars */}
          <div className="space-y-7">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-3">
                    <span className="font-space font-semibold text-sm text-foreground">
                      {skill.name}
                    </span>
                    <span
                      className="text-xs font-inter px-2.5 py-0.5 rounded-full border"
                      style={{ color: skill.color, borderColor: `${skill.color}40`, backgroundColor: `${skill.color}12` }}
                    >
                      {skill.category}
                    </span>
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-xs font-space font-medium text-muted-foreground"
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                {/* Track */}
                <div className="h-2.5 bg-secondary rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                    className="h-full rounded-full relative"
                    style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
                  >
                    {/* Shimmer */}
                    <motion.span
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 + i * 0.15, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-space font-semibold text-base mb-6 text-foreground">
              Outras competências
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.07 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-inter text-secondary-foreground hover:border-primary/30 hover:text-foreground hover:bg-primary/5 transition-colors duration-300 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}