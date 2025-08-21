import z, { uuid, uuidv4 } from "zod";

export const EmployeeSchema = z.object({
    id: z.uuidv4().optional(),
    employee_user_id: z.string()
})