import { SafeAreaView } from "react-native-safe-area-context";
import { H1, Paragraph, ScrollView, YStack } from "tamagui";

type AuthScreensLayoutProps = React.PropsWithChildren;

export default function AuthScreensLayout({ children }: AuthScreensLayoutProps): React.JSX.Element {
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

          {/* Body (Should Be Form) */}
          {children}
        </ScrollView>
      </SafeAreaView>
    </YStack>
  );
}
