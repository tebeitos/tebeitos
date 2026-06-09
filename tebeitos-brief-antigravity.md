# BRIEF COMPLETO — TEBEITOS.COM
## Para Antigravity: construir el sitio web desde cero

---

## 1. QUÉ ES TEBEITOS

**Tebeitos** es un portal web tipo kiosko clásico español. No es una tienda, es un portal de recomendaciones con monetización por afiliados.

**Concepto central:** "El Kiosko de Siempre" — un kiosko de barrio español de los años 80/90 trasladado a internet. Cómics de ayer y de hoy, cromos, cartas coleccionables, juguetes retro y nostalgia de los 90.

**Público:** padres y abuelos nostálgicos (35-65 años) que compran para sus hijos/nietos, y niños actuales (6-12 años) que descubren el mundo del cómic y el coleccionismo.

**Modelo de negocio:** afiliados Amazon España (6% en libros, variable en otras categorías). Cada recomendación lleva enlace de compra a Amazon.

**URL:** tebeitos.com

---

## 2. IDENTIDAD VISUAL (APLICAR ESTRICTAMENTE)

### Paleta de colores oficial
```
--color-mostaza:     #E8A01B   /* Color principal, relleno letras logo */
--color-rojo:        #E1352A   /* Acento, botones de compra, ¡ZAS! */
--color-terracota:   #C44B2E   /* Sombras, detalles secundarios */
--color-negro:       #1B1714   /* Contornos, texto base */
--color-crema:       #F3E9D2   /* Fondo principal, simula papel de tebeo */
--color-hueso:       #FBF3E2   /* Texto sobre fondos oscuros */
--color-trama:       #CBB892   /* Trama de semitono, puntitos de imprenta */
```

### Estilo visual
- Cómic clásico español años 70-80, estilo editorial Bruguera
- Fondo general: crema papel (`#F3E9D2`) con trama de semitono sutil (`#CBB892`)
- Contornos negros gruesos en elementos destacados (tarjetas, botones, secciones)
- Onomatopeyas como elementos decorativos: ¡ZAS!, ¡PLOF!, ¡PUMBA!, ¡CHISPUM!
- Bocadillos de cómic para citas, destacados y llamadas a la acción
- Sombras con offset en estilo cómic (no sombras suaves modernas)
- Sin gradientes. Colores planos, limpios, como impresión en offset
- Sensación de papel impreso, no de pantalla digital

### Tipografías
- **Titulares y logo:** Bangers (Google Fonts) — estilo cómic, mayúsculas, impactante
- **Subtítulos y etiquetas:** Fredoka One (Google Fonts) — redondeada, infantil pero legible
- **Texto largo (reseñas, blog):** Nunito (Google Fonts) — legible, amigable, cuerpo de texto
- **Código/datos técnicos:** no aplica

### Elementos decorativos recurrentes
- Estrellas de onomatopeya (como el ¡ZAS! del logo) para destacar novedades y ofertas
- Líneas de velocidad (speed lines) en elementos hero
- Trama de puntos Benday en fondos de secciones alternadas
- Bordes de viñeta de cómic en tarjetas de producto
- Bocadillos de cómic para tooltips, descripciones y CTAs

---

## 3. ARQUITECTURA DEL SITIO

### Estructura de URLs
```
tebeitos.com/                          → Home (el kiosko)
tebeitos.com/comics/                   → Catálogo de cómics
tebeitos.com/comics/[slug]/            → Reseña individual de cómic
tebeitos.com/comics/clasicos/          → Cómics clásicos (ayer)
tebeitos.com/comics/actuales/          → Cómics actuales (hoy)
tebeitos.com/cromos/                   → Cromos y álbumes
tebeitos.com/cromos/panini-mundial-2026/ → Sección estrella de arranque
tebeitos.com/cartas/                   → Cartas coleccionables
tebeitos.com/juguetes/                 → Juguetes retro
tebeitos.com/coleccionables/           → Funkos, mystery boxes, etc.
tebeitos.com/blog/                     → Artículos y guías
tebeitos.com/blog/[slug]/              → Artículo individual
tebeitos.com/edad/[edad]/              → Cómics por edad (SEO)
```

### Secciones principales (navegación)
1. **Cómics** (de ayer y de hoy)
2. **Cromos** (álbumes y colecciones)
3. **Cartas** (coleccionables)
4. **Juguetes retro**
5. **Blog** (guías y recomendaciones)

---

## 4. ESTRUCTURA DE CONTENIDO

### Esquema de una reseña de cómic (MDX)
Cada reseña es un archivo `.mdx` en `src/content/comics/` con esta estructura:

```mdx
---
title: "Dog Man: El Hombre Perro"
slug: "dog-man"
autor: "Dav Pilkey"
editorial: "Ediciones Molino"
edad: "7-10"
paginas: 240
precio: 14.95
dificultad: 2
valoracion: 5
temas: ["humor", "amistad", "aventura", "superhéroes"]
tipo: "actual"
imagen: "/images/comics/dog-man.jpg"
amazon: "https://www.amazon.es/dp/XXXXXXXXXX?tag=tebeitos-21"
fecha: 2024-01-15
destacado: true
---

## De qué va
[3-4 líneas sin spoilers]

## Por qué nos gusta en Tebeitos
[Opinión editorial propia, lo que diferencia Tebeitos de un catálogo]

## Para quién es ideal
[Perfil concreto: "Para el niño que ya leyó Superpatata y quiere más humor absurdo"]

## Temas que trata
[Lista de temas: amistad, justicia, humor, valores...]

## Cómics parecidos
[3-4 slugs de otras reseñas de la web]
```

### Esquema de un artículo de blog (MDX)
Cada artículo es un archivo `.mdx` en `src/content/blog/`:

```mdx
---
title: "Guía Panini Mundial 2026: todo lo que necesitas saber"
slug: "guia-panini-mundial-2026"
descripcion: "Dónde comprar, qué formatos hay, cuánto cuesta completar el álbum"
fecha: 2026-06-01
categoria: "cromos"
imagen: "/images/blog/panini-2026.jpg"
destacado: true
---
```

---

## 5. COMPONENTES A CREAR

### Componentes principales

**`<TarjetaComic />`**
- Imagen portada con borde estilo viñeta
- Título en Bangers
- Edad recomendada (etiqueta mostaza)
- Valoración en viñetas (🗯🗯🗯🗯🗯) en lugar de estrellas
- Botón "Comprar en Amazon" en rojo Bruguera
- Contorno negro, fondo crema

**`<FichaRapida />`**
- Caja destacada al inicio de cada reseña
- Campos: Edad / Páginas / Editorial / Precio / Dificultad / Valoración
- Fondo mostaza, texto negro, estilo tabla de datos de kiosko

**`<BotonAmazon />`**
- Botón rojo Bruguera (`#E1352A`)
- Texto blanco hueso en Fredoka One
- Borde negro grueso
- Sombra offset estilo cómic
- Icono de carrito
- Al hacer hover: escala ligera + efecto ¡ZAS!

**`<Onomatopeya />`**
- Estrella de puntas con texto dentro
- Variantes de color: roja (¡ZAS!), mostaza (¡NUEVO!), terracota (¡OFERTA!)
- Rotación aleatoria entre -15 y +15 grados

**`<ValoraciónViñetas />`**
- 5 bocadillos de cómic: rellenos (valorado) o vacíos
- Color mostaza para los rellenos

**`<SeccionKiosko />`**
- Contenedor de sección con fondo alternado
- Par: crema con trama / blanco hueso limpio
- Título de sección con línea decorativa estilo cómic

**`<BocadilloDestacado />`**
- Forma de bocadillo de cómic SVG
- Para citas, tips y llamadas a la atención
- Colores según importancia: mostaza / rojo / crema

---

## 6. HOME (LA PÁGINA PRINCIPAL)

La home simula visualmente un kiosko. Estructura de arriba a abajo:

### Bloque 1 — Hero / Escaparate del kiosko
- Fondo: crema con trama de semitono
- Logo Tebeitos centrado o izquierda
- Tagline: "El Kiosko de Siempre" en Bangers
- Ilustración del kiosko (placeholder de momento: rectángulo crema con texto "ILUSTRACIÓN KIOSKO — PRÓXIMAMENTE")
- Onomatopeya ¡ZAS! flotando en esquina

### Bloque 2 — Novedad destacada
- Banner ancho: "🔥 MUNDIAL PANINI 2026 — Guía completa aquí"
- Fondo rojo Bruguera, texto blanco hueso
- Enlace a `/cromos/panini-mundial-2026/`

### Bloque 3 — Las secciones del kiosko
- Grid de 4 tarjetas grandes: Cómics / Cromos / Cartas / Juguetes retro
- Cada tarjeta con icono ilustrado, título en Bangers, descripción breve
- Borde negro grueso, sombra offset estilo cómic

### Bloque 4 — Cómics destacados
- Título: "En el kiosko esta semana" con línea decorativa
- Grid de 6 tarjetas `<TarjetaComic />`
- Filtro: solo los que tienen `destacado: true`

### Bloque 5 — Banner nostalgia
- Fondo mostaza
- Texto: "¿Recuerdas el kiosko de tu barrio? Nosotros tampoco lo hemos olvidado."
- Subtext: "Cómics clásicos, cromos, juguetes... todo lo de siempre"
- CTA: "Ver cómics clásicos" → `/comics/clasicos/`

### Bloque 6 — Últimas del blog
- Título: "Del cuaderno de Tebeitos"
- 3 artículos recientes en tarjeta horizontal
- Imagen + título + fecha + extracto corto

### Footer
- Logo versión monocroma
- Links: Cómics / Cromos / Cartas / Juguetes / Blog / Sobre Tebeitos
- Texto afiliados: "Tebeitos participa en el programa de Afiliados de Amazon. Los enlaces llevan a Amazon España."
- Paleta crema con texto negro contorno

---

## 7. SEO TÉCNICO

### Meta básico por tipo de página
```
Home:
- title: "Tebeitos — El Kiosko de Siempre | Cómics, Cromos y Nostalgia"
- description: "Tu kiosko online de cómics clásicos y actuales, cromos Panini, cartas y juguetes retro. El kiosko de siempre, ahora en internet."

Reseña de cómic:
- title: "[Título del cómic] — Reseña y dónde comprarlo | Tebeitos"
- description: "[Descripción del frontmatter]"

Artículo blog:
- title: "[Título artículo] | Tebeitos"
- description: "[Descripción del frontmatter]"
```

### Schema markup
- Tipo `Book` en cada reseña de cómic (title, author, isbn, publisher)
- Tipo `Review` en cada reseña (reviewRating, reviewBody)
- Tipo `BreadcrumbList` en todas las páginas

### Sitemap
- Generar sitemap.xml automático con todas las URLs
- Incluir en robots.txt

---

## 8. PRIMER CONTENIDO A CREAR

Crear estas páginas desde el primer día para poder solicitar alta en Amazon Afiliados:

### Reseñas (10 iniciales)
1. `dog-man` — Dog Man: El Hombre Perro (Dav Pilkey)
2. `chiquigato` — Chiquigato (Dav Pilkey)
3. `capitan-calzoncillos` — El Capitán Calzoncillos (Dav Pilkey)
4. `superpatata` — Superpatata (Artur Laperla)
5. `isadora-moon` — Isadora Moon (Harriet Muncaster)
6. `mortadelo-filemon` — Mortadelo y Filemón (Ibáñez)
7. `zipi-zape` — Zipi y Zape (Escobar)
8. `las-hermanas` — Las Hermanas (Cazenove y William)
9. `asterix` — Astérix (Goscinny/Uderzo)
10. `hilda` — Hilda (Luke Pearson)

### Artículos de blog (3 iniciales)
1. `guia-panini-mundial-2026` — Guía completa álbum Panini Mundial 2026
2. `mejores-comics-ninos-7-anos` — Los mejores cómics para niños de 7 años
3. `comics-clasicos-compartir-hijos` — Cómics clásicos para compartir con tus hijos

### Página estática
- `/sobre-tebeitos/` — Quiénes somos, por qué existe Tebeitos, el kiosquero

---

## 9. STACK TÉCNICO

```
Framework:     Astro 4+
Estilos:       Tailwind CSS
Contenido:     MDX (colecciones de Astro Content Collections)
Tipografías:   Google Fonts (Bangers, Fredoka One, Nunito)
Hosting:       Vercel
Repositorio:   GitHub
Imágenes:      /public/images/ (locales) + Amazon widgets (afiliados)
Analytics:     Google Analytics 4 (insertar GA4 tag)
```

---

## 10. INSTRUCCIONES PARA ANTIGRAVITY

**Crea el proyecto Astro + Tailwind + MDX con la siguiente estructura de carpetas:**

```
tebeitos/
├── src/
│   ├── components/
│   │   ├── TarjetaComic.astro
│   │   ├── FichaRapida.astro
│   │   ├── BotonAmazon.astro
│   │   ├── Onomatopeya.astro
│   │   ├── ValoraciónViñetas.astro
│   │   ├── SeccionKiosko.astro
│   │   ├── BocadilloDestacado.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── comics/          ← archivos .mdx de reseñas
│   │   └── blog/            ← archivos .mdx de artículos
│   ├── layouts/
│   │   ├── Base.astro
│   │   ├── Comic.astro
│   │   └── Blog.astro
│   └── pages/
│       ├── index.astro      ← home
│       ├── comics/
│       │   └── [slug].astro
│       ├── blog/
│       │   └── [slug].astro
│       └── sobre-tebeitos.astro
├── public/
│   └── images/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

**Variables CSS globales a definir en el archivo base:**
```css
:root {
  --mostaza:   #E8A01B;
  --rojo:      #E1352A;
  --terracota: #C44B2E;
  --negro:     #1B1714;
  --crema:     #F3E9D2;
  --hueso:     #FBF3E2;
  --trama:     #CBB892;
}
```

**Configuración de Tailwind con colores de la paleta Tebeitos.**

**Importar Google Fonts: Bangers, Fredoka One, Nunito.**

**Crear los 10 archivos MDX de reseñas iniciales con contenido de placeholder.**

**Crear los 3 artículos de blog iniciales con contenido de placeholder.**

**Asegurarse de que la web es completamente responsive (mobile first).**

**Generar sitemap.xml automático.**

**Velocidad: optimizar imágenes con el componente Image de Astro.**
