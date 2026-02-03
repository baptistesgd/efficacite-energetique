import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.object({
      name: z.string(),
      role: z.string(),
      slug: z.string()
    }),
    category: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false)
  })
});

const expertsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    fullBio: z.string(),
    certifications: z.array(z.string()),
    specialties: z.array(z.string()),
    experience: z.string(),
    sources: z.array(z.string()).optional()
  })
});

const comparisonsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    solution1: z.object({
      name: z.string(),
      pros: z.array(z.string()),
      cons: z.array(z.string()),
      price: z.string(),
      savings: z.string(),
      lifespan: z.string()
    }),
    solution2: z.object({
      name: z.string(),
      pros: z.array(z.string()),
      cons: z.array(z.string()),
      price: z.string(),
      savings: z.string(),
      lifespan: z.string()
    }),
    verdict: z.string(),
    author: z.object({
      name: z.string(),
      role: z.string(),
      slug: z.string()
    })
  })
});

export const collections = {
  'blog': blogCollection,
  'experts': expertsCollection,
  'comparisons': comparisonsCollection
};
