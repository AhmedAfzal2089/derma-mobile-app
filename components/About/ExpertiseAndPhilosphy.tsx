// components/ExpertiseAndPhilosophy.tsx
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function ExpertiseAndPhilosophy() {
  return (
    <View className="flex-col items-center p-6 gap-10 bg-white">
      {/* Our Expertise Section */}
      <View className="items-center px-4 py-10 bg-zinc-950 rounded-xl">
        <Text className="text-sm font-semibold text-gray-400 mb-8">
          OUR EXPERTISE
        </Text>
        <Text className="text-3xl font-bold text-white mb-4">
          Expert Care from Medical Professionals
        </Text>
        <Text className="text-gray-300 mb-4">
          At Derma Veritas, our team consists of highly trained medical
          professionals with extensive experience in both hospital and clinical
          settings.
        </Text>
        <Text className="text-gray-300">
          We combine medical expertise with aesthetic precision to deliver safe,
          effective treatments tailored to your unique needs and goals.
        </Text>
      </View>

      {/* Our Philosophy Section */}
      <View className="bg-zinc-950 p-6 rounded-2xl">
        <View className="flex-row items-center mb-4">
          <View className="bg-white w-8 h-8 rounded-full items-center justify-center mr-3">
            <Text className="text-black font-bold">DV</Text>
          </View>
          <Text className="text-white text-2xl font-bold">Our Philosophy</Text>
        </View>
        <Text className="text-white text-xl font-semibold mb-4">
          Patient-Centered Care with Natural Results
        </Text>

        {/* Philosophy bullet points */}
        <View>
          <View className="flex-row items-start mb-2">
            <Feather
              name="check-circle"
              size={16}
              color="white"
              className="mt-1"
            />
            <Text className="text-gray-300 ml-2">
              We prioritize your safety and satisfaction above all else
            </Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Feather
              name="check-circle"
              size={16}
              color="white"
              className="mt-1"
            />
            <Text className="text-gray-300 ml-2">
              Our treatments enhance your natural beauty, not made it
            </Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Feather
              name="check-circle"
              size={16}
              color="white"
              className="mt-1"
            />
            <Text className="text-gray-300 ml-2">
              We believe in education and transparency throughout your journey
            </Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Feather
              name="check-circle"
              size={16}
              color="white"
              className="mt-1"
            />
            <Text className="text-gray-300 ml-2">
              Hospital-grade standards ensure the highest level of care
            </Text>
          </View>
          <View className="flex-row items-start mb-2">
            <Feather
              name="check-circle"
              size={16}
              color="white"
              className="mt-1"
            />
            <Text className="text-gray-300 ml-2">
              We create a welcoming environment where you feel comfortable
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
