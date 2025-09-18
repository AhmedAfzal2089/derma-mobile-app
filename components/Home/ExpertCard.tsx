// components/Home/ExpertCard.tsx
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ExpertCard() {
  return (
    <View className="bg-zinc-900 mx-4 p-6 py-12 rounded-2xl shadow-lg my-6">
      {/* Container for Image and Text, stacked vertically */}
      <View className="flex-col items-center">
        {/* Profile Image and Name/Title */}
        <View className="items-center mb-6">
          <Image
            source={require("../../public/owner.png")} // Add your image path here
            className="w-40 h-40 rounded-full mb-4"
            resizeMode="contain"
          />
          <Text className="text-white font-semibold text-lg">
            Dr Mofasher Nawaz
          </Text>
          <Text className="text-gray-400 text-sm">Owner & Founder</Text>
        </View>

        {/* Text Content */}
        <View className="items-center">
          <Text className="text-2xl font-bold text-center text-white mb-4">
            Expert skin and hair care under the trusted leadership of Dr.
            Mofasher Nawaz and Mr. A. Singh.
          </Text>
          <Text className="text-gray-300 text-center mb-6">
            Derma Veritas offers medically-led skin and dermatology clinic in
            the area, founded by a medical doctor and a clinical pharmacist with
            over 10 years experience in advanced skin and hair treatments. We
            specialize in skin resurfacing, facial tightening, non-surgical
            facelifts, and hair restoration, using the latest technology for
            safe, natural results. Our expert team are also industry trainers,
            ensuring the highest standards of care and results you can trust.
          </Text>

          {/* "Read About Us" Button */}
          <Link href="/pages/about/about" asChild>
            <TouchableOpacity className="px-6 py-3 border border-gray-500 rounded-md">
              <Text className="text-white font-semibold">READ ABOUT US</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
