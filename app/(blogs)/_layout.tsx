import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Default route */}
      <Stack.Screen name="blogs" options={{ title: "Blogs" }} />
    </Stack>
  );
}
