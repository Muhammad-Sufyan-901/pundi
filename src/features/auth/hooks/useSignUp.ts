import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { SignUpFormData, signUpSchema } from "../schema/auth.schema";
import { AuthService } from "../services/auth.service";

type UseSignUpReturn = UseFormReturn<SignUpFormData> & {
  onSignUp: (data: SignUpFormData) => Promise<void>;
};

import { useToastController } from "@tamagui/toast";

export function useSignUp(): UseSignUpReturn {
  const router = useRouter();
  const toast = useToastController();
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    AuthService.init();
  }, []);

  const onSignUp = async (data: SignUpFormData) => {
    try {
      await AuthService.signUp(data);

      toast.show("Registrasi Berhasil!", {
        message: "Akun berhasil dibuat",
        customData: { type: "success" },
      });

      router.replace("/sign-in");
      form.reset();
    } catch (error: any) {
      console.error("Sign-up error:", error);
      toast.show("Gagal Membuat Akun!", {
        message: error.message || "Terjadi kesalahan",
        customData: { type: "error" },
      });
    }
  };

  return {
    ...form,
    onSignUp,
  };
}
