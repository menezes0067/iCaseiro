import { CategoryRepositoryPrisma } from "../repositories/category-repository";

export class CategoryService  {
    constructor (private categoryRepository: CategoryRepositoryPrisma){}
   
    async executeCategory(data: { id?: number | undefined, name: string, description: string}): Promise<any> {
        const verifyCategoryByName = await this.categoryRepository.findCategoryByName({ name: data.name })

        if(verifyCategoryByName) throw new Error('Category already exists')

        const category = await this.categoryRepository.createCategory(data)
        return category
    }
}