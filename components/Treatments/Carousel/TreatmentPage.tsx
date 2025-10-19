import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const treatmentCategories = [
  {
    id: "non-surgical-enhancement",
    name: "Non-surgical Enhancement",
    treatments: [
      {
        id: 1,
        name: "Endolift",
        description: "Minimally invasive laser treatment for skin tightening and lifting.",
        image: require("../../../assets/skin_care/Endolift Horizental.jpg"),
      },
      {
        id: 2,
        name: "Eight Point Facelift",
        description: "A non-surgical facelift technique that uses dermal fillers to restore volume and lift the face.",
        image: require("../../../assets/injectables/8 Point Facelift Horizental.jpg"),
      },
      {
        id: 3,
        name: "Ablative CO2 Resurfacing",
        description: "Advanced CO2 laser treatment for skin resurfacing and rejuvenation.",
        image: require("../../../assets/laser_treatments/Ablative horizental.jpg"),
      },
    ],
  },
  {
    id: "skin-perfecting",
    name: "Skin Perfecting",
    treatments: [
      {
        id: 4,
        name: "Fractional CO2 Resurfacing",
        description: "Advanced CO2 laser treatment for skin resurfacing and rejuvenation.",
        image: require("../../../assets/skin_care/CO2 Laser veritcal.jpg"),
      },
      {
        id: 5,
        name: "Radio Frequency Microneedling",
        description: "Combine microneedling with radio frequency for enhanced skin tightening and rejuvenation.",
        image: require("../../../assets/skin_care/Microneedling Horizental.jpg"),
      },
      {
        id: 6,
        name: "Pro Fusion",
        description: "Advanced skin treatment for enhanced facial contours and volume.",
        image: require("../../../assets/pacakage/Pro-Fusion.jpg"),
      },
    ],
  },
  {
    id: "age-defying",
    name: "Age Defying",
    treatments: [
      {
        id: 7,
        name: "V Hacker",
        description: "Innovative treatment for targeted body contouring and fat reduction.",
        image: require("../../../assets/wellness/V-Hacker Biohacking Horizental.jpg"),
      },
      {
        id: 8,
        name: "Bio Hacking Formula",
        description: "Advanced regenerative therapy using exosomes to promote healing and rejuvenation.",
        image: require("../../../assets/wellness/Exosome Therapy Horizental.jpg"),
      },
      {
        id: 10,
        name: "Anti-Wrinkle",
        description: "Reduce the appearance of fine lines and wrinkles with our advanced anti-wrinkle treatments.",
        image: require("../../../assets/injectables/Anti Wrinkle Horizental.jpg"),
      },
      {
        id: 11,
        name: "PRP",
        description: "Platelet-rich plasma therapy for skin rejuvenation and healing.",
        image: require("../../../assets/wellness/PRP Therapy Horizental.jpg"),
      },
      {
        id: 12,
        name: "Polynucleotide",
        description: "Polynucleotide treatments for skin regeneration and revitalization.",
        image: require("../../../assets/skin_care/Polynucleotide Horizental.jpg"),
      },
    ],
  },
  {
    id: "facial-contouring",
    name: "Facial Contouring",
    treatments: [
      {
        id: 13,
        name: "Fillers",
        description: "Restore volume and enhance facial contours with our premium dermal fillers.",
        image: require("../../../assets/injectables/Dermal Filler Horizental.jpg"),
      },
      {
        id: 14,
        name: "Profhilo",
        description: "An innovative skin remodelling treatment that improves skin quality and elasticity.",
        image: require("../../../assets/injectables/Profhilo Veritcal.jpg"),
      },
      {
        id: 15,
        name: "Skin Fill Bacio",
        description: "Advanced skinfill treatment for enhanced facial contours and volume.",
        image: require("../../../assets/injectables/Skinfill Bacio Horizental.jpg"),
      },
    ],
  },
  {
    id: "hair-enhancements",
    name: "Hair Enhancements",
    treatments: [
      {
        id: 16,
        name: "Hair PRP",
        description: "Platelet-rich plasma therapy for hair growth and rejuvenation.",
        image: require("../../../assets/wellness/PRP Therapy Horizental.jpg"),
      },
      {
        id: 17,
        name: "Hair Polynucleotide",
        description: "Stimulate hair growth and improve hair density with our advanced polynucleotide therapy.",
        image: require("../../../assets/injectables/Polynucleotide Hair Loss Horizental.jpg"),
      },
      {
        id: 18,
        name: "EXO SIGNAL",
        description: "Advanced hair treatment using exosome technology for hair growth and revitalization.",
        image: require("../../../assets/hair_trearments/ExoSignal™ Hair Treatment Horizental.jpg"),
      },
      {
        id: 19,
        name: "Hair + Revitalizing Formula",
        description: "Comprehensive hair revitalizing treatment for healthier, stronger hair.",
        image: require("../../../assets/wellness/Hair_Revitalizing.jpg"),
      },
      {
        id: 20,
        name: "Prescription Hair Treatments",
        description: "Clinically tailored therapies designed to support hair growth, scalp health, and long-term hair maintenance.",
        image: require("../../../assets/wellness/Hair_Revitalizing_Vertical.jpg"),
      },
    ],
  },
  {
    id: "others",
    name: "Others",
    treatments: [
      {
        id: 21,
        name: "Weight Loss Modulators",
        description: "Professional therapy designed to support weight management, metabolic balance, and overall wellbeing.",
        image: {
          uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
        },
      },
      {
        id: 22,
        name: "Skin Tx and Care",
        description:
          "Clinically guided therapies tailored to target specific skin concerns such as acne, hyperpigmentation, and sensitivity.",
        image: {
          uri: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
      },
    ],
  },
];

// Category filter options (you can customize this list)
const categoryFilters = [
  { label: "Skin", id: "skin-perfecting" },
  { label: "Hair", id: "hair-enhancements" },
  { label: "Non-surgical", id: "non-surgical-enhancement" },
  { label: "Age Defying", id: "age-defying" },
  { label: "Facial", id: "facial-contouring" },
  { label: "Others", id: "others" },
];

const TreatmentCard = ({ treatment }: any) => {
  return (
    <View className="bg-white rounded-xl shadow-2xl mx-10 m-1 my-2 border-black">
      <Image
        source={typeof treatment.image === "string" ? { uri: treatment.image } : treatment.image}
        className="w-full h-40 rounded-t-xl"
        resizeMode="cover"
      />
      <View className="p-3">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-base font-semibold text-black" numberOfLines={1}>
            {treatment.name}
          </Text>
          <Text className="text-base font-semibold text-black"></Text>
        </View>
        <Text className="text-sm text-gray-600" numberOfLines={2}>
          {treatment.description.slice(0, 50)}... <Text className="text-black font-semibold">Read More</Text>
        </Text>
        <Link href="/bookings" asChild>
          <TouchableOpacity className="bg-black py-2 rounded-lg mt-3">
            <Text className="text-white text-center font-semibold text-sm">Book Now</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const TreatmentsScreen = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // Filter treatments based on selected category
  const filteredTreatments =
    selectedCategoryId === null
      ? treatmentCategories.flatMap((cat) => cat.treatments)
      : treatmentCategories.find((cat) => cat.id === selectedCategoryId)?.treatments || [];

  return (
    <View className="flex-1 bg-white pt-4">
      {/* Header */}
      <Text className="text-2xl font-bold px-4 pb-4 text-black">Treatments</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-4 mb-4 min-h-[5%]"
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* Filter Icon */}
        <View className="mr-3">
          <Ionicons name="filter-outline" size={24} color="black" />
        </View>
        {selectedCategoryId && (
          <TouchableOpacity className="m-2 p-1 rounded-full bg-gray-200" onPress={() => setSelectedCategoryId(null)}>
            <Ionicons name="close" size={16} color="black" />
          </TouchableOpacity>
        )}
        {/* Category Filter Pills */}
        {categoryFilters.map((category) => {
          const isActive = selectedCategoryId === category.id;
          return (
            <TouchableOpacity
              key={category.id}
              onPress={() => setSelectedCategoryId(isActive ? null : category.id)}
              className={`px-4 h-10 mr-2 rounded-full border justify-center ${
                isActive ? "bg-gray-300 border-gray-300" : "bg-white border-gray-300"
              }`}
            >
              <Text className={`text-sm font-medium text-center ${isActive ? "text-black" : "text-black"}`}>{category.label}</Text>
            </TouchableOpacity>
          );
        })}

        {/* Reset/Clear Filter Button (Cross Icon) */}
      </ScrollView>

      {/* Grid of Treatments */}
      <FlatList
        data={filteredTreatments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TreatmentCard treatment={item} />}
        contentContainerStyle={{
          paddingBottom: 80,
          alignItems: "center", // 👈 Center cards horizontally
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TreatmentsScreen;
