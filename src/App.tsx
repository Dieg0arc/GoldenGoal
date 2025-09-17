import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ProductCarousel } from "./components/ProductCarousel";
import { ProductGrid } from "./components/ProductGrid";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";
import img1 from "./assets/Colombia 2025.jpg";
import img2 from "./assets/argentina.jpg";
import img3 from "./assets/Barca.jpg";
import img4 from "./assets/Real-Madrid.jpg";
import img5 from "./assets/Manchester city.jpg";
import img6 from "./assets/Inter-miami.jpg";
import img7 from "./assets/Honduras.jpg";
import img8 from "./assets/Mexico.jpg";
import img9 from "./assets/Salvador.jpg";
import img10 from "./assets/Guatemala.jpg";
import img11 from "./assets/Argentina-Niño.jpg";
import img12 from "./assets/Barca-Niño.jpg";
import img13 from "./assets/Manchester-Niño.jpg";
import img14 from "./assets/Real-Niño.jpg";
import img15 from "./assets/Salvador-Niño.jpg";
import img16 from "./assets/Guatemala-niños.jpg";
import img17 from "./assets/Real-beisbolera.jpg";
import img18 from "./assets/Salvador-beisbolera.jpg";

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
    { id: 2, name: "Argentina", image: img2, category: "hombre" },
    { id: 11, name: "Argentina Niño", image: img11, category: "niños" },
    { id: 1, name: "FCF Colombia 2025", image: img1, category: "hombre" },

    { id: 3, name: "Barcelona", image: img3, category: "hombre" },
    { id: 12, name: "Barcelona Niño", image: img12, category: "niños" },
    { id: 7, name: "Honduras", image: img7, category: "hombre" },

    { id: 5, name: "Manchester City", image: img5, category: "hombre" },
    { id: 13, name: "Manchester Niño", image: img13, category: "niños" },
    { id: 6, name: "Inter Miami", image: img6, category: "hombre" },

    { id: 4, name: "Real Madrid", image: img4, category: "hombre" },
    { id: 14, name: "Real Madrid Niño", image: img14, category: "niños" },
    { id: 17, name: "Real Madrid Beisbolera", image: img17, category: "hombre" },

    { id: 9, name: "Salvador", image: img9, category: "hombre" },
    { id: 15, name: "Salvador Niño", image: img15, category: "niños" },
    { id: 18, name: "Salvador Beisbolera", image: img18, category: "hombre" },

    { id: 10, name: "Guatemala", image: img10, category: "hombre" },
    { id: 16, name: "Guatemala Niños", image: img16, category: "niños" },
    { id: 8, name: "Mexico", image: img8, category: "hombre" },

  ];

  // const womenProducts = featuredProducts.filter((p) => p.category === "mujer");
  const menProducts = featuredProducts.filter((p) => p.category === "hombre");
  const kidsProducts = featuredProducts.filter((p) => p.category === "niños");

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
          className="py-20 bg-background/50 bg-gradient-to-b from-background to-muted/20"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text color-black">
                Golden Goal
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
        {/* {womenProducts.length > 0 && (
          <ProductGrid id="mujer" title="Colección Mujer"products={womenProducts} />
        )} */}
        {menProducts.length > 0 && (
          <ProductGrid id="hombre" title="Colección Hombre" products={menProducts} />
        )}
        {kidsProducts.length > 0 && (
          <ProductGrid id="niños" title="Colección Niños" products={kidsProducts} />
        )}

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
