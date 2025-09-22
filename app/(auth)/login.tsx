import { useMemo, useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { auth } from "../config/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (value: string) => {
    if (!value) return "Email is required";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value) ? "" : "Please enter a valid email address";
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const isFormValid = useMemo(() => {
    return !emailError && email.length > 0 && password.length > 0;
  }, [emailError, email, password]);

  const handleLogin = async () => {
    if (!isFormValid) return;

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential?.user;
      console.log("User", user);

      if (!user?.emailVerified) {
        Alert.alert("Email Not Verified", "Please verify your email.");
        await auth.signOut();
      } else {
        Toast.show({
          type: "success",
          text1: `Welcome back, ${user.email}`,
        });
        // router.replace("(tabs)" as any);
        router.replace("/");
      }
    } catch (error: any) {
      console.log("Login Error", error);
      Toast.show({
        type: "error",
        text1: "Incorrect email or password.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex flex-col justify-center items-center px-4 w-full">
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        className="w-full border border-zinc-300 rounded-lg px-4 py-3 mb-4 text-base text-zinc-900"
        value={email}
        onChangeText={setEmail}
        editable={!loading}
      />
      {emailError ? <Text className="text-red-500 mb-2 text-sm self-start">*{emailError}</Text> : null}

      <View className="w-full relative mb-6">
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-base text-zinc-900 pr-10"
          value={password}
          onChangeText={setPassword}
          editable={!loading}
        />
        <Pressable className="absolute right-3 top-3" onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={22} color="gray" />
        </Pressable>
      </View>

      <Pressable
        onPress={handleLogin}
        className={`w-full py-3 rounded-lg items-center ${!isFormValid || loading ? "bg-zinc-600" : "bg-zinc-900"}`}
        disabled={!isFormValid || loading}
      >
        <Text className="text-white font-semibold text-base">{loading ? "Logging in..." : "Login"}</Text>
      </Pressable>
    </View>
  );
}
