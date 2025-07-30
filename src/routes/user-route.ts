import { FastifyInstance } from "fastify";
import { CreateUser } from "../controllers/user-controller";

export default function UserRoute(fastify: FastifyInstance) {
    fastify.post('/users', CreateUser)
} 