import * as z from "zod";

const contactUsSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  subject: z.string(),
  message: z.string()

})

export default contactUsSchema