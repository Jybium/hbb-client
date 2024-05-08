import * as z from "zod";

export const refererSchema = z.object({
  referer_code: z.string().min(6, {
    message: "Referer be at least 6 characters.",
  }),
});
