export interface Order {
  id_order?: string;
  createdAt?: Date;
  status: number;
  client_id: string;
  employee_id: string;
}

export interface IOrderRepository {
  createOrder(dataOrder: Omit<Order, "id_order" | "createdAt">): Promise<Order>;
}
