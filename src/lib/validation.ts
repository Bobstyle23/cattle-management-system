import { z } from "zod";

export const cattleSchema = z.object({
  tagNumber: z.string().min(1),
  breed: z.string().min(1),
  gender: z.enum(["MALE", "FEMALE"]),
  status: z.enum(["HEALTHY", "SICK", "PREGNANT", "SOLD", "DECEASED"]),
  dateOfBirth: z.string().date(),
});
