import { FastifyInstance } from "fastify";
import { CreateMenu, GetMenu } from "../controllers/menu-controller";

export default function MenuRoute(fastify: FastifyInstance) {
  fastify.post("/menu", CreateMenu);
  fastify.get("/menu", GetMenu);
}
