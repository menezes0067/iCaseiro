import fastify, { FastifyInstance } from 'fastify';
import UserRoute from './routes/user-route';
import ClientRoute from './routes/client-route';

const app: FastifyInstance = fastify({});

app.register(UserRoute)
app.register(ClientRoute)

app.listen({
    host: '0.0.0.0',
    port:3000
}, () => console.log("Server is running port 3000"))
