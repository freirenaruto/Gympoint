import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentsController from './app/controllers/StudentsController';

import authMiddleware from './app/middlewares/auth';
import PlansController from './app/controllers/PlansController';
import EnrollmentController from './app/controllers/EnrollmentController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.post('/students', StudentsController.store);
routes.put('/students/:id', StudentsController.update);
routes.put('/users', UserController.update);

routes.get('/plans', PlansController.index);
routes.post('/plans', PlansController.store);
routes.put('/plans/:id', PlansController.update);
routes.delete('/plans/:id', PlansController.delete);

routes.get('/enrollment', EnrollmentController.index);
routes.post('/enrollment/:student_id/:plan_id', EnrollmentController.store);

export default routes;
