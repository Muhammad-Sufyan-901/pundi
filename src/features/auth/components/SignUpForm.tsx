import { EmailInputField, PasswordInputField, TextInputField } from "@/src/components/common";
import { Link } from "expo-router";
import { Button, H2, Paragraph, Separator, XStack, YStack } from "tamagui";
import { useSignUp } from "../hooks/useSignUp";
import SocialAuthButton from "./SocialAuthButton";

export default function SignUpForm(): React.JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    onSignUp,
  } = useSignUp();

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
          Daftar Akun
        </H2>
        <Paragraph
          fontSize="$4"
          color="$gray500"
        >
          Lengkapi formulir berikut untuk mendaftar akun baru.
        </Paragraph>
      </YStack>

      {/* Form Fields */}
      <YStack
        gap="$5"
        marginVertical="$6"
      >
        {/* Full Name */}
        <TextInputField
          name="fullName"
          control={control}
          label="Nama Lengkap"
          placeholder="Masukkan Nama Lengkap"
          autoComplete="name"
          required
        />

        {/* Email */}
        <EmailInputField
          name="email"
          control={control}
          label="Email"
          placeholder="Masukkan Email"
          required
        />

        {/* Password */}
        <PasswordInputField
          name="password"
          control={control}
          label="Password"
          placeholder="Masukkan Password"
          autoComplete="password-new"
          required
        />

        {/* Confirm Password */}
        <PasswordInputField
          name="confirmPassword"
          control={control}
          label="Konfirmasi Password"
          placeholder="Masukkan Konfirmasi Password"
          autoComplete="password-new"
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
          onPress={handleSubmit(onSignUp)}
          disabled={isSubmitting}
          opacity={isSubmitting ? 0.6 : 1}
        >
          <Button.Text
            color="$white"
            fontSize="$5"
            fontWeight="700"
          >
            {isSubmitting ? "Mendaftar..." : "Daftar"}
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
          Sudah Punya Akun?
        </Paragraph>
        <Link
          href="/sign-in"
          asChild
        >
          <Paragraph
            color="$primary"
            fontSize="$3"
            fontWeight="600"
          >
            Masuk
          </Paragraph>
        </Link>
      </XStack>

      {/* Separator */}
      <XStack
        marginVertical="$6"
        alignItems="center"
        justifyContent="center"
        gap="$2"
      >
        <Separator backgroundColor="$gray500" />
        <Paragraph
          fontSize="$4"
          fontWeight="600"
          marginHorizontal="$2"
        >
          Atau
        </Paragraph>
        <Separator backgroundColor="$gray500" />
      </XStack>

      <SocialAuthButton provider="google" />
    </YStack>
  );
}
