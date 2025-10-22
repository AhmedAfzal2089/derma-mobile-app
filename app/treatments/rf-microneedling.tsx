import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function RFMicroneedlingScreen() {
  return (
    <ScrollView className="bg-white">
      {/* Hero Section */}
      <View className="px-4 pt-12">
        <View className="flex flex-col items-start">
          {/* Small Label */}
          <View className="flex flex-row items-center mb-4">
            <View className="w-12 h-px bg-gray-400 mr-3" />
            <Text className="text-gray-600 text-sm font-medium">Advanced Skin Rejuvenation</Text>
          </View>

          {/* Heading */}
          <Text className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            RF Microneedling for {"\n"}Skin Rejuvenation {"\n"}& Scar Reduction
          </Text>

          {/* Description */}
          <Text className="text-gray-600 text-base mb-6">
            RF Microneedling combines microneedling with radiofrequency energy to stimulate collagen production, tighten skin, reduce scars,
            and improve stretch marks for comprehensive skin rejuvenation.
          </Text>

          {/* View Prices Button */}
          <TouchableOpacity className="px-6 py-3 border border-gray-900 rounded-md mb-6">
            <Text className="text-sm font-semibold text-gray-900 uppercase">View Prices</Text>
          </TouchableOpacity>

          {/* Image */}
          <Image
            source={require("../../assets/skin_care/RF Microneedling Vertical.jpg")}
            className="w-full h-96 rounded-2xl mb-8"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Info Cards */}
      <View className="px-4 py-8 bg-gray-50">
        <View className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
          <View className="grid grid-cols-2 gap-6">
            <View>
              <Text className="text-gray-600 text-sm">Results Seen</Text>
              <Text className="text-lg font-medium text-gray-900">Within 2–6 weeks</Text>
              <Text className="text-gray-500 text-sm">Noticeable improvement in texture and firmness</Text>
            </View>
            <View>
              <Text className="text-gray-600 text-sm">Results Last</Text>
              <Text className="text-lg font-medium text-gray-900">Long-lasting</Text>
              <Text className="text-gray-500 text-sm">With continued collagen remodeling</Text>
            </View>
            <View>
              <Text className="text-gray-600 text-sm">No. of Sessions</Text>
              <Text className="text-lg font-medium text-gray-900">1–3 Treatments</Text>
              <Text className="text-gray-500 text-sm">Depending on area and concerns</Text>
            </View>
            <View>
              <Text className="text-gray-600 text-sm">Procedure Time</Text>
              <Text className="text-lg font-medium text-gray-900">30–60 Minutes</Text>
              <Text className="text-gray-500 text-sm">Depending on area</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Treatment Information */}
      <View className="px-4 py-12 bg-white">
        <Text className="text-3xl font-bold text-gray-900 mb-6 text-center">What is RF Microneedling?</Text>
        <Text className="text-gray-600 text-base mb-10 text-center leading-relaxed">
          RF Microneedling is an advanced treatment that combines microneedling with radiofrequency energy to create controlled
          micro-injuries while delivering heat into deeper layers of the skin. This stimulates collagen and elastin production for firmer,
          smoother, and more youthful skin.
        </Text>

        <View className="flex flex-col gap-10">
          {/* Left Column */}
          <View>
            <Text className="text-xl font-semibold text-gray-900 mb-3">Benefits Include:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Stimulates collagen and elastin</Text>
              <Text className="text-gray-600">• Improves texture, firmness, elasticity</Text>
              <Text className="text-gray-600">• Reduces scars and stretch marks</Text>
              <Text className="text-gray-600">• Minimizes pores and fine lines</Text>
              <Text className="text-gray-600">• Enhances skin tone and glow</Text>
            </View>
          </View>

          {/* Right Column */}
          <View>
            <Text className="text-xl font-semibold text-gray-900 mb-3">Treatment Areas:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Full Face Rejuvenation</Text>
              <Text className="text-gray-600">• Acne & Surgical Scars</Text>
              <Text className="text-gray-600">• Stretch Marks</Text>
              <Text className="text-gray-600">• Neck & Décolletage</Text>
              <Text className="text-gray-600">• Hands for Age-related Concerns</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Before & After */}
      <View className="px-4 py-12 bg-white">
        <View className="rounded-2xl overflow-hidden mb-6">
          <Image
            source={require("../../assets/skin_care/RF Microneeling Horizental.jpg")}
            className="w-full h-72 rounded-2xl"
            resizeMode="cover"
          />
        </View>
        <Text className="text-2xl font-bold text-gray-900 mb-2">About RF Microneedling</Text>
        <Text className="text-gray-600 mb-4">
          Combines microneedling and RF energy for collagen stimulation, tightening, and scar reduction.
        </Text>
        <Text className="text-gray-600">• Results in 2–6 weeks; continued improvement</Text>
        <Text className="text-gray-600">• Long-lasting collagen remodeling</Text>
        <Text className="text-gray-600">• 30–60 minutes; 1–2 days downtime</Text>
      </View>

      {/* Pricing Section */}
      <View className="px-4 py-12 bg-gray-50">
        <Text className="text-3xl font-bold text-gray-900 mb-8">Our Pricing</Text>

        {/* Card 1 */}
        <View className="bg-white border border-gray-200 p-6 rounded-xl mb-6 shadow-sm">
          <View className="flex flex-row justify-between items-center mb-4">
            <Text className="text-base font-semibold text-gray-900">RF Microneedling Treatments</Text>
            <TouchableOpacity className="px-4 py-2 border border-gray-900 rounded-lg">
              <Text className="text-sm font-medium text-gray-900">Book</Text>
            </TouchableOpacity>
          </View>

          <View className="space-y-3">
            <View className="flex flex-row justify-between">
              <Text className="text-gray-700">Single Treatment – Full Face</Text>
              <Text className="text-gray-900 font-bold">PKR 180,000</Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text className="text-gray-700">Single Treatment – Scars & Stretch Marks (One Area)</Text>
              <Text className="text-gray-900 font-bold">PKR 140,000</Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text className="text-gray-700">3 Sessions – Full Face</Text>
              <Text className="text-gray-900 font-bold">PKR 400,000</Text>
            </View>
          </View>
        </View>

        {/* Card 2 */}
        <View className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
          <View className="flex flex-row justify-between items-center mb-4">
            <Text className="text-base font-semibold text-gray-900">Additional Options</Text>
            <TouchableOpacity className="px-4 py-2 border border-gray-900 rounded-lg">
              <Text className="text-sm font-medium text-gray-900">Book</Text>
            </TouchableOpacity>
          </View>

          <View className="space-y-3">
            <View>
              <Text className="text-gray-900 font-medium mb-1">Combination Treatments</Text>
              <Text className="text-gray-600">Consultation Required</Text>
            </View>
            <View>
              <Text className="text-gray-900 font-medium mb-1">Custom Treatment Plan</Text>
              <Text className="text-gray-600">Consultation Required</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
