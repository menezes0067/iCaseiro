import { IClientRepository, Client, CreateClient } from "../interfaces/client-interface";

export class ClientService {
    constructor(private clientRepository: IClientRepository){}

    async execute(data: CreateClient): Promise<Client> {
        const client = await this.clientRepository.create(data) 
        return client
    }
}