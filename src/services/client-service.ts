import { IClientRepository, Client, CreateClient } from "../interfaces/client-interface";
import { UserRepository } from "../interfaces/user-interface";

export class ClientService {
    constructor(private clientRepository: IClientRepository, private userRepository: UserRepository){}
    async execute(data: CreateClient): Promise<Client> {
        const user = await this.userRepository.findUserById({ id: data.client_user_id })

        if(!user?.id) {
            throw new Error('User not found!')
        }

        const client = await this.clientRepository.create(data) 
        return client
    }
}