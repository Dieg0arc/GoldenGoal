import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

interface ProductCarouselProps {
  products: Product[];
}

/**
 * Carrusel de productos.
 * Ajusta la cantidad de items visibles según el ancho de pantalla.
 * Incluye navegación con flechas y autoscroll.
 */
export function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  const getCurrentProducts = () => {
    const start = currentIndex * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  };

  // Auto-advance carousel cada 5s
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, totalPages]);

  return (
    <div className="relative w-full mb-10">
      <div className="flex items-center justify-between mb-6 w-full">
        <h2 className="text-3xl font-bold flex-shrink-0">Productos Destacados</h2>
        <div className="flex gap-2 flex-shrink-0">
          <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* SOLUCIÓN 1: Cambiar overflow y ajustar padding */}
      <div className="relative px-4 -mx-4">
        <div className="overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ 
                duration: 0.4,
                ease: "easeInOut"
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {getCurrentProducts().map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex
                ? "bg-primary"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ALTERNATIVA 2: Versión con fade en lugar de slide
export function ProductCarouselAlternative({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  const getCurrentProducts = () => {
    const start = currentIndex * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, totalPages]);

  return (
    <div className="relative w-full mb-10">
      <div className="flex items-center justify-between mb-6 w-full">
        <h2 className="text-3xl font-bold flex-shrink-0">Productos Destacados</h2>
        <div className="flex gap-2 flex-shrink-0">
          <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Usando fade en lugar de slide */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {getCurrentProducts().map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                image={product.image}
                category={product.category}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex
                ? "bg-primary"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}