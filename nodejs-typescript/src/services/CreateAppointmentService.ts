import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmentsRepository';

export interface CreateAppointmentServiceDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor(appointmentRepository: AppointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  public execute(dto: CreateAppointmentServiceDTO): Appointment {
    const appointmentDate = startOfHour(dto.date);

    const findAppointmentInSameDate = this.appointmentRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentRepository.create({
      provider: dto.provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
