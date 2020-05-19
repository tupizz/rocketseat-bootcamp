import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'ola mundo' }));

export default routes;
