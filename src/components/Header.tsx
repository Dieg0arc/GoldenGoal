import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import tiendaLogo from "../assets/logo-H.png";

/**
 * Header
 *
 * Reglas pedidas (respetadas):
 * - Mantener el tamaño del logo: h-20 w-auto
 * - Mantener la distancia entre elementos del menú: space-x-8
 * - Mantener la altura del contenedor: h-25
 *
 * Mejoras aplicadas:
 * - Tipografías unificadas en botones/enlaces (tamaño, peso y color)
 * - Estados de hover/focus consistentes
 * - Estado activo visible (subrayado sutil + color primario)
 * - El trigger "Productos" muestra estado abierto (color)
 * - Menú móvil con la misma línea tipográfica
 * - Accesibilidad (aria-*, focus keyboard)
 */

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({
  isDark,
  toggleTheme,
  activeSection,
  setActiveSection,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Desplaza suavemente a una sección, la marca activa y cierra menú móvil.
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const isActive = (sectionId: string) => activeSection === sectionId;

  /**
   * Clase común para tipografía de navegación (desktop y móvil).
   * Ajusta color, peso y tamaño de letra de forma consistente.
   */
const navTextClass =
  "text-lg md:text-2xl font-medium text-foreground/90 hover:text-foreground transition-colors";


  /**
   * Clase que agrega un subrayado sutil cuando la opción está activa.
   * Mantiene distancias; el subrayado no altera la altura.
   */
  const activeUnderlineClass =
    "relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:rounded-full after:bg-primary";

  return (
<header className="sticky top-0 z-50 w-full shadow-md bg-background/95 backdrop-blur transition-colors duration-300 dark:bg-background/90">
      <div className="container mx-auto px-4 flex h-25 items-center justify-between">
        {/* Logo */}
        <motion.h1
          className="cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("hero")}
          role="link"
          aria-label="Ir al inicio"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              scrollToSection("hero");
            }
          }}
        >
          <img
            src={tiendaLogo}
            alt="Logo de la tienda"
            className="h-20 w-auto"
            fetchPriority="high"
            decoding="async"
          />
        </motion.h1>

        {/* Navegación Desktop (se respeta space-x-8) */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Trigger Productos: color al abrir (data-state=open) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`${navTextClass} data-[state=open]:text-foreground`}
                aria-label="Abrir menú de productos"
              >
                Productos
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={10}
              className="bg-background dark:bg-background shadow-md rounded-md"
            >
              {/* <DropdownMenuItem 
                onClick={() => scrollToSection("mujer")}
                className={`${navTextClass} ${
                  isActive("mujer") ? "text-primary" : ""
                }`}
              >
                Mujer
              </DropdownMenuItem> */}
              <DropdownMenuItem
                onClick={() => scrollToSection("hombre")}
                className={`${navTextClass} ${
                  isActive("hombre") ? "text-primary" : ""
                }`}
              >
                Hombre
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => scrollToSection("ninos")}
                className={`${navTextClass} ${
                  isActive("ninos") ? "text-primary" : ""
                }`}
              >
                Niños
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contáctanos: activo con subrayado sutil */}
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contacto")}
            className={`${navTextClass} ${
              isActive("contacto")
                ? `text-primary ${activeUnderlineClass}`
                : ""
            }`}
            aria-current={isActive("contacto") ? "page" : undefined}
          >
            Contáctanos
          </Button>

          {/* Toggle tema */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="text-foreground/90 hover:text-foreground !size-10"
          >
            {isDark ? <Sun className="size-7" /> : <Moon className="size-7" />}
          </Button>
        </nav>

        {/* Navegación Móvil */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="text-foreground/90 hover:text-foreground !size-8"
          >
            {isDark ? <Sun className="size-6" /> : <Moon className="size-6" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="text-foreground/90 hover:text-foreground"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Menú Móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background transition-colors duration-300 dark:bg-background/90"
          >
            <div className="py-4 space-y-2">
              <Button
                variant="ghost"
                className={`w-full justify-start pl-8 ${navTextClass} ${
                  isActive("mujer") ? `text-primary ${activeUnderlineClass}` : ""
                }`}
                onClick={() => scrollToSection("mujer")}
              >
                Mujer
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start pl-8 ${navTextClass} ${
                  isActive("hombre") ? `text-primary ${activeUnderlineClass}` : ""
                }`}
                onClick={() => scrollToSection("hombre")}
              >
                Hombre
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start pl-8 ${navTextClass} ${
                  isActive("ninos") ? `text-primary ${activeUnderlineClass}` : ""
                }`}
                onClick={() => scrollToSection("ninos")}
              >
                Niños
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start px-4 ${navTextClass} ${
                  isActive("contacto")
                    ? `text-primary ${activeUnderlineClass}`
                    : ""
                }`}
                onClick={() => scrollToSection("contacto")}
                aria-current={isActive("contacto") ? "page" : undefined}
              >
                Contáctanos
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
