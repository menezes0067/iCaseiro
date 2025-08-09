import { UserRepositoryPrisma } from "../repositories/user-repository";
import { UserSchema, validationIdSchema } from "../schemas/user-schema";
import { UserService } from "../services/user-service";
import {FastifyRequest, FastifyReply} from "fastify";


const userRepository = new UserRepositoryPrisma
const userService = new UserService(userRepository)

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

export const GetUser = async(req: FastifyRequest, rep: FastifyReply) => {
   try {
      const id = validationIdSchema.parse(req.params)
      const finduser = await userService.getUserInformationExecute(id)
      rep.code(200).send(finduser)
      console.log(finduser)
   } catch (error) {
      console.log(error)
      rep.code(404).send({ message : 'user not found in system' })
   }
}