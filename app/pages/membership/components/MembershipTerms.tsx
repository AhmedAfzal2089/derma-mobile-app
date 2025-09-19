// components/Membership/MembershipTerms.tsx
import { Text, View } from "react-native";

const membershipTerms = [
  {
    title: "Flexible Commitment",
    description: "3-month minimum with monthly rolling thereafter",
  },
  {
    title: "Session Banking",
    description: "Unused treatments can be saved for up to 3 months",
  },
  {
    title: "Priority Access",
    description: "Book appointments online or via personal concierge",
  },
  {
    title: "Gift Options",
    description: "Share unused sessions with friends twice yearly",
  },
];

export default function MembershipTerms() {
  return (
    <View className="bg-white py-12 px-6">
      {/* Section Header */}
      <Text className="text-3xl font-bold text-center text-zinc-800 mb-8">
        Membership Terms & Benefits
      </Text>

      {/* Terms & Benefits Cards */}
      <View className="flex-col">
        {membershipTerms.map((item, index) => (
          <View
            key={index}
            className="w-full bg-zinc-950 p-6 rounded-2xl shadow-sm mb-4"
          >
            <Text className="text-xl font-bold text-white mb-2">
              {item.title}
            </Text>
            <Text className="text-white text-base">{item.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
