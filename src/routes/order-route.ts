import { FastifyInstance } from "fastify";
import { CreateOrder } from "../controllers/order-controller";

export default function OrderRoute(fastify: FastifyInstance) {
  fastify.post('/order', CreateOrder)
}
