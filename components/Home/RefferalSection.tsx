// components/Home/ReferralSection.tsx
import { Feather } from "@expo/vector-icons"; // Assuming you have this installed
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ReferralSection() {
  return (
    <View className="bg-zinc-950 mx-4 p-6 py-16 rounded-2xl shadow-lg my-6">
      <View className="flex-col items-center">
        {/* Image Section */}
        <Image
          source={require("../../public/referralProgram.jpg")} // Replace with your actual image path
          className="w-full h-48 mb-6 rounded-lg" // Adjust height as needed
          resizeMode="contain" // or 'cover' depending on your image aspect ratio
        />

        {/* Content Section */}
        <View className="w-full items-center px-2">
          <Text className="text-3xl font-bold text-center text-white mb-4">
            Share beauty, earn rewards
          </Text>
          <Text className="text-gray-300 text-center mb-6">
            Refer friends to Derma Veritas and earn 5% cash of their treatment
            cost. Your friends get 5% discount on their treatment. Everyone
            wins!
          </Text>

          {/* Benefits List */}
          <View className="w-full mb-6 items-start gap-2">
            <View className="flex-row items-center mb-2">
              <Feather name="dollar-sign" size={18} color="white" />
              <Text className="text-white ml-2">You earn 5% cash rewards</Text>
            </View>
            <View className="flex-row items-center mb-2">
              <Feather name="users" size={18} color="white" />
              <Text className="text-white ml-2">Friends get 5% discount</Text>
            </View>
            <View className="flex-row items-center mb-2">
              <Feather name="star" size={18} color="white" />
              <Text className="text-white ml-2">Unlimited referrals</Text>
            </View>
          </View>

          {/* "Start Referring" Button */}
          <TouchableOpacity className="px-6 py-4 bg-white rounded-md shadow-lg">
            <Link
              href={"/(tabs)/refferal"}
              className="text-zinc-900 font-semibold text-base"
            >
              START REFERRING
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
