export interface Category {
    id_category: string
    name: string
    description: string
}

export interface ICategoryRepostory {
    createCategory(data: Omit<Category, 'id_category'>): Promise<any>
    findCategoryByName(data: { name: string }): Promise<boolean>
}