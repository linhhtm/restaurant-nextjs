"use server";

import { NewsletterSchema } from "./schema";

export const validateFormData = async (inputs: unknown) => {
	try {
		const isValidData = NewsletterSchema.parse(inputs);
		return isValidData
	} catch (err){
		return err;
	}
};
export async function subscribe(formData: any) {
  const isValidData = await validateFormData(formData);
  return JSON.parse(JSON.stringify(isValidData));
}
