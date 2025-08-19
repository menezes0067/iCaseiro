import { CreateMenu, IMenuRepository, Menu, ReadMenuItem, UpdateMenuItem } from "../interfaces/menu-interface";

export class MenuService {
   constructor(private menuRepository: IMenuRepository){}

    async executeCreateMenu(data: Omit<CreateMenu, 'id'>): Promise<Menu>{
        const verifyExistsOnMenu = await this.menuRepository.verifyExistsOnMenu({ name: data.name, description: data.description })
        const dataMenuCreation = this.menuRepository.createMenuInRestaurant(data)

        if(verifyExistsOnMenu) throw new Error('Option already exists')

        return dataMenuCreation
    }

    async getAllMenuItemsWithCategories(): Promise<ReadMenuItem[]> {
        const getItemsWithCategories = await this.menuRepository.getAllMenuItemsWithCategories()
        return getItemsWithCategories
    }

    async updateItemMenu(id: string, data: UpdateMenuItem): Promise<UpdateMenuItem> {
      const updateItemInMenu = await this.menuRepository.UpdateItemMenu(id, data);
      return updateItemInMenu
    }
}
