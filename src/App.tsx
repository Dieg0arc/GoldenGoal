import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ProductCarousel } from "./components/ProductCarousel";
import { ProductGrid } from "./components/ProductGrid";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";


export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Datos de productos (puedes usar tus imágenes locales)
  const featuredProducts = [
 { id: 1, name: "Vestido Elegante", image: img1, category: "Mujer" },
  { id: 2, name: "Camisa Casual", image: img2, category: "Hombre" },
  { id: 3, name: "Conjunto Infantil", image: img3, category: "Niños" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="py-20 bg-gradient-to-b from-background to-muted/20"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                TIENDA
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Descubre la moda más actual para toda la familia. Calidad, estilo y
                comodidad en cada prenda.
              </p>
            </motion.div>

            <ProductCarousel products={featuredProducts} />
          </div>
        </section>

        {/* Colecciones */}
        <ProductGrid id="mujer" title="Colección Mujer" products={featuredProducts} />
        <ProductGrid id="hombre" title="Colección Hombre" products={featuredProducts} />
        <ProductGrid id="ninos" title="Colección Niños" products={featuredProducts} />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
