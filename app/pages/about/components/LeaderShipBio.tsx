// components/About/LeadershipBio.tsx
import { Image, Text, View } from "react-native";
export default function LeadershipBio() {
  return (
    <View className="bg-white py-12 px-7">
      <Image
        source={require("../../../../public/images/profImage.png")}
        className="w-full h-64 rounded-xl mb-8" // Full width image for mobile, adjust height
        resizeMode="cover"
      />

      {/* Content Section */}
      <View className="items-start">
        <Text className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-2">
          Dr. Mofasher Nawaz and Mr. A. Singh.
        </Text>
        <Text className="text-3xl font-bold text-zinc-800 mb-6">
          Renowned in the industry as a &quot;Master Injector&quot; and for his
          skills in the area of advanced aesthetic techniques.
        </Text>
        <Text className="text-gray-600 text-base text-left mb-4">
          At Derma Veritas, all injectors are meticulously trained by Dr.
          Mofasher Nawaz and Mr. A. Singh, to ensure the highest level of
          quality and precision in our treatments. Dr. Mofasher Nawaz and Mr. A.
          Singh, with over 27 years of experience in the aesthetics industry,
          exudes a genuine passion for his work and a strong dedication to
          providing exceptional treatments and procedures.
        </Text>
        <Text className="text-gray-600 text-base text-left">
          During his illustrious 24-year career at the NHS, Dr. Mofasher Nawaz
          and Mr. A. Singh, specialized in Rhinology and Rhinoplasty. Over the
          past decade, he has played a pioneering role in co-developing the
          <Text className="font-bold"> Non Surgical Rhinoplasty</Text>
          procedure, often referred to as the &quot;15 minute nose job&quot;.
          This innovative approach has garnered widespread acclaim for its
          effectiveness and convenience.
        </Text>
      </View>
    </View>
  );
}
