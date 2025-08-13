import { FastifyReply, FastifyRequest } from "fastify";
import { MenuService } from "../services/menu-service";
import { MenuRepositoryPrisma } from "../repositories/menu-repository";
import { MenuSchema } from "../schemas/menu-schema";

const menuRepository = new MenuRepositoryPrisma
const menuService = new MenuService(menuRepository)

export const CreateMenu = async (req: FastifyRequest, rep: FastifyReply) => {
    try {
        const menuData = MenuSchema.parse(req.body)        
        const menu = await menuService.executeCreateMenu(menuData)
        rep.code(201).send(menu)
    } catch (error) {
        console.log(error) 
        rep.code(500).send({ message: 'Error in creation menu'})
    }
}