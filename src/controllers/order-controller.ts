import { FastifyReply, FastifyRequest } from "fastify";
import { OrderRepositoryPrisma } from "../repositories/order-repository";
import { OrderService } from "../services/order-service";
import { OrderSchema } from "../schemas/order-schema";

const orderRepository = new OrderRepositoryPrisma();
const orderService = new OrderService(orderRepository);

export const CreateOrder = async (req: FastifyRequest, rep: FastifyReply) => {
  try {
    const dataOrderCreation = OrderSchema.parse(req.body);
    const order = await orderService.executeCreateOrder(dataOrderCreation)
    rep.code(201).send(order)
  }catch(error){
    console.log(error)
    rep.code(500).send({ message: 'error in create order!' })
  }
}
