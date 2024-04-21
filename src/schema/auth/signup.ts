import * as z from "zod";

export const signUpSchema = z.object({

  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Phone number must be at least 10 digits.",
    })
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Invalid phone number format.",
    }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .refine((value) => /^(?=.*[A-Z])(?=.*\d).+$/.test(value), {
      message:
        "Password must contain at least one uppercase letter and one number.",
    }),
});
