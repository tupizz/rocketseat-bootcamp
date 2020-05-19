import { Router } from 'express';
import { parseISO } from 'date-fns';

import CreateAppointmentService from '../services/CreateAppointmentService';
import AppointmentRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentRepository = new AppointmentRepository();

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  // Transformando e adaptando data
  const parsetDate = parseISO(date);

  const service = new CreateAppointmentService(appointmentRepository);

  try {
    const appointment = service.execute({
      provider,
      date: parsetDate,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

appointmentsRouter.get('/', (request, response) => {
  return response.json(appointmentRepository.all());
});

export default appointmentsRouter;
