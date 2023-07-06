import React from "react";
import { z } from 'zod';

export const categories = ['Groceries', 'Utilities', 'Entertainment'] as const;
export const errorStrings = {
    minDescriptionLength: 'Description must be at least 3 characters',
    maxDescriptionLength: 'Description must be less than 50 characters',
    amountIsRequired: "Amount is required",
    amountValue: 'Amount must be between 0.01 and 100,000',
    permittedCategories: 'Please select a category',
};

export const schema = z.object({
    descrption: z
    .string()
    .min(3, { message: errorStrings.minDescriptionLength})
    .max(50, { message: errorStrings.maxDescriptionLength}),
    amount: z
    .number()
    .min(0.01, { message: errorStrings.amountValue})
    .max(100_000, { message: errorStrings.amountValue}),
    category: z.enum(categories, {
        errorMap: () => ({ message: 'Category is required'}),
    })
})

export type ExpenseFormData = z.infer<typeof schema>;