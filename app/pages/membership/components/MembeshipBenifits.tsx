// components/Membership/MembershipBenefits.tsx
import { Text, View } from "react-native";

export default function MembershipBenefits() {
  return (
    <View className="bg-white py-12 px-6">
      {/* Monthly Care Description Card */}
      <View className="w-full bg-zinc-900 p-6 rounded-2xl shadow-md mb-8">
        <Text className="text-sm font-semibold text-gray-400 mb-2">
          EXCLUSIVE BENEFITS
        </Text>
        <Text className="text-3xl font-bold text-white mb-4">
          Monthly Care for Healthy Skin & Hair
        </Text>
        <Text className="text-gray-300 text-base mb-4">
          Our Elite Membership Program offers you the opportunity to maintain
          optimal skin health, hair vitality, and aesthetic enhancement through
          carefully curated monthly treatments. Each tier is designed to provide
          comprehensive care while delivering exceptional value.
        </Text>
        <Text className="text-gray-300 text-base">
          From advanced facial treatments and professional hair care solutions
          to cutting-edge injectables, our membership ensures you receive the
          highest quality care from our team of medical professionals, with
          exclusive discounts and priority access to new treatments.
        </Text>
      </View>

      {/* Exclusive Member Benefits Card */}
      <View className="w-full bg-zinc-900 p-6 rounded-2xl shadow-md">
        <View className="flex-row items-center mb-4">
          <View className="bg-white w-8 h-8 rounded-full items-center justify-center mr-3">
            <Text className="text-black font-bold">DV</Text>
          </View>
          <View className="flex-row">
            <Text className="text-white text-2xl font-bold">Elite </Text>
            <Text className="text-gray-400 text-2xl font-light">
              Membership
            </Text>
          </View>
        </View>

        <Text className="text-white text-xl font-semibold mb-4">
          Exclusive Member Benefits Include:
        </Text>

        {/* Benefits List */}
        <View>
          <View className="flex-row items-start mb-2">
            <Text className="text-white mr-2 text-lg">•</Text>
            <Text className="text-gray-300 text-base flex-1">
              Priority booking and concierge service
            </Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Text className="text-white mr-2 text-lg">•</Text>
            <Text className="text-gray-300 text-base flex-1">
              Up to 20% savings on all treatments
            </Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Text className="text-white mr-2 text-lg">•</Text>
            <Text className="text-gray-300 text-base flex-1">
              Complimentary skin analysis and progress tracking
            </Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Text className="text-white mr-2 text-lg">•</Text>
            <Text className="text-gray-300 text-base flex-1">
              VIP event invitations and early access to new treatments
            </Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Text className="text-white mr-2 text-lg">•</Text>
            <Text className="text-gray-300 text-base flex-1">
              Flexible treatment banking and gifting options
            </Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Text className="text-white mr-2 text-lg">•</Text>
            <Text className="text-gray-300 text-base flex-1">
              Personalized treatment plans and expert consultations
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
