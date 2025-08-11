import fastify, { FastifyInstance } from 'fastify';
import UserRoute from './routes/user-route';
import ClientRoute from './routes/client-route';
import EmployeeRoute from './routes/employee-route';
import CategoryRoute from './routes/category-route';

const app: FastifyInstance = fastify({});

app.register(UserRoute)
app.register(ClientRoute)
app.register(EmployeeRoute)
app.register(CategoryRoute)

app.listen({
    host: '0.0.0.0',
    port: 3000
}, () => console.log("Server is running port 3000"))
