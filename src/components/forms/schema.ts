import { z } from "zod";

export const NewsletterSchema = z.object({
	newsletter: z.string().email({ message: "Not invalid email" }),
});

export type NewsletterSchemaType = z.infer<typeof NewsletterSchema>;

