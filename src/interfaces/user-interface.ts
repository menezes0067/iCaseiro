import { Employee, TypeUser } from "@prisma/client"
import { Client } from "./client-interface"
import { UserInfo } from "os"

export interface User {
    id?: string
    name: string
    email?: string
    password: string
    type: TypeUser
}

export interface UserCreate {
    id?: string | undefined
    name: string
    email: string
    password: string
    type: TypeUser
}

export interface UserInformation {
    id: string 
    name: string
    email: string
    password: string
    type: TypeUser
    client?: Client[]
    employee?: Employee[]
}

export interface UserRepository {
    create(data: UserCreate): Promise<User>
    findUserById(data: { id : string }): Promise<{ id: string | undefined }>
    getUserInformation(data: UserInformation): Promise<UserInformation>
}