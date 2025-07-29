import { TypeUser } from "@prisma/client"

export interface User {
    id: string,
    name: string,
    email?: string,
    password: string
    type: TypeUser
}

export interface UserCreate {
    name: string,
    email?: string,
    password: string,
}

export interface UserRepository{
    create(data: UserCreate): Promise<User>
}