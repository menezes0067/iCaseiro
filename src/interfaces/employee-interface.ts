export interface Employee {
    id: string,
    employee_user_id: string
}

export interface CreateEmployee {
    id?: string | undefined,
    employee_user_id: string
}

export interface IEmployeeRepository {
    create (data: CreateEmployee): Promise<Employee>
}