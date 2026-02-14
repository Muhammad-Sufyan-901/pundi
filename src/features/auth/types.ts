import { z } from "zod";
import { forgotPasswordSchema, signInSchema, signUpSchema } from "./schemas";

/**
 * Sign-up form data type
 */
export type SignUpFormData = z.infer<typeof signUpSchema>;

/**
 * Sign-in form data type
 */
export type SignInFormData = z.infer<typeof signInSchema>;

/**
 * Forgot password form data type
 */
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
