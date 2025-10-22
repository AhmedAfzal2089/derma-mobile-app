import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ExosomeTherapyScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="px-5 pt-12">
        <View className="flex items-center mb-4">
          <View className="w-12 h-px bg-gray-400" />
          <Text className="text-gray-600 text-sm font-medium mt-2">Advanced Regenerative Treatment</Text>
        </View>

        <Text className="text-4xl font-bold text-gray-900 leading-tight mb-4 text-center">
          Exosome Therapy {"\n"}for Cellular Regeneration
        </Text>

        <Text className="text-gray-600 text-base text-center leading-relaxed mb-6">
          Advanced regenerative treatment using nano-sized vesicles derived from stem cells and peptides to promote cell regeneration and
          rejuvenation.
        </Text>

        <TouchableOpacity className="px-5 py-3 border border-gray-800 rounded-md mb-6 w-fit self-center">
          <Text className="text-sm font-semibold text-gray-900 uppercase">View Prices</Text>
        </TouchableOpacity>

        <Image
          source={require("../../assets/wellness/Exosome Therapy Vertical.jpg")}
          className="w-full h-96 rounded-2xl"
          resizeMode="cover"
        />
      </View>

      {/* Info Cards Section */}
      <View className="px-5 py-10 bg-gray-50">
        <View className="bg-white border border-gray-200 p-6 rounded-xl">
          <View className="flex-row justify-between flex-wrap gap-y-6">
            <View className="w-[48%]">
              <Text className="text-gray-600 text-sm">Visible Results</Text>
              <Text className="text-lg font-light text-gray-900">Rejuvenated, firmer skin</Text>
              <Text className="text-gray-500 text-xs">Max results with 5 sessions</Text>
            </View>
            <View className="w-[48%]">
              <Text className="text-gray-600 text-sm">Results Last</Text>
              <Text className="text-lg font-light text-gray-900">Several Months</Text>
            </View>
            <View className="w-[48%]">
              <Text className="text-gray-600 text-sm">No. of Sessions</Text>
              <Text className="text-lg font-light text-gray-900">3–5</Text>
              <Text className="text-gray-500 text-xs">5 recommended for optimal results</Text>
            </View>
            <View className="w-[48%]">
              <Text className="text-gray-600 text-sm">Procedure Time</Text>
              <Text className="text-lg font-light text-gray-900">30–45 Minutes</Text>
            </View>
            <View className="w-[48%]">
              <Text className="text-gray-600 text-sm">Discomfort</Text>
              <Text className="text-lg font-light text-gray-900">Mild</Text>
            </View>
            <View className="w-[48%]">
              <Text className="text-gray-600 text-sm">Downtime</Text>
              <Text className="text-lg font-light text-gray-900">Minimal</Text>
            </View>
            <View className="w-[48%]">
              <Text className="text-gray-600 text-sm">Side Effects</Text>
              <Text className="text-lg font-light text-gray-900">Temporary redness or swelling</Text>
            </View>
            <View className="w-[48%]">
              <Text className="text-gray-600 text-sm">Pricing</Text>
              <Text className="text-lg font-light text-gray-900">From £500</Text>
            </View>
          </View>
        </View>
      </View>

      {/* What is Exosome Therapy */}
      <View className="px-5 py-10">
        <Text className="text-2xl font-bold text-gray-900 mb-4 text-center">What is Exosome Therapy?</Text>
        <Text className="text-gray-600 text-base leading-relaxed mb-6">
          Exosome Therapy uses nano-sized vesicles derived from stem cells and peptides to promote cell regeneration. Our advanced formula
          combines high molecular weight polynucleotides, synthetic exosomes, oligopeptides-20, acetyl decapeptide-3, and vegetable stem
          cells for optimal rejuvenation.
        </Text>

        <View className="flex-row flex-wrap justify-between">
          <View className="w-[48%] mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-2">Advanced Formula Includes:</Text>
            <Text className="text-gray-600">• Polynucleotides</Text>
            <Text className="text-gray-600">• Synthetic exosomes</Text>
            <Text className="text-gray-600">• Oligopeptides-20</Text>
            <Text className="text-gray-600">• Acetyl decapeptide-3</Text>
            <Text className="text-gray-600">• Vegetable stem cells</Text>
          </View>

          <View className="w-[48%]">
            <Text className="text-lg font-semibold text-gray-900 mb-2">Benefits Include:</Text>
            <Text className="text-gray-600">• Regenerates and repairs cells</Text>
            <Text className="text-gray-600">• Stimulates collagen production</Text>
            <Text className="text-gray-600">• Improves texture & elasticity</Text>
            <Text className="text-gray-600">• Reduces fine lines</Text>
            <Text className="text-gray-600">• Enhances radiance</Text>
          </View>
        </View>
      </View>

      {/* Before & After Section */}
      <View className="px-5 py-10">
        <Image
          source={require("../../assets/wellness/Exosome Therapy Horizental.jpg")}
          className="w-full h-64 rounded-2xl mb-6"
          resizeMode="cover"
        />
        <Text className="text-2xl font-bold text-gray-900 mb-3">About Exosome Therapy</Text>
        <Text className="text-gray-600 mb-3">
          Nano-vesicles deliver growth factors and signals for cellular repair and collagen stimulation.
        </Text>
        <Text className="text-gray-600">• 3–5 sessions recommended</Text>
        <Text className="text-gray-600">• Results last months</Text>
        <Text className="text-gray-600">• Minimal downtime</Text>
      </View>

      {/* Pricing Section */}
      <View className="px-5 py-10 bg-gray-50">
        <Text className="text-3xl font-bold text-gray-900 mb-6">Our Pricing</Text>

        <View className="border border-gray-200 bg-white rounded-xl p-6 mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-3">Exosome Therapy Packages</Text>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-700">3 Sessions</Text>
            <Text className="text-gray-900 font-bold">£500</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700">5 Sessions</Text>
            <Text className="text-gray-900 font-bold">£700</Text>
          </View>
          <View className="mt-4 p-3 bg-blue-50 rounded-lg">
            <Text className="text-blue-700 text-sm">Recommended: 5 sessions for optimal results</Text>
          </View>
          <Link href="/bookings" asChild>
            <TouchableOpacity className="mt-5 bg-gray-900 py-3 rounded-lg">
              <Text className="text-white font-semibold text-center">BOOK</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View className="border border-gray-200 bg-white rounded-xl p-6">
          <Text className="text-lg font-semibold text-gray-900 mb-3">Treatment Details</Text>
          <Text className="text-gray-600">• Visible results: Radiant skin</Text>
          <Text className="text-gray-600">• Duration: Results last months</Text>
          <Text className="text-gray-600">• Procedure Time: 30–45 min</Text>
          <Text className="text-gray-600">• Discomfort: Mild</Text>
          <Text className="text-gray-600">• Downtime: Minimal</Text>
          <Text className="text-gray-600">• Side Effects: Temporary redness or swelling</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExosomeTherapyScreen;
