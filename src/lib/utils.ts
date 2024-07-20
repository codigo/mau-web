import { type Schema } from 'zod'

export const validate = (schema: Schema, data: FormData) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { errors };
  }
  return { data };
}
