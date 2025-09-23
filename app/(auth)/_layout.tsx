import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Forgot from "./forgot";
import Login from "./login";
import Signup from "./signup";

export default function AuthLayout() {
  const [currentScreen, setCurrentScreen] = useState("login");

  const handleToggle = (tab: string) => {
    setCurrentScreen(tab);
  };

  const renderScreen = () => {
    if (currentScreen === "login") return <Login />;
    if (currentScreen === "signup") return <Signup />;
    if (currentScreen === "forgot") return <Forgot />;
    return null;
  };

  return (
    <View className="flex justify-center w-full items-center bg-white h-full px-1">
      <View className="flex justify-center items-center py-5 w-full bg-white">
        <Image source={require("../../public/logo_black.png")} className="h-10 mt-10 mb-2" resizeMode="contain" />
        <Text className="text-3xl font-bold text-zinc-900 my-4">Welcome to Derma Veritas</Text>

        {currentScreen !== "forgot" && (
          <View className="flex flex-row items-center my-4 bg-gray-100 py-2 px-3 rounded-xl gap-5">
            <Pressable onPress={() => handleToggle("login")}>
              <Text
                className={`${
                  currentScreen === "login" ? "bg-white shadow-2xl  font-bold text-black rounded-lg px-4 py-2" : "text-zinc-700"
                }`}
              >
                Login
              </Text>
            </Pressable>
            <Pressable onPress={() => handleToggle("signup")}>
              <Text
                className={`${
                  currentScreen === "signup" ? "bg-white font-bold shadow-2xl text-black rounded-lg px-4 py-2" : "text-zinc-700"
                }`}
              >
                Signup
              </Text>
            </Pressable>
          </View>
        )}

        {renderScreen()}

        {currentScreen !== "forgot" && (
          <View className="w-full mt-6 px-4">
            <Pressable
              onPress={() => console.log("Continue with Google")}
              className="w-full py-3 flex flex-row justify-center items-center gap-2 rounded-lg border bg-white shadow-xl"
            >
              <AntDesign name="google" size={24} color="black" />
              <Text>Continue with Google</Text>
            </Pressable>
          </View>
        )}

        {currentScreen !== "forgot" && (
          <View className="w-full mb-10 mt-4 text-center">
            <Pressable onPress={() => handleToggle("forgot")}>
              <Text className="text-zinc-600 text-center">Forgot your password? Click here to reset</Text>
            </Pressable>
          </View>
        )}

        {currentScreen === "forgot" && (
          <View className="w-full my-6 px-4">
            <Pressable
              onPress={() => handleToggle("login")}
              className="w-full py-3 flex flex-row justify-center items-center gap-2 rounded-lg border bg-white shadow-xl"
            >
              <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
              <Text>Back to Login</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}
