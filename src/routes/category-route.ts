import { FastifyInstance } from "fastify";
import { CreateCategory } from "../controllers/category-controller";

export default function CategoryRoute(fastify: FastifyInstance){
    fastify.post('/category', CreateCategory)
}