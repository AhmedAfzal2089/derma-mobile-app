import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ExoSignalHairTreatmentScreen = () => {
  const treatmentHighlights = [
    {
      title: "Stimulates Hair Growth",
      desc: "Activates dormant follicles and promotes new hair growth.",
    },
    {
      title: "Strengthens Hair Roots",
      desc: "Enhances the hair bulb’s structure for stronger, thicker strands.",
    },
    {
      title: "Improves Scalp Health",
      desc: "Reduces inflammation and boosts hydration for a healthier scalp.",
    },
    {
      title: "Reduces Hair Fall",
      desc: "Minimizes hair shedding and supports long-term follicle health.",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="px-6 py-12 items-center">
        <Text className="text-gray-600 text-sm font-medium mb-2 tracking-wide">ExoSignal™ Hair Treatment</Text>
        <Text className="text-3xl font-bold text-gray-900 leading-snug text-center mb-4">
          Restore, strengthen, and <Text className="text-[#272728]">revitalize your hair</Text>
        </Text>
        <Text className="text-gray-600 text-base leading-relaxed text-center mb-6">
          ExoSignal™ Hair Therapy stimulates natural hair regeneration, improves scalp health, and restores vitality using advanced exosome
          technology.
        </Text>

        <TouchableOpacity className="bg-[#272728] py-3 px-8 rounded-full mb-10">
          <Text className="text-white text-sm font-semibold uppercase">View Prices</Text>
        </TouchableOpacity>

        <Image
          source={require("../../assets/hair_trearments/ExoSignal™ Hair Treatment Vertical.jpg")}
          className="w-72 h-96 rounded-3xl"
          resizeMode="cover"
        />
      </View>

      {/* Highlights */}
      <View className="bg-[#f6f6f6] px-6 py-12">
        <Text className="text-3xl font-bold text-gray-900 text-center mb-8">Key Benefits of ExoSignal™</Text>

        <View className="flex flex-wrap justify-center gap-y-6">
          {treatmentHighlights.map((item, index) => (
            <View key={index} className="bg-white border border-gray-200 rounded-2xl p-6 w-80 shadow-sm mx-auto">
              <View className="flex-row items-center space-x-2 mb-2">
                <Feather name="check-circle" size={20} color="#272728" />
                <Text className="text-lg font-semibold text-gray-900">{item.title}</Text>
              </View>
              <Text className="text-gray-600 text-sm leading-relaxed">{item.desc}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* About Section */}
      <View className="px-6 py-12 bg-white">
        <Image
          source={require("../../assets/hair_trearments/ExoSignal™ Hair Treatment Horizental.jpg")}
          className="w-full h-60 rounded-2xl mb-6"
          resizeMode="cover"
        />
        <Text className="text-2xl font-bold text-gray-900 mb-3">About ExoSignal™ Hair Treatment</Text>
        <Text className="text-gray-600 text-base leading-relaxed mb-4">
          ExoSignal™ Hair Therapy is an advanced regenerative treatment that harnesses exosomes—powerful cellular messengers—to restore
          scalp vitality, promote thicker hair, and reduce hair loss effectively.
        </Text>
        <View className="space-y-1">
          <Text className="text-gray-600">• Stimulates natural follicle activity</Text>
          <Text className="text-gray-600">• Boosts collagen and elastin in the scalp</Text>
          <Text className="text-gray-600">• Safe, non-surgical, and clinically proven</Text>
        </View>
      </View>

      {/* What is ExoSignal */}
      <View className="bg-[#f6f6f6] px-6 py-12">
        <Text className="text-3xl font-bold text-gray-900 mb-4 text-center">What is ExoSignal™?</Text>
        <Text className="text-gray-600 text-base leading-relaxed text-center mb-8">
          ExoSignal™ uses bio-identical exosomes derived from stem cells that enhance communication between scalp cells—stimulating
          regeneration, reducing inflammation, and improving blood flow.
        </Text>
        <View className="space-y-3">
          {[
            "Enhances scalp cell repair and regeneration",
            "Improves nutrient delivery to follicles",
            "Reduces dandruff and dryness",
            "Strengthens weak hair fibers",
          ].map((point, i) => (
            <View key={i} className="flex-row items-start space-x-3">
              <Feather name="circle" size={10} color="#272728" />
              <Text className="text-gray-600 text-sm">{point}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Treatment Protocol */}
      <View className="bg-white px-6 py-12">
        <Text className="text-3xl font-bold text-gray-900 mb-4 text-center">Treatment Indications & Protocol</Text>
        <Text className="text-gray-600 text-center mb-8">
          ExoSignal™ is ideal for both men and women experiencing thinning hair, scalp irritation, or post-transplant recovery.
        </Text>

        <View className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm w-80 mx-auto">
          <Text className="text-lg font-semibold text-gray-900 mb-2">Typical Protocol</Text>
          <Text className="text-gray-600 text-sm leading-relaxed">
            • 3–4 sessions spaced 2–3 weeks apart{"\n"}• Visible improvement within 6–8 weeks{"\n"}• Maintenance every 6 months for best
            results
          </Text>
        </View>
      </View>

      {/* Pricing Section */}
      <View className="bg-[#f6f6f6] px-6 py-12">
        <Text className="text-center text-sm text-gray-600 font-medium">ExoSignal™ Hair Treatment Pricing</Text>
        <Text className="text-3xl font-bold text-gray-900 text-center mt-2 mb-6">Our Pricing</Text>
        <Text className="text-gray-600 text-center mb-10">Transparent and affordable pricing for your treatment plan.</Text>

        <View className="space-y-6 items-center">
          {/* Single Session */}
          <View className="bg-white border border-gray-200 p-6 rounded-2xl w-80 shadow-sm items-center">
            <Text className="text-lg font-semibold text-gray-900 mb-2 text-center">ExoSignal™ Single Session</Text>
            <Text className="text-2xl font-bold text-gray-900 mb-3 text-center">£350</Text>
            <Text className="text-gray-600 text-sm leading-relaxed text-center mb-6">
              Includes consultation and one complete ExoSignal™ treatment.
            </Text>
            <Link href="/bookings" asChild>
              <TouchableOpacity className="bg-[#272728] w-full py-3 rounded-full">
                <Text className="text-white text-center text-sm font-semibold uppercase">Book Now</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Package */}
          <View className="bg-white border border-gray-200 p-6 rounded-2xl w-80 shadow-sm items-center">
            <Text className="text-lg font-semibold text-gray-900 mb-2 text-center">ExoSignal™ Package (3 Sessions)</Text>
            <Text className="text-2xl font-bold text-gray-900 mb-3 text-center">£950</Text>
            <Text className="text-gray-600 text-sm leading-relaxed text-center mb-6">
              Ideal for long-term hair restoration and scalp repair.
            </Text>
            <Link href="/bookings" asChild>
              <TouchableOpacity className="bg-[#272728] w-full py-3 rounded-full">
                <Text className="text-white text-center text-sm font-semibold uppercase">Book Now</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExoSignalHairTreatmentScreen;
