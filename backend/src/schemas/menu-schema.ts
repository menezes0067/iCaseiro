import { Decimal } from "@prisma/client/runtime/library";
import z, { uuidv4 } from "zod";

export const MenuSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    value: z.number(),
    category_id: z.string()
})

export const MenuSchemaConvert = z.object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    value: z.number().transform((val) => new Decimal(val)),
    category_id: z.string()
})

export const ParamIdSchema = z.object({
  id: z.string()
})
