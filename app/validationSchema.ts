import { z } from 'zod';

export const issueSchema = z.object({
    title: z.string().min(1, 'Title is required!').max(255).optional(),
    description: z.string().min(1, 'Description is required!').max(65533).optional(),
    status: z.string().min(1, 'Status is required!').max(255).optional(),
    sharedTo: z.string().min(1, 'UserType is required!').max(255).optional(),
});

export const listSchema = z.object({
    title: z.string().min(1, 'Title is required!').max(255).optional()
});

export const todoListSchema = z.object({
    title: z.string().min(1, 'Title is required!').max(255).optional(),
    category: z.string().min(1, 'Title is required!').max(255).optional(),
});

