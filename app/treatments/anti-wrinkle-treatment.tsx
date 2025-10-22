import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const AntiWrinkleTreatmentScreen = () => {
  const treatments = [
    {
      title: "1 Area",
      price: "£190",
      results: "Targets fine lines and wrinkles on one facial area",
      duration: "3–4 months",
      sessions: "Single session",
      time: "30 minutes",
      downtime: "Minimal to none",
    },
    {
      title: "2 Areas",
      price: "£230",
      results: "Smooths wrinkles across two areas of the face",
      duration: "3–4 months",
      sessions: "Single session",
      time: "35 minutes",
      downtime: "Minimal to none",
    },
    {
      title: "3 Areas",
      price: "£260",
      results: "Comprehensive wrinkle reduction across multiple facial zones",
      duration: "3–4 months",
      sessions: "Single session",
      time: "40 minutes",
      downtime: "Minimal to none",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="flex-col md:flex-row items-center justify-center px-5 py-10">
        {/* Left Content */}
        <View className="w-full md:w-1/2 mb-8 md:mb-0">
          <Text className="text-gray-500 text-sm font-medium tracking-wide mb-3">Non-Surgical Rejuvenation</Text>
          <Text className="text-4xl font-bold text-gray-900 mb-5 leading-tight">Anti-Wrinkle{"\n"}Treatment</Text>
          <Text className="text-gray-600 text-base leading-relaxed">
            Restore your youthful glow with precision-targeted anti-wrinkle injections that smooth expression lines and fine wrinkles for a
            refreshed, natural look.
          </Text>

          <TouchableOpacity className="mt-8 border border-black py-3 px-6 rounded-lg">
            <Text className="text-black font-semibold text-center">VIEW PRICES</Text>
          </TouchableOpacity>
        </View>

        {/* Right Image */}
        <View className="w-full md:w-1/2 items-center">
          <Image
            source={require("../../assets/injectables/Anti Wrinkle Vertical.jpg")}
            className="w-72 h-96 rounded-3xl"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* What is Section */}
      <View className="px-5 py-10">
        <Text className="text-3xl font-bold text-gray-900 text-center mb-6">What is Anti-Wrinkle Treatment?</Text>
        <Text className="text-gray-600 text-base leading-relaxed text-center mb-10">
          Anti-wrinkle injections are a non-invasive cosmetic treatment designed to relax targeted facial muscles, reducing the appearance
          of wrinkles and preventing new lines from forming. The treatment delivers a youthful, rejuvenated, and refreshed look without
          surgery or downtime.
        </Text>

        <View className="flex-col md:flex-row justify-between">
          {/* Left */}
          <View className="mb-8 md:mb-0">
            <Text className="text-xl font-semibold text-gray-900 mb-3">Key Benefits:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Reduces fine lines & wrinkles</Text>
              <Text className="text-gray-600">• Quick, safe, and non-surgical</Text>
              <Text className="text-gray-600">• Natural, refreshed results</Text>
              <Text className="text-gray-600">• No downtime or recovery period</Text>
              <Text className="text-gray-600">• Prevents new wrinkles from forming</Text>
            </View>
          </View>

          {/* Right */}
          <View>
            <Text className="text-xl font-semibold text-gray-900 mb-3">Why Choose Our Clinic:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Performed by experienced medical practitioners</Text>
              <Text className="text-gray-600">• Tailored approach for your facial anatomy</Text>
              <Text className="text-gray-600">• Medical-grade products for safe, lasting results</Text>
              <Text className="text-gray-600">• Focus on natural-looking enhancements</Text>
              <Text className="text-gray-600">• Trusted by hundreds of satisfied clients</Text>
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

export default AntiWrinkleTreatmentScreen;
