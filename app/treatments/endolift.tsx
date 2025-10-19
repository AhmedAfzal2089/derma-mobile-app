import React, { useRef } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

type CardData = {
  heading: string;
  value: string;
  description?: string;
};

export default function EndoliftScreen({ navigation }: any) {
  const pricingSectionRef = useRef<any>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  const cardData: CardData[] = [
    {
      heading: "Results Seen",
      value: "Immediate lifting & contouring",
      description: "Full results over 6‑10 months",
    },
    {
      heading: "Results Last",
      value: "Long‑lasting",
      description: "With progressive improvement",
    },
    {
      heading: "No. of Sessions",
      value: "1‑2 Treatments",
      description: "Depending on area and desired results",
    },
    {
      heading: "Procedure Time",
      value: "60 Minutes",
      description: "Depending on area",
    },
    {
      heading: "Pain",
      value: "Mild",
      description: "Local anaesthesia applied when necessary",
    },
    {
      heading: "Downtime",
      value: "Minimal",
      description: "Resume activities within 24‑48 hours",
    },
    {
      heading: "Side Effects",
      value: "Temporary redness, mild swelling",
    },
    {
      heading: "Our Pricing",
      value: "From £800",
      description: "View all",
    },
  ];

  return (
    <ScrollView ref={scrollViewRef} className="flex-1 bg-white" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Hero Section */}
      <View className="bg-white px-6 pt-12 pb-6">
        <Text className="text-sm text-gray-500 font-medium mb-3">Non‑Surgical Face Lift</Text>

        <Text className="text-3xl font-bold text-gray-900 leading-tight mb-4">
          Endolift® Laser{"\n"}Non‑Surgical Face Lift{"\n"}& Body Contouring
        </Text>

        <Text className="text-base text-gray-600 leading-relaxed mb-6">
          Achieve a non‑surgical facelift, body contouring, and fat reduction with Endolift®, an exclusive fiber laser technology that
          delivers precise lifting, tightening, and rejuvenation without surgery.
        </Text>

        <TouchableOpacity className="mb-10 px-6 py-3 border border-gray-800 rounded-md self-start">
          <Text className="text-sm font-semibold text-gray-900 uppercase">View Prices</Text>
        </TouchableOpacity>

        <Image
          source={require("../../assets/skin_care/Endolift Vertical.jpg")}
          className="w-full h-96 rounded-xl bg-gray-200"
          resizeMode="cover"
        />
      </View>

      {/* Facts / Info Cards Section */}
      <View className="py-12 bg-gray-50 px-4">
        <View className="w-full bg-white border border-gray-200 p-6 shadow-lg rounded-xl">
          <View className="flex flex-wrap flex-row justify-between">
            {cardData.map((item, idx) => (
              <View key={idx} className="w-1/2 px-2 mb-6">
                <Text className="text-gray-600 text-sm font-light mb-2">{item.heading}</Text>
                <Text className="text-lg font-light text-gray-900 mb-1">{item.value}</Text>
                {item.description && <Text className="text-gray-500 text-sm font-light">{item.description}</Text>}
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* What is Section */}
      <View className="py-16 px-4 bg-white">
        <Text className="text-3xl font-bold text-gray-900 mb-6">What is Endolift®?</Text>
        <Text className="text-gray-600 text-base leading-relaxed mb-8">
          Endolift® is an exclusive fiber laser technology that delivers precise lifting, tightening, and rejuvenation. This cutting‑edge
          treatment targets deep tissue and fat layers to stimulate collagen and elastin production, giving your skin a firmer, smoother,
          younger appearance without surgery.
        </Text>
        <View className="flex flex-col gap-8">
          <View className="space-y-2">
            <Text className="text-xl font-semibold text-gray-900">Benefits Include:</Text>
            <Text className="text-gray-600">• Break down localized fat deposits and promote natural fat dissolving</Text>
            <Text className="text-gray-600">• Tighten and lift sagging skin by stimulating collagen and elastin production</Text>
            <Text className="text-gray-600">• Reduce fine lines and contour face and body</Text>
            <Text className="text-gray-600">• Achieve non‑surgical facelift and body shaping</Text>
            <Text className="text-gray-600">• Minimal downtime with long‑lasting results</Text>
          </View>
          <View className="space-y-2">
            <Text className="text-xl font-semibold text-gray-900">Treatment Areas:</Text>
            <Text className="text-gray-600">• Full Face non‑surgical facelift</Text>
            <Text className="text-gray-600">• Under Eyes (Malar Bags)</Text>
            <Text className="text-gray-600">• Upper Arms contouring</Text>
            <Text className="text-gray-600">• Abdomen and Tummy area</Text>
            <Text className="text-gray-600">• Thighs and other body areas</Text>
          </View>
        </View>
      </View>

      {/* Before & After Section */}
      <View className="py-16 px-4 bg-white">
        <Image
          source={require("../../assets/skin_care/Endolift Horizental.jpg")}
          className="w-full h-64 rounded-xl mb-4"
          resizeMode="cover"
        />
        <Text className="text-2xl font-bold text-gray-900 mb-2">About Endolift</Text>
        <Text className="text-base text-gray-600 mb-2">
          Fiber laser technology for lifting, tightening, and contouring with collagen stimulation.
        </Text>
        <Text className="text-base text-gray-600">• Immediate lift; full results over 6–10 months</Text>
        <Text className="text-base text-gray-600">• Long‑lasting improvements</Text>
        <Text className="text-base text-gray-600">• 60 minutes, minimal downtime</Text>
      </View>

      {/* Pricing Section */}
      <View ref={pricingSectionRef} className="py-12 px-4 bg-[#f6f6f6]">
        <View className="w-full">
          <Text className="text-sm text-gray-600 font-medium mb-2">Endolift® Cost</Text>
          <Text className="text-3xl font-bold text-gray-900 mb-6">Our Pricing</Text>

          <Text className="text-base text-gray-600 mb-4 leading-relaxed">
            All treatments are performed exclusively by our expert physicians and clinical specialists who are industry‑leading
            professionals. Our pricing reflects the expertise and premium service you receive.
          </Text>
          <Text className="text-base text-gray-600 mb-6 leading-relaxed">
            If you would like to discuss any of our treatments, please feel free to get in touch.
          </Text>

          <View className="border border-gray-200 p-6 bg-white shadow-lg rounded-xl">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-base font-semibold text-gray-900">Endolift® Treatments</Text>
              <TouchableOpacity className="px-4 py-1 border border-gray-900 rounded-lg">
                <Text className="text-sm font-medium text-gray-900">BOOK</Text>
              </TouchableOpacity>
            </View>

            <View className="divide-y divide-gray-200">
              {[
                { label: "One Area", price: "£800" },
                { label: "Full Face", price: "£1,600" },
                { label: "Upper Face / Malar Bags", price: "£1,500" },
                { label: "Upper Arms", price: "£1,800" },
                { label: "Abdomen / Tummy", price: "£2,000" },
                { label: "Thighs / Other Body Areas", price: "£2,000" },
              ].map((item, idx) => (
                <View key={idx} className="flex-row justify-between items-center py-3">
                  <Text className="text-gray-700">{item.label}:</Text>
                  <Text className="text-lg font-bold text-gray-900">{item.price}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
