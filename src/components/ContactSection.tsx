import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

interface SocialButtonProps {
  icon: React.ReactNode;
  name: string;
  color: string;
  href: string;
}

function SocialButton({ icon, name, color, href }: SocialButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <Button
        variant="outline"
        size="lg"
        className={`relative overflow-hidden border-2 hover:border-transparent transition-all duration-300 ${color}`}
        onClick={() => window.open(href, "_blank")}
      >
        <div className="flex items-center space-x-3">
          {icon}
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileHover={{ width: "auto", opacity: 1 }}
            className="overflow-hidden whitespace-nowrap"
          >
            {name}
          </motion.span>
        </div>

        <motion.div
          className={`absolute inset-0 ${color.replace("hover:", "")} opacity-0 group-hover:opacity-10`}
          initial={{ x: "-100%" }}
          whileHover={{ x: "0%" }}
          transition={{ duration: 0.3 }}
        />
      </Button>
    </motion.div>
  );
}

export function ContactSection() {
  const socialLinks = [
    {
      icon: <Instagram className="h-6 w-6" />,
      name: "Instagram",
      color: "hover:bg-pink-500 hover:text-white",
      href: "https://instagram.com",
    },
    {
      icon: <Facebook className="h-6 w-6" />,
      name: "Facebook",
      color: "hover:bg-blue-600 hover:text-white",
      href: "https://facebook.com",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      color: "hover:bg-blue-700 hover:text-white",
      href: "https://linkedin.com",
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      name: "YouTube",
      color: "hover:bg-red-600 hover:text-white",
      href: "https://youtube.com",
    },
  ];

  return (
    <section id="contacto" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Síguenos en nuestras redes sociales para estar al día con las últimas
            tendencias y ofertas especiales
          </p>

          {/* Botones de redes sociales */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SocialButton {...social} />
              </motion.div>
            ))}
          </div>

          {/* Info adicional */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-card rounded-lg border"
          >
            <h3 className="text-xl font-semibold mb-2">¿Tienes alguna pregunta?</h3>
            <p className="text-muted-foreground">
              No dudes en contactarnos a través de cualquiera de nuestras redes
              sociales. ¡Estamos aquí para ayudarte!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
