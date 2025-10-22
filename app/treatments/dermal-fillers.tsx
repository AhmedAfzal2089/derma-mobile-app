import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function DermalFillersScreen() {
  const treatmentAreas = [
    {
      name: "Lip Enhancement",
      description: "Full, natural-looking lips with enhanced shape and definition",
      price: "£250",
      volume: "0.5–1.0 ml",

      href: "/menu/injectables/lip-fillers",
    },
    {
      name: "Cheek Contouring",
      description: "Restored volume and lifted contours for youthful appearance",
      price: "£250",
      volume: "0.5–1.0 ml",

      href: "/menu/injectables/cheek-fillers",
    },
    {
      name: "Tear Trough",
      description: "Brightened under-eye area, reduced hollows and tired appearance",
      price: "£450",
      volume: "Variable",

      href: "/menu/injectables/tear-trough-filler",
    },
    {
      name: "Non-Surgical Rhinoplasty",
      description: "Balanced nose contours without surgery",
      price: "£450",
      volume: "Variable",

      href: "/menu/injectables/non-surgical-rhinoplasty",
    },
    {
      name: "Russian Lip Technique",
      description: "Lifted, beautifully shaped lips with natural definition",
      price: "£350",
      volume: "Variable",

      href: "/menu/injectables/lip-fillers",
    },
  ];

  return (
    <ScrollView className="bg-white flex-1">
      {/* Hero Section */}
      <View className="px-6 py-12">
        <View className="flex-col md:flex-row items-center justify-between">
          <View className="flex-1 mb-8">
            <View className="flex-row items-center gap-3 mb-4 justify-center md:justify-start">
              <View className="w-12 h-px bg-gray-400" />
              <Text className="text-gray-600 text-sm font-medium">Advanced Dermal Filler Treatment</Text>
            </View>

            <Text className="text-4xl font-bold text-gray-900 leading-tight text-center md:text-left">
              Restore volume and{"\n"}enhance your natural{"\n"}beauty with precision
            </Text>

            <Text className="text-gray-600 text-lg leading-relaxed mt-6 text-center md:text-left">
              Discover the art of facial rejuvenation and contouring with expert dermal filler treatments for all facial areas at Derma
              Veritas.
            </Text>

            <TouchableOpacity className="mt-8 border-2 border-[#272728] py-4 px-8 bg-white">
              <Text className="text-sm font-bold uppercase text-[#272728] text-center">VIEW PRICES</Text>
            </TouchableOpacity>
          </View>

          <View className="rounded-3xl overflow-hidden bg-gray-200 aspect-[4/5] w-full max-w-md self-center">
            <Image source={require("../../assets/injectables/Dermal Filler Vertical.jpg")} className="w-full h-full" resizeMode="cover" />
          </View>
        </View>
      </View>

      {/* What are Dermal Fillers Section */}
      <View className="bg-[#f6f6f6] px-6 py-12">
        <View className="flex-col md:flex-row gap-8">
          <View className="flex-1 space-y-4">
            <Text className="text-sm text-gray-600 font-medium">Expert Facial Rejuvenation</Text>
            <Text className="text-4xl font-bold text-gray-900 mb-2">What are Dermal Fillers?</Text>

            <Text className="text-gray-600 leading-relaxed">
              Dermal fillers are non-surgical, minimally invasive treatments that add volume, smooth lines, and rejuvenate your appearance.
              They enhance lips, cheeks, chin, jawline, and under-eye areas with natural-looking results.
            </Text>
            <Text className="text-gray-600 leading-relaxed">
              Our expert physicians and specialists use advanced techniques to restore volume, enhance contours, and create facial balance.
            </Text>

            <Text className="text-lg font-semibold text-gray-900 mt-4">Why Choose Our Clinic:</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Expert physicians only</Text>
              <Text className="text-gray-600">• Industry-leading trainers</Text>
              <Text className="text-gray-600">• Personalized natural results</Text>
              <Text className="text-gray-600">• Safe with minimal downtime</Text>
            </View>
          </View>

          {/* Right Treatment Benefits Card */}
          <View className="flex-1 bg-white border border-gray-200 p-6 shadow">
            <Text className="text-xl font-bold text-gray-900 mb-6">Treatment Benefits</Text>

            {[
              { title: "Immediate Results", desc: "Visible improvement right after treatment" },
              { title: "Natural Enhancement", desc: "Maintain your unique facial features" },
              { title: "Minimal Downtime", desc: "Return to daily activities immediately" },
              { title: "Long-Lasting", desc: "Results last 6–12 months" },
            ].map((b, i) => (
              <View key={i} className="mb-4">
                <Text className="font-medium text-gray-900">{b.title}</Text>
                <Text className="text-sm text-gray-600">{b.desc}</Text>
              </View>
            ))}

            <TouchableOpacity className="bg-[#272728] py-3 mt-6">
              <Text className="text-white text-center font-bold uppercase text-sm">BOOK FREE CONSULTATION</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Treatment Areas Section */}
      <View className="bg-white px-6 py-12">
        <Text className="text-4xl font-bold text-gray-900 text-center mb-4">All Filler Treatment Areas</Text>
        <Text className="text-lg text-gray-600 text-center mb-10">
          Dermal filler treatments tailored to enhance your natural beauty and restore vitality.
        </Text>

        <View className="flex-row flex-wrap justify-center gap-6">
          {treatmentAreas.map((area, i) => (
            <View key={i} className="bg-white border border-gray-200 shadow w-80">
              <View className="p-4">
                <Text className="text-xl font-bold text-gray-900 mb-1">{area.name}</Text>
                <Text className="text-gray-600 mb-3">{area.description}</Text>

                <View className="flex-row justify-between items-center mb-3">
                  <Text className="text-2xl font-bold text-gray-900">{area.price}</Text>
                  <Text className="text-sm text-gray-600">({area.volume})</Text>
                </View>

                <TouchableOpacity className="border border-[#272728] py-2">
                  <Text className="text-[#272728] font-semibold text-center">LEARN MORE</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* About Dermal Fillers */}
      <View className="bg-white px-6 py-12 flex-col md:flex-row items-center gap-8">
        <Image
          source={require("../../assets/injectables/Dermal Filler Horizental.jpg")}
          className="w-full h-64 rounded-2xl"
          resizeMode="cover"
        />
        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-900 mb-2">About Dermal Fillers</Text>
          <Text className="text-gray-600 text-lg mb-3">
            Add volume, smooth lines, and refine contours with safe, effective hyaluronic acid fillers.
          </Text>
          <Text className="text-gray-600">• Immediate improvement</Text>
          <Text className="text-gray-600">• Lasts 6–12 months</Text>
          <Text className="text-gray-600">• Minimal downtime</Text>
        </View>
      </View>

      {/* Pricing Section */}
      <View className="bg-[#f6f6f6] px-6 py-12">
        <Text className="text-4xl font-bold text-gray-900 text-center mb-4">Our Pricing</Text>
        <Text className="text-gray-600 text-center mb-8">Reflecting the expertise and experience of our clinical specialists.</Text>

        <View className="flex-col md:flex-row gap-6 justify-center">
          {/* Regular Treatments */}
          <View className="border border-gray-200 bg-white p-6 shadow-md mb-6">
            <View className="flex-row justify-between mb-4">
              <Text className="text-xl font-semibold text-gray-900">Dermal Filler Treatments</Text>
              <TouchableOpacity className="border border-gray-900 px-3 py-1">
                <Text className="text-gray-900 text-sm font-medium">BOOK NOW</Text>
              </TouchableOpacity>
            </View>
            <View className="space-y-3">
              <Text className="text-gray-900 font-medium">Lip, Cheek, Chin — £250</Text>
              <Text className="text-gray-900 font-medium">Additional 1ml — £110</Text>
              <Text className="text-gray-900 font-medium">Russian Lip Technique — £350</Text>
            </View>
          </View>

          {/* Premium Treatments */}
          <View className="border border-gray-200 bg-white p-6 shadow-md">
            <View className="flex-row justify-between mb-4">
              <Text className="text-xl font-semibold text-gray-900">Premium Treatments</Text>
              <TouchableOpacity className="border border-gray-900 px-3 py-1">
                <Text className="text-gray-900 text-sm font-medium">BOOK NOW</Text>
              </TouchableOpacity>
            </View>
            <View className="space-y-3">
              <Text className="text-gray-900 font-medium">Jawline Sculpting — £450</Text>
              <Text className="text-gray-900 font-medium">Tear Trough — £450</Text>
              <Text className="text-gray-900 font-medium">Non-Surgical Rhinoplasty — £450</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
