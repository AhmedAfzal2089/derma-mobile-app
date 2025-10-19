import { Link } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const treatmentCategories = [
  {
    id: "non-surgical-enhancement",
    name: "Non-surgical Enhancement",
    treatments: [
      {
        id: 1,
        name: "Endolift",
        description: "Minimally invasive laser treatment for skin tightening and lifting.",
        image: require("../../assets/skin_care/Endolift Horizental.jpg"),
      },
      {
        id: 2,
        name: "Eight Point Facelift",
        description: "A non-surgical facelift technique that uses dermal fillers to restore volume and lift the face.",
        image: require("../../assets/injectables/8 Point Facelift Horizental.jpg"),
      },
      {
        id: 3,
        name: "Ablative CO2 Resurfacing",
        description: "Advanced CO2 laser treatment for skin resurfacing and rejuvenation.",
        image: require("../../assets/laser_treatments/Ablative horizental.jpg"),
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
        image: require("../../assets/skin_care/CO2 Laser veritcal.jpg"),
      },
      {
        id: 5,
        name: "Radio Frequency Microneedling",
        description: "Combine microneedling with radio frequency for enhanced skin tightening and rejuvenation.",
        image: require("../../assets/skin_care/Microneedling Horizental.jpg"),
      },
      {
        id: 6,
        name: "Pro Fusion",
        description: "Advanced skin treatment for enhanced facial contours and volume.",
        image: require("../../assets/pacakage/Pro-Fusion.jpg"),
      },
    ],
  },
];

// Flatten all treatments
const allTreatments = treatmentCategories.flatMap((category) => category.treatments);

const TreatmentCard = ({ treatment }: any) => {
  return (
    <View className="bg-white rounded-xl shadow-md w-72 mx-2">
      <Image
        source={typeof treatment.image === "string" ? { uri: treatment.image } : treatment.image}
        className="w-full h-40 rounded-t-xl"
        resizeMode="cover"
      />
      <View className="p-4">
        {/* Name + Price */}
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-base font-semibold text-black">{treatment.name}</Text>
          <Text className="text-base font-semibold text-black">$15</Text>
        </View>

        {/* Description */}
        <Text className="text-sm text-gray-600">
          {treatment.description.slice(0, 50)}...
          <Text className="text-black font-semibold"> Read More</Text>
        </Text>

        {/* Book Now Button */}
        <Link href="/bookings" asChild>
          <TouchableOpacity className="bg-black py-2 rounded-lg mt-4">
            <Text className="text-white text-center font-semibold">Book Now</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const TreatmentCarousel = () => {
  return (
    <View className="flex-1 bg-gray-100 pt-6">
      <Text className="text-2xl font-bold px-4 pb-4 text-black">Our Treatments</Text>
      <FlatList
        data={allTreatments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TreatmentCard treatment={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default TreatmentCarousel;
