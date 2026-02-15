import { CurrentToast, Fallback, Loader } from "@/src/components/common";
import config from "@/src/lib/tamagui.config";
import "@tamagui/native/setup-zeego";
import { PortalProvider } from "@tamagui/portal";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";

export default function RootLayout(): React.JSX.Element {
  const [fontLoaded, fontError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (fontError) {
    console.error("Font loading error:", fontError);

    return (
      <Fallback.Error>
        <Fallback.Icon />
        <Fallback.Title>Font Loading Error</Fallback.Title>
        <Fallback.Message>
          Unable to load fonts. Please check your internet connection and restart the app.
        </Fallback.Message>
      </Fallback.Error>
    );
  }

  if (!fontLoaded) {
    return (
      <Loader.Root>
        <Loader.Spinner />
        <Loader.Text>Loading fonts...</Loader.Text>
      </Loader.Root>
    );
  }

  return (
    <TamaguiProvider
      config={config}
      defaultTheme="light"
    >
      <PortalProvider>
        <ToastProvider>
          <Stack screenOptions={{ headerShown: false }} />
          <CurrentToast />
          <ToastViewport />
        </ToastProvider>
      </PortalProvider>
    </TamaguiProvider>
  );
}
