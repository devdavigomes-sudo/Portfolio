import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Mail } from "lucide-react";

const PHOTO_URL = "https://media.base44.com/images/public/user_69b07d499953b727c52043c0/746331896_9da27bb0-3e14-4048-b358-1440c7af1bfe.png";

const TypewriterText = ({ words }) => {
  const [index, setIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 60 : 100;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="text-primary">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(340 60% 35%) 1px, transparent 1px), linear-gradient(90deg, hsl(340 60% 35%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-primary rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-space text-xs tracking-widest uppercase font-medium">
              Disponível para oportunidades
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4"
          >
            Davi Gomes
            <br />
            <span className="text-primary">Araújo</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl sm:text-2xl font-space font-medium text-muted-foreground mb-6 h-9"
          >
            <TypewriterText words={["Desenvolvedor Python", "Estudante de ES", "Criador de soluções", "Apaixonado por código"]} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-muted-foreground font-inter text-base max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            19 anos, estudante de Engenharia de Software pela Universidade de Vassouras — Campus Maricá. Transformando ideias em código.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-4 justify-center lg:justify-start flex-wrap"
          >
            <a
              href="#contato"
              className="group relative px-7 py-3.5 bg-primary text-primary-foreground font-inter font-medium text-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Entre em contato</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#sobre"
              className="px-7 py-3.5 border border-border text-foreground font-inter font-medium text-sm rounded-xl hover:bg-secondary hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Saiba mais
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-5 mt-10 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Instagram, href: "https://instagram.com/Cavallini_Davi", label: "Instagram" },
              { icon: Mail, href: "mailto:devdavigomes@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Icon size={19} />
                <span className="text-xs font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Rotating border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full border border-dashed border-primary/20"
            />
            {/* Glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/25 via-transparent to-primary/10 rounded-full blur-2xl" />

            {/* Corner decorations */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />

            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
              <img
                src={PHOTO_URL}
                alt="Davi Gomes Araújo"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-4 -right-4 sm:-right-8 bg-card border border-border rounded-xl px-4 py-2.5 shadow-xl"
            >
              <p className="font-space font-bold text-sm text-foreground">19 anos</p>
              <p className="font-inter text-xs text-muted-foreground">Dev em formação</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}