import { CreateEmployee, Employee, IEmployeeRepository } from "../interfaces/employee-interface";
import { UserRepository } from "../interfaces/user-interface";

export class EmployeeService {
    constructor(private employeeRepository: IEmployeeRepository, private userRepository: UserRepository){}  
    async execute(data: CreateEmployee): Promise<Employee> {
       const userEmployee = await this.userRepository.findUserById({ id: data.employee_user_id })  

       if(!userEmployee.id) {
        throw new Error('Employee not found') 
       }

       const createEmployee = await this.employeeRepository.create(data)
       return createEmployee
    }
} 