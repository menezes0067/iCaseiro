import { z } from "zod";

export const ClientSchema = z.object({
    id: z.uuidv4().nullable().optional(),
    birthDate: z.date(),
    client_user_id: z.string()
})