// app/_layout.tsx
import CustomHeader from "@/components/CustomHeader";
import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import "./global.css";

// This is your reusable header component

export default function RootLayout() {
  return (
    <View className="flex-1">
      <Stack>
        {/*
          This Stack.Screen wraps the (tabs) directory. It will render
          the CustomHeader and the bottom tabs defined in app/(tabs)/_layout.tsx.
        */}
        <Stack.Screen
          name="(tabs)"
          options={{
            header: () => <CustomHeader />,
          }}
        />

        {/*
          This is the standalone cart page. Since it's within the same Stack,
          it will be pushed on top of the (tabs) layout, but the bottom tab bar
          from the (tabs) screen will remain visible.
        */}
        <Stack.Screen
          name="cart" // Corresponds to app/cart.tsx
          options={{
            header: () => <CustomHeader />,
          }}
        />
        {/*
          For any other standalone pages, add them here. They will inherit
          the header and retain the bottom tabs.
        */}
      </Stack>
    </View>
  );
}
