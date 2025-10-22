import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function PolynucleotideTreatmentScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="px-6 py-10">
        <View className="items-center mb-6">
          <View className="flex-row items-center justify-center mb-3">
            <View className="w-12 h-px bg-gray-400" />
            <Text className="text-gray-600 text-sm font-medium tracking-wide ml-3">Regenerative Skin & Hair Treatment</Text>
          </View>

          <Text className="text-4xl font-bold text-gray-900 text-center leading-tight">
            Polynucleotide{"\n"}Treatments for{"\n"}skin & hair renewal
          </Text>

          <Text className="text-gray-600 text-lg text-center mt-4 leading-relaxed">
            Powerful regenerative molecules that revitalize and repair skin at a cellular level, improving elasticity, reducing fine lines,
            and restoring a youthful glow.
          </Text>
        </View>

        <View className="flex-row justify-center mt-6">
          <Link href="/bookings" asChild>
            <TouchableOpacity className="px-8 py-4 border-2 border-gray-900 rounded-lg">
              <Text className="text-gray-900 font-bold uppercase text-sm">View Prices</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View className="items-center mt-10">
          <Image
            source={require("../../assets/skin_care/Polynucleotide Vertical.jpg")}
            className="w-72 h-96 rounded-3xl"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Card Section */}
      <View className="bg-gray-50 px-6 py-8">
        <View className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
          <View className="flex-row flex-wrap justify-between">
            {[
              { heading: "Visible Results", value: "Smoother, firmer, rejuvenated skin" },
              { heading: "Results Last", value: "3–6 Months" },
              { heading: "No. of Sessions", value: "1–3 Sessions" },
              { heading: "Procedure Time", value: "20–45 Minutes" },
              { heading: "Discomfort", value: "Mild" },
              { heading: "Downtime", value: "Minimal" },
              { heading: "Side Effects", value: "Temporary redness, mild swelling or tenderness" },
              { heading: "Our Pricing", value: "From £190" },
            ].map((item, i) => (
              <View key={i} className="w-[48%] mb-4">
                <Text className="text-gray-600 text-sm">{item.heading}</Text>
                <Text className="text-lg font-semibold text-gray-900 mt-1">{item.value}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Treatment Info Section */}
      <View className="px-6 py-10 bg-white">
        <Text className="text-3xl font-bold text-gray-900 text-center mb-6">What are Polynucleotide Treatments?</Text>
        <Text className="text-gray-600 text-lg text-center leading-relaxed mb-10">
          Polynucleotide treatments are powerful, regenerative molecules derived from natural sources that help revitalize and repair skin
          at a cellular level. These advanced treatments improve skin elasticity, reduce fine lines, and restore a youthful glow. They are
          also highly effective for hair restoration, promoting thicker, fuller hair growth.
        </Text>

        <View className="flex-row justify-between">
          <View className="w-[48%]">
            <Text className="text-xl font-semibold text-gray-900 mb-4">Benefits Include:</Text>
            {[
              "Improved skin elasticity and firmness",
              "Reduction in fine lines and wrinkles",
              "Enhanced skin hydration and radiance",
              "Thicker, fuller hair growth",
              "Reduced under-eye puffiness and dark circles",
            ].map((benefit, index) => (
              <View key={index} className="flex-row items-start mb-3">
                <Feather name="check-circle" size={18} color="#22c55e" />
                <Text className="text-gray-600 ml-2 flex-1">{benefit}</Text>
              </View>
            ))}
          </View>

          <View className="w-[48%]">
            <Text className="text-xl font-semibold text-gray-900 mb-4">Treatment Areas:</Text>
            {[
              "Full face rejuvenation and revitalization",
              "Under-eye area for reduced puffiness and dark circles",
              "Neck and décolletage for improved texture",
              "Scalp for hair restoration and growth",
              "Hands for age-related rejuvenation",
            ].map((area, index) => (
              <View key={index} className="flex-row items-start mb-3">
                <View className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <Text className="text-gray-600 ml-2 flex-1">{area}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* About Section */}
      <View className="px-6 py-10 bg-white">
        <View className="items-center mb-8">
          <Image
            source={require("../../assets/skin_care/Polynucleotide Horizental.jpg")}
            className="w-80 h-56 rounded-2xl"
            resizeMode="cover"
          />
        </View>

        <Text className="text-2xl font-bold text-gray-900 mb-2">About Polynucleotides</Text>
        <Text className="text-gray-600 text-lg mb-4">
          Regenerative molecules to repair, hydrate, and rejuvenate skin; also effective for hair.
        </Text>
        <Text className="text-gray-600">
          • Results in 2–4 weeks; optimal after series{"\n"}• Lasts 3–6 months{"\n"}• 20–45 minutes, minimal downtime
        </Text>
      </View>

      {/* Pricing Section */}
      <View className="bg-gray-50 px-6 py-10">
        <Text className="text-4xl font-bold text-gray-900 mb-6">Our Pricing</Text>
        <Text className="text-gray-600 mb-6">
          All treatments are performed exclusively by our expert physicians and clinical pharmacy leads who are industry-leading trainers.
          Our pricing reflects the expertise and premium service you receive.
        </Text>

        {/* Face Treatments */}
        <View className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
          <View className="flex-row justify-between mb-4">
            <Text className="text-base font-semibold text-gray-900">Face Treatments</Text>
            <Link href="/bookings" asChild>
              <TouchableOpacity className="px-4 py-1 border border-gray-900 rounded-lg">
                <Text className="text-gray-900 font-medium text-sm">BOOK</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <Text className="text-gray-700 mb-2">1 Session: £190</Text>
          <Text className="text-gray-700 mb-2">2 Sessions: £350</Text>
          <Text className="text-gray-700">3 Sessions: £500</Text>
        </View>

        {/* Hair Restoration */}
        <View className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
          <View className="flex-row justify-between mb-4">
            <Text className="text-base font-semibold text-gray-900">Hair Restoration</Text>
            <Link href="/bookings" asChild>
              <TouchableOpacity className="px-4 py-1 border border-gray-900 rounded-lg">
                <Text className="text-gray-900 font-medium text-sm">BOOK</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <Text className="text-gray-700 mb-2">1 Session: £250</Text>
          <Text className="text-gray-700 mb-2">2 Sessions: £450</Text>
          <Text className="text-gray-700">3 Sessions: £600</Text>
        </View>

        {/* Eye Area */}
        <View className="bg-white border border-gray-200 rounded-lg p-5">
          <View className="flex-row justify-between mb-4">
            <Text className="text-base font-semibold text-gray-900">Eye Area Treatments</Text>
            <Link href="/bookings" asChild>
              <TouchableOpacity className="px-4 py-1 border border-gray-900 rounded-lg">
                <Text className="text-gray-900 font-medium text-sm">BOOK</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <Text className="text-gray-700 mb-2">1 Session: £220</Text>
          <Text className="text-gray-700 mb-2">2 Sessions: £400</Text>
          <Text className="text-gray-700">3 Sessions: £550</Text>
        </View>
      </View>
    </ScrollView>
  );
}
