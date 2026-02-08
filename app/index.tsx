import { ONBOARDING_IMAGES } from "@/src/constants";
import { theme } from "@/src/styles/theme";
import { Image } from "expo-image";
import { Link } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { Button, H2, Paragraph, XStack, YStack } from "tamagui";

export default function OnboardingScreen(): React.JSX.Element {
  return (
    <YStack
      flex={1}
      backgroundColor="$gray1"
      alignItems="center"
      justifyContent="flex-start"
    >
      {/* Hero Image Section */}
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        position="relative"
        width="100%"
      >
        {/* Background with diagonal cut at bottom */}
        <YStack
          position="absolute"
          width="100%"
          height="100%"
          top="0%"
          backgroundColor="#E0F2FE"
          overflow="hidden"
        >
          {/* Diagonal cut at bottom */}
          <Svg
            width="100%"
            height="100"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              bottom: -1,
              left: 0,
            }}
          >
            <Path
              d="M0,100 L0,40 L1440,100 Z"
              fill={theme.colors.background}
            />
          </Svg>
        </YStack>

        {/* Person Image - Center */}
        <Image
          source={ONBOARDING_IMAGES.onboarding}
          contentFit="contain"
          alt="Onboarding Images"
          style={{
            width: 380,
            height: 480,
            zIndex: 1,
            marginTop: "25%",
          }}
        />
      </YStack>

      {/* Content Section */}
      <YStack
        gap="$6"
        alignItems="center"
        width="100%"
        maxWidth={400}
        paddingVertical="$8"
        paddingHorizontal="$6"
        paddingBottom="$12"
        backgroundColor="$background"
      >
        {/* Title */}
        <YStack alignItems="center">
          <H2
            color="$primary"
            fontSize="$9"
            fontWeight="bold"
            textAlign="center"
          >
            Catat Hari Ini
          </H2>
          <H2
            color="$primary"
            fontSize="$9"
            fontWeight="bold"
            textAlign="center"
          >
            Hemat Nanti
          </H2>
        </YStack>

        {/* Get Started Button */}
        <Link href="/sign-up" asChild>
          <Button
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
              Mulai Sekarang
            </Button.Text>
          </Button>
        </Link>

        {/* Login Link */}
        <XStack
          gap="$2"
          alignItems="center"
        >
          <Paragraph color="$gray10" fontSize="$3">
            Sudah Punya Akun?
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
    </YStack>
  );
}



