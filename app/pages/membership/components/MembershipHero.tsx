// components/Membership/MembershipHero.tsx
import { Image, Text, View } from "react-native";

export default function MembershipHero() {
  return (
    <View className="bg-white py-16 px-6 items-center">
      {/* Logo */}
      <Image
        source={require("../../../../public/logo_black.png")} // **Update with your actual logo path**
        className="w-32 h-16 mb-8"
        resizeMode="contain"
      />

      {/* Title */}
      <View className="flex-row items-center mb-4">
        <Text className="text-4xl font-bold text-black">Elite </Text>
        <Text className="text-4xl font-light text-gray-500">Membership</Text>
      </View>

      {/* Description */}
      <Text className="text-gray-600 text-lg text-center max-w-lg">
        Join our exclusive membership program and experience the ultimate skin
        and hair care with monthly treatments, premium benefits, and significant
        savings.
      </Text>
    </View>
  );
}
