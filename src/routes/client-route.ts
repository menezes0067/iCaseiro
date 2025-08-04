import { FastifyInstance } from 'fastify';
import { CreateClient } from '../controllers/client-controller';

export default function ClientRoute(fastify: FastifyInstance){
    fastify.post('/client', CreateClient)
}