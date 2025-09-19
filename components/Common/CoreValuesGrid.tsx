// components/About/CoreValuesGrid.tsx
import { Text, View } from "react-native";

const coreValues = [
  {
    number: 1,
    title: "Excellence",
    description:
      "We strive for the highest standards in all our treatments and services.",
  },
  {
    number: 2,
    title: "Integrity",
    description: "We believe in honesty, transparency, and ethical practice.",
  },
  {
    number: 3,
    title: "Innovation",
    description:
      "We continuously seek the latest advancements in aesthetic medicine.",
  },
  {
    number: 4,
    title: "Care",
    description:
      "Your wellbeing and satisfaction are at the heart of everything we do.",
  },
];

const ValueCard = ({ number, title, description }: any) => (
  <View className="w-full mb-10">
    <View className="bg-zinc-900 p-4 rounded-xl items-center h-35">
      <View className="w-12 h-12 rounded-full bg-zinc-700 items-center justify-center mb-3">
        <Text className="text-white text-lg font-bold">{number}</Text>
      </View>
      <Text className="text-white font-bold text-lg mb-2">{title}</Text>
      <Text className="text-gray-400 text-center text-sm">{description}</Text>
    </View>
  </View>
);

export default function CoreValuesGrid() {
  return (
    <View className="bg-white py-12 px-4">
      <Text className="text-3xl font-bold text-center text-zinc-800 mb-2">
        Our Core Values
      </Text>
      <Text className="text-gray-600 text-center text-base mb-8">
        The principles that guide everything we do at Derma Veritas
      </Text>
      {/* Grid Container */}
      <View className="flex-row flex-wrap -m-2">
        {coreValues.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </View>
    </View>
  );
}
