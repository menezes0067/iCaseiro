import { FastifyReply, FastifyRequest } from "fastify";
import { ClientRepositoryPrisma } from "../repositories/client-repository";
import { ClientService } from "../services/client-service";
import { ClientSchema } from "../schemas/client-schema";

const clientRepository = new ClientRepositoryPrisma
const clientService = new ClientService(clientRepository)

export const CreateClient = async(req: FastifyRequest, rep: FastifyReply) => {
    try {
       const clientData = ClientSchema.parse(req.body)
       const client = clientService.execute(clientData)
       rep.code(200).send(client)
    } catch (error) {
        console.log(error)
        rep.code(500).send({error: 'error in client'})
    }
}