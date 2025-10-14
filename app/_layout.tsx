import CustomSplash from "@/components/Common/CustomSplash";
import CustomHeader from "@/components/CustomHeader";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import Toast from "react-native-toast-message";
import { AuthProvider } from "../context/AuthProvider";
import "./global.css";

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  const router = useRouter();


  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
  //     setUser(firebaseUser);
  //     setLoading(false);

  //     // if (!firebaseUser) {
  //     //   router.replace("/(auth)/login");
  //     // } else {
  //     //   router.replace("/(tabs)");
  //     // }
  //       router.replace("/(tabs)");
  //   });

  //   return unsubscribe;
  // }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!appIsReady) {
    return <CustomSplash />;
  }

  return (
    <AuthProvider>
      <View className="flex-1">
        <Stack>
          <Stack.Screen name="(tabs)" options={{ header: () => <CustomHeader /> }} />
          <Stack.Screen name="cart" options={{ header: () => <CustomHeader /> }} />
          <Stack.Screen name="about" options={{ header: () => <CustomHeader /> }} />
          <Stack.Screen name="membership" options={{ header: () => <CustomHeader /> }} />
          <Stack.Screen name="contact" options={{ header: () => <CustomHeader /> }} />
          <Stack.Screen name="team" options={{ header: () => <CustomHeader /> }} />
          <Stack.Screen name="(blogs)" options={{ header: () => <CustomHeader /> }} />
          <Stack.Screen name="referfriend" options={{ header: () => <CustomHeader /> }} />
          <Stack.Screen name="gallery" options={{ header: () => <CustomHeader /> }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
        <Toast />
      </View>
    </AuthProvider>
  );
}
