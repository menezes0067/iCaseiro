import { z } from 'zod';
import { TypeUser } from '@prisma/client';

export const UserSchema = z.object({
    id: z.uuidv4().nullable().optional(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    type: z.enum([TypeUser.CLIENT, TypeUser.EMPLOYEE])
})