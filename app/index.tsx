import { TrendingDown, TrendingUp, Wallet } from "lucide-react-native";
import { Avatar, Button, Card, H1, H2, Paragraph, XStack, YStack } from "tamagui";

export default function InitialScreen(): React.JSX.Element {
  return (
    <YStack flex={1} backgroundColor="$background" padding="$4" gap="$4">
      {/* Header */}
      <YStack gap="$2" marginTop="$8">
        <H1 color="$primary">Pundi</H1>
        <Paragraph color="$color" opacity={0.7}>
          Financial Tracker - Tamagui
        </Paragraph>
      </YStack>

      {/* Balance Card */}
      <Card elevation="$2" size="$4" borderWidth={1} borderColor="$borderColor" backgroundColor="$primary" padding="$4">
        <YStack gap="$2">
          <Paragraph color="white" opacity={0.9} fontSize="$3">
            Total Balance
          </Paragraph>
          <H2 color="white" fontSize="$9">
            Rp 5,250,000
          </H2>
        </YStack>
      </Card>

      {/* Stats Cards */}
      <XStack gap="$3">
        <Card flex={1} elevation="$2" borderWidth={1} borderColor="$borderColor" padding="$3" backgroundColor="$green2">
          <YStack gap="$2">
            <XStack alignItems="center" gap="$2">
              <TrendingUp size={20} color="#22c55e" strokeWidth={2} />
              <Paragraph fontSize="$2" opacity={0.7}>
                Income
              </Paragraph>
            </XStack>
            <Paragraph fontWeight="bold" fontSize="$6" color="$green10">
              Rp 8.5M
            </Paragraph>
          </YStack>
        </Card>

        <Card flex={1} elevation="$2" borderWidth={1} borderColor="$borderColor" padding="$3" backgroundColor="$red2">
          <YStack gap="$2">
            <XStack alignItems="center" gap="$2">
              <TrendingDown size={20} color="#ef4444" strokeWidth={2} />
              <Paragraph fontSize="$2" opacity={0.7}>
                Expense
              </Paragraph>
            </XStack>
            <Paragraph fontWeight="bold" fontSize="$6" color="$red10">
              Rp 3.2M
            </Paragraph>
          </YStack>
        </Card>
      </XStack>

      {/* Action Buttons */}
      <YStack gap="$3" marginTop="$4">
        <Button size="$5" backgroundColor="$primary" pressStyle={{ backgroundColor: "$primaryPress" }}>
          <XStack alignItems="center" gap="$2">
            <Wallet size={24} color="white" strokeWidth={2} />
            <Paragraph color="white" fontWeight="bold">
              Add Transaction
            </Paragraph>
          </XStack>
        </Button>

        <Button size="$5" variant="outlined" borderColor="$primary">
          <Paragraph color="$primary" fontWeight="bold">
            View All Transactions
          </Paragraph>
        </Button>
      </YStack>

      {/* Avatar Test */}
      <XStack alignItems="center" gap="$3" marginTop="$4">
        <Avatar circular size="$6">
          <Avatar.Image src="https://i.pravatar.cc/150?img=3" />
          <Avatar.Fallback backgroundColor="$primary" />
        </Avatar>
        <YStack>
          <Paragraph fontWeight="bold">Muhammad Sufyan</Paragraph>
          <Paragraph fontSize="$2" opacity={0.6}>
            Tamagui is working! 🎉
          </Paragraph>
        </YStack>
      </XStack>
    </YStack>
  );
}

