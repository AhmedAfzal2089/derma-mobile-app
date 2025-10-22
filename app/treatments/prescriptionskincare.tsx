// app/prescription-skincare.tsx
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function PrescriptionSkincareScreen() {
  const cards = [
    {
      title: "Targeted Results",
      desc: "Clinically proven to treat specific skin concerns",
      icon: "check-circle",
    },
    {
      title: "Treatment Duration",
      desc: "Typically 3–6 months",
      icon: "clock",
    },
    {
      title: "No. of Products",
      desc: "Customized regimen",
      icon: "check-circle",
    },
    {
      title: "Application Time",
      desc: "Integrated into daily routine",
      icon: "clock",
    },
    {
      title: "Skin Sensitivity",
      desc: "Managed through formulation",
      icon: "alert-triangle",
    },
    {
      title: "Monitoring",
      desc: "Regular follow-ups",
      icon: "check-circle",
    },
    {
      title: "Side Effects",
      desc: "Minimal with proper guidance",
      icon: "alert-triangle",
    },
    {
      title: "Our Pricing",
      desc: "From £60",
      icon: "dollar-sign",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
      {/* HERO SECTION */}
      <View className="px-5 py-8">
        <View>
          <Text className="text-gray-600 text-sm mb-2">Medical-Grade Skincare</Text>
          <Text className="text-3xl font-bold text-gray-900 leading-tight">
            Prescription Skincare{"\n"}Treatments for{"\n"}Healthier Skin
          </Text>
          <Text className="text-gray-600 mt-3 text-base leading-relaxed">
            Clinically guided therapies tailored to your skin’s unique needs for treating acne, hyperpigmentation, sensitivity, and more.
          </Text>

          <TouchableOpacity className="border border-gray-900 rounded-xl py-3 px-5 mt-5 w-40 items-center">
            <Text className="text-gray-900 font-semibold tracking-widest text-xs">VIEW PRICES</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-6">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1556228720-195a6…wfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            }}
            className="w-full h-64 rounded-2xl"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* INFO CARDS */}
      <View className="px-5 py-2 flex-row flex-wrap justify-between">
        {cards.map((item, i) => (
          <View key={i} className="w-[48%] bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-100">
            <View className="flex-row items-center mb-2">
              <Feather name={item.icon as any} size={18} color="#333" />
              <Text className="text-gray-900 font-semibold ml-2 text-sm">{item.title}</Text>
            </View>
            <Text className="text-gray-600 text-sm leading-snug">{item.desc}</Text>
          </View>
        ))}
      </View>

      {/* DESCRIPTION */}
      <View className="px-5 py-8">
        <Text className="text-xl font-bold text-gray-900 mb-3">What are Prescription Skincare Treatments?</Text>
        <Text className="text-gray-600 leading-relaxed">
          Prescription skincare treatments are clinically guided therapies designed to target various skin concerns such as acne,
          hyperpigmentation, and sensitivity. These are prescribed only after a consultation to ensure safety and tailored effectiveness.
        </Text>

        {/* Benefits */}
        <View className="mt-6">
          <Text className="text-lg font-semibold text-gray-900 mb-3">Benefits</Text>
          <View className="space-y-2">
            {[
              "Improves acne-prone skin",
              "Reduces dark spots and pigmentation",
              "Calms sensitive skin",
              "Personalized solutions beyond OTC products",
            ].map((b, i) => (
              <View key={i} className="flex-row items-center space-x-2">
                <Feather name="check-circle" size={18} color="#22c55e" />
                <Text className="text-gray-700 text-sm">{b}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* IMAGE INFO SECTION */}
      <View className="px-5 pb-10">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1556228720-195a6…wfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          }}
          className="w-full h-64 rounded-2xl mb-5"
          resizeMode="cover"
        />
        <Text className="text-lg font-semibold text-gray-900 mb-2">About Prescription Skincare Treatments</Text>
        <Text className="text-gray-600 leading-relaxed mb-3">
          Clinically guided therapies tailored to target specific skin concerns such as acne, pigmentation, and sensitivity. These
          formulations are medical-grade and deliver effective, long-term results.
        </Text>
        <Text className="text-gray-700 text-sm leading-6">
          • Higher concentrations of active ingredients{"\n"}• Results in 4–8 weeks{"\n"}• Personalized treatment plans{"\n"}• Medical-grade
          formulations
        </Text>
      </View>

      {/* CTA */}
      <View className="px-5 mb-8">
        <Link href="/bookings" asChild>
          <TouchableOpacity className="bg-black rounded-xl py-4 items-center">
            <Text className="text-white font-semibold text-base">BOOK NOW</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
