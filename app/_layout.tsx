// app/_layout.tsx
import CustomHeader from "@/components/CustomHeader";
import { Stack } from "expo-router";
import { View } from "react-native";
import "./global.css";

// This is your reusable header component

export default function RootLayout() {
  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            header: () => <CustomHeader />,
          }}
        />

        <Stack.Screen
          name="cart"
          options={{
            header: () => <CustomHeader />,
          }}
        />

        <Stack.Screen
          name="about" // <-- Add this line for the about page
          options={{
            header: () => <CustomHeader />,
          }}
        />

        <Stack.Screen
          name="membership" // <-- Add this line for the about page
          options={{
            header: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="contact" // <-- Add this line for the about page
          options={{
            header: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="team" // <-- Add this line for the about page
          options={{
            header: () => <CustomHeader />,
          }}
        />
        {/* Add any other standalone pages here */}
      </Stack>
    </View>
  );
}
