import { FastifyInstance } from "fastify";
import { CreateMenu } from "../controllers/menu-controller";

 export default function MenuRoute(fastify: FastifyInstance) {
    fastify.post('/menu', CreateMenu)
 }