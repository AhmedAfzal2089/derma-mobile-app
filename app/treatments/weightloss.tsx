import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const WeightLossModulatorScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="px-5 pt-10 pb-8">
        <Text className="text-3xl font-bold text-gray-900 mb-3">Weight Loss Modulator</Text>
        <Text className="text-gray-600 text-base leading-6 mb-5">
          A medically supervised treatment program designed to support sustainable weight management through science-backed methods.
        </Text>

        <Link href="/bookings" asChild>
          <TouchableOpacity className="bg-black py-3 px-6 rounded-xl w-44 items-center">
            <Text className="text-white font-semibold text-base">BOOK CONSULTATION</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Main Image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        }}
        className="w-full h-64"
        resizeMode="cover"
      />

      {/* About Section */}
      <View className="px-5 py-10">
        <Text className="text-2xl font-semibold text-gray-900 mb-3">About Weight Loss Modulator</Text>
        <Text className="text-gray-600 leading-6 mb-6">
          Our Weight Loss Modulator program combines clinical evaluation, personalized nutrition, and scientifically validated formulations
          to promote effective fat metabolism and long-term weight stability under medical supervision.
        </Text>

        <View className="space-y-3">
          {[
            "Targets fat metabolism and body composition",
            "Enhances energy and metabolic balance",
            "Supports appetite regulation and healthy habits",
            "Tailored to your specific body profile and goals",
            "Supervised by medical professionals",
          ].map((item, i) => (
            <View key={i} className="flex-row items-center gap-2">
              <Feather name="check-circle" size={18} color="black" />
              <Text className="text-gray-700 flex-1">{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Before & After Section */}
      <View className="px-5 py-10 bg-gray-50">
        <Text className="text-2xl font-semibold text-gray-900 mb-6 text-center">Before & After Transformation</Text>
        <View className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            }}
            className="w-full h-64"
            resizeMode="cover"
          />
          <View className="p-5">
            <Text className="text-gray-700 leading-6">
              Noticeable improvement in body contour, fat reduction, and energy levels with consistent participation in the Weight Loss
              Modulator program.
            </Text>
          </View>
        </View>
      </View>

      {/* Expected Results Section */}
      <View className="px-5 pb-10 bg-white">
        <Text className="text-2xl font-semibold text-gray-900 mb-6 text-center">Expected Results</Text>

        <View className="space-y-5">
          <View className="bg-gray-50 p-5 rounded-xl border border-gray-200">
            <Text className="text-lg font-semibold mb-3 text-gray-900">Short-Term</Text>
            {["Increased energy and reduced bloating", "Better appetite control", "Improved digestion and mood"].map((item, i) => (
              <View key={i} className="flex-row items-center gap-2 mb-2">
                <Feather name="check" size={18} color="black" />
                <Text className="text-gray-700 flex-1">{item}</Text>
              </View>
            ))}
          </View>

          <View className="bg-gray-50 p-5 rounded-xl border border-gray-200">
            <Text className="text-lg font-semibold mb-3 text-gray-900">Long-Term</Text>
            {[
              "Visible fat reduction and body reshaping",
              "Improved metabolism and sustained results",
              "Better overall wellness and confidence",
            ].map((item, i) => (
              <View key={i} className="flex-row items-center gap-2 mb-2">
                <Feather name="check" size={18} color="black" />
                <Text className="text-gray-700 flex-1">{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text className="text-gray-600 text-center mt-6">Sustainable transformation achieved through consistency and expert guidance.</Text>
      </View>

      {/* Pricing Section */}
      <View className="px-5 py-10 bg-gray-50">
        <Text className="text-2xl font-semibold text-gray-900 mb-6 text-center">Treatment Pricing</Text>

        <View className="bg-white rounded-2xl p-5 border border-gray-200 mb-5">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold text-gray-900">Consultation & Planning</Text>
            <Link href="/bookings" asChild>
              <TouchableOpacity className="bg-black py-2 px-4 rounded-xl">
                <Text className="text-white font-semibold text-sm">BOOK</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <Text className="text-gray-600 leading-6 mb-2">
            Pricing for Weight Loss Modulator plans varies based on personalized evaluation, duration, and included services.
          </Text>
          <Text className="text-gray-500 text-sm">*Exact costs are discussed during consultation to match your treatment goals.</Text>
        </View>

        <View className="bg-blue-50 rounded-xl p-5">
          <Text className="font-semibold text-gray-900 mb-2">Comprehensive Care</Text>
          <Text className="text-gray-600">
            Includes continuous monitoring, progress tracking, and medical supervision for optimal, lasting results.
          </Text>
        </View>
      </View>

      {/* Final CTA */}
      <View className="px-5 pb-12 bg-white items-center">
        <Link href="/bookings" asChild>
          <TouchableOpacity className="bg-black py-3 px-8 rounded-xl">
            <Text className="text-white font-semibold text-base">BOOK CONSULTATION</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
};

export default WeightLossModulatorScreen;
