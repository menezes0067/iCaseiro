import { prisma } from "../database/prisma-client";
import { CreateMenu, IMenuRepository, Menu } from "../interfaces/menu-interface";

class MenuRepositoryPrisma implements IMenuRepository {
    async createMenuInRestaurant(data: Omit<CreateMenu, 'id'>): Promise<Menu> {
        const createdMenu = await prisma.menu.create({
            data: {
                name: data.name,
                description: data.description,
                value: data.value,
                category_id: data.category_id
            }
        });

        return { 
            ...createdMenu,
            value: createdMenu.value.toNumber()
        }
    }

    async verifyExistsOnMenu(data: { name: string; description: string; }): Promise<boolean> {
       const existsOnMenu = await prisma.menu.findFirst({
            where: {
                name: data.name,
                description: data.description
            }
       });
       
       return !!existsOnMenu
    }
}

export { MenuRepositoryPrisma }