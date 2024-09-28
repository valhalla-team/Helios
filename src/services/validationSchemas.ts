import { z } from 'zod';

export const querySchema = z.object({
  query: z.string().min(1, "Query must be provided"),
});
