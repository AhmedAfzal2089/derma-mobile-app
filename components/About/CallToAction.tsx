// components/About/CallToActionClinician.tsx
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function CallToAction() {
  return (
    <View className="bg-zinc-950 py-16 px-6 items-center">
      {/* Title */}
      <Text className="text-3xl font-bold text-center text-white mb-4">
        Ready to meet your Clinician in Person?
      </Text>

      {/* Description */}
      <Text className="text-gray-300 text-base text-center mb-8 max-w-md">
        Schedule a consultation with one of our specialists to discuss your Skin
        & Hair goals and develop a personalized treatment plan.
      </Text>

      {/* "Book a Consultation" Button */}
      <Link href="/pages/bookings/bookings" asChild>
        <TouchableOpacity className="px-8 py-4 bg-white rounded-md shadow-lg">
          <Text className="text-zinc-900 font-semibold text-base">
            BOOK A CONSULTATION
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
