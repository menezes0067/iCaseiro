import fastify, { FastifyInstance } from 'fastify';
import UserRoute from './routes/user-route';

const app: FastifyInstance = fastify({ logger: true });

app.register(UserRoute)

app.listen({
    host: '0.0.0.0',
    port:3000
}, () => console.log("Server is running port 3000"))
