import { prisma } from '../database/prisma-client';
import { User, UserRepository, UserCreate} from '../interfaces/user-interface';

class UserRepositoryPrisma implements UserRepository {
   async create(data: UserCreate): Promise<User> {
      const created = await prisma.user.create({ data: {
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            type: data.type
         }
      });
     
     return {
        id: created.id,
        name: created.name,
        email: created.email || undefined,
        password: created.password,
        type: created.type  
     }
   }    
}

export { UserRepositoryPrisma }