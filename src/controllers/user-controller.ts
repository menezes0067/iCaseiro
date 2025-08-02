import { UserRepositoryPrisma } from "../repositories/user-repository";
import { UserSchema } from "../schemas/user-schema";
import { UserService } from "../services/user-service";
import {FastifyRequest, FastifyReply} from "fastify";


const userRepository = new UserRepositoryPrisma
const userService = new UserService(userRepository);

export const CreateUser = async (req: FastifyRequest, rep: FastifyReply) => {
    try {
       const userData = UserSchema.parse(req.body)  
       const user = userService.execute(userData)
       rep.code(201).send(user)
     }catch (error) { 
        console.log(error)
        rep.code(500).send({error: 'user not created'}) 
   }
}
