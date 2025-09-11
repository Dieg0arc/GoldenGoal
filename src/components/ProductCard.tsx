import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  image: string;
  category: string;
}

/**
 * Componente para mostrar una tarjeta de producto.
 * Incluye animación al pasar el mouse (hover).
 */
export function ProductCard({ name, image, category }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
