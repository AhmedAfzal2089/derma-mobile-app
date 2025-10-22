import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProFusionHydraFacialScreen = () => {
  const treatments = [
    {
      title: "Signature + RF",
      price: "£150 per session",
      results: "Deep cleansing and hydration with RF tightening",
      duration: "4-6 weeks",
      sessions: "Package of 6 available (£750)",
      time: "40 minutes",
      downtime: "None",
    },
    {
      title: "Deluxe + RF",
      price: "£180 per session",
      results: "Enhanced results with custom booster and LED therapy",
      duration: "4-6 weeks",
      sessions: "Package of 6 available (£900)",
      time: "50 minutes",
      downtime: "None",
    },
    {
      title: "Platinum + RF",
      price: "£210 per session",
      results: "Advanced treatment with lymphatic drainage",
      duration: "4-6 weeks",
      sessions: "Package of 6 available (£1,050)",
      time: "70 minutes",
      downtime: "None",
    },
    {
      title: "Elite – Cellular Repair & Lift",
      price: "£250 per session",
      results: "Ultimate treatment with enhanced serums",
      duration: "4-6 weeks",
      sessions: "Package of 6 available (£1,250)",
      time: "75 minutes",
      downtime: "None",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="flex-col md:flex-row items-center justify-center px-5 py-10">
        {/* Left Content */}
        <View className="w-full md:w-1/2 mb-8 md:mb-0">
          <Text className="text-gray-500 text-sm font-medium tracking-wide mb-3">Advanced Skin Rejuvenation</Text>
          <Text className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
            ProFusion{"\n"}HydraFacial{"\n"}Treatment
          </Text>
          <Text className="text-gray-600 text-base leading-relaxed">
            Ultimate skin rejuvenation using state-of-the-art ProFusion devices that combine cutting-edge technology with clinical
            expertise.
          </Text>

          <TouchableOpacity className="mt-8 border border-black py-3 px-6 rounded-lg">
            <Text className="text-black font-semibold text-center">VIEW PRICES</Text>
          </TouchableOpacity>
        </View>

        {/* Right Image */}
        <View className="w-full md:w-1/2 items-center">
          <Image source={require("../../assets/pacakage/Pro-Fusion.jpg")} className="w-72 h-96 rounded-3xl" resizeMode="cover" />
        </View>
      </View>

      {/* What is Section */}
      <View className="px-5 py-10">
        <Text className="text-3xl font-bold text-gray-900 text-center mb-6">What is ProFusion HydraFacial?</Text>
        <Text className="text-gray-600 text-base leading-relaxed text-center mb-10">
          ProFusion HydraFacial represents the pinnacle of skin rejuvenation technology. Our state-of-the-art devices combine cutting-edge
          technology with clinical expertise, using specialized serums, creams, and boosters that target your unique skin concerns for
          remarkable results.
        </Text>

        <View className="flex-col md:flex-row justify-between">
          {/* Left */}
          <View className="mb-8 md:mb-0">
            <Text className="text-xl font-semibold text-gray-900 mb-3">Key Benefits:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Deep cleansing and hydration</Text>
              <Text className="text-gray-600">• Exfoliation and extraction without irritation</Text>
              <Text className="text-gray-600">• RF technology for tightening</Text>
              <Text className="text-gray-600">• Customizable for specific skin concerns</Text>
              <Text className="text-gray-600">• Immediate results with no downtime</Text>
            </View>
          </View>

          {/* Right */}
          <View>
            <Text className="text-xl font-semibold text-gray-900 mb-3">Why Choose Our ProFusion:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Latest technology with advanced RF</Text>
              <Text className="text-gray-600">• Performed by certified specialists</Text>
              <Text className="text-gray-600">• Personalized treatment plans</Text>
              <Text className="text-gray-600">• Medical-grade products and equipment</Text>
              <Text className="text-gray-600">• Luxurious experience with results</Text>
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

export default ProFusionHydraFacialScreen;
