import { Feather, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const cardData = [
  {
    icon: <FontAwesome5 name="user-friends" size={28} color="#e5e7eb" />, // Tailwind zinc-200
    title: "Choose Your Program",
    description: "Select the referral program that best fits your profile – individual, business, or influencer.",
    number: 1,
  },
  {
    icon: <Feather name="share" size={28} color="#e5e7eb" />,
    title: "Start Referring",
    description: "Share your unique link or work with our team to set up custom partnership terms.",
    number: 2,
  },
  {
    icon: <Feather name="gift" size={28} color="#e5e7eb" />,
    title: "Everyone Benefits",
    description: "You receive 5% cash rewards when your referrals complete treatments. They save 5%.",
    number: 3,
  },
];

export default function ReferralSteps() {
  return (
    <ScrollView className="flex-1 bg-zinc-950 px-4 py-10 m-3 rounded-xl">
      {/* Header */}
      <View className="items-center mb-12 px-4">
        <Text className="text-3xl font-extrabold text-white text-center mb-2">How Our Programs Work</Text>
        <Text className="text-base text-zinc-400 text-center">Sample steps to start earning rewards through our referral programs</Text>
      </View>

      {/* Cards */}
      <View className="flex flex-col space-y-6 gap-10 ">
        {cardData.map((card, index) => (
          <View key={index} className="relative bg-zinc-800 rounded-xl shadow-md p-6 flex-col items-center justify-center w-5/6 mx-auto">
            {/* Number Badge */}
            <View className="absolute top-3 right-3 bg-white w-7 h-7 rounded-full items-center justify-center">
              <Text className="text-black text-xs font-bold">{card.number}</Text>
            </View>

            {/* Icon */}
            <View className="bg-zinc-700 p-4 rounded-full mb-4 self-center">{card.icon}</View>

            {/* Title */}
            <Text className="text-xl font-semibold text-white text-center mb-2">{card.title}</Text>

            {/* Description */}
            <Text className="text-sm text-zinc-400 text-center">{card.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
