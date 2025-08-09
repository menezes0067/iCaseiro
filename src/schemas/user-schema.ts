import { z } from 'zod';
import { TypeUser } from '@prisma/client';

export const UserSchema = z.object({
    id: z.uuidv4(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    type: z.enum([TypeUser.CLIENT, TypeUser.EMPLOYEE])
})

export const validationIdSchema = z.object({ id: z.uuidv4() })