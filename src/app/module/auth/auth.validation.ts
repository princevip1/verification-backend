import { z } from "zod";

const loginZodSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(30),
});

export const authZodSchemaValidation = {
    loginZodSchema
}
