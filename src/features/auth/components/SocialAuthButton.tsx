import { SVG_ICONS } from "@/src/constants";
import { Image } from "expo-image";
import { Button, XStack } from "tamagui";

type AuthProvider = "google";

interface SocialAuthButtonProps {
  provider: AuthProvider;
  text?: string;
  onPress?: () => void;
}

export default function SocialAuthButton({
  provider = "google",
  text = "Daftar dengan Google",
  onPress,
}: SocialAuthButtonProps): React.JSX.Element {
  const getIcon = (provider: AuthProvider) => {
    return {
      google: SVG_ICONS.google,
    }[provider] satisfies string;
  };

  return (
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
      onPress={onPress}
    >
      <XStack
        gap="$3"
        alignItems="center"
      >
        <Image
          source={getIcon(provider)}
          contentFit="contain"
          alt={`${provider} Icon`}
          style={{ width: 24, height: 24 }}
        />
        <Button.Text
          color="$gray900"
          fontSize="$4"
          fontWeight="600"
        >
          {text}
        </Button.Text>
      </XStack>
    </Button>
  );
}
