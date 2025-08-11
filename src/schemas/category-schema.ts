import z, { uuidv4 } from "zod";

export const CategorySchema = z.object({
    id: z.int().optional(),
    name: z.string(),
    description: z.string()
})