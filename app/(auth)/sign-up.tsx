import { EmailInputField, PasswordInputField, TextInputField } from "@/src/components/common";
import { SVG_ICONS } from "@/src/constants";
import { SignUpFormData, signUpSchema } from "@/src/features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, H1, H2, Paragraph, ScrollView, Separator, XStack, YStack } from "tamagui";

export default function SignUpScreen(): React.JSX.Element {
 const {
  control,
  handleSubmit,
  formState: { errors, isSubmitting },
 } = useForm<SignUpFormData>({
  resolver: zodResolver(signUpSchema),
  defaultValues: {
   fullName: "",
   email: "",
   password: "",
   confirmPassword: "",
  },
 });

 const onSubmit = async (data: SignUpFormData) => {
  try {
   console.log("Form submitted:", data);
   // TODO: Implement actual sign-up logic here
   // Example: await signUp(data.email, data.password, data.fullName);
  } catch (error) {
   console.error("Sign-up error:", error);
  }
 };

 return (
  <YStack
   flex={1}
   backgroundColor="$primary"
  >
   <SafeAreaView style={{ flex: 1 }}>
    <ScrollView
     style={{ flex: 1 }}
     contentContainerStyle={{ flexGrow: 1 }}
    >
     {/* Header */}
     <YStack
      paddingHorizontal="$6"
      paddingVertical="$8"
     >
      {/* Title (May change to logo later) */}
      <H1
       color="$white"
       fontSize="$9"
       fontWeight="bold"
       letterSpacing={1}
      >
       Pundi
      </H1>

      {/* Subtitle (Tagline) */}
      <Paragraph
       fontSize="$5"
       color="$gray100"
      >
       Catat Hari Ini, Hemat Nanti.
      </Paragraph>
     </YStack>

     {/* Body (Form) */}
     <YStack
      flex={1}
      backgroundColor="$background"
      borderTopLeftRadius="$10"
      borderTopRightRadius="$10"
      paddingVertical="$6"
      paddingHorizontal="$6"
     >
      {/* Form Title */}
      <H2
       fontSize="$8"
       letterSpacing={1}
       fontWeight="bold"
      >
       Daftar
      </H2>
      {/* Form Subtitle */}
      <Paragraph
       fontSize="$4"
       color="$gray500"
      >
       Lengkapi form berikut untuk mendaftar akun Anda.
      </Paragraph>

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
        marginTop="$5"
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

      <Button
       size="$5"
       marginBottom="$6"
       width="100%"
       backgroundColor="$background"
       borderWidth={1}
       borderRadius="$10"
       borderColor="$gray200"
       pressStyle={{
        backgroundColor: "$gray100",
        borderColor: "$gray400",
       }}
      >
       <XStack
        gap="$3"
        alignItems="center"
       >
        {/* Google Icon */}
        <Image
         source={SVG_ICONS.google}
         contentFit="contain"
         alt="Google Icon"
         style={{
          width: 24,
          height: 24,
         }}
        />

        <Button.Text
         color="$gray900"
         fontSize="$4"
         fontWeight="600"
        >
         Daftar dengan Google
        </Button.Text>
       </XStack>
      </Button>
     </YStack>
    </ScrollView>
   </SafeAreaView>
  </YStack>
 );
}
