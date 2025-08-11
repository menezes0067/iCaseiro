import { FastifyReply, FastifyRequest } from "fastify";
import { CategoryRepositoryPrisma } from "../repositories/category-repository";
import { CategoryService } from "../services/category-service";
import { CategorySchema } from "../schemas/category-schema";

const categoryRepository = new CategoryRepositoryPrisma()
const categoryService = new CategoryService(categoryRepository)

export const CreateCategory = async (req: FastifyRequest, rep: FastifyReply) => {
    try {
        const categoryData = CategorySchema.parse(req.body) 
        const category = await categoryService.executeCategory(categoryData)
        rep.code(201).send(category)
    } catch (error) {
        console.log(error)
        rep.code(500).send({ message: 'error in category creation' })
    }
}