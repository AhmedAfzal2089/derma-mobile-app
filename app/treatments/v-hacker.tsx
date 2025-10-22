import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const VHackerTreatmentScreen = () => {
  const cardData = [
    { heading: "Visible Results", value: "Firms, hydrates and brightens skin" },
    { heading: "Results Last", value: "Long-term cellular improvement" },
    { heading: "Recommended Sessions", value: "3+ for optimal results" },
    { heading: "Procedure Time", value: "30-45 Minutes" },
    { heading: "Discomfort", value: "Minimal" },
    { heading: "Downtime", value: "Minimal" },
    { heading: "Technology", value: "Exosomal delivery for deep absorption" },
    { heading: "Our Pricing", value: "From £300" },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="flex-col md:flex-row items-center justify-center px-5 py-10">
        {/* Left Content */}
        <View className="w-full md:w-1/2 mb-8 md:mb-0">
          <Text className="text-gray-500 text-sm font-medium tracking-wide mb-3">Advanced Biohacking Treatment</Text>
          <Text className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
            V-Hacker:{"\n"}Cellular-Level Skin{"\n"}Rejuvenation
          </Text>
          <Text className="text-gray-600 text-base leading-relaxed">
            Biohack your skin&apos;s health with our advanced peptide and growth factor treatment that works at the cellular level for
            lasting vitality and rejuvenation.
          </Text>

          <TouchableOpacity className="mt-8 border border-black py-3 px-6 rounded-lg">
            <Text className="text-black font-semibold text-center">VIEW PRICES</Text>
          </TouchableOpacity>
        </View>

        {/* Right Image */}
        <View className="w-full md:w-1/2 items-center">
          <Image
            source={require("../../assets/wellness/V-Hacker Biohacking Vertical.jpg")}
            className="w-72 h-96 rounded-3xl"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Key Benefits Section */}
      <View className="bg-gray-50 px-5 py-10">
        <View className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md">
          <View className="flex flex-wrap justify-between">
            {cardData.map((card, index) => (
              <View key={index} className="w-[48%] mb-5">
                <Text className="text-lg font-semibold text-gray-900">{card.value}</Text>
                <Text className="text-gray-600 text-sm">{card.heading}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Treatment Information */}
      <View className="px-5 py-10 bg-white">
        <Text className="text-3xl font-bold text-gray-900 text-center mb-6">What is V-Hacker Biohacking Treatment?</Text>
        <Text className="text-gray-600 text-base leading-relaxed text-center mb-10">
          V-Hacker is an advanced biohacking treatment that works at the cellular level to boost skin health, longevity, and vitality. Using
          a powerful combination of peptides, growth factors, and exosomal delivery technology, it optimizes your skin&apos;s function for
          lasting rejuvenation.
        </Text>

        <View className="flex-col md:flex-row justify-between">
          {/* Left Column */}
          <View className="mb-8 md:mb-0">
            <Text className="text-xl font-semibold text-gray-900 mb-3">Key Ingredients:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Epithalon: Protects DNA and supports cell lifespan</Text>
              <Text className="text-gray-600">• GHK-Cu (Copper Peptide): Improves blood flow and skin vitality</Text>
              <Text className="text-gray-600">• NAD+: Boosts energy, DNA repair, and elasticity</Text>
              <Text className="text-gray-600">• Exosomal delivery tech: Ensures deeper absorption</Text>
              <Text className="text-gray-600">• Peptides & Growth Factors: EGF, IGF, VEGF, FGF</Text>
              <Text className="text-gray-600">• Hyaluronic Acid: Hydrates and plumps</Text>
              <Text className="text-gray-600">• Buffered Succinate: Balances skin energy</Text>
            </View>
          </View>

          {/* Right Column */}
          <View>
            <Text className="text-xl font-semibold text-gray-900 mb-3">Benefits:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Firms, hydrates, and brightens skin</Text>
              <Text className="text-gray-600">• Reduces signs of aging and oxidative stress</Text>
              <Text className="text-gray-600">• Stimulates collagen and elasticity</Text>
              <Text className="text-gray-600">• Smooths and revitalizes skin</Text>
              <Text className="text-gray-600">• Works at cellular level for long-term improvements</Text>
              <Text className="text-gray-600">• Minimal downtime with natural-looking results</Text>
            </View>
          </View>
        </View>
      </View>

      {/* About V-Hacker */}
      <View className="px-5 py-10 bg-white">
        <View className="flex-col md:flex-row items-center">
          <Image
            source={require("../../assets/wellness/V-Hacker Biohacking Horizental.jpg")}
            className="w-full h-64 rounded-2xl mb-6"
            resizeMode="cover"
          />
          <View>
            <Text className="text-2xl font-bold text-gray-900 mb-3">About V-Hacker Biohacking</Text>
            <Text className="text-gray-600 mb-3">
              Peptides, growth factors, NAD+, and exosomal delivery to boost cellular rejuvenation.
            </Text>
            <Text className="text-gray-600">• 3+ sessions recommended</Text>
            <Text className="text-gray-600">• Long-term cellular improvements</Text>
            <Text className="text-gray-600">• 30–45 minutes; minimal downtime</Text>
          </View>
        </View>
      </View>

      {/* Pricing Section */}
      <View className="bg-gray-100 px-5 py-12">
        <Text className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Pricing</Text>

        <View className="space-y-6">
          <View className="bg-white border border-gray-200 rounded-xl p-5 shadow-md">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-base font-semibold text-gray-900">V-Hacker Biohacking Treatment</Text>
              <TouchableOpacity className="border border-gray-900 py-1 px-3 rounded-lg">
                <Text className="text-gray-900 font-medium">BOOK</Text>
              </TouchableOpacity>
            </View>

            <View>
              <View className="flex-row justify-between items-center py-2">
                <Text className="text-gray-700">1 Session:</Text>
                <Text className="text-lg font-bold text-gray-900">£300</Text>
              </View>
              <View className="flex-row justify-between items-center py-2">
                <Text className="text-gray-700">2 Sessions:</Text>
                <Text className="text-lg font-bold text-gray-900">£500</Text>
              </View>
              <View className="flex-row justify-between items-center py-2">
                <Text className="text-gray-700">3 Sessions:</Text>
                <Text className="text-lg font-bold text-gray-900">£700</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default VHackerTreatmentScreen;
