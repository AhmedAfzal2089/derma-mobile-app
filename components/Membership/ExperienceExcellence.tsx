// components/Home/ExperienceExcellenceSection.tsx
import { Image, Text, View } from "react-native";

export default function ExperienceExcellenceSection() {
  return (
    <View className="bg-white py-12 px-6">
      {/* Content Section */}
      <View className="mb-8">
        <Text className="text-3xl font-bold text-zinc-800 mb-4">
          Experience Excellence Every Month
        </Text>
        <Text className="text-gray-600 mb-4">
          Our membership program ensures consistent, professional care that
          delivers lasting results. With regular treatments, progress
          monitoring, and exclusive member benefits, you&apos;ll achieve your
          aesthetic goals while enjoying significant savings.
        </Text>
        <Text className="text-gray-600">
          Join thousands of satisfied members who trust Derma Veritas for their
          ongoing aesthetic care. Experience the difference of premium
          treatments, expert guidance, and personalized attention every month.
        </Text>
      </View>

      {/* Image Section */}
      <Image
        // ** PASTE YOUR IMAGE PATH HERE **
        // Example: source={require('../../assets/images/professional-care.jpg')}
        source={require("../../public/images/profAesCare.png")}
        className="w-full h-64 rounded-lg"
        resizeMode="cover"
      />
    </View>
  );
}
