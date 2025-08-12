import { Category, ICategoryRepostory } from "../interfaces/category-interface";

export class CategoryService  {
    constructor (private categoryRepository: ICategoryRepostory){}
   
    async executeCategory(data: Omit<Category, 'id_category'>): Promise<any> {
        const verifyCategoryByName = await this.categoryRepository.findCategoryByName({ name: data.name })

        if(verifyCategoryByName) throw new Error('Category already exists')

        const category = await this.categoryRepository.createCategory(data)
        return category
    }
}