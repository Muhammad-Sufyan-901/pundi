import { AuthScreensLayout } from "@/src/features/auth";
import { SignInForm } from "@/src/features/auth/components/SignInForm";

export default function SignInScreen(): React.JSX.Element {
  return (
    <AuthScreensLayout>
      <SignInForm />
    </AuthScreensLayout>
  );
}
