import fastify, { FastifyReply, FastifyRequest, } from 'fastify';

const app = fastify();

app.get('/', async (req: FastifyRequest, rep: FastifyReply) => {
    return rep.status(200).send({message: 'hello world'}) 
})

app.listen({
    host: '0.0.0.0',
    port:3000
})

