import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const PrescriptionHairTreatmentsScreen = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are prescription hair treatments?",
      answer:
        "Prescription Hair Treatments are clinically tailored therapies designed to support hair growth, scalp health, and long-term maintenance. They are prescribed after consultation with our clinical pharmacist or doctor to ensure safety and effectiveness.",
    },
    {
      question: "How long until I see results?",
      answer:
        "Most patients see gradual improvement in hair thickness, volume, and strength within 3–6 months of consistent treatment and supervision.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "As medically supervised treatments, side effects are rare and carefully monitored. Our clinical team will discuss all details during your consultation.",
    },
    {
      question: "Can these treatments be combined with other procedures?",
      answer:
        "Yes, prescription hair treatments can be combined with in-clinic procedures for enhanced results as part of a personalized plan.",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      {/* Main container with consistent side padding */}
      <View className="px-5 overflow-hidden">
        {/* Hero Section */}
        <View className="pt-10 pb-8">
          <Text className="text-3xl font-bold text-gray-900 mb-3">Prescription Hair Treatments</Text>
          <Text className="text-gray-600 text-base leading-6 mb-5">
            Clinically tailored therapies designed to support hair growth, scalp health, and long-term maintenance under medical
            supervision.
          </Text>

          <Link href="/bookings" asChild>
            <TouchableOpacity className="bg-black py-3 px-6 rounded-xl w-44 items-center">
              <Text className="text-white font-semibold text-base">BOOK CONSULTATION</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Image
          source={require("../../assets/wellness/Hair_Revitalizing.jpg")}
          className="w-full h-64 rounded-2xl overflow-hidden"
          resizeMode="cover"
        />

        {/* About Section */}
        <View className="py-10">
          <Text className="text-2xl font-semibold text-gray-900 mb-3">About Prescription Hair Treatments</Text>
          <Text className="text-gray-600 leading-6 mb-6">
            Our prescription hair treatments are designed to strengthen hair, reduce shedding, and improve scalp health. These medically
            supervised therapies provide long-term results through personalized plans.
          </Text>

          <View className="space-y-3">
            {[
              "Supports regrowth and strengthens existing hair",
              "Reduces thinning and shedding",
              "Improves scalp nourishment",
              "Combines with in-clinic procedures for better results",
              "Provides personalized, long-term care",
            ].map((item, i) => (
              <View key={i} className="flex-row items-center gap-2">
                <Feather name="check-circle" size={18} color="black" />
                <Text className="text-gray-700 flex-1">{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Expected Results */}
        <View className="pb-10 bg-gray-50 rounded-2xl px-4">
          <Text className="text-2xl font-semibold text-gray-900 mb-6 text-center">Expected Results</Text>

          <View className="space-y-5">
            {[
              {
                title: "Short-Term",
                items: ["Reduced shedding within first few weeks", "Improved scalp health", "Strengthened existing hair"],
              },
              {
                title: "Long-Term",
                items: ["Gradual improvement in hair thickness and volume", "Visible regrowth", "Sustained results with consistency"],
              },
            ].map((block, i) => (
              <View key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <Text className="text-lg font-semibold mb-3 text-gray-900">{block.title}</Text>
                {block.items.map((item, j) => (
                  <View key={j} className="flex-row items-center gap-2 mb-2">
                    <Feather name="check" size={18} color="black" />
                    <Text className="text-gray-700 flex-1">{item}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <Text className="text-gray-600 text-center mt-6">Best results are achieved with consistent care and a healthy lifestyle.</Text>
        </View>

        {/* Pricing Section */}
        <View className="py-10">
          <Text className="text-2xl font-semibold text-gray-900 mb-6 text-center">Treatment Pricing</Text>

          <View className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-5">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-semibold text-gray-900">Consultation & Planning</Text>
              <Link href="/bookings" asChild>
                <TouchableOpacity className="bg-black py-2 px-4 rounded-xl">
                  <Text className="text-white font-semibold text-sm">BOOK</Text>
                </TouchableOpacity>
              </Link>
            </View>
            <Text className="text-gray-600 leading-6 mb-2">
              All prescription hair treatments are customized to your specific needs and require a medical consultation. Pricing varies by
              form and duration.
            </Text>
            <Text className="text-gray-500 text-sm">*Treatment costs are discussed during consultation.</Text>
          </View>

          <View className="bg-blue-50 rounded-xl p-5">
            <Text className="font-semibold text-gray-900 mb-2">Comprehensive Care</Text>
            <Text className="text-gray-600">
              Our pricing includes ongoing monitoring and adjustment of your treatment plan to ensure optimal results.
            </Text>
          </View>
        </View>

        {/* FAQ Section */}
        <View className="pb-12 bg-gray-50 rounded-2xl px-4">
          <Text className="text-2xl font-semibold text-gray-900 mb-6 text-center">Frequently Asked Questions</Text>

          {faqs.map((faq, index) => (
            <View key={index} className="bg-white rounded-xl mb-3 border border-gray-200 overflow-hidden">
              <TouchableOpacity
                className="flex-row justify-between items-center px-4 py-4"
                onPress={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <Text className="text-gray-900 font-medium text-base flex-1">{faq.question}</Text>
                <Feather name={openIndex === index ? "chevron-up" : "chevron-down"} size={20} color="gray" />
              </TouchableOpacity>

              {openIndex === index && (
                <View className="px-4 pb-4">
                  <Text className="text-gray-600">{faq.answer}</Text>
                </View>
              )}
            </View>
          ))}

          <View className="items-center mt-6">
            <Link href="/bookings" asChild>
              <TouchableOpacity className="bg-black py-3 px-8 rounded-xl">
                <Text className="text-white font-semibold text-base">BOOK CONSULTATION</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PrescriptionHairTreatmentsScreen;
