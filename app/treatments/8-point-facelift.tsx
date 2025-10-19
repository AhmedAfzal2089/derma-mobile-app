import React, { useRef } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function EightPointFaceliftScreen({ navigation }: any) {
  const scrollViewRef = useRef<ScrollView>(null);
  const pricingSectionRef = useRef<View>(null);

  const cardData = [
    { heading: "Results Seen", value: "Immediately", description: "Best after 2–3 weeks" },
    { heading: "Results Last", value: "6–12 Months" },
    { heading: "No. of Sessions", value: "1 Treatment" },
    { heading: "Procedure Time", value: "45–60 Minutes" },
    { heading: "Pain", value: "Mild", description: "Anaesthetic optional" },
    { heading: "Downtime", value: "Minimal" },
    { heading: "Side Effects", value: "Bruising, Redness" },
    { heading: "Our Pricing", value: "£999", description: "View below" },
  ];

  const scrollToPricing = () => {
    pricingSectionRef.current?.measure((fx, fy, width, height, px, py) => {
      scrollViewRef.current?.scrollTo({ y: py - 60, animated: true });
    });
  };

  return (
    <ScrollView ref={scrollViewRef} className="bg-white" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Hero Section */}
      <View className="px-4 pt-12">
        <Text className="text-sm text-gray-500 mb-2">Dermal Filler Treatment</Text>

        <Text className="text-2xl font-bold text-gray-900 mb-4">8‑Point Facelift{"\n"}for Natural Contouring</Text>

        <Text className="text-base text-gray-600 mb-6">
          Achieve a natural, non‑surgical facelift using advanced dermal filler techniques.
        </Text>

        <TouchableOpacity className="px-5 py-3 border border-gray-800 rounded-md mb-6 w-fit self-start" onPress={scrollToPricing}>
          <Text className="text-sm font-semibold text-gray-900 uppercase">View Prices</Text>
        </TouchableOpacity>

        <Image
          source={require("../../assets/injectables/8 Point Facelift Vertical.jpg")}
          resizeMode="cover"
          style={{
            width: screenWidth - 32,
            height: 300,
            borderRadius: 12,
            backgroundColor: "#e5e7eb",
          }}
        />
      </View>

      {/* Info Cards */}
      <View className="bg-gray-50 py-10 px-4">
        <View className="bg-white rounded-xl border border-gray-200 p-4">
          {cardData.map((item, index) => (
            <View key={index} className="mb-4">
              <Text className="text-xs text-gray-500">{item.heading}</Text>
              <Text className="text-lg font-semibold text-gray-900">{item.value}</Text>
              {item.description && <Text className="text-sm text-gray-500">{item.description}</Text>}
            </View>
          ))}
        </View>
      </View>

      {/* What is it Section */}
      <View className="px-4 py-12">
        <Text className="text-2xl font-bold text-gray-900 mb-4">What is an 8‑Point Facelift?</Text>
        <Text className="text-base text-gray-600 mb-6">
          A non‑surgical treatment using dermal fillers to restore volume and lift across 8 facial points.
        </Text>

        <View className="space-y-6">
          <View>
            <Text className="text-lg font-semibold text-gray-900 mb-2">Benefits:</Text>
            <Text className="text-gray-700">• Enhanced facial contours</Text>
            <Text className="text-gray-700">• Restored volume</Text>
            <Text className="text-gray-700">• Natural lifting effect</Text>
            <Text className="text-gray-700">• Minimal downtime</Text>
          </View>

          <View>
            <Text className="text-lg font-semibold text-gray-900 mb-2">Treatment Areas:</Text>
            <Text className="text-gray-700">• Cheeks</Text>
            <Text className="text-gray-700">• Jawline</Text>
            <Text className="text-gray-700">• Under‑eyes</Text>
            <Text className="text-gray-700">• Lips</Text>
            <Text className="text-gray-700">• Chin</Text>
          </View>
        </View>
      </View>

      {/* Before & After Image */}
      <View className="px-4 pb-12">
        <Image
          source={require("../../assets/injectables/8 Point Facelift Horizental.jpg")}
          resizeMode="cover"
          style={{
            width: screenWidth - 32,
            height: 220,
            borderRadius: 12,
            marginBottom: 16,
          }}
        />
        <Text className="text-lg font-bold text-gray-900 mb-2">Before & After</Text>
        <Text className="text-gray-600 mb-1">• Instant results</Text>
        <Text className="text-gray-600 mb-1">• Lifts & rejuvenates face</Text>
        <Text className="text-gray-600">• No surgery, minimal downtime</Text>
      </View>

      {/* Pricing Section */}
      <View ref={pricingSectionRef} className="bg-gray-100 px-4 py-12">
        <Text className="text-xs text-gray-600 uppercase mb-2">Pricing</Text>
        <Text className="text-3xl font-bold text-gray-900 mb-4">8‑Point Facelift</Text>
        <Text className="text-base text-gray-600 mb-6">
          All treatments are carried out by expert clinicians. Pricing reflects quality care and premium products used.
        </Text>

        <View className="bg-white border border-gray-200 rounded-xl p-6">
          <Text className="text-lg font-semibold text-gray-900 mb-2">Full 8‑Point Facelift</Text>
          <Text className="text-2xl font-bold text-center text-gray-900 mb-2">£999</Text>
          <Text className="text-center text-gray-600 mb-4">Complete rejuvenation treatment targeting all key lift zones.</Text>

          <View className="space-y-1 mb-6">
            <Text className="text-sm text-gray-700">• Cheeks</Text>
            <Text className="text-sm text-gray-700">• Jawline</Text>
            <Text className="text-sm text-gray-700">• Under-eyes</Text>
            <Text className="text-sm text-gray-700">• Chin</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Booking")} className="bg-black px-4 py-3 rounded-md">
            <Text className="text-white text-center font-semibold">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
