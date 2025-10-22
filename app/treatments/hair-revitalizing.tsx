import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const HairRevitalizingTreatmentScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="px-5 pt-10 pb-6">
        <Text className="text-3xl font-bold text-gray-900 mb-3">Hair Revitalizing Treatment</Text>
        <Text className="text-gray-600 mb-5 leading-6">
          Restore your hair’s strength, volume, and shine through advanced revitalization therapy — designed to nourish the scalp and
          promote healthy regrowth.
        </Text>
        <Link href="/bookings" asChild>
          <TouchableOpacity className="bg-black py-3 px-6 rounded-xl w-40 items-center">
            <Text className="text-white font-semibold text-base">BOOK NOW</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <Image source={require("../../assets/wellness/Hair_Revitalizing.jpg")} className="w-full h-64" resizeMode="cover" />

      {/* Highlights Section */}
      <View className="px-5 py-8">
        <Text className="text-2xl font-semibold text-gray-900 mb-6">Treatment Highlights</Text>

        <View className="flex-row flex-wrap justify-between">
          {["Strengthens Hair Roots", "Improves Scalp Health", "Stimulates Hair Growth", "Reduces Hair Fall"].map((item, index) => (
            <View key={index} className="bg-gray-100 w-[48%] rounded-xl p-4 mb-4 flex-row items-center">
              <Feather name="check-circle" size={20} color="black" />
              <Text className="text-gray-700 font-medium ml-2">{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* About Section */}
      <View className="px-5 pb-10">
        <Image
          source={require("../../assets/wellness/Hair_Revitalizing_Vertical.jpg")}
          className="w-full h-56 rounded-2xl mb-6"
          resizeMode="cover"
        />
        <Text className="text-xl font-semibold text-gray-900 mb-3">About Hair Revitalizing Treatment</Text>
        <Text className="text-gray-600 leading-6">
          This treatment revitalizes weak and thinning hair by infusing essential nutrients into the scalp, promoting circulation and
          natural growth. It’s suitable for both men and women experiencing hair loss or damage due to stress, hormonal changes, or
          environmental factors.
        </Text>
      </View>

      {/* Ingredients & Benefits */}
      <View className="px-5 pb-10">
        <Text className="text-2xl font-semibold text-gray-900 mb-6">Ingredients & Benefits</Text>

        <View className="space-y-4">
          {[
            { title: "Biotin", desc: "Supports keratin production and strengthens hair fibers." },
            { title: "Peptides", desc: "Stimulate follicle activity for thicker hair growth." },
            { title: "Hyaluronic Acid", desc: "Hydrates the scalp and improves elasticity." },
            { title: "Vitamin Complex", desc: "Nourishes the scalp for lasting health and shine." },
          ].map((item, index) => (
            <View key={index} className="bg-gray-50 rounded-xl p-4">
              <Text className="text-lg font-semibold text-gray-800 mb-1">{item.title}</Text>
              <Text className="text-gray-600">{item.desc}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Indications & Protocol */}
      <View className="px-5 pb-10">
        <Text className="text-2xl font-semibold text-gray-900 mb-6">Indications & Treatment Protocol</Text>
        <View className="bg-gray-100 rounded-2xl p-5 space-y-3">
          <Text className="text-gray-700 leading-6">
            Recommended for individuals experiencing hair thinning, excessive shedding, or scalp weakness. The treatment involves
            micro-infusion techniques to deliver active ingredients directly to the follicles.
          </Text>
          <Text className="text-gray-700 leading-6">Typically, 4–6 sessions spaced 2 weeks apart are suggested for visible results.</Text>
        </View>
      </View>

      {/* Pricing Section */}
      <View className="px-5 pb-16">
        <Text className="text-2xl font-semibold text-gray-900 mb-6">Pricing</Text>
        <View className="space-y-4">
          {[
            { title: "Single Session", price: "PKR 15,000" },
            { title: "Package of 3 Sessions", price: "PKR 40,000" },
            { title: "Package of 6 Sessions", price: "PKR 75,000" },
          ].map((item, index) => (
            <View key={index} className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
              <Text className="text-lg font-semibold text-gray-800 mb-2">{item.title}</Text>
              <Text className="text-gray-600 mb-4">{item.price}</Text>
              <Link href="/bookings" asChild>
                <TouchableOpacity className="bg-black py-3 rounded-xl items-center">
                  <Text className="text-white font-semibold text-base">BOOK NOW</Text>
                </TouchableOpacity>
              </Link>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HairRevitalizingTreatmentScreen;
