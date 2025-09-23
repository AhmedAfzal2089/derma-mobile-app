// components/About/ExpertiseAndPhilosophy.tsx
import { Text, View } from "react-native";

export default function ExpertiseAndPhilosophy() {
  return (
    <View className="bg-white py-12 px-6">
      <View className="mb-8">
        <Text className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-2">Our Expertise</Text>
        <Text className="text-3xl font-bold text-zinc-800 mb-4">Expert Care from Medical Professionals</Text>
        <Text className="text-gray-600 text-base mb-4">
          At Derma Veritas, our team consists of highly trained medical professionals with extensive experience in both hospital and
          clinical settings. We combine medical expertise with aesthetic precision to deliver safe, effective treatments tailored to your
          unique needs and goals.
        </Text>
      </View>

      <View className="w-full bg-zinc-950 p-6 rounded-2xl shadow-md">
        <View className="flex-row items-center mb-4">
          <View className="bg-white w-8 h-8 rounded-full items-center justify-center mr-3">
            <Text className="text-black font-bold">DV</Text>
          </View>
          <View className="flex-row">
            <Text className="text-white text-2xl font-bold">Our </Text>
            <Text className="text-gray-400 text-2xl font-light">Philosophy</Text>
          </View>
        </View>
        <View>
          <View className="flex-row items-start mb-2">
            <Text className="text-white mr-2 text-lg">•</Text>
            <Text className="text-gray-300 text-base flex-1">We prioritize your safety and satisfaction above all else</Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Text className="text-white mr-2 text-lg">•</Text>
            <Text className="text-gray-300 text-base flex-1">Our treatments enhance your natural beauty, not mask it</Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Text className="text-white mr-2 text-lg">•</Text>
            <Text className="text-gray-300 text-base flex-1">We believe in education and transparency throughout your journey</Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Text className="text-white mr-2 text-lg">•</Text>
            <Text className="text-gray-300 text-base flex-1">Hospital-grade standards ensure the highest level of care</Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Text className="text-white mr-2 text-lg">•</Text>
            <Text className="text-gray-300 text-base flex-1">We create a welcoming environment where you feel comfortable</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
