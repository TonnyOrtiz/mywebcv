import { defineCollection } from "astro:content";
// 2. Import loader(s)
import { glob } from 'astro/loaders';
import { z } from "astro/zod";

const technologies = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/technologies",
    }),
    schema: z.object({
        name: z.string(),
        icon: z.string(),
        description: z.string(),
        projects: z.array(z.object({
            name: z.string(),
            description: z.string(),
            link: z.string(),
        })),
    }),
});

export const collections = {
    technologies,
};