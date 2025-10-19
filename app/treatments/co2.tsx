import React from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function CO2FractionalLaserScreen({ navigation }: any) {
  const cardData = [
    { heading: "Results Seen", value: "After 1 week", description: "Best after 4–6 weeks" },
    { heading: "Results Last", value: "12–18 Months" },
    { heading: "No. of Sessions", value: "3–6 Treatments" },
    { heading: "Procedure Time", value: "30–60 Minutes" },
    { heading: "Pain", value: "Mild to Moderate", description: "Topical anaesthetic used" },
    { heading: "Downtime", value: "3–5 Days" },
    { heading: "Side Effects", value: "Redness, Peeling" },
    { heading: "Our Pricing", value: "$ 12,000", description: "See below" },
  ];

  return (
    <ScrollView className="bg-white" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Hero Section */}
      <View className="px-4 pt-12">
        <Text className="text-sm text-gray-500 mb-2">Skin Rejuvenation Treatment</Text>

        <Text className="text-2xl font-bold text-gray-900 mb-4">CO₂ Fractional Laser{"\n"}for Skin Renewal</Text>

        <Text className="text-base text-gray-600 mb-6">
          A cutting-edge laser treatment that rejuvenates your skin by stimulating collagen production, improving texture, and reducing
          scars.
        </Text>

        <TouchableOpacity className="px-5 py-3 border border-gray-800 rounded-md mb-6 w-fit self-start">
          <Text className="text-sm font-semibold text-gray-900 uppercase">View Prices</Text>
        </TouchableOpacity>

        <Image
          source={require("../../assets/skin_care/CO2 Laser veritcal.jpg")}
          resizeMode="cover"
          style={{
            width: screenWidth - 32,
            height: 300,
            borderRadius: 12,
            backgroundColor: "#e5e7eb",
          }}
        />
      </View>

      {/* Info Cards */}
      <View className="bg-gray-50 py-10 px-4">
        <View className="bg-white rounded-xl border border-gray-200 p-4">
          {cardData.map((item, index) => (
            <View key={index} className="mb-4">
              <Text className="text-xs text-gray-500">{item.heading}</Text>
              <Text className="text-lg font-semibold text-gray-900">{item.value}</Text>
              {item.description && <Text className="text-sm text-gray-500">{item.description}</Text>}
            </View>
          ))}
        </View>
      </View>

      {/* What is CO₂ Fractional Laser Section */}
      <View className="px-4 py-12">
        <Text className="text-2xl font-bold text-gray-900 mb-4">What is CO₂ Fractional Laser?</Text>
        <Text className="text-base text-gray-600 mb-6">
          CO₂ Fractional Laser is a non-surgical skin resurfacing treatment that uses laser energy to remove damaged skin layers, stimulate
          collagen, and promote natural healing for smoother and more youthful-looking skin.
        </Text>

        <View className="space-y-6">
          <View>
            <Text className="text-lg font-semibold text-gray-900 mb-2">Benefits:</Text>
            <Text className="text-gray-700">• Reduces acne scars and fine lines</Text>
            <Text className="text-gray-700">• Improves skin tone and texture</Text>
            <Text className="text-gray-700">• Stimulates collagen production</Text>
            <Text className="text-gray-700">• Brightens and rejuvenates dull skin</Text>
          </View>

          <View>
            <Text className="text-lg font-semibold text-gray-900 mb-2">Treatment Areas:</Text>
            <Text className="text-gray-700">• Face</Text>
            <Text className="text-gray-700">• Neck</Text>
            <Text className="text-gray-700">• Hands</Text>
            <Text className="text-gray-700">• Décolletage</Text>
          </View>
        </View>
      </View>

      {/* Before & After Section */}
      <View className="px-4 pb-12">
        <Image
          source={require("../../assets/skin_care/CO2  Horizental.jpg")}
          resizeMode="cover"
          style={{
            width: screenWidth - 32,
            height: 220,
            borderRadius: 12,
            marginBottom: 16,
          }}
        />
        <Text className="text-lg font-bold text-gray-900 mb-2">Before & After</Text>
        <Text className="text-gray-600 mb-1">• Noticeable texture improvement</Text>
        <Text className="text-gray-600 mb-1">• Smoother, tighter skin</Text>
        <Text className="text-gray-600">• Reduces scars, pigmentation, and fine lines</Text>
      </View>

      {/* Pricing Section */}
      <View className="bg-gray-100 px-4 py-12">
        <Text className="text-xs text-gray-600 uppercase mb-2">Pricing</Text>
        <Text className="text-3xl font-bold text-gray-900 mb-4">CO₂ Fractional Laser</Text>
        <Text className="text-base text-gray-600 mb-6">
          All procedures are performed by qualified professionals using top-quality equipment to ensure safe, effective, and lasting
          results.
        </Text>

        <View className="bg-white border border-gray-200 rounded-xl p-6">
          <Text className="text-lg font-semibold text-gray-900 mb-2">CO₂ Laser Full Face</Text>
          <Text className="text-2xl font-bold text-center text-gray-900 mb-2">$ 12,000</Text>
          <Text className="text-center text-gray-600 mb-4">
            Complete facial laser rejuvenation session targeting fine lines, scars, and pigmentation.
          </Text>

          <View className="space-y-1 mb-6">
            <Text className="text-sm text-gray-700">• Face</Text>
            <Text className="text-sm text-gray-700">• Neck</Text>
            <Text className="text-sm text-gray-700">• Hands (optional add-on)</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Booking")} className="bg-black px-4 py-3 rounded-md">
            <Text className="text-white text-center font-semibold">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
