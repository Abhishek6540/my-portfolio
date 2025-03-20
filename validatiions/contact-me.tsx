import { z } from "zod";

// 1. Define Zod schema
export const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

// 2. Infer TypeScript type from schema
export type ContactFormData = z.infer<typeof contactSchema>;

// 3. Default values (optional but recommended)
export const defaultValues: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};