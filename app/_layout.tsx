import CustomHeader from "@/components/CustomHeader";
import { Stack, useRouter } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { auth } from "./config/firebase";
import "./global.css";

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);

      if (!firebaseUser) {
        router.replace("/(auth)/login");
      } else {
        router.replace("/(tabs)");
      }
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="(blogs)" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="cart" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="about" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="membership" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="contact" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="team" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="referfriend" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="gallery" options={{ header: () => <CustomHeader /> }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
