import React from "react";
import { z } from "zod";

export const categories = ["Run", "Bike", "Swim", "Other"] as const;
export const errorStrings = {
  minDescriptionLength: "Description must be at least 3 characters",
  maxDescriptionLength: "Description must be less than 50 characters",
  amountIsRequired: "Amount is required",
  amountValue: "Amount must be between 1 and 180",
  permittedCategories: "Please select a category",
};

export const schema = z.object({
  description: z
    .string()
    .min(3, { message: errorStrings.minDescriptionLength })
    .max(50, { message: errorStrings.maxDescriptionLength }),
  activity_duration: z
    .number()
    .min(1, { message: errorStrings.amountValue })
    .max(180, { message: errorStrings.amountValue }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

export type ExpenseFormData = z.infer<typeof schema>;
