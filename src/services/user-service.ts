import { uuid } from "zod";
import { UserCreate, UserRepository, User } from "../interfaces/user-interface";
import { v4 as uuidv4 } from 'uuid'

export class UserService {
    constructor(private userRepository: UserRepository){}

    async execute(data: UserCreate): Promise<User> {
        const user = await this.userRepository.create({
            ...data,
            id: uuidv4(),
    }); 
        return user
    }   
}