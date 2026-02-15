import { zodResolver } from "@hookform/resolvers/zod";
import { useToastController } from "@tamagui/toast";
import { useEffect } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { ForgotPasswordFormData, forgotPasswordSchema } from "../schema/auth.schema";
import { AuthService } from "../services/auth.service";

type UseForgotPasswordReturn = UseFormReturn<ForgotPasswordFormData> & {
  onSubmit: (data: ForgotPasswordFormData) => Promise<void>;
};

export function useForgotPassword(): UseForgotPasswordReturn {
  const toast = useToastController();
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    AuthService.init();
  }, []);

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      await AuthService.forgotPassword(data);

      toast.show("Email Terkirim", {
        message: "Jika email terdaftar, instruksi reset password akan dikirim.",
        customData: { type: "success" },
      });

      form.reset();
    } catch (error: any) {
      console.error("Forgot password error:", error);
      toast.show("Gagal Mengirim Email", {
        message: error.message || "Terjadi kesalahan",
        customData: { type: "error" },
      });
    }
  };

  return {
    ...form,
    onSubmit,
  };
}
