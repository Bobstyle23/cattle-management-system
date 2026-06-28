import { z } from "zod";

export const cattleSchema = z.object({
  tagNumber: z.string().min(1),
  breed: z.string().min(1),
  gender: z.enun(["MALE", "FEMALE"]),
  status: z.enum(["HEALTHY", "SCIK", "PREGNANT", "SOLD", "DECEASED"]),
  dateOfBirth: z.string().date(),
});
