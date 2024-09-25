import { z } from 'zod';

export const signUpSchema = z.object({
    email: z.string()
        .email({ message: 'Invalid Email Address' })
        .min(1, "Email is required"), // Ensure email is not empty
    firstName: z.string()
        .min(2, "First name must be at least 2 characters")
        .max(20, "First name must be no more than 20 characters")
        .regex(/^[A-Za-z]+$/, "First name must not contain special characters")
        .min(1, "First name is required"), // Ensure first name is not empty
    lastName: z.string()
        .min(2, "Last name must be at least 2 characters")
        .max(20, "Last name must be no more than 20 characters")
        .regex(/^[A-Za-z]+$/, "Last name must not contain special characters")
        .min(1, "Last name is required"), // Ensure last name is not empty
    password: z.string()
        .min(6, "Password must be at least 6 characters")
        .min(1, "Password is required") // Ensure password is not empty
});
