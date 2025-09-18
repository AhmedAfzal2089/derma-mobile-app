// components/ConsultationCard.tsx
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ConsultationCard() {
  return (
    <View className="my-16">
      <View className="bg-zinc-900 mx-4 p-8  rounded-2xl shadow-lg">
        <View className="items-center">
          <Text className="text-2xl font-bold text-white mb-2">
            Start Your Transformation
          </Text>
          <Text className="text-center text-gray-300 mb-6">
            Book a complimentary consultation with our specialists today.
          </Text>

          {/* Book Consultation Button */}
          <Link href="/bookings" asChild>
            <TouchableOpacity className="bg-white px-8 py-3 rounded-md mb-6">
              <Text className="text-black text-base font-semibold">
                BOOK CONSULTATION
              </Text>
            </TouchableOpacity>
          </Link>

          {/* Features Section */}
          <View className="flex-row items-center justify-center space-x-8">
            <View className="flex-row items-center">
              <Feather name="shield" size={16} color="white" />
              <Text className="text-white ml-2">No hidden fees</Text>
            </View>
            <View className="flex-row items-center">
              <Feather name="star" size={16} color="white" />
              <Text className="text-white ml-2">Expert care</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
