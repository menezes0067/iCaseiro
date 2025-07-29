import { User, UserRepository, UserCreate} from '../interfaces/user-interface';

class UserRepositoryPrisma implements UserRepository {
    async create(data: UserCreate): Promise<User> {
        
    }    
}

export { UserRepositoryPrisma }