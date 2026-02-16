import { theme } from "@/src/styles/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Dimensions, ScrollView, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { Circle, Text, Theme, XStack, YStack, ZStack } from "tamagui";

const { width } = Dimensions.get("window");
const HEADER_HEIGHT = 320;

export default function HomeScreen(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const userName = "Muhammad Sufyan";
  const totalBalance = "Rp2.548.000";
  const income = "Rp.3.500.000";
  const expense = "Rp.1.452.000";

  const curvePath = `M0,0 L${width},0 L${width},${HEADER_HEIGHT - 60} Q${width / 2},${HEADER_HEIGHT + 20} 0,${HEADER_HEIGHT - 60} Z`;

  const greeter = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Selamat pagi";
    if (hour < 18) return "Selamat siang";
    return "Selamat malam";
  };

  const transactions = [
    {
      id: 1,
      name: "Upwork",
      date: "Hari ini",
      amount: "+ Rp12.750.000",
      amountColor: "#25A969",
      icon: "briefcase",
      iconColor: "#25A969",
      iconBg: "#E3FCEF",
    },
    {
      id: 2,
      name: "Transfer",
      date: "Kemarin",
      amount: "- Rp1.275.000",
      amountColor: "#F95B51",
      icon: "person",
      iconColor: "#F95B51", // Using red/pink tone from image for avatar placeholder
      iconBg: "#FFEFEF",
    },
    {
      id: 3,
      name: "Paypal",
      date: "30 Januari 2022",
      amount: "+ Rp21.090.000",
      amountColor: "#25A969",
      icon: "logo-paypal",
      iconColor: "#00457C",
      iconBg: "#E8F0F8",
    },
    {
      id: 4,
      name: "Youtube",
      date: "16 Januari 2022",
      amount: "- Rp179.850",
      amountColor: "#F95B51",
      icon: "logo-youtube",
      iconColor: "#FF0000",
      iconBg: "#FFEFEF",
    },
    {
      id: 5,
      name: "Starbucks",
      date: "15 Januari 2022",
      amount: "- Rp82.500",
      amountColor: "#F95B51",
      icon: "cafe",
      iconColor: "#00704A",
      iconBg: "#E6F4EA",
    },
    {
      id: 6,
      name: "Amazon",
      date: "14 Januari 2022",
      amount: "- Rp1.800.000",
      amountColor: "#F95B51",
      icon: "cart",
      iconColor: "#FF9900",
      iconBg: "#FFF5E6",
    },
    {
      id: 7,
      name: "Netflix",
      date: "12 Januari 2022",
      amount: "- Rp239.850",
      amountColor: "#F95B51",
      icon: "play-circle",
      iconColor: "#E50914",
      iconBg: "#FDECEA",
    },
    {
      id: 8,
      name: "Gaji Bulanan",
      date: "01 Januari 2022",
      amount: "+ Rp75.000.000",
      amountColor: "#25A969",
      icon: "wallet",
      iconColor: "#25A969",
      iconBg: "#E3FCEF",
    },
    {
      id: 9,
      name: "Sewa Kost",
      date: "01 Januari 2022",
      amount: "- Rp18.000.000",
      amountColor: "#F95B51",
      icon: "home",
      iconColor: "#B8860B",
      iconBg: "#FFF8DC",
    },
    {
      id: 10,
      name: "Spotify",
      date: "29 Desember 2021",
      amount: "- Rp149.850",
      amountColor: "#F95B51",
      icon: "musical-notes",
      iconColor: "#1DB954",
      iconBg: "#E7F8ED",
    },
  ];

  return (
    <Theme name="light">
      <YStack
        flex={1}
        backgroundColor="$background"
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        {/* --- HEADER CONTENT --- */}
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <ZStack>
            {/* --- 1. & 2. HEADER WITH SVG CURVE & GRADIENT --- */}
            <ZStack
              position="absolute"
              top={0}
              left={0}
              right={0}
              height={HEADER_HEIGHT}
              zIndex={0}
            >
              <Svg
                width={width}
                height={HEADER_HEIGHT}
                viewBox={`0 0 ${width} ${HEADER_HEIGHT}`}
              >
                <Defs>
                  <LinearGradient
                    id="grad"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    {/* Gradient: Top Left (Light Blue) -> Bottom Right (#136daf) */}
                    <Stop
                      offset="0"
                      stopColor="#187ac1ff"
                      stopOpacity="1"
                    />
                    <Stop
                      offset="0.6"
                      stopColor="#136daf"
                      stopOpacity="1"
                    />
                    <Stop
                      offset="1"
                      stopColor="#187ac1ff"
                      stopOpacity="1"
                    />
                  </LinearGradient>
                </Defs>
                {/* Smooth Curve */}
                <Path
                  d={curvePath}
                  fill="url(#grad)"
                />
              </Svg>
            </ZStack>

            <YStack marginTop={insets.top}>
              <YStack
                paddingHorizontal="$4"
                paddingTop="$5"
              >
                {/* Top Bar: Greeting & Notification */}
                <XStack
                  justifyContent="space-between"
                  alignItems="center"
                  marginBottom="$6"
                >
                  <YStack>
                    <Text
                      color="$gray100"
                      fontSize="$4"
                      fontWeight="500"
                    >
                      {greeter()},
                    </Text>
                    <Text
                      color="white"
                      fontSize="$8"
                      fontWeight="bold"
                      marginTop="$1"
                    >
                      {userName}
                    </Text>
                  </YStack>

                  {/* 3. GLASSMORPHISM NOTIFICATION */}
                  <ZStack
                    width={44}
                    height={44}
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="$4"
                    backgroundColor="rgba(255, 255, 255, 0.15)" // Glass background
                    borderWidth={1}
                    borderColor="rgba(255, 255, 255, 0.2)" // Glass border
                  >
                    <Ionicons
                      name="notifications-outline"
                      size={22}
                      color="white"
                    />
                    {/* Red Dot */}
                    <Circle
                      size={8}
                      backgroundColor="$red10"
                      position="absolute"
                      top={10}
                      right={10}
                      borderWidth={1}
                      borderColor="rgba(255,255,255,0.5)"
                    />
                  </ZStack>
                </XStack>

                {/* --- TRANSACTION CARD --- */}
                <YStack
                  backgroundColor="$primary"
                  borderRadius="$8"
                  padding="$5"
                  elevation={20}
                  shadowColor={theme.colors.primary}
                  shadowOffset={{ width: 0, height: 10 }}
                  shadowOpacity={0.9}
                  shadowRadius={20}
                  marginBottom="$6"
                >
                  <XStack
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom="$1"
                  >
                    <XStack
                      alignItems="center"
                      gap="$1"
                    >
                      <Text
                        color="$gray100"
                        fontSize="$4"
                        fontWeight="600"
                      >
                        Total Saldo
                      </Text>
                    </XStack>
                    <Feather
                      name="more-horizontal"
                      size={24}
                      color={theme.colors.gray200}
                    />
                  </XStack>

                  <Text
                    color="white"
                    fontSize={34}
                    fontWeight="bold"
                    marginBottom="$6"
                  >
                    {totalBalance}
                  </Text>

                  {/* Income & Outcome Section */}
                  <XStack justifyContent="space-between">
                    {/* 5. INCOME BLOCK (Logo Aligned with Label) */}
                    <YStack gap="$2">
                      <XStack
                        alignItems="center"
                        gap="$2"
                      >
                        {/* 3. Glassmorphism Icon */}
                        <ZStack
                          width={28}
                          height={28}
                          borderRadius="$10" // Circle
                          backgroundColor="rgba(255, 255, 255, 0.15)"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Feather
                            name="arrow-down"
                            size={16}
                            color={theme.colors.success}
                          />
                        </ZStack>
                        <Text
                          color="$gray200"
                          fontSize="$4"
                        >
                          Pemasukan
                        </Text>
                      </XStack>
                      {/* Total Income below */}
                      <Text
                        color="white"
                        fontSize="$6"
                        fontWeight="700"
                      >
                        {income}
                      </Text>
                    </YStack>

                    {/* outcome block */}
                    <YStack
                      gap="$2"
                      alignItems="flex-end"
                    >
                      <XStack
                        alignItems="center"
                        gap="$2"
                      >
                        <ZStack
                          width={28}
                          height={28}
                          borderRadius="$10"
                          backgroundColor="rgba(255, 255, 255, 0.15)"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Feather
                            name="arrow-up"
                            size={16}
                            color={theme.colors.error}
                          />
                        </ZStack>
                        <Text
                          color="$gray200"
                          fontSize="$4"
                        >
                          Pengeluaran
                        </Text>
                      </XStack>
                      <Text
                        color="white"
                        fontSize="$6"
                        fontWeight="700"
                      >
                        {expense}
                      </Text>
                    </YStack>
                  </XStack>
                </YStack>
              </YStack>

              {/* TRANSACTIONS HISTORY */}
              <YStack
                paddingHorizontal="$4"
                paddingBottom="$5"
              >
                <XStack
                  justifyContent="space-between"
                  alignItems="center"
                  marginBottom="$4"
                >
                  <Text
                    fontSize="$6"
                    fontWeight="bold"
                    color="#1e1e1e"
                  >
                    Riwayat Transaksi
                  </Text>
                  <Link
                    href="/transactions"
                    asChild
                  >
                    <Text
                      fontSize="$3"
                      color="$primary"
                    >
                      Lihat Semua
                    </Text>
                  </Link>
                </XStack>

                <YStack gap="$4">
                  {transactions.map((t) => (
                    <XStack
                      key={t.id}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <XStack
                        alignItems="center"
                        gap="$3"
                      >
                        <YStack
                          width={50}
                          height={50}
                          backgroundColor={t.iconBg}
                          borderRadius="$4"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Ionicons
                            name={t.icon as any}
                            size={24}
                            color={t.iconColor}
                          />
                        </YStack>
                        <YStack>
                          <Text
                            fontSize="$5"
                            fontWeight="600"
                            color="black"
                          >
                            {t.name}
                          </Text>
                          <Text
                            fontSize="$3"
                            color="$gray10"
                          >
                            {t.date}
                          </Text>
                        </YStack>
                      </XStack>

                      <Text
                        fontSize="$4"
                        fontWeight="600"
                        color={t.amountColor}
                      >
                        {t.amount}
                      </Text>
                    </XStack>
                  ))}
                </YStack>
              </YStack>
            </YStack>
          </ZStack>
        </ScrollView>
      </YStack>
    </Theme>
  );
}
