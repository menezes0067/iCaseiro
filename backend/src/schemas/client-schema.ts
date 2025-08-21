import { string, z } from "zod";

export const ClientSchema = z.object({
    id: z.uuidv4().optional(),
    birthDate: z.string().transform((str) => new Date(str)),
    client_user_id: z.string()
})