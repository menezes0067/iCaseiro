import { TypeUser } from "@prisma/client"

export interface User {
    id?: string
    name: string
    email?: string
    password: string
    type: TypeUser
}

export interface UserCreate {
    id?: string | null | undefined
    name: string
    email?: string
    password: string
    type: TypeUser
}

export interface UserRepository {
    create(data: UserCreate): Promise<User>
    findUserById(data: { id : string }): Promise<{ id: string | undefined}>
}