import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const PolynucleotidesHairLossScreen = () => {
  const treatments = [
    {
      title: "Polynucleotides Hair Rejuvenation",
      price: "£250 per session",
      results: "Stimulates hair growth and strengthens follicles",
      duration: "Every 3-4 weeks",
      sessions: "Package of 4 available (£900)",
      time: "40 minutes",
      downtime: "Minimal",
    },
    {
      title: "Advanced Scalp Repair",
      price: "£300 per session",
      results: "Targets thinning areas and improves scalp health",
      duration: "Every 3-4 weeks",
      sessions: "Package of 4 available (£1,100)",
      time: "50 minutes",
      downtime: "Minimal",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="flex-col md:flex-row items-center justify-center px-5 py-10">
        {/* Left Content */}
        <View className="w-full md:w-1/2 mb-8 md:mb-0">
          <Text className="text-gray-500 text-sm font-medium tracking-wide mb-3">Hair Restoration Treatment</Text>
          <Text className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
            Polynucleotides{"\n"}for Hair{"\n"}Rejuvenation
          </Text>
          <Text className="text-gray-600 text-base leading-relaxed">
            Revitalize and stimulate natural hair regrowth using Polynucleotides — a breakthrough regenerative treatment that enhances scalp
            health and strengthens hair follicles.
          </Text>

          <TouchableOpacity className="mt-8 border border-black py-3 px-6 rounded-lg">
            <Text className="text-black font-semibold text-center">VIEW PRICES</Text>
          </TouchableOpacity>
        </View>

        {/* Right Image */}
        <View className="w-full md:w-1/2 items-center">
          <Image
            source={require("../../assets/injectables/Polynucleotide Hair Loss Horizental.jpg")}
            className="w-72 h-96 rounded-3xl"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* What is Section */}
      <View className="px-5 py-10">
        <Text className="text-3xl font-bold text-gray-900 text-center mb-6">What is Polynucleotides for Hair?</Text>
        <Text className="text-gray-600 text-base leading-relaxed text-center mb-10">
          Polynucleotides are naturally derived molecules that boost cell regeneration and improve scalp circulation. This treatment
          promotes thicker, healthier, and stronger hair while restoring vitality to the scalp.
        </Text>

        <View className="flex-col md:flex-row justify-between">
          {/* Left */}
          <View className="mb-8 md:mb-0">
            <Text className="text-xl font-semibold text-gray-900 mb-3">Key Benefits:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Stimulates natural hair growth</Text>
              <Text className="text-gray-600">• Strengthens weak hair follicles</Text>
              <Text className="text-gray-600">• Improves scalp hydration</Text>
              <Text className="text-gray-600">• Reduces hair thinning</Text>
              <Text className="text-gray-600">• Suitable for men and women</Text>
            </View>
          </View>

          {/* Right */}
          <View>
            <Text className="text-xl font-semibold text-gray-900 mb-3">Why Choose Our Clinic:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Expert-led regenerative treatments</Text>
              <Text className="text-gray-600">• Custom treatment protocols</Text>
              <Text className="text-gray-600">• Advanced sterile techniques</Text>
              <Text className="text-gray-600">• Clinically proven results</Text>
              <Text className="text-gray-600">• Minimal discomfort, no downtime</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Pricing Section */}
      <View className="bg-gray-100 px-5 py-12">
        <Text className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Pricing</Text>
        <View className="space-y-6">
          {treatments.map((item, index) => (
            <View key={index} className="bg-white border border-gray-200 rounded-xl p-5 shadow-md">
              <View className="flex-row justify-between items-center mb-3">
                <Text className="text-base font-semibold text-gray-900">{item.title}</Text>
                <Text className="text-base font-bold text-gray-900">{item.price}</Text>
              </View>

              <View className="space-y-1">
                <Text className="text-gray-600 text-sm">
                  <Text className="font-semibold text-gray-800">Visible Results:</Text> {item.results}
                </Text>
                <Text className="text-gray-600 text-sm">
                  <Text className="font-semibold text-gray-800">Duration:</Text> {item.duration}
                </Text>
                <Text className="text-gray-600 text-sm">
                  <Text className="font-semibold text-gray-800">Sessions:</Text> {item.sessions}
                </Text>
                <Text className="text-gray-600 text-sm">
                  <Text className="font-semibold text-gray-800">Procedure Time:</Text> {item.time}
                </Text>
                <Text className="text-gray-600 text-sm">
                  <Text className="font-semibold text-gray-800">Downtime:</Text> {item.downtime}
                </Text>
              </View>

              <Link href="/bookings" asChild>
                <TouchableOpacity className="mt-5 border border-gray-900 py-2 rounded-lg">
                  <Text className="text-center text-gray-900 font-medium">BOOK NOW</Text>
                </TouchableOpacity>
              </Link>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PolynucleotidesHairLossScreen;
