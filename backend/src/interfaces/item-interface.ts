import { Decimal } from "@prisma/client/runtime/library";

export interface Item {
  id: string,
  menu_id: string,
  order_id: string,
  quantity: number,
  unit_price: Decimal
}

export interface IItemRepository {
  createItem(dataItem: Omit<Item, 'id'>):Promise<Item>
}
