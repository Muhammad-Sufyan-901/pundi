import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, H1, H2, Input, Paragraph, ScrollView, XStack, YStack } from "tamagui";

export default function ForgotPasswordScreen(): React.JSX.Element {
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
              Lupa Password
            </H2>
            {/* Form Subtitle */}
            <Paragraph
              fontSize="$4"
              color="$gray500"
            >
              Masukkan email Anda untuk melakukan reset password
            </Paragraph>

            {/* Form Fields */}
            <YStack
              gap="$5"
              marginVertical="$6"
            >
              {/* Email */}
              <YStack
                gap="$2"
              >
                <Paragraph
                  fontSize="$4"
                  fontWeight="bold"
                >
                  Email
                </Paragraph>
                <Input
                  value={""}
                  onChangeText={(value) => console.log(value)}
                  placeholder="Masukkan Email"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 8,
                    padding: 12,
                  }}
                />
              </YStack>

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
              >
                <Button.Text
                  color="$white"
                  fontSize="$5"
                  fontWeight="700"
                >
                  Reset Password
                </Button.Text>
              </Button>
            </YStack>

            {/* Login Link */}
            <XStack
              gap="$2"
              alignItems="center"
              justifyContent="center"
            >
              <Paragraph color="$gray10" fontSize="$3">
                Kembali ke halaman login
              </Paragraph>
              <Link href="/sign-in" asChild>
                <Paragraph
                  color="$primary"
                  fontSize="$3"
                  fontWeight="600"
                >
                  Masuk
                </Paragraph>
              </Link>
            </XStack>
          </YStack>
        </ScrollView>
      </SafeAreaView>
    </YStack>
  );
}
