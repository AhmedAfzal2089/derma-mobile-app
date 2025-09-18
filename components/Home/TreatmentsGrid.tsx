// components/Home/TreatmentsGrid.tsx
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

// Data for the treatment cards
const treatments = [
  {
    title: "Endolift",
    icon: "zap",
    description:
      "A revolutionary laser treatment that stimulates collagen production for natural-looking facial contouring.",
  },
  {
    title: "CO₂ Fractional Laser",
    icon: "activity",
    description:
      "Advanced laser resurfacing treatment that addresses skin imperfections, wrinkles, and scars.",
  },
  {
    title: "Pro Fusion",
    icon: "refresh-cw",
    description:
      "Advanced skin rejuvenation treatment that combines multiple technologies for comprehensive results.",
  },
  {
    title: "Quad Laser",
    icon: "sun", // Changed from 'chevron-down' to a valid Feather icon
    description:
      "State-of-the-art hair removal technology that targets hair follicles with precision for lasting results.",
  },
];

const TreatmentCard = ({ title, icon, description }: any) => (
  <View className="w-[90%] p-2 m-5">
    <View className="bg-zinc-900 rounded-lg p-4">
      <View className="flex-row items-center mb-2">
        <Feather name={icon} size={24} color="white" />
        <Text className="text-white font-semibold text-lg ml-2">{title}</Text>
      </View>
      <Text className="text-gray-400 text-sm mb-2">{description}</Text>
      <Link href="/pages/treatments/treatements" asChild>
        <TouchableOpacity>
          <Text className="text-white text-sm">Learn more</Text>
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

export default function TreatmentsGrid() {
  return (
    <View className="my-20">
      <Text className="text-2xl font-bold text-center text-black mb-6">
        Popular Treatments
      </Text>

      {/* Grid Container */}
      <View className="flex-row flex-wrap justify-center -m-2">
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </View>

      {/* View All Treatments Button */}
      <View className="items-center mt-6">
        <Link href="/pages/treatments/treatements" asChild>
          <TouchableOpacity className="px-6 py-4 border border-zinc-500 rounded-full bg-zinc-900">
            <Text className="text-white ">View All Treatments</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
