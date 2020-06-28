import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentRouter = Router();
const repository = new AppointmentsRepository();

appointmentRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const createAppointmentService = new CreateAppointmentService(repository);
    const appointment = createAppointmentService.execute({
      provider,
      date: parseISO(date),
    });

    return response.json(appointment);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

appointmentRouter.get('/', (request, response) => {
  const appointments = repository.getAll();

  return response.json(appointments);
});

export default appointmentRouter;
