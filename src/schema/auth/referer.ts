import * as z from "zod";

export const refererSchema = z.object({
  referer_code: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .refine((value) => /^(?=.*[A-Z])(?=.*\d).+$/.test(value), {
      message:
        "Password must contain at least one uppercase letter and one number.",
    }),
});
