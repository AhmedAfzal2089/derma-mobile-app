import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Missing Fields", "Please fill in both email and password.");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential?.user;
      console.log("User", user);

      if (!user?.emailVerified) {
        Alert.alert("Email Not Verified", "Please verify your email.");
        await auth.signOut();
      } else {
        Alert.alert("Success", `Welcome back, ${user.email}`);
        // router.replace("(tabs)" as any);
         router.replace("/");
      }
    } catch (error: any) {
      Alert.alert("Login Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-bold text-zinc-900 mb-8">Login</Text>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        className="w-full border border-zinc-300 rounded-lg px-4 py-3 mb-4 text-base text-zinc-900"
        value={email}
        onChangeText={setEmail}
        editable={!loading}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        className="w-full border border-zinc-300 rounded-lg px-4 py-3 mb-6 text-base text-zinc-900"
        value={password}
        onChangeText={setPassword}
        editable={!loading}
      />

      <Pressable
        onPress={handleLogin}
        className={`w-full py-3 rounded-lg items-center ${loading ? "bg-zinc-400" : "bg-zinc-900"}`}
        disabled={loading}
      >
        <Text className="text-white font-semibold text-base">{loading ? "Logging in..." : "Login"}</Text>
      </Pressable>
    </View>
  );
}
