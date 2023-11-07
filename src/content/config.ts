import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			projectoverview: z.string(),
			problem: z.string(),
			solution: z.string(),
			role: z.string(),
			projectType: z.string(),
			projectYear: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			projectImageUrl: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
