import { zodResolver } from "@hookform/resolvers/zod";
import { useToastController } from "@tamagui/toast";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { SignInFormData, signInSchema } from "../schema/auth.schema";
import { AuthService } from "../services/auth.service";

type UseSignInReturn = UseFormReturn<SignInFormData> & {
  onSignIn: (data: SignInFormData) => Promise<void>;
};

export function useSignIn(): UseSignInReturn {
  const router = useRouter();
  const toast = useToastController();
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    AuthService.init();
  }, []);

  const onSignIn = async (data: SignInFormData) => {
    try {
      await AuthService.signIn(data);

      toast.show("Success", {
        title: "Login Successful",
        description: "Welcome back!",
        customData: { type: "success" },
      });

      router.replace("/");

      form.reset();
    } catch (error: any) {
      console.error("Sign-in error:", error);
      toast.show("Error", {
        title: "Login Failed",
        description: error.message || "Invalid email or password",
        customData: { type: "error" },
      });
    }
  };

  return {
    ...form,
    onSignIn,
  };
}
