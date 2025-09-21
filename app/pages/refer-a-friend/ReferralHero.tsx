import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const ReferralHero = () => {
  return (
    <View className="bg-gray-50 px-6 py-12 items-center justify-center">
      {/* Icon Container */}
      <View className="bg-white w-14 h-14 rounded-full items-center justify-center shadow-md mb-4">
        <MaterialCommunityIcons name="share-variant" size={24} color="#4B5563" />
      </View>

      {/* Title */}
      <Text className="text-3xl md:text-4xl text-center font-semibold text-gray-900">Referral{"\n"}Programs</Text>

      {/* Subtitle */}
      <Text className="text-center text-base text-gray-600 mt-4 leading-relaxed max-w-xl">
        Choose the referral program that best suits your needs. When you refer someone, you earn 5% cash rewards while they get 5% discount
        on their treatment!
      </Text>
    </View>
  );
};

export default ReferralHero;
