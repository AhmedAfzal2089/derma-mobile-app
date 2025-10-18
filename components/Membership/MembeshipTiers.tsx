// components/Membership/MembershipTiers.tsx
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

// Data for each membership tier
const tiers = [
  {
    name: "Veritas Glow",
    subtitle: "ENTRY TIER",
    price: "£80",
    billing: "Billed monthly",
    isPopular: false,
    benefits: [
      "1x ProFusion Hydrafacial monthly",
      "3x RF Microneedling area (first 3 sessions)",
      "1x PRP Hair Face (alternate months)",
      "10% off injectables & skincare",
      "Priority booking access",
    ],
    buttonText: "SELECT GLOW TIER",
    buttonColor: "bg-white",
  },
  {
    name: "Veritas Sculpt",
    subtitle: "MID TIER",
    price: "£160",
    billing: "Billed monthly",
    isPopular: true,
    benefits: [
      "3x Prolific treatments (includes top-up)",
      "1x Anti-Wrinkle Treatment (3 areas every 3 months)",
      "1x Laser Hair Removal (any area)",
      "1x RF Microneedling or PRP Facial",
      "15% off injectables & fillers",
      "Quarterly facial icons",
      "VIP event invitations",
    ],
    buttonText: "SELECT SCULPT TIER",
    buttonColor: "bg-blue-600",
  },
  {
    name: "Veritas Prestige",
    subtitle: "LUXURY TIER",
    price: "£299",
    billing: "Billed monthly",
    isPopular: false,
    benefits: [
      "Endolift (discounted annually)",
      "3x CO2 Laser sessions",
      "Quarterly Exosome therapy",
      "20% off Fillers & Anti-Wrinkle Treatment",
      "RF Microneedling included",
      "Complete hair care treatments",
      "Monthly product gifts",
      "Annual skin health report",
    ],
    buttonText: "SELECT PRESTIGE TIER",
    buttonColor: "bg-white",
  },
];

export default function MembershipTiers() {
  return (
    <View className="bg-white py-12 px-6">
      {/* Section Header */}
      <Text className="text-3xl font-bold text-center text-zinc-800 mb-2">
        Choose Your Membership Tier
      </Text>
      <Text className="text-gray-600 text-center text-base mb-8">
        Select the membership level that best fits your aesthetic goals and
        lifestyle.
      </Text>

      {/* Membership Cards Container */}
      <View className="flex-col">
        {tiers.map((tier, index) => (
          <View
            key={index}
            className={`
              w-full p-6 rounded-2xl shadow-md mb-8
              ${tier.isPopular ? "bg-blue-600" : "bg-zinc-900"}
            `}
          >
            {/* "Most Popular" Banner */}
            {tier.isPopular && (
              <View className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-white">
                <Text className="text-xs font-bold text-blue-600">
                  MOST POPULAR
                </Text>
              </View>
            )}

            {/* Tier Name and Subtitle */}
            <Text
              className={`
              text-sm font-semibold mb-1
              ${tier.isPopular ? "text-white" : "text-gray-400"}
            `}
            >
              {tier.name}
            </Text>
            <Text
              className={`
              text-lg font-bold mb-4
              ${tier.isPopular ? "text-white" : "text-gray-400"}
            `}
            >
              {tier.subtitle}
            </Text>

            {/* Price */}
            <Text className="text-5xl font-bold text-white mb-2">
              {tier.price}
              <Text className="text-base font-normal">/month</Text>
            </Text>
            <Text className="text-gray-300 text-sm mb-6">{tier.billing}</Text>

            {/* Benefits List */}
            <View className="mb-8">
              {tier.benefits.map((benefit, i) => (
                <View key={i} className="flex-row items-start mb-2">
                  <Feather
                    name="check"
                    size={16}
                    color={tier.isPopular ? "white" : "white"}
                    className="mr-2 mt-1"
                  />
                  <Text className="text-gray-300 ml-2 flex-1">{benefit}</Text>
                </View>
              ))}
            </View>

            {/* Select Tier Button */}
            <TouchableOpacity
              className={`
                w-full px-6 py-4  rounded-md items-center
                ${tier.buttonColor}
                ${tier.isPopular ? "border-2 border-white" : ""}
              `}
            >
              <Text
                className={`
                text-black font-semibold
                ${tier.isPopular ? "text-white" : "text-black"}
              `}
              >
                {tier.buttonText}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
