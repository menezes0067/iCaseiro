import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import UserRoute from './routes/user-route';
import ClientRoute from './routes/client-route';
import EmployeeRoute from './routes/employee-route';
import CategoryRoute from './routes/category-route';
import MenuRoute from './routes/menu-route';
import OrderRoute from './routes/order-route';


const app: FastifyInstance = fastify({});

app.register(UserRoute)
app.register(ClientRoute)
app.register(EmployeeRoute)
app.register(CategoryRoute)
app.register(MenuRoute)
app.register(OrderRoute)

await app.register(cors)

app.listen({
    host: '0.0.0.0',
    port: 3000
}, () => console.log("Server is running port 3000"))
