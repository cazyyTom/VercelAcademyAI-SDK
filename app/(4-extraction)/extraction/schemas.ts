import { z } from "zod";

export const appointmentSchema = z.object({
  title: z.string(),
  startTime: z.string().nullable(),
  endTime: z.string().nullable(),
  attendees: z.array(z.string()).nullable(),
  location: z.string().nullable(),
  date: z.string(),
});

export type AppointmentDetails = z.infer<typeof appointmentSchema>;
