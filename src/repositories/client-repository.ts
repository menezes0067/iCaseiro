import { prisma } from '../database/prisma-client'
import { Client, CreateClient, IClientRepository } from "../interfaces/client-interface";
import { v4 as uuidv4 } from 'uuid';

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

  async existsByClientUserId(data: { client_user_id: string; }): Promise<boolean> {
    const verify = await prisma.client.findUnique({
      where: { client_user_id: data.client_user_id },
      select: { client_user_id: true } 
    });
    
    return !!verify 
  }
}