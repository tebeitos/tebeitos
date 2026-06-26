import { defineCollection, z } from 'astro:content';

const comicsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:      z.string(),
    autor:      z.string(),
    editorial:  z.string(),
    edad:       z.string(),
    paginas:    z.number(),
    precio:     z.number(),
    dificultad: z.number().min(1).max(5),
    valoracion: z.number().min(1).max(5),
    temas:      z.array(z.string()),
    tipo:       z.enum(['clasico', 'actual', 'ilustrado']),
    imagen:     z.string().optional(),
    amazon:     z.string().url(),
    fecha:      z.date(),
    destacado:  z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    descripcion: z.string(),
    fecha:       z.date(),
    categoria:   z.string(),
    imagen:      z.string().optional(),
    imagen_portada: z.string().optional(),
    destacado:   z.boolean().default(false),
    preguntas:   z.array(z.object({
      q: z.string(),
      a: z.string()
    })).optional(),
  }),
});

const juguetesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:      z.string(),
    marca:      z.string(),
    edad:       z.string(),
    precio:     z.number(),
    valoracion: z.number().min(1).max(5),
    temas:      z.array(z.string()),
    imagen:     z.string().optional(),
    amazon:     z.string().url(),
    fecha:      z.date(),
    destacado:  z.boolean().default(false),
  }),
});

const juegosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:      z.string(),
    marca:      z.string(),
    edad:       z.string(),
    precio:     z.number(),
    valoracion: z.number().min(1).max(5),
    temas:      z.array(z.string()),
    imagen:     z.string().optional(),
    amazon:     z.string().url(),
    fecha:      z.date(),
    destacado:  z.boolean().default(false),
  }),
});

const coleccionablesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:      z.string(),
    marca:      z.string(),
    edad:       z.string(),
    precio:     z.number(),
    valoracion: z.number().min(1).max(5),
    temas:      z.array(z.string()),
    imagen:     z.string().optional(),
    amazon:     z.string().url(),
    fecha:      z.date(),
    destacado:  z.boolean().default(false),
  }),
});

export const collections = {
  comics:   comicsCollection,
  blog:     blogCollection,
  juguetes: juguetesCollection,
  juegos:   juegosCollection,
  coleccionables: coleccionablesCollection,
};
