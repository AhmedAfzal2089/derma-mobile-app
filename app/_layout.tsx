import { Stack } from "expo-router";
import { View } from "react-native";
import "./global.css";
export default function RootLayout() {
  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
