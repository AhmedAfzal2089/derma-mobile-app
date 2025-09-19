import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MembershipCard() {
  return (
    <View className="bg-zinc-900 mx-4 p-6 py-12 gap-6 rounded-2xl shadow-lg my-10 flex-col items-center justify-between">
      {/* Left Content */}
      <View className="flex-row items-center flex-1">
        {/* Logo and Membership Text */}
        <View className="flex-row items-center">
          <Image
            source={require("../../assets/logos/logo_white.png")}
            className="w-16 h-8"
            resizeMode="contain"
          />
          <View className="ml-2">
            <Text className="text-white text-lg font-bold">DV Club</Text>
            <Text className="text-white text-base">Membership</Text>
          </View>
        </View>

        {/* Description */}
        <View className="flex-1 ml-4">
          <Text className="text-gray-300 text-xs">
            Receive your favorite treatments monthly & save!
            <Text className="font-bold text-white">
              {" "}
              Prices start from £54 per month*
            </Text>
          </Text>
        </View>
      </View>

      {/* "Learn More" Button */}
      <Link href="/pages/membership/membership" asChild>
        <TouchableOpacity className="px-6 py-3 border border-white rounded-md">
          <Text className="text-white text-base font-semibold">LEARN MORE</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
