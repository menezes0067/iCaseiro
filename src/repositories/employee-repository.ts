import { prisma } from "../database/prisma-client";
import { CreateEmployee, Employee, IEmployeeRepository } from "../interfaces/employee-interface";

export class EmployeeRepositoryPrisma implements IEmployeeRepository {
    async create(data: CreateEmployee): Promise<Employee> {
        const created = await prisma.employee.create({ 
            data: {
                id: data.id,
                employee_user_id: data.employee_user_id 
            }
        });

        return {
            id: created.id,
            employee_user_id: created.employee_user_id
        }
    } 
}