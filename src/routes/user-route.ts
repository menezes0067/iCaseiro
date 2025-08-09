import { FastifyInstance } from "fastify";
import { CreateUser, GetUser } from "../controllers/user-controller";

export default function UserRoute(fastify: FastifyInstance) {
    fastify.post('/users', CreateUser)
    fastify.get('/users/:id', GetUser)
} 
