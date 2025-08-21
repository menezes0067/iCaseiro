// import { prisma } from "../database/prisma-client";
// import { IItemRepository, Item } from "../interfaces/item-interface";

// class ItemRepositoryPrisma implements IItemRepository {
//   async createItem(dataItem: Omit<Item, "id">): Promise<Item> {
//     const createdItem = await prisma.orderOnItem.create({
//       data: {
//         menu_id: dataItem.menu_id,
//         order_id: dataItem.order_id,
//         quantity: dataItem.quantity,
//         unit_price: dataItem.unit_price
//       }
//     });

//     return createdItem
//   }
// }

// deixar comentado por enquanto sa bomba aq
