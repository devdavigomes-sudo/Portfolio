import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const UNIV_IMAGE = "https://media.base44.com/images/public/user_69b07d499953b727c52043c0/3c9a081b4_maxresdefault.jpg";
const ENG_LOGO = "https://media.base44.com/images/public/user_69b07d499953b727c52043c0/1298c3d36_Simbolo_Engenharia_de_Software.jpg";

export default function EducationSection() {
  return (
    <section id="formacao" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-space font-medium text-sm tracking-widest uppercase mb-3">
            Educação
          </p>
          <h2 className="font-space font-bold text-3xl sm:text-4xl">
            Minha <span className="text-primary">Formação</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            {/* Image card */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border bg-card">
              <img
                src={UNIV_IMAGE}
                alt="Universidade de Vassouras - Curso de Engenharia de Software"
                className="w-full h-48 lg:h-full object-cover"
              />
            </div>

            {/* Info card */}
            <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-border flex-shrink-0 bg-secondary">
                    <img
                      src={ENG_LOGO}
                      alt="Logo Engenharia de Software"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-space font-bold text-xl text-foreground">
                      Engenharia de Software
                    </h3>
                    <p className="text-muted-foreground font-inter text-sm mt-1">
                      Bacharelado
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <GraduationCap size={18} className="text-primary" />
                    <span className="font-inter text-sm text-secondary-foreground">
                      Universidade de Vassouras — Campus Maricá
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-primary" />
                    <span className="font-inter text-sm text-secondary-foreground">
                      Em andamento
                    </span>
                  </div>
                </div>

                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  Cursando Engenharia de Software com foco em desenvolvimento de sistemas, 
                  algoritmos, estruturas de dados e boas práticas de programação. 
                  Aprendendo a projetar e construir soluções robustas e escaláveis.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {["Algoritmos", "Estrutura de Dados", "POO", "Engenharia de Requisitos", "Banco de Dados"].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-md bg-secondary text-xs font-inter text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}