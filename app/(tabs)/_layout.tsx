import { MainBottomTabBar } from "@/src/components/layout";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function TabsLayout(): React.JSX.Element {
  return (
    <React.Fragment>
      <StatusBar style="dark" />
      <Tabs
        tabBar={(props: BottomTabBarProps) => <MainBottomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          animation: "shift",
          tabBarStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            borderTopWidth: 0,
            position: "absolute",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Beranda",
          }}
        />
        <Tabs.Screen
          name="analysis"
          options={{
            title: "Analisis",
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: "Tambah Transaksi",
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            title: "Transaksi",
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profil",
          }}
        />
      </Tabs>
    </React.Fragment>
  );
}
