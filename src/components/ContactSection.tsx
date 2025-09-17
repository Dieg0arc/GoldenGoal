import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Instagram, Facebook } from "lucide-react";
import TikTokIcon from "../assets/tik-tok.png"; // ruta a tu icono

interface SocialButtonProps {
  icon: React.ReactNode;
  name: string;
  color?: string; // ahora puede ser opcional para TikTok
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
        className={`relative overflow-hidden border-2 transition-all duration-300 ${
          color ? color : ""
        }`}
        onClick={() => window.open(href, "_blank")}
      >
        <div className="flex items-center space-x-3">
          {icon}
          {/* Texto que aparece al pasar el mouse */}
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300"
          >
            {name}
          </motion.span>
        </div>

        {/* Fondo de hover solo si tiene color definido */}
        {color && (
          <motion.div
            className={`absolute inset-0 ${color.replace("hover:", "")} opacity-0 group-hover:opacity-10`}
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
        )}
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
      href: "https://www.instagram.com/cd_golden_goal/",
    },
    {
      icon: <Facebook className="h-6 w-6" />,
      name: "Facebook",
      color: "hover:bg-blue-600 hover:text-white",
      href: "https://www.facebook.com/share/173zusS58d/?mibextid=wwXIfr",
    },

    {
      icon: <img src={TikTokIcon} alt="TikTok" className="h-6 w-6" />,
      name: "TikTok",
      href: "https://www.tiktok.com/@cd.golde.goal", // 👈 sin color
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
