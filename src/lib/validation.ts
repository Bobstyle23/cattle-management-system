import { z } from "zod";

export const cattleSchema = z.object({
  tagNumber: z.string().min(1, "Tag number is required"),
  breed: z.string().min(1, "Breed is required"),
  gender: z.enum(["MALE", "FEMALE"]),
  status: z.enum(["HEALTHY", "SICK", "PREGNANT", "SOLD", "DECEASED"]),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
});

export type CattleFormValues = z.infer<typeof cattleSchema>;
