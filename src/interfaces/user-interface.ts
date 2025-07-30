import { TypeUser } from "@prisma/client"
import { UUIDTypes } from "uuid"

export interface User {
    id: string
    name: string
    email?: string
    password: string
    type: TypeUser
}

export interface UserCreate {
    id: string 
    name: string
    email?: string
    password: string
    type: TypeUser
}

export interface UserRepository {
    create(data: UserCreate): Promise<User>
}