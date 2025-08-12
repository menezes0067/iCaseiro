import z from "zod";

export const CategorySchema = z.object({
    id_category: z.string().optional(),
    name: z.string(),
    description: z.string()
})