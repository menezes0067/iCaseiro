import { IOrderRepository, Order } from "../interfaces/order-interface";

export class OrderService {
  constructor(private orderRepository: IOrderRepository){}

  async executeCreateOrder(dataOrder: Omit<Order, 'id_order, createdAt'>): Promise<Order> {
    const dataOrderCreation = await this.orderRepository.createOrder(dataOrder)
    return dataOrderCreation
  }
}
