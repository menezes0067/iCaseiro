import { UserCreate, UserRepository, User } from "../interfaces/user-interface";

export class UserService {
    constructor(private userRepository: UserRepository){}

    async execute(data: UserCreate): Promise<User> {
        const user = await this.userRepository.create(data); 
        return user
    }   

    async findExecute(data: { id: string }): Promise<{id: string | undefined }> {
        const findId = await this.userRepository.findUserById(data)

        if (!findId) {
            throw new Error('User not created')
        }

        return findId
    }
}