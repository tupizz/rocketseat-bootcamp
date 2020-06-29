import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const appointmentRouter = Router();

appointmentRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const userService = new CreateUserService();
    const user = await userService.execute({ email, name, password });

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default appointmentRouter;
