import { FastifyReply, FastifyRequest } from "fastify";
import { ClientRepositoryPrisma } from "../repositories/client-repository";
import { ClientService } from "../services/client-service";
import { ClientSchema } from "../schemas/client-schema";
import { UserRepositoryPrisma } from "../repositories/user-repository";

const clientRepository = new ClientRepositoryPrisma()
const userRepository = new UserRepositoryPrisma()
const clientService = new ClientService(clientRepository, userRepository)

export const CreateClient = async(req: FastifyRequest, rep: FastifyReply) => {
    try {
       const clientData = ClientSchema.parse(req.body)
       const client = clientService.execute(clientData)
       rep.code(201).send(client)
    } catch (error) {
        console.log(error)
        rep.code(500).send({ error: 'error in client creation' })
    }
}