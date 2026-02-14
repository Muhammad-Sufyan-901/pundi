import { theme } from "@/src/styles/theme";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function AuthLayout(): React.JSX.Element {
  React.useEffect(() => {
    // Set navigation bar color for Android
    const setNavigationBar = async () => {
      try {
        await NavigationBar.setBackgroundColorAsync("#FFFFFF");
        await NavigationBar.setButtonStyleAsync("dark");
      } catch (error) {
        console.log("Navigation bar not supported on this platform");
      }
    };

    setNavigationBar();
  }, []);

  return (
    <React.Fragment>
      {/* Status Bar Configuration - translucent allows color to show through */}
      <StatusBar
        style="light"
        backgroundColor={theme.colors.primary}
        translucent={false}
      />

      <Stack
        screenOptions={{
          animation: "slide_from_right",
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      >
        <Stack.Screen
          name="sign-in"
          options={{
            title: "Masuk",
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            title: "Daftar",
          }}
        />
        <Stack.Screen
          name="forgot-password"
          options={{
            title: "Lupa Password",
          }}
        />
      </Stack>
    </React.Fragment>
  );
}
