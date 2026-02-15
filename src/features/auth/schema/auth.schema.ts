import { z } from "zod";

/**
 * Sign-up form validation schema
 */
export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Nama lengkap wajib diisi")
      .min(2, "Nama lengkap minimal 2 karakter")
      .max(100, "Nama lengkap maksimal 100 karakter"),
    email: z.string().min(1, "Email wajib diisi").email("Format email tidak valid"),
    password: z
      .string()
      .min(1, "Password wajib diisi")
      .min(8, "Password minimal 8 karakter")
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password harus mengandung huruf besar, huruf kecil, dan angka"),
    confirmPassword: z.string().min(1, "Konfirmasi password wajib diisi"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak cocok",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;

/**
 * Sign-in form validation schema
 */
export const signInSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Format email tidak valid"),
  password: z.string().min(1, "Password wajib diisi"),
});

export type SignInFormData = z.infer<typeof signInSchema>;

/**
 * Forgot password form validation schema
 */
export const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Format email tidak valid"),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
