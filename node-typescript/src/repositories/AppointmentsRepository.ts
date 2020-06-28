import { isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });
    this.appointments.push(appointment);
    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appoitment =>
      isEqual(date, appoitment.date),
    );

    return findAppointment || null;
  }

  public getAll(): Appointment[] {
    return this.appointments;
  }
}

export default AppointmentsRepository;
