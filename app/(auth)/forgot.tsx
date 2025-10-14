import { router } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import { auth } from "../../config/firebase";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    setLoading(true);

    if (!email) {
      Toast.show({ type: "error", text1: "Please enter your email address" });
      setLoading(false);
      return;
    }

    // basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show({ type: "error", text1: "Please enter a valid email address" });
      setLoading(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Toast.show({
        type: "success",
        text1: "Password reset email sent!",
        text2: "Check your inbox to reset your password.",
      });
      router.replace("/(auth)/login");
      setEmail("");
    } catch (error: any) {
      console.log("Password reset error:", error);

      switch (error.code) {
        case "auth/user-not-found":
          Toast.show({ type: "error", text1: "No account found with this email" });
          break;
        case "auth/invalid-email":
          Toast.show({ type: "error", text1: "Invalid email address" });
          break;
        case "auth/too-many-requests":
          Toast.show({ type: "error", text1: "Too many attempts, try again later" });
          break;
        default:
          Toast.show({ type: "error", text1: "Failed to send reset email" });
      }
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

      <Pressable
        onPress={handleForgotPassword}
        className={`w-full py-3 rounded-lg items-center ${loading ? "bg-zinc-400" : "bg-zinc-900"}`}
        disabled={loading}
      >
        <Text className="text-white font-semibold text-base">{loading ? "Sending..." : "Send Reset Email"}</Text>
      </Pressable>
    </View>
  );
}
