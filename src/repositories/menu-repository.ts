import { string } from "zod/v4/core/regexes.cjs";
import { prisma } from "../database/prisma-client";
import { CreateMenu, IMenuRepository, Menu, ReadMenuItem, UpdateMenuItem} from "../interfaces/menu-interface";

class MenuRepositoryPrisma implements IMenuRepository {
  async createMenuInRestaurant(data: Omit<CreateMenu, "id">): Promise<Menu> {
    const createdMenu = await prisma.menu.create({
      data: {
        name: data.name,
        description: data.description,
        value: data.value,
        category_id: data.category_id,
      },
    });

    return {
      ...createdMenu,
      value: createdMenu.value.toNumber(),
    };
  }

  async verifyExistsOnMenu(data: { name: string; description: string; }): Promise<boolean> {
    const existsOnMenu = await prisma.menu.findFirst({
      where: {
        name: data.name,
        description: data.description,
      },
    });

    return !!existsOnMenu;
  }

  async getAllMenuItemsWithCategories(): Promise<ReadMenuItem[]> {
    const getAllItemsMenu = await prisma.menu.findMany({
      include: {
        category: {
          select: {
            id_category: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return getAllItemsMenu;
  }

  async UpdateItemMenu(dataUpdateItem: Menu): Promise<UpdateMenuItem> {
    const itemMenu = await prisma.menu.update({
      where: {
        id: dataUpdateItem.id
      },
      data: {
        name: dataUpdateItem.name,
        description: dataUpdateItem.description,
        value : dataUpdateItem.value
      }
    });

    return itemMenu
  }
}

export { MenuRepositoryPrisma };
