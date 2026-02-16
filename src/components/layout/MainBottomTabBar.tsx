import { theme } from "@/src/styles/theme";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BarChart3, Home, Plus, UserCircle, Wallet } from "lucide-react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Defs, FeDropShadow, Filter, Path, Svg } from "react-native-svg";
import { Text, View, XStack, YStack } from "tamagui";

const { width } = Dimensions.get("window");
const TAB_HEIGHT = 65;
const SHADOW_SPACE = 20;

export default function MainBottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): React.JSX.Element | null {
  const insets = useSafeAreaInsets();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const { tabBarStyle } = focusedOptions;
  const isTabBarHidden = (tabBarStyle as any)?.display === "none";

  if (isTabBarHidden) return null;

  const getPath = (): string => {
    const holeWidth = 120;
    const holeHeight = 60;
    const center = width / 2;
    const startY = SHADOW_SPACE;

    return `
      M0,${startY}
      L${center - holeWidth / 2},${startY}
      Q${center - holeWidth / 3},${startY} ${center - holeWidth / 4},${holeHeight / 2 + startY}
      Q${center},${holeHeight + startY} ${center + holeWidth / 4},${holeHeight / 2 + startY}
      Q${center + holeWidth / 3},${startY} ${center + holeWidth / 2},${startY}
      L${width},${startY}
      L${width},${TAB_HEIGHT + insets.bottom + startY}
      L0,${TAB_HEIGHT + insets.bottom + startY}
      Z
    `;
  };

  return (
    <View
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      height={TAB_HEIGHT + insets.bottom + SHADOW_SPACE}
      backgroundColor="transparent"
      pointerEvents="box-none"
    >
      {/* Background Tab Bar dengan Soft Shadow */}
      <View
        position="absolute"
        top={0}
        width={width}
        height="100%"
      >
        <Svg
          width={width}
          height={TAB_HEIGHT + insets.bottom + SHADOW_SPACE}
        >
          <Defs>
            <Filter
              id="softShadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <FeDropShadow
                dx="0"
                dy="-1"
                stdDeviation="5"
                floodColor="#000"
                floodOpacity="0.08"
              />
            </Filter>
          </Defs>
          <Path
            d={getPath()}
            fill="white"
            filter="url(#softShadow)"
          />
        </Svg>
      </View>

      <XStack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        height={TAB_HEIGHT}
        marginTop={SHADOW_SPACE}
        paddingBottom={insets.bottom > 0 ? 0 : 5}
      >
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const isCenter = index === 2;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          if (isCenter) {
            return (
              <YStack
                key={index}
                flex={1}
                alignItems="center"
                top={-28}
                onPress={onPress}
                pressStyle={{ scale: 0.92, opacity: 0.9 }}
              >
                {/* Add Transaction Button with Glowy Container Effect */}
                <YStack
                  width={60}
                  height={60}
                  borderRadius={30}
                  backgroundColor={theme.colors.primary}
                  justifyContent="center"
                  alignItems="center"
                  elevation={12}
                  shadowColor={theme.colors.primary}
                  shadowOffset={{ width: 0, height: 6 }}
                  shadowOpacity={0.6}
                  shadowRadius={10}
                >
                  <Plus
                    color="white"
                    size={32}
                  />
                </YStack>
              </YStack>
            );
          }

          let IconComponent;
          let label = "";

          switch (route.name) {
            case "home":
              IconComponent = Home;
              label = "Beranda";
              break;
            case "analysis":
              IconComponent = BarChart3;
              label = "Analisis";
              break;
            case "transactions":
              IconComponent = Wallet;
              label = "Transaksi";
              break;
            case "profile":
              IconComponent = UserCircle;
              label = "Profil";
              break;
            default:
              IconComponent = Home;
              label = route.name;
          }

          return (
            <YStack
              key={index}
              flex={1}
              alignItems="center"
              justifyContent="center"
              onPress={onPress}
              pressStyle={{ opacity: 0.6 }}
            >
              <IconComponent
                size={22}
                color={isFocused ? theme.colors.primary : theme.colors.gray400}
              />
              <Text
                fontSize={10}
                marginTop={4}
                fontWeight={isFocused ? "700" : "500"}
                color={isFocused ? theme.colors.primary : theme.colors.gray400}
              >
                {label}
              </Text>
            </YStack>
          );
        })}
      </XStack>
    </View>
  );
}
