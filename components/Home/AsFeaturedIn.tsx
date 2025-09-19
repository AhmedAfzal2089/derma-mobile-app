// components/Home/AsFeaturedIn.tsx
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router"; // Assuming you want to link the "More" button
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function AsFeaturedIn() {
  return (
    <View className="my-10">
      <Text className="text-2xl font-bold text-center text-balck mb-6">
        As Featured In
      </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex-row items-center px-4">
          {/* ITV */}
          <View className="items-center mr-8">
            <View className="flex-row">
              <Text className="text-3xl font-bold text-itv-teal">i</Text>
              <Text className="text-3xl font-bold text-black">t</Text>
              <Text className="text-3xl font-bold text-itv-teal">v</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-gray-400">View story </Text>
            </TouchableOpacity>
          </View>
          {/* Yahoo News */}
          <View className="items-center mr-8">
            <View className="flex-row">
              <Text className="text-3xl font-bold text-yahoo-purple">
                yahoo!
              </Text>
              <Text className="text-3xl font-bold text-yahoo-pink">news</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-gray-400">View story </Text>
            </TouchableOpacity>
          </View>
          {/* ITV News */}
          <View className="items-center mr-8">
            <Text className="text-3xl font-bold text-itv-news-blue">
              itvNEWS
            </Text>
            <TouchableOpacity>
              <Text className="text-gray-400">View story </Text>
            </TouchableOpacity>
          </View>
          {/* Women's Health */}
          <View className="items-center mr-8">
            <Text className="text-3xl font-bold text-black">
              Women&apos;s Health
            </Text>
            <TouchableOpacity>
              <Text className="text-gray-400">View story</Text>
            </TouchableOpacity>
          </View>
          {/* ITV X */}
          <View className="items-center mr-8">
            <View className="flex-row">
              <Text className="text-3xl font-bold text-itv-teal">itv</Text>
              <Text className="text-3xl font-bold text-itv-x-green">X</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-gray-400">View story </Text>
            </TouchableOpacity>
          </View>
          {/* More Button */}
          <Link href="/pages/blogs/blogs" asChild>
            <TouchableOpacity className="flex-col items-center justify-center border border-black rounded-full w-14 h-14 p-0.5">
              <Text className="text-black text-sm">MORE</Text>
              <Feather
                name="arrow-right"
                size={16}
                color="black"
                className="ml-1 "
              />
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}
