import { prisma } from "../database/prisma-client";
import { IOrderRepository, Order } from "../interfaces/order-interface";

class OrderRepositoryPrisma implements IOrderRepository {
  async createOrder(dataOrder: Omit<Order, "id_order, createdAt">): Promise<Order> {
    const createdOrder = await prisma.order.create({
      data: {
       status: dataOrder.status,
       client_id: dataOrder.client_id,
       employee_id: dataOrder.employee_id
      }
    });

    return {...createdOrder }
  }
}

export { OrderRepositoryPrisma }
