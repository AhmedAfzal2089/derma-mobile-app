import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const PRPTherapyScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="px-5 py-10">
        <View className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <View className="flex-1">
            <View className="flex flex-row items-center gap-3 mb-4">
              <View className="w-12 h-[1px] bg-gray-400" />
              <Text className="text-gray-600 text-sm font-medium">Natural Regenerative Treatment</Text>
            </View>

            <Text className="text-3xl font-bold text-gray-900 leading-tight mb-4">
              PRP Therapy for{"\n"}Skin Rejuvenation{"\n"}& Hair Restoration
            </Text>

            <Text className="text-gray-600 text-base leading-relaxed mb-6">
              Harness your body&apos;s natural healing power with PRP Therapy. This innovative treatment uses your own platelets to stimulate
              tissue repair, restore vitality, and improve skin and hair health.
            </Text>

            <Link href="/bookings" asChild>
              <TouchableOpacity className="px-6 py-3 border-2 border-black rounded-lg">
                <Text className="text-black font-bold uppercase text-sm text-center">View Prices</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Right Image */}
          <View className="flex-1 mt-8 md:mt-0 items-center">
            <Image source={require("../../assets/wellness/PRP Therapy Vertical.jpg")} className="w-64 h-80 rounded-3xl" resizeMode="cover" />
          </View>
        </View>
      </View>

      {/* Info Cards */}
      <View className="px-5 py-8 bg-gray-50">
        <View className="bg-white border border-gray-200 p-6 rounded-2xl shadow">
          <View className="grid grid-cols-2 gap-5">
            <View>
              <Text className="text-sm text-gray-500">Results Seen</Text>
              <Text className="text-lg font-semibold text-gray-900">Improved texture & radiance</Text>
              <Text className="text-sm text-gray-500">Results develop over weeks</Text>
            </View>

            <View>
              <Text className="text-sm text-gray-500">Results Last</Text>
              <Text className="text-lg font-semibold text-gray-900">Several months</Text>
              <Text className="text-sm text-gray-500">With recommended maintenance</Text>
            </View>

            <View>
              <Text className="text-sm text-gray-500">No. of Sessions</Text>
              <Text className="text-lg font-semibold text-gray-900">3 Recommended</Text>
            </View>

            <View>
              <Text className="text-sm text-gray-500">Procedure Time</Text>
              <Text className="text-lg font-semibold text-gray-900">20–45 Minutes</Text>
              <Text className="text-sm text-gray-500">Depending on area</Text>
            </View>

            <View>
              <Text className="text-sm text-gray-500">Pain</Text>
              <Text className="text-lg font-semibold text-gray-900">Mild</Text>
            </View>

            <View>
              <Text className="text-sm text-gray-500">Downtime</Text>
              <Text className="text-lg font-semibold text-gray-900">Minimal</Text>
            </View>

            <View>
              <Text className="text-sm text-gray-500">Side Effects</Text>
              <Text className="text-lg font-semibold text-gray-900">Temporary redness, mild swelling</Text>
            </View>

            <View>
              <Text className="text-sm text-gray-500">Our Pricing</Text>
              <Text className="text-lg font-semibold text-gray-900">From £300</Text>
              <Link href="/bookings" asChild>
                <Text className="text-gray-500 text-sm underline mt-1">View all</Text>
              </Link>
            </View>
          </View>
        </View>
      </View>

      {/* What is PRP Therapy Section */}
      <View className="px-5 py-10 bg-white">
        <View className="mb-10">
          <Text className="text-2xl font-bold text-gray-900 text-center mb-4">What is PRP Therapy?</Text>
          <Text className="text-gray-600 text-base leading-relaxed text-center">
            PRP (Platelet-Rich Plasma) Therapy is a natural, non-surgical treatment that uses concentrated platelets from your own blood to
            enhance tissue repair, restore vitality, and improve skin and hair health. This innovative approach harnesses your body&apos;s
            natural healing processes for rejuvenation.
          </Text>
        </View>

        <View className="flex flex-col gap-10">
          <View>
            <Text className="text-lg font-semibold text-gray-900 mb-3">Benefits Include:</Text>
            <View className="space-y-2">
              {[
                "Enhanced tissue repair and regeneration",
                "Improved skin texture, firmness, and radiance",
                "Reduced hollows and dark circles under eyes",
                "Thicker, stronger hair growth stimulation",
                "Natural treatment using your own blood platelets",
              ].map((item, i) => (
                <Text key={i} className="text-gray-600">
                  • {item}
                </Text>
              ))}
            </View>
          </View>

          <View>
            <Text className="text-lg font-semibold text-gray-900 mb-3">Treatment Areas:</Text>
            <View className="space-y-2">
              {[
                "Full Face rejuvenation",
                "Under-Eye area for dark circles and hollows",
                "Scalp for hair growth stimulation",
                "Neck and décolletage rejuvenation",
                "Hands for age spot reduction and rejuvenation",
              ].map((item, i) => (
                <Text key={i} className="text-gray-600">
                  • {item}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* About PRP Therapy */}
      <View className="px-5 py-10 bg-white">
        <View className="flex flex-col md:flex-row gap-6 items-center">
          <Image
            source={require("../../assets/wellness/PRP Therapy Horizental.jpg")}
            className="w-full h-60 rounded-2xl"
            resizeMode="cover"
          />

          <View className="flex-1 mt-4">
            <Text className="text-2xl font-bold text-gray-900 mb-3">About PRP Therapy</Text>
            <Text className="text-gray-600 mb-3">
              Uses your own platelets to stimulate repair: face rejuvenation, under-eyes, and hair growth.
            </Text>
            <View className="space-y-1">
              <Text className="text-gray-600">• Results develop over weeks</Text>
              <Text className="text-gray-600">• Several months longevity; maintenance advised</Text>
              <Text className="text-gray-600">• 20–45 minutes; minimal downtime</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Pricing Section */}
      <View className="px-5 py-10 bg-gray-50">
        <View className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left */}
          <View className="flex-1">
            <Text className="text-sm text-gray-500">PRP Therapy Cost</Text>
            <Text className="text-3xl font-bold text-gray-900 mb-4">Our Pricing</Text>
            <Text className="text-gray-600 mb-3">
              All treatments are performed exclusively by our expert physicians and clinical specialists who are industry-leading
              professionals. Our pricing reflects the expertise and premium service you receive.
            </Text>
            <Text className="text-gray-600">
              If you would like to discuss any of our treatments, please <Text className="underline">get in touch</Text>.
            </Text>
          </View>

          {/* Right */}
          <View className="flex-1 space-y-5">
            {/* Card 1 */}
            <View className="border border-gray-200 bg-white rounded-2xl p-5 shadow">
              <View className="flex flex-row justify-between mb-4">
                <Text className="text-base font-semibold text-gray-900">PRP Therapy Packages</Text>
                <Link href="/bookings" asChild>
                  <TouchableOpacity className="px-4 py-1 border border-black rounded-lg">
                    <Text className="text-black text-sm font-medium">Book</Text>
                  </TouchableOpacity>
                </Link>
              </View>

              <View className="space-y-3">
                <View className="flex flex-row justify-between">
                  <Text className="text-gray-700">Full Face (3 Sessions):</Text>
                  <Text className="text-gray-900 font-bold">£500</Text>
                </View>
                <View className="flex flex-row justify-between">
                  <Text className="text-gray-700">Under-Eye Area (3 Sessions):</Text>
                  <Text className="text-gray-900 font-bold">£300</Text>
                </View>
                <View className="flex flex-row justify-between">
                  <Text className="text-gray-700">Hair (3 Sessions):</Text>
                  <Text className="text-gray-900 font-bold">£500</Text>
                </View>
              </View>
            </View>

            {/* Card 2 */}
            <View className="border border-gray-200 bg-white rounded-2xl p-5 shadow">
              <View className="flex flex-row justify-between mb-4">
                <Text className="text-base font-semibold text-gray-900">Additional Options</Text>
                <Link href="/bookings" asChild>
                  <TouchableOpacity className="px-4 py-1 border border-black rounded-lg">
                    <Text className="text-black text-sm font-medium">Book</Text>
                  </TouchableOpacity>
                </Link>
              </View>

              <View className="space-y-3">
                <View>
                  <View className="flex flex-row justify-between mb-1">
                    <Text className="text-gray-900 font-medium">Single Session:</Text>
                    <Text className="text-gray-900 font-bold">Consultation</Text>
                  </View>
                  <Text className="text-sm text-gray-600">Price varies by treatment area</Text>
                </View>

                <View>
                  <View className="flex flex-row justify-between mb-1">
                    <Text className="text-gray-900 font-medium">Custom Treatment Plan:</Text>
                    <Text className="text-gray-900 font-bold">Consultation</Text>
                  </View>
                  <Text className="text-sm text-gray-600">Tailored to your specific needs and goals</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PRPTherapyScreen;
