import { prisma } from '../database/prisma-client';
import { User, UserRepository, UserCreate, UserInformation} from '../interfaces/user-interface';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

class UserRepositoryPrisma implements UserRepository {
   async create(data: UserCreate): Promise<User> {
      const hashedPassowrd = await bcrypt.hash(data.password, 10);

      const created = await prisma.user.create({ 
         data: {
            id: data.id || uuidv4(),
            name: data.name,
            email: data.email,
            password: hashedPassowrd,
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
            } 
         },
      }); 

      return { ...findUser } as UserInformation
   }

   async validateUserPassword(data: { email: string; password: string; }): Promise<boolean> {
      const userPassword = await prisma.user.findFirstOrThrow({
         where: { email: data.email },
         select: {
            password: true
         }
      });

      const isPasswordValidate = bcrypt.compare(data.password, userPassword.password)

      return isPasswordValidate 
   }
}

export { UserRepositoryPrisma }