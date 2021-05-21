import { Router } from 'express';
import SuccursaleController from './controllers/SuccursaleController';
import UsersController from './controllers/UsersController';

const routes = Router();

routes.post('/users', UsersController.create);
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);

routes.post('/succursales', SuccursaleController.create);
routes.get('/succursale', SuccursaleController.index);
routes.get('/succursale/:id', SuccursaleController.show);

export default routes;