import { Toast, useToastState } from "@tamagui/toast";
import { Button, XStack, YStack } from "tamagui";

export default function FeedbackToast(): React.JSX.Element | null {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;

  const type = currentToast.customData?.type as string;

  const getVariantStyles = () => {
    switch (type) {
      case "error":
        return {
          titleColor: "$white",
          backgroundColor: "$error",
          subtitleColor: "$white",
          buttonColor: "$red10",
          buttonTextColor: "$white",
        };
      case "warning":
        return {
          titleColor: "$white",
          backgroundColor: "$warning",
          subtitleColor: "$white",
          buttonColor: "$yellow10",
          buttonTextColor: "$white",
        };
      case "primary":
        return {
          titleColor: "$white",
          backgroundColor: "$primary",
          subtitleColor: "$white",
          buttonColor: "$blue10",
          buttonTextColor: "$white",
        };
      case "success":
        return {
          titleColor: "$white",
          backgroundColor: "$success",
          subtitleColor: "$white",
          buttonColor: "$green10",
          buttonTextColor: "$white",
        };
      default:
        return {
          titleColor: "$white",
          backgroundColor: "transparent",
          subtitleColor: "$white",
          buttonColor: "$gray10",
          buttonTextColor: "$white",
        };
    }
  };

  const { titleColor, backgroundColor, subtitleColor, buttonColor, buttonTextColor } = getVariantStyles();

  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: 25 }}
      exitStyle={{ opacity: 0, scale: 1, y: 20 }}
      y={0}
      opacity={1}
      scale={1}
      viewportName={currentToast.viewportName}
      backgroundColor="transparent"
      padding={0}
    >
      <XStack
        backgroundColor={backgroundColor}
        padding="$4"
        borderRadius="$4"
        alignItems="center"
        justifyContent="space-between"
        gap="$4"
        width={350}
        maxWidth="95%"
      >
        <YStack
          flex={1}
          gap="$1"
        >
          <Toast.Title
            color={titleColor}
            fontWeight="bold"
            fontSize="$4"
          >
            {currentToast.title}
          </Toast.Title>
          {!!(currentToast.message || currentToast.description) && (
            <Toast.Description
              color={subtitleColor}
              fontSize="$3"
            >
              {currentToast.message || currentToast.description}
            </Toast.Description>
          )}
        </YStack>

        <Toast.Close asChild>
          <Button
            size="$3"
            chromeless
            backgroundColor={buttonColor}
            hoverStyle={{ backgroundColor: buttonColor }}
            pressStyle={{ backgroundColor: buttonColor }}
            borderRadius="$2"
            paddingHorizontal="$3"
          >
            <Button.Text
              color={buttonTextColor}
              fontWeight="600"
              fontSize="$3"
            >
              Dismiss
            </Button.Text>
          </Button>
        </Toast.Close>
      </XStack>
    </Toast>
  );
}
