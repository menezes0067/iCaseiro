import z, { uuidv4 } from "zod";

export const MenuSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    value: z.number(),
    category_id: z.string()
})