export interface Client {
    id: string
    birthDate: Date 
    client_user_id: string
}

export interface CreateClient {
  id?: string | undefined
  birthDate: Date  
  client_user_id: string
}

export interface IClientRepository {
  create(data: CreateClient): Promise<Client>  
  existsByClientUserId(data: { client_user_id: string }): Promise<boolean> 
} 