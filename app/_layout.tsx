import CustomSplash from "@/components/Common/CustomSplash";
import { WithStripeProvider } from "@/components/Stripe/WithStripeProvider";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";
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
        await new Promise((resolve) => setTimeout(resolve, 2000));
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
    <WithStripeProvider>
      <AuthProvider>
        {/* <View className="flex-1"> */}
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#6a51ae" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="cart" options={{ headerShown: false }} />
          <Stack.Screen name="about" options={{ headerShown: false }} />
          <Stack.Screen name="membership" options={{ headerShown: false }} />
          <Stack.Screen name="contact" options={{ headerShown: false }} />
          <Stack.Screen name="team" options={{ headerShown: false }} />
          <Stack.Screen name="(blogs)" options={{ headerShown: false }} />
          <Stack.Screen name="referfriend" options={{ headerShown: false }} />
          <Stack.Screen name="gallery" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
        <Toast />
        {/* </View> */}
      </AuthProvider>
    </WithStripeProvider>
  );
}
