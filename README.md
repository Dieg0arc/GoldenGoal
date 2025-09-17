# Tienda Online 

Una tienda online moderna y responsiva desarrollada con tecnologías web de vanguardia.

##  Descripción

Este proyecto es una **página web de tienda online** desarrollada con **React, TypeScript y TailwindCSS**, con animaciones fluidas usando **Framer Motion**. El objetivo es crear una experiencia de usuario **moderna, responsiva y visualmente atractiva** que muestre productos de distintas categorías (Mujer, Hombre, Niños) con funcionalidades como cambio de tema claro/oscuro y enlaces a redes sociales.

##  Tecnologías Utilizadas

- **React 18 + TypeScript** - Framework principal y tipado estático
- **Vite** - Bundler y servidor de desarrollo rápido
- **TailwindCSS 4** - Framework CSS para diseño responsivo
- **Framer Motion** - Librería para animaciones y transiciones suaves
- **Lucide Icons** - Iconografía moderna y minimalista
- **Arquitectura de componentes** - Componentes reutilizables y modulares

##  Estructura del Proyecto

```
src/
├── assets/                    # Imágenes y recursos del proyecto
│   └── react.svg
├── components/
│   ├── ui/                   # Componentes de UI reutilizables
│   │   ├── Button.tsx        # (Button, Card, Modal, etc.)
│   │   └── ...
│   ├── ContactSection.tsx    # Sección de contacto
│   ├── Footer.tsx           # Pie de página
│   ├── Header.tsx           # Cabecera y navegación
│   ├── ProductCard.tsx      # Tarjeta de producto
│   ├── ProductCarousel.tsx  # Carrusel de productos
│   └── ProductGrid.tsx      # Grilla de productos
├── styles/
│   └── globals.css          # Estilos globales
├── App.tsx                  # Componente principal
├── main.tsx                 # Punto de entrada de React
├── index.css               # Estilos base
└── vite-env.d.ts           # Tipos de Vite

public/
└── vite.svg                # Recursos públicos
```

##  Instalación y Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/Dieg0arc/E-commerce
cd tienda
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar servidor de desarrollo
```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

### 4. Comandos adicionales
```bash
npm run build    # Construir para producción
npm run preview  # Vista previa de la build
npm run lint     # Linter (si está configurado)
```

##  Gestión de Recursos

- **Imágenes del proyecto**: Se importan desde `src/assets/`
- **Recursos públicos**: Usar la carpeta `public/` para assets referenciados directamente
- **Optimización**: Las imágenes se optimizan automáticamente en el build

##  Características Principales

-  Diseño responsivo y mobile-first
-  Tema claro y oscuro
-  Animaciones suaves con Framer Motion
-  Componentes modulares y reutilizables
-  TypeScript para mayor robustez
-  Performance optimizada con Vite


##  Autor

**Diego Alejandro Ramírez Castro**  
[GitHub]([https://github.com/[tu-usuario](https://github.com/Dieg0arc)](https://github.com/Dieg0arc)) • [LinkedIn]([https://linkedin.com/in/tu-perfil](https://www.linkedin.com/in/diego-alejandro-ramirez-castro-1585302b1/))


---

Si te gusta este proyecto, ¡dale una estrella en GitHub!
