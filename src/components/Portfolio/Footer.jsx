import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-space font-bold text-sm">
          <span className="text-primary">D</span>avi<span className="text-primary">.</span>
        </p>
        <p className="font-inter text-xs text-muted-foreground">
          © {new Date().getFullYear()} Davi Gomes Araújo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}