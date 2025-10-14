// app/MainLayout.tsx
import CustomHeader from "@/components/CustomHeader";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import Toast from "react-native-toast-message";
import { useAuth } from "../context/AuthProvider";

export default function MainLayout() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) router.replace("/(tabs)");
      else router.replace("/(auth)/login");
    }
  }, [user, loading]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="cart" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="about" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="membership" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="contact" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="team" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
      <Toast />
    </View>
  );
}
