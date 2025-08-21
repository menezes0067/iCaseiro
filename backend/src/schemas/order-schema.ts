import z from "zod";

const OrderSchema = z.object({
  id_order: z.string().optional(),
  createdAt: z.string().transform((str) => new Date(str)).optional(),
  status: z.number(),
  client_id: z.string(),
  employee_id: z.string()
})

export { OrderSchema }
