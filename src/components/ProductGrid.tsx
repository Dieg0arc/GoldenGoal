import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

interface ProductGridProps {
  title: string;
  products: Product[];
  id: string;
}

/**
 * Grid de productos con animaciones.
 * Muestra mensaje si no hay productos disponibles.
 */
export function ProductGrid({ title, products, id }: ProductGridProps) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard
                  name={product.name}
                  image={product.image}
                  category={product.category}
                />
              </motion.div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground dark:text-muted">
                Próximamente nuevos productos en esta categoría
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
