import { Router } from 'express';

import appointmentRouter from './appointments.routes';
import usersRoutes from './users.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
