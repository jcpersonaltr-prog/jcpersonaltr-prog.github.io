import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada edição do Relatório é um ficheiro .md em src/content/relatorio/
const relatorio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/relatorio' }),
  schema: z.object({
    titulo: z.string(),
    numero: z.number(),
    data: z.coerce.date(),
    resumo: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

// Cada texto da Tinta é um ficheiro .md em src/content/tinta/
// tipo: "reflexao" | "leafs" | "principio"
const tinta = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tinta' }),
  schema: z.object({
    titulo: z.string(),
    data: z.coerce.date(),
    tipo: z.enum(['reflexao', 'leafs', 'principio']),
    resumo: z.string().optional(),
  }),
});

export const collections = { relatorio, tinta };
