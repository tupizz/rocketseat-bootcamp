import { Router } from 'express';

import appointmentRouter from './appointments.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRoutes);

export default routes;
