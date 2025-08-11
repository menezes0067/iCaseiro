import { prisma } from "../database/prisma-client";
import { ICategoryRepostory } from "../interfaces/category-interface";

class CategoryRepositoryPrisma implements ICategoryRepostory {
    async createCategory(data: { id?: number | undefined; name: string; description: string; }): Promise<any> {
        const createdCategory = await prisma.category.create({
            data: {
                id_category: data.id,
                name: data.name,
                description: data.description,
            }
        });

        return {
            id: createdCategory.id_category,
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