import React from "react";
import { motion } from "framer-motion";
import { Code2, BookOpen, Lightbulb, MapPin } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Desenvolvedor", desc: "Python, HTML, CSS e mais", color: "from-primary/20 to-primary/5" },
  { icon: BookOpen, label: "Estudante", desc: "Engenharia de Software", color: "from-blue-500/10 to-blue-500/5" },
  { icon: Lightbulb, label: "Criativo", desc: "Soluções inovadoras", color: "from-yellow-500/10 to-yellow-500/5" },
  { icon: MapPin, label: "Maricá, RJ", desc: "Universidade de Vassouras", color: "from-green-500/10 to-green-500/5" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
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
            Conheça-me
          </p>
          <h2 className="font-space font-bold text-3xl sm:text-4xl">
            Sobre <span className="text-primary">Mim</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Bio text with highlight lines */}
            <div className="space-y-5">
              <p className="text-muted-foreground font-inter text-base leading-relaxed">
                Me chamo{" "}
                <span className="relative text-foreground font-semibold inline-block">
                  Davi Gomes Araújo
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary/50" />
                </span>
                , tenho 19 anos e sou estudante de Engenharia de Software pela{" "}
                <span className="text-foreground font-medium">Universidade de Vassouras — Campus Maricá</span>.
              </p>
              <p className="text-muted-foreground font-inter text-base leading-relaxed">
                Tenho domínio em{" "}
                <span className="text-primary font-medium">Python, HTML e CSS</span>, e estou expandindo meu repertório com{" "}
                <span className="text-primary font-medium">Java e JavaScript</span>, sempre buscando evoluir como desenvolvedor.
              </p>
              <p className="text-muted-foreground font-inter text-base leading-relaxed">
                Meu objetivo é me tornar um desenvolvedor completo, contribuindo para projetos que façam a diferença. Sou movido pela curiosidade e pelo desejo de criar soluções que impactem pessoas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "19", label: "Anos" },
                { value: "5+", label: "Linguagens" },
                { value: "∞", label: "Vontade de aprender" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <p className="font-space font-bold text-2xl text-primary">{stat.value}</p>
                  <p className="font-inter text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-space font-semibold text-sm text-foreground mb-1">
                  {item.label}
                </h3>
                <p className="font-inter text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}