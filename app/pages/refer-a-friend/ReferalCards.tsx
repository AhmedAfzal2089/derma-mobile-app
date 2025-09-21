import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ReferralCards = () => {
  return (
    <View className="flex-1 bg-zinc-950 p-5 py-10 rounded-xl m-5">
      <Text className="text-2xl font-bold text-zinc-200 text-center mb-2.5">Choose Your Program</Text>
      <Text className="text-base text-zinc-400 text-center mb-5">
        Select the referral program that matches your profile and start earning rewards today.
      </Text>
      <View className="flex-row flex-wrap justify-around">
        {/* Individual Referrals Card */}
        <View className="bg-zinc-800 rounded-xl p-5 mb-5 w-1/3 min-w-[250px]">
          <Text className="text-xl font-bold text-zinc-200 mb-1.5">Individual Referrals</Text>
          <Text className="text-sm text-zinc-400 mb-4">
            Perfect for individuals who want to share their positive experience and earn rewards.
          </Text>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">You earn 5% cash rewards</Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">Friends get 5% discount</Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">Unlimited referrals</Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">Easy tracking dashboard</Text>
          </View>
          <Link href={"/(tabs)/refferal"} asChild>
            <TouchableOpacity className="bg-white py-3 rounded-lg mt-5 items-center">
              <Text className="text-black font-bold text-base">Start Referring</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* B2B Partnerships Card */}
        <View className="bg-zinc-800 rounded-xl p-5 mb-5 w-1/3 min-w-[250px]">
          <Text className="text-xl font-bold text-zinc-200 mb-1.5">B2B Partnerships</Text>
          <Text className="text-sm text-zinc-400 mb-4">
            For businesses looking to partner with us and offer exclusive benefits to their clients.
          </Text>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">Custom partnership terms</Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">Bulk discount programs</Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">Co-marketing opportunities</Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">Dedicated account manager</Text>
          </View>
          <Link href={"/contact"} asChild>
            <TouchableOpacity className="bg-white py-3 rounded-lg mt-5 items-center">
              <Text className="text-black font-bold text-base">Contact Us</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Influencer Program Card */}
        <View className="bg-zinc-800 rounded-xl p-5 mb-5 w-1/3 min-w-[250px]">
          <Text className="text-xl font-bold text-zinc-200 mb-1.5">Influencer Program</Text>
          <Text className="text-sm text-zinc-400 mb-4">
            For content creators and influencers who want to collaborate and create authentic content.
          </Text>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">Custom collaboration packages</Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">Content creation support</Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">Performance-based rewards</Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Text className="text-blue-400 text-lg mr-2.5">✓</Text>
            <Text className="text-zinc-300 text-sm">Exclusive treatment access</Text>
          </View>
          <Link href={"/contact"} asChild>
            <TouchableOpacity className="bg-white py-3 rounded-lg mt-5 items-center">
              <Text className="text-black font-bold text-base">Contact Us</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default ReferralCards;
