import { defineCollection, z } from 'astro:content';

// Define metadata collection
const metadata = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()),
      language: z.string(),
      author: z.string()
    })
  })
});




export const collections = { metadata };
