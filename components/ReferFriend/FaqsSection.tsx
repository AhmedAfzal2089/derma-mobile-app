import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { LayoutAnimation, Platform, Text, TouchableOpacity, UIManager, View } from "react-native";

// Enable LayoutAnimation on Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const faqs = [
  {
    question: "What types of referral programs do you offer?",
    answer:
      "We offer three types of referral programs: Individual Referrals for personal users, B2B Partnerships for businesses, and Influencer Programs for content creators.",
  },
  {
    question: "How do I get started with a referral program?",
    answer:
      "For individual referrals, create an account and visit your referral portal. For B2B partnerships and influencer programs, contact us directly to discuss custom arrangements.",
  },
  {
    question: "What are the benefits of each program?",
    answer:
      "Individual referrals: You earn 5% cash rewards, your friends get 5% discounts. B2B partnerships include custom terms and bulk discounts. Influencer programs offer collaboration packages and content creation support.",
  },
  {
    question: "Who can participate in these programs?",
    answer:
      "Anyone can join our individual referral program. B2B partnerships are for businesses wanting to offer benefits to their clients. Influencer programs are for content creators with engaged audiences.",
  },
  {
    question: "How do I track my referral performance?",
    answer:
      "Individual referrals can be tracked through your personal referral portal. B2B and influencer partners receive dedicated account management and custom reporting.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <View className="px-4 py-8 bg-white">
      <Text className="text-3xl font-bold text-gray-900 text-center mb-6">Frequently Asked Questions</Text>

      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <View key={index} className="mb-4 border border-gray-200 rounded-lg bg-white">
            <TouchableOpacity onPress={() => toggleFAQ(index)} className="flex-row justify-between items-center px-4 py-3">
              <Text className="text-base font-medium text-gray-800 flex-1 pr-4">{faq.question}</Text>
              <Feather
                name={isOpen ? "chevron-up" : "chevron-down"}
                size={20}
                color="#6b7280" // Tailwind text-gray-500
              />
            </TouchableOpacity>

            {isOpen && (
              <View className="px-4 pb-4">
                <Text className="text-sm text-gray-600">{faq.answer}</Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}
