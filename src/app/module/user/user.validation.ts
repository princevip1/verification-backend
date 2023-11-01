import { z } from "zod";

const userZodSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6).max(30),
});

export const userZodSchemaValidation = {
    userZodSchema
}
