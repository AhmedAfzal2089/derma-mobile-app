import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProfhiloSkinBoosterScreen = () => {
  const treatments = [
    {
      title: "Face Rejuvenation",
      price: "£250 per session",
      results: "Hydrates and revitalizes facial skin for a youthful glow",
      duration: "4-6 weeks",
      sessions: "Package of 2 available (£450)",
      time: "30 minutes",
      downtime: "None",
    },
    {
      title: "Neck Treatment",
      price: "£250 per session",
      results: "Smooths and tightens the neck area, reducing fine lines",
      duration: "4-6 weeks",
      sessions: "Package of 2 available (£450)",
      time: "30 minutes",
      downtime: "None",
    },
    {
      title: "Hands Treatment",
      price: "£250 per session",
      results: "Restores hydration and plumpness to tired-looking hands",
      duration: "4-6 weeks",
      sessions: "Package of 2 available (£450)",
      time: "30 minutes",
      downtime: "None",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="flex-col md:flex-row items-center justify-center px-5 py-10">
        {/* Left Content */}
        <View className="w-full md:w-1/2 mb-8 md:mb-0">
          <Text className="text-gray-500 text-sm font-medium tracking-wide mb-3">Advanced Skin Hydration</Text>
          <Text className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
            Profhilo{"\n"}Skin Booster{"\n"}Treatment
          </Text>
          <Text className="text-gray-600 text-base leading-relaxed">
            Profhilo is an advanced injectable hyaluronic acid treatment that deeply hydrates, tightens, and rejuvenates the skin to restore
            firmness and radiance naturally.
          </Text>

          <TouchableOpacity className="mt-8 border border-black py-3 px-6 rounded-lg">
            <Text className="text-black font-semibold text-center">VIEW PRICES</Text>
          </TouchableOpacity>
        </View>

        {/* Right Image */}
        <View className="w-full md:w-1/2 items-center">
          <Image source={require("../../assets/injectables/Profhilo Veritcal.jpg")} className="w-72 h-96 rounded-3xl" resizeMode="cover" />
        </View>
      </View>

      {/* What is Section */}
      <View className="px-5 py-10">
        <Text className="text-3xl font-bold text-gray-900 text-center mb-6">What is Profhilo Skin Booster?</Text>
        <Text className="text-gray-600 text-base leading-relaxed text-center mb-10">
          Profhilo is an innovative injectable treatment formulated with the highest concentration of hyaluronic acid to deeply hydrate and
          stimulate collagen production. It improves skin elasticity, smoothness, and overall tone for a natural, youthful glow.
        </Text>

        <View className="flex-col md:flex-row justify-between">
          {/* Left */}
          <View className="mb-8 md:mb-0">
            <Text className="text-xl font-semibold text-gray-900 mb-3">Key Benefits:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Deep skin hydration</Text>
              <Text className="text-gray-600">• Improves elasticity and texture</Text>
              <Text className="text-gray-600">• Stimulates collagen and elastin</Text>
              <Text className="text-gray-600">• Enhances natural glow</Text>
              <Text className="text-gray-600">• Minimal downtime and discomfort</Text>
            </View>
          </View>

          {/* Right */}
          <View>
            <Text className="text-xl font-semibold text-gray-900 mb-3">Why Choose Our Profhilo:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Performed by expert aesthetic doctors</Text>
              <Text className="text-gray-600">• Authentic, high-quality Profhilo products</Text>
              <Text className="text-gray-600">• Natural-looking, long-lasting results</Text>
              <Text className="text-gray-600">• Professional consultation and care</Text>
              <Text className="text-gray-600">• Comfortable and safe procedure</Text>
            </View>
          </View>
        </View>
      </View>

      {/* About Section */}
      <View className="px-5 py-10 bg-gray-50">
        <View className="flex-col md:flex-row items-center gap-8">
          <Image
            source={require("../../assets/injectables/Profhilo Horizental.jpg")}
            className="w-full h-64 rounded-2xl mb-6"
            resizeMode="cover"
          />
          <View className="space-y-3">
            <Text className="text-2xl font-bold text-gray-900">About Profhilo Treatment</Text>
            <Text className="text-gray-600 text-base leading-relaxed">
              Profhilo uses hyaluronic acid to deeply nourish skin cells and restore firmness beneath the surface. It’s ideal for
              individuals experiencing dullness, sagging, or fine lines due to skin aging or dehydration.
            </Text>
            <View className="space-y-1">
              <Text className="text-gray-600">• Non-surgical rejuvenation</Text>
              <Text className="text-gray-600">• Stimulates collagen and elastin</Text>
              <Text className="text-gray-600">• Visible improvement after two sessions</Text>
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

export default ProfhiloSkinBoosterScreen;
