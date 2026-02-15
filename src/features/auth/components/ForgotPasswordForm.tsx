import { EmailInputField } from "@/src/components/common";
import { Link } from "expo-router";
import { Button, H2, Paragraph, XStack, YStack } from "tamagui";
import { useForgotPassword } from "../hooks/useForgotPassword";

export function ForgotPasswordForm() {
  const {
    control,
    handleSubmit,
    onSubmit,
    formState: { isSubmitting },
  } = useForgotPassword();

  return (
    <YStack
      flex={1}
      backgroundColor="$background"
      borderTopLeftRadius="$10"
      borderTopRightRadius="$10"
      paddingVertical="$6"
      paddingHorizontal="$6"
    >
      <YStack>
        <H2
          fontSize="$8"
          letterSpacing={1}
          fontWeight="bold"
        >
          Lupa Password
        </H2>
        <Paragraph
          fontSize="$4"
          color="$gray500"
        >
          Masukkan email Anda untuk mengirimkan instruksi reset password.
        </Paragraph>
      </YStack>

      {/* Form Fields */}
      <YStack
        gap="$5"
        marginVertical="$6"
      >
        {/* Email */}
        <EmailInputField
          name="email"
          control={control}
          label="Email"
          placeholder="Masukkan Email"
          required
        />

        {/* Submit Button */}
        <Button
          marginTop="$2"
          size="$5"
          width="100%"
          backgroundColor="$primary"
          pressStyle={{ backgroundColor: "$primaryPress" }}
          borderRadius="$10"
          shadowColor="$primary"
          shadowOffset={{ width: 0, height: 8 }}
          shadowOpacity={0.3}
          shadowRadius={16}
          elevation={16}
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          opacity={isSubmitting ? 0.6 : 1}
        >
          <Button.Text
            color="$white"
            fontSize="$5"
            fontWeight="700"
          >
            {isSubmitting ? "Mengirim..." : "Kirim"}
          </Button.Text>
        </Button>
      </YStack>

      {/* Login Link */}
      <XStack
        gap="$2"
        alignItems="center"
        justifyContent="center"
      >
        <Paragraph
          color="$gray10"
          fontSize="$3"
        >
          Belum Punya Akun?
        </Paragraph>
        <Link
          href="/sign-up"
          asChild
        >
          <Paragraph
            color="$primary"
            fontSize="$3"
            fontWeight="600"
          >
            Daftar
          </Paragraph>
        </Link>
      </XStack>
    </YStack>
  );
}
