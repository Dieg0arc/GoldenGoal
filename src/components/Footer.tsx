import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t dark:bg-background/90 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-4">
            <h3 className="text-2xl font-bold">Golden Goal</h3>
            <p className="text-muted-foreground dark:text-muted">Tu destino para la moda más actual. Ropa de calidad para toda la familia.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="space-y-4">
            <h4 className="font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground dark:text-muted">
              <li><a href="#hero" className="hover:text-foreground transition-colors">Inicio</a></li>
              <li><a href="#hombre" className="hover:text-foreground transition-colors">Hombre</a></li>
              <li><a href="#ninos" className="hover:text-foreground transition-colors">Niños</a></li>
              <li><a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a></li>
            </ul>
          </motion.div>

          {/* Customer Service */}
          {/* <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="space-y-4">
            <h4 className="font-semibold">Atención al Cliente</h4>
            <ul className="space-y-2 text-muted-foreground dark:text-muted">
              <li><a href="#" className="hover:text-foreground transition-colors">Política de Devoluciones</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Guía de Tallas</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Envíos</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </motion.div> */}

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="space-y-3 text-muted-foreground dark:text-muted">
              <div className="flex items-center space-x-2"><Mail className="h-4 w-4" /><span>cdgoldengoal6@gmail.com</span></div>
              <div className="flex items-center space-x-2"><Phone className="h-4 w-4" /><span>3008198413 / +1 (240) 741-9140‬
</span></div>
              <div className="flex items-center space-x-2"><MapPin className="h-4 w-4" /><span>Armenia Quindio- Maryland ( EEUU)</span></div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Golden Goal.</div>
          <div className="flex justify-center items-center mt-3 space-x-2">
            <span className="text-gray-600 text-xs">Desarrollado por</span>
            <a href="https://github.com/Dieg0arc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors text-xs">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>Diego Alejandro Ramírez Castro</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
