import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "The name should be min 3 characters",
    })
    .max(255),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email(),
  message: z.string().min(5, {
    message: "Message must be at least 6 characters",
  })
    .max(255),
});
