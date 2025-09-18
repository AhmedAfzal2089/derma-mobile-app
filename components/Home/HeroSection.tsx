import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const HeroSection = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-800 py-28">
      {/* Content Container */}
      <View className="items-center p-4 gap-10">
        <Text className="text-5xl font-bold text-center text-white mb-2">
          Derma Veritas
        </Text>
        <Text className="text-3xl font-light text-center text-white">
          Doctor Led {"\n"} Skin & Hair Clinic
        </Text>

        {/* Call-to-Action Buttons */}
        <View className="flex-col gap-6 mt-6">
          {/* Treatments Button */}
          <Link href="/pages/treatments/treatements" asChild>
            <TouchableOpacity className="px-6 py-3 bg-white border rounded-md">
              <Text className="text-black text-base font-semibold">
                Our Treatments
              </Text>
            </TouchableOpacity>
          </Link>

          {/* Products Button */}
          <Link href="/pages/treatments/treatements" asChild>
            <TouchableOpacity className="px-6 py-3 bg-white border rounded-md">
              <Text className="text-black text-base font-semibold">
                Our Products
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default HeroSection;
