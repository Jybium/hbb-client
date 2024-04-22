import * as z from "zod";

export const modelProfileSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"), 
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number cannot be empty")
    .regex(/^\+\d{1,3}\d{1,14}$/, "Invalid phone number"),
  sex: z.enum(["Male", "Female", "Other"]).default("Other"), 
  dateOfBirth: z.date().refine((date) => date < new Date(), {
    message: "Date of birth must be in the past",
  }),
  image: z.any().optional(), 
  video: z.any().optional(), 
});



export const explorerProfileSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number cannot be empty")
    .regex(/^\+\d{1,3}\d{1,14}$/, "Invalid phone number"),
  sex: z.enum(["Male", "Female", "Other"]).default("Other"),
  dateOfBirth: z.date().refine((date) => date < new Date(), {
    message: "Date of birth must be in the past",
  }),
  image: z.any().optional(),
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/(\d{2})$/,
      "Expiration date must be in MM/YY format"
    )
    .refine(
      (date) => {
        const [month, year] = date.split("/").map(Number);
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;

        if (
          year < currentYear ||
          (year === currentYear && month < currentMonth)
        ) {
          return false;
        }
        return true;
      },
      {
        message: "Card has expired",
      }
    ),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
  cardholderName: z.string().min(1, "Cardholder's name cannot be empty"),
  subscription: z.string().min(1, "You must set a subscription"),
});
