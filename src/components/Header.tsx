import { useState } from "react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ isDark, toggleTheme, activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur dark:bg-background/90 transition-colors duration-300">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
        >
          TIENDA
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Productos</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => scrollToSection('mujer')}>Mujer</DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('hombre')}>Hombre</DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('ninos')}>Niños</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" onClick={() => scrollToSection('contacto')}>Contáctanos</Button>

          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-background dark:bg-background/90 transition-colors duration-300"
            >
              <div className="py-4 space-y-4">
                <Button variant="ghost" className="w-full justify-start pl-8" onClick={() => scrollToSection('mujer')}>Mujer</Button>
                <Button variant="ghost" className="w-full justify-start pl-8" onClick={() => scrollToSection('hombre')}>Hombre</Button>
                <Button variant="ghost" className="w-full justify-start pl-8" onClick={() => scrollToSection('ninos')}>Niños</Button>
                <Button variant="ghost" className="w-full justify-start px-4" onClick={() => scrollToSection('contacto')}>Contáctanos</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
