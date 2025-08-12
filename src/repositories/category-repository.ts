import { prisma } from "../database/prisma-client";
import { Category, ICategoryRepostory } from "../interfaces/category-interface";
import { v4 as uuidv4 } from 'uuid'

class CategoryRepositoryPrisma implements ICategoryRepostory {
    async createCategory(data: Omit<Category, 'id_category'>): Promise<any> {
        const id = uuidv4();

        const createdCategory = await prisma.category.create({
            data: {
                id_category: id,
                name: data.name,
                description: data.description,
            }
        });

        return {
            id_category: createdCategory.id_category,
            name: createdCategory.name,
            description: createdCategory.description 
        }
    }

    async findCategoryByName(data: { name: string; }): Promise<boolean> {
        const verifyCategoryName = await prisma.category.findFirst({
            where: { name: data.name }
        });

        return !!verifyCategoryName
    }
}

export { CategoryRepositoryPrisma }