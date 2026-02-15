import { Toast, useToastState } from "@tamagui/toast";
import { Button, XStack, YStack } from "tamagui";

export default function CurrentToast() {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;

  const type = currentToast.customData?.type;
  const backgroundColor = type === "error" ? "$red10" : type === "success" ? "$green10" : "$background";

  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      viewportName={currentToast.viewportName}
    >
      <XStack
        backgroundColor={backgroundColor}
        padding="$4"
        borderRadius="$4"
        alignItems="center"
        justifyContent="space-between"
        gap="$4"
        minWidth={300}
        maxWidth="95%"
      >
        <YStack
          flex={1}
          gap="$1"
        >
          <Toast.Title
            color="$white"
            fontWeight="bold"
          >
            {currentToast.title}
          </Toast.Title>
          {!!currentToast.description && (
            <Toast.Description color="$white">{currentToast.description}</Toast.Description>
          )}
        </YStack>

        <Toast.Close asChild>
          <Button
            size="$2"
            chromeless
            borderWidth={1}
            borderColor="$white05"
            hoverStyle={{ backgroundColor: "$white01" }}
            pressStyle={{ backgroundColor: "$white02" }}
          >
            <Button.Text color="$white">Dismiss</Button.Text>
          </Button>
        </Toast.Close>
      </XStack>
    </Toast>
  );
}
