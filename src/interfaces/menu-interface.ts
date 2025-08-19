import { Decimal } from "@prisma/client/runtime/library"
import { Category } from "./category-interface"

export interface Menu {
    id: string
    name: string
    description: string
    value: number
    category_id: string
}

export interface CreateMenu {
    id: string
    name: string
    description: string
    value: number
    category_id: string
}

export interface ReadMenuItem {
    id: string
    name: string
    description: string
    value: Decimal
    category_id: string
}

export interface UpdateMenuItem{
   name: string
   description: string
   value: Decimal
   category_id: string
}

export interface IMenuRepository {
    createMenuInRestaurant(data: Omit<CreateMenu, 'id'>): Promise<Menu>
    verifyExistsOnMenu(data: { name: string, description: string }): Promise<boolean>
    getAllMenuItemsWithCategories(): Promise<ReadMenuItem[]>
    UpdateItemMenu(id: string, dataUpdateItem: UpdateMenuItem): Promise<UpdateMenuItem>

}
