import { FastifyRequest, FastifyReply } from "fastify";
import { EmployeeRepositoryPrisma } from "../repositories/employee-repository";
import { UserRepositoryPrisma } from "../repositories/user-repository";
import { EmployeeService } from "../services/employee-service";
import { EmployeeSchema } from "../schemas/employee-schema";

const employeeRepository = new EmployeeRepositoryPrisma()
const userRepostory = new UserRepositoryPrisma() 
const employeeService = new EmployeeService(employeeRepository, userRepostory)

export const CreateEmployee = async (req: FastifyRequest, rep: FastifyReply) => {
    try {
        const employeeData = EmployeeSchema.parse(req.body)
        const employee = await employeeService.execute(employeeData) 
        console.log(employee)
        rep.code(201).send(employee)
    } catch (error) {
        console.log(error)
        rep.code(500).send({ error: 'employee not created'})
    }
}