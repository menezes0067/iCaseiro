export interface Category {
    id: number 
    name: string
    description: string
}

export interface ICategoryRepostory {
    createCategory(data: {id?: number | undefined, name: string, description: string}): Promise<any>
    findCategoryByName(data: { name: string }): Promise<boolean>
}