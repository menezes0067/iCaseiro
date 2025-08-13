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

export interface IMenuRepository {
    createMenuInRestaurant(data: Omit<CreateMenu, 'id'>): Promise<Menu>
    verifyExistsOnMenu(data: { name: string, description: string }): Promise<boolean>
}
