import { z } from "zod";

const bankZodSchema = z.object({
    country: z.string(),
    vendor: z.string(),
    bankInformetion: z.string(),
    maxPaymentPerTransaction: z.number().int(),
    perposeOfTransaction: z.string(),
});

export const bankZodSchemaValidation = {
    bankZodSchema
}
