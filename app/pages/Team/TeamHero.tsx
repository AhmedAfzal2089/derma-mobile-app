// components/Team/TeamHero.tsx
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function TeamHero() {
  return (
    <View className="bg-white py-16 px-6 items-center">
      {/* Logo */}
      <Image
        source={require("../../../public/logo_black.png")} // **Update with your actual logo path**
        className="w-32 h-16 mb-8" // Adjust width/height as needed for your logo
        resizeMode="contain"
      />

      <View className="flex-row items-center mb-4">
        <Text className="text-4xl font-bold text-black">Meet Our </Text>
        <Text className="text-4xl font-light text-gray-500">Team</Text>
      </View>

      <Text className="text-gray-600 text-base text-center max-w-lg mb-8">
        Get to know the dedicated professionals behind Derma Veritas who are committed to helping you look and feel your best through expert
        care and personalized treatment approaches.
      </Text>

      <Link href="/bookings" asChild>
        <TouchableOpacity className="px-8 py-4 bg-zinc-900 rounded-md shadow-lg">
          <Text className="text-white font-semibold text-base">BOOK A TREATMENT</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
