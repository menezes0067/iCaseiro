import { prisma } from '../database/prisma-client'
import { Client, CreateClient, IClientRepository } from "../interfaces/client-interface";
import { v4 as uuidv4 } from 'uuid';
import { User } from '../interfaces/user-interface';

export class ClientRepositoryPrisma implements IClientRepository {
    async create(data: CreateClient): Promise<Client> {
       const created = await prisma.client.create({ data : {
         id: data.id || uuidv4(),
         birthDate: data.birthDate,
         client_user_id: data.client_user_id
        }
      });
      
      return {
        id: created.id, 
        birthDate: created.birthDate,
        client_user_id: created.client_user_id
      }
    }
}