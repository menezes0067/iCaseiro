import { FastifyInstance } from "fastify";
import { CreateEmployee } from "../controllers/employee-controler";

export default function EmployeeRoute(fastify: FastifyInstance) {
    fastify.post('/employee', CreateEmployee)
}