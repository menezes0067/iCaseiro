import fastify, { FastifyInstance } from 'fastify';

const app: FastifyInstance = fastify({ logger: true });

app.listen({
    host: '0.0.0.0',
    port:3000
}, () => console.log("Server is running port 3000"))

