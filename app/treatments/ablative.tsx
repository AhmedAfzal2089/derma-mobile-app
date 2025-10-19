import React, { useRef } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, findNodeHandle } from "react-native";

const CO2ResurfacingScreen = ({ navigation }: any) => {
  const pricingRef = useRef<any>(null);
  const beforeAfterRef = useRef<any>(null);

  const scrollToRef = (ref: any) => {
    ref.current?.measureLayout(
      findNodeHandle(scrollViewRef.current),
      (_x: number, y: number) => {
        scrollViewRef.current?.scrollTo({ y, animated: true });
      },
      () => {}
    );
  };

  const scrollViewRef = useRef<any>(null);

  return (
    <ScrollView ref={scrollViewRef} className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="py-10 px-4">
        <Text className="text-xs text-gray-600 mb-2">Advanced Skin Rejuvenation</Text>
        <Text className="text-4xl font-bold text-black mb-4">
          Ablative CO₂ Laser{"\n"}Resurfacing for{"\n"}renewed skin
        </Text>
        <Text className="text-base text-gray-600 mb-6">
          Transform your skin with our advanced Ablative CO₂ Resurfacing treatment, designed to improve texture, tone, and overall
          complexion.
        </Text>

        <TouchableOpacity className="bg-black py-3 px-6 rounded-lg self-start" onPress={() => scrollToRef(pricingRef)}>
          <Text className="text-white font-semibold">VIEW PRICES</Text>
        </TouchableOpacity>

        <Image
          source={require("../../assets/laser_treatments/Ablative Vertical.jpg")}
          className="w-full h-72 mt-8 rounded-2xl"
          resizeMode="cover"
        />
      </View>

      {/* Treatment Info */}
      <View className="px-4 mb-10">
        <Text className="text-3xl font-bold text-black mb-4">What is Ablative CO₂ Resurfacing?</Text>
        <Text className="text-base text-gray-600 mb-6">
          Ablative CO₂ Resurfacing is an advanced skin rejuvenation therapy designed to improve skin texture, tone, and overall complexion.
          It helps reduce the appearance of fine lines, wrinkles, scarring, and uneven pigmentation.
        </Text>

        <Text className="text-xl font-semibold mb-3">Benefits:</Text>
        <Text className="text-base text-gray-700">• Smooths and refines skin texture</Text>
        <Text className="text-base text-gray-700">• Reduces fine lines and scars</Text>
        <Text className="text-base text-gray-700">• Stimulates collagen production</Text>
        <Text className="text-base text-gray-700">• Evens skin tone and pigmentation</Text>
      </View>

      {/* Before & After Section */}
      <View ref={beforeAfterRef} className="px-4 mb-10">
        <Image
          source={require("../../assets/laser_treatments/Ablative Vertical.jpg")}
          className="w-full h-64 rounded-xl mb-4"
          resizeMode="cover"
        />
        <Text className="text-2xl font-bold text-black mb-2">About Ablative CO₂ Resurfacing</Text>
        <Text className="text-base text-gray-600 mb-2">
          Intensive resurfacing to smooth texture, reduce lines and scars, and even pigmentation.
        </Text>
        <Text className="text-base text-gray-600">• Long-term improvements with collagen</Text>
        <Text className="text-base text-gray-600">• Typically 1 treatment; more enhances results</Text>
        <Text className="text-base text-gray-600">• Medical downtime: 1–3 months</Text>
      </View>

      {/* Pricing Section */}
      <View ref={pricingRef} className="bg-gray-100 p-6">
        <Text className="text-xs text-gray-500 mb-2">CO₂ Resurfacing Treatment</Text>
        <Text className="text-3xl font-bold text-black mb-4">Our Pricing</Text>
        <Text className="text-base text-gray-700 mb-2">
          Ablative CO₂ Resurfacing is a customized treatment with pricing that varies based on treatment area, intensity, and individual
          needs.
        </Text>
        <Text className="text-base text-gray-700 mb-2">Consultation required to determine the exact treatment plan and cost.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Contact")} className="bg-black py-3 px-6 rounded-lg mt-4">
          <Text className="text-white font-semibold text-center">BOOK CONSULTATION</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CO2ResurfacingScreen;
