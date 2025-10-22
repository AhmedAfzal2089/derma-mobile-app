import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SkinfillBacioScreen() {
  const cardData = [
    { heading: "Visible Results", value: "Immediate smoother, plumper lips", icon: "eye" },
    { heading: "Results Last", value: "6–12 Months", icon: "check-circle" },
    { heading: "No. of Sessions", value: "3 Sessions Recommended", icon: "rotate-ccw" },
    { heading: "Procedure Time", value: "15–30 Minutes", icon: "clock" },
    { heading: "Discomfort", value: "Mild", icon: "frown" },
    { heading: "Downtime", value: "Minimal", icon: "trending-down" },
    { heading: "Side Effects", value: "Temporary redness, slight swelling or bruising", icon: "alert-triangle" },
    { heading: "Our Pricing", value: "£230 Per Session", icon: "pound-sign" },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="px-6 pt-16 pb-10">
        <View className="flex-col md:flex-row items-center justify-between">
          {/* Left */}
          <View className="flex-1">
            <View className="flex-row items-center justify-center md:justify-start gap-3 mb-6">
              <View className="w-12 h-px bg-gray-400" />
              <Text className="text-gray-600 text-sm font-medium tracking-wide">Premium Lip Enhancement</Text>
            </View>

            <Text className="text-4xl font-bold text-gray-900 leading-tight text-center md:text-left">
              Skinfill™ Bacio for {"\n"}Hydrated, Natural {"\n"}Looking Lips
            </Text>

            <Text className="text-gray-600 text-lg leading-relaxed mt-6 text-center md:text-left">
              Achieve softer, fuller lips with our professional lip booster treatment featuring Vitamin B12 and non-crosslinked hyaluronic
              acid.
            </Text>

            <View className="mt-10 flex-row justify-center md:justify-start">
                <TouchableOpacity className="px-8 py-4 rounded-lg border-2 border-black">
                  <Text className="text-sm font-bold uppercase text-black">View Prices</Text>
                </TouchableOpacity>
            </View>
          </View>

          {/* Right */}
          <View className="mt-10 md:mt-0 flex-1 items-center">
            <Image
              source={require("../../assets/injectables/Skinfill Bacio Vertical.jpg")}
              className="w-72 h-96 rounded-3xl"
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      {/* Highlights */}
      <View className="py-10 bg-gray-50">
        <View className="mx-5 bg-white border border-gray-200 p-6 rounded-2xl">
          <View className="flex flex-wrap flex-row justify-between">
            {cardData.map((card, index) => (
              <View key={index} className="w-1/2 md:w-1/4 mb-6 pr-4">
                <View className="flex-row items-center mb-2">
                  <Feather name={card.icon as any} size={18} color="#4b5563" />
                  <Text className="ml-2 text-gray-600 text-sm">{card.heading}</Text>
                </View>
                <Text className="text-gray-900 text-base">{card.value}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Information Section */}
      <View className="py-16 px-6 bg-white">
        <Text className="text-3xl font-bold text-gray-900 text-center mb-6">What is Skinfill™ Bacio?</Text>
        <Text className="text-gray-600 text-lg text-center leading-relaxed mb-12">
          Skinfill™ Bacio is a professional lip booster designed to hydrate, refine, and naturally enhance lip volume. With Vitamin B12 and
          non-crosslinked hyaluronic acid, it delivers soft, plump lips while keeping a natural look.
        </Text>

        <View className="flex-col md:flex-row gap-10">
          {/* Left Column */}
          <View className="flex-1 space-y-6">
            <Text className="text-xl font-semibold text-gray-900">Key Ingredients:</Text>

            <View className="flex-row items-start gap-3">
              <Feather name="check-circle" size={20} color="#22c55e" />
              <Text className="text-gray-600 flex-1">
                <Text className="font-semibold">Hyaluronic Acid (HA)</Text> – Multiphasic formula for deep hydration, subtle volume, and lip
                tissue restoration
              </Text>
            </View>

            <View className="flex-row items-start gap-3">
              <Feather name="check-circle" size={20} color="#22c55e" />
              <Text className="text-gray-600 flex-1">
                <Text className="font-semibold">Vitamin B12</Text> – Boosts collagen and elastin, improving lip firmness, smoothness, and
                reducing early signs of aging
              </Text>
            </View>

            <Text className="text-xl font-semibold text-gray-900 mt-6">Benefits:</Text>
            {[
              "Intense hydration for softer, fuller lips",
              "Subtle, natural volume and contour",
              "Smoother lip texture and definition",
              "Supports cell renewal and elasticity",
            ].map((item, i) => (
              <View key={i} className="flex-row items-start gap-3">
                <View className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <Text className="text-gray-600 flex-1">{item}</Text>
              </View>
            ))}
          </View>

          {/* Right Column */}
          <View className="flex-1 space-y-6 mt-10 md:mt-0">
            <Text className="text-xl font-semibold text-gray-900">Treatment Protocol:</Text>
            <Text className="text-gray-600">Recommended: 3 sessions spaced 2–4 weeks apart for optimal results.</Text>

            <Text className="text-xl font-semibold text-gray-900 mt-6">Results & Duration:</Text>
            {[
              "Immediate effect: Lips feel smoother and plumper right after treatment",
              "Long-lasting: Results last 6–12 months, depending on the individual",
            ].map((item, i) => (
              <View key={i} className="flex-row items-start gap-3">
                <View className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <Text className="text-gray-600 flex-1">{item}</Text>
              </View>
            ))}

            <Text className="text-xl font-semibold text-gray-900 mt-6">Recovery:</Text>
            {["Minimal downtime", "Temporary redness, swelling, or bruising may occur but usually fades within days"].map((item, i) => (
              <View key={i} className="flex-row items-start gap-3">
                <View className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <Text className="text-gray-600 flex-1">{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* About Section */}
      <View className="py-16 px-6 bg-white">
        <View className="flex-col md:flex-row items-center gap-8">
          <Image
            source={require("../../assets/injectables/Skinfill Bacio Horizental.jpg")}
            className="w-full h-80 rounded-2xl"
            resizeMode="cover"
          />
          <View className="mt-6 md:mt-0 flex-1 space-y-3">
            <Text className="text-2xl font-bold text-gray-900">About Skinfill™ Bacio</Text>
            <Text className="text-gray-600 text-lg leading-relaxed">
              Professional lip booster with non-crosslinked HA and Vitamin B12 for hydrated, naturally fuller lips.
            </Text>
            <Text className="text-gray-600">• Immediate smoothing and hydration</Text>
            <Text className="text-gray-600">• Lasts 6–12 months</Text>
            <Text className="text-gray-600">• 15–30 minutes, minimal downtime</Text>
          </View>
        </View>
      </View>

      {/* Pricing Section */}
      <View className="py-20 px-6 bg-gray-100">
        <View className="flex-col md:flex-row gap-8">
          {/* Left */}
          <View className="flex-1 space-y-4">
            <Text className="text-sm text-gray-600 font-medium">Skinfill™ Bacio Treatment Cost</Text>
            <Text className="text-4xl font-bold text-gray-900">Our Pricing</Text>
            <Text className="text-gray-600 leading-relaxed">
              All treatments are performed exclusively by our expert physicians and clinical pharmacy leads who are industry-leading
              trainers. Our pricing reflects the expertise and premium service you receive.
            </Text>
          </View>

          {/* Right */}
          <View className="flex-1 mt-8 md:mt-0">
            <View className="border border-gray-200 p-6 bg-white rounded-xl">
              <View className="flex-row justify-between items-center mb-6">
                <Text className="text-base font-semibold text-gray-900">Skinfill™ Bacio Lip Enhancement</Text>
                <Link href="/bookings" asChild>
                  <TouchableOpacity className="px-4 py-1 border border-gray-900 rounded-lg">
                    <Text className="text-sm font-medium text-gray-900">BOOK</Text>
                  </TouchableOpacity>
                </Link>
              </View>

              <View>
                <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
                  <Text className="text-gray-700">Single Session:</Text>
                  <Text className="text-lg font-bold text-gray-900">£230</Text>
                </View>
                <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
                  <Text className="text-gray-700">Course of 3 Sessions:</Text>
                  <Text className="text-lg font-bold text-gray-900">£600</Text>
                </View>
                <Text className="text-sm text-gray-700 mt-3">(Save £90 with course booking)</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
