import { prisma } from '../database/prisma-client';
import { User, UserRepository, UserCreate, UserInformation} from '../interfaces/user-interface';
import { v4 as uuidv4 } from 'uuid'

class UserRepositoryPrisma implements UserRepository {
   async create(data: UserCreate): Promise<User> {
      const created = await prisma.user.create({ 
         data: {
            id: data.id || uuidv4(),
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

   async findUserById(data: { id: string }): Promise<{ id: string | undefined }> {
      const find = await prisma.user.findUnique({ 
         where: { id: data.id  }, 
         select: { id: true }
      });

      return {
         id: find?.id
      }
   }

   async getUserInformation(data: { id : string }): Promise<UserInformation> {
     const findUser = await prisma.user.findUniqueOrThrow({
         where: { id: data.id },
         include: {
            client: {
               select: {
                  id: true,
                  birthDate: true,
               }
            },
            employee: {
               select: {
                  id: true
               }
            }, 
         },
      }); 

      return { ...findUser } as UserInformation
   }
}

export { UserRepositoryPrisma }