import { UserCreate, UserRepository, User } from "../interfaces/user-interface";

export class UserService {
    constructor(private userRepository: UserRepository){}

    async execute(data: UserCreate): Promise<User> {
        const user = await this.userRepository.create(data); 
        return user
    }   
}