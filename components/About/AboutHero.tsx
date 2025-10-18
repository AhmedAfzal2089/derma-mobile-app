// components/AboutHero.tsx
import { Text, View } from "react-native";

export default function AboutHero() {
  return (
    <View className="items-center px-4 py-16 bg-white">
      <View className="items-center px-4 py-16 bg-zinc-950 rounded-xl">
        <Text className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-2">
          About Derma Veritas
        </Text>
        <Text className="text-4xl font-bold text-white mb-4">About Us</Text>
        <Text className="text-base text-gray-300 text-center">
          Dr. Mofasher Nawaz and Mr. A. Singh is a leading cosmetic specialist,
          and the owner and founder of Derma Veritas.
        </Text>
      </View>
    </View>
  );
}
