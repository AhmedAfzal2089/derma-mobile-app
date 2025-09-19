// components/Home/RecentBlogs.tsx
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function RecentBlogs() {
  return (
    <View className="bg-zinc-950 mx-4 p-6 my-6 py-14 items-center rounded-xl">
      {/* Title */}
      <Text className="text-2xl font-bold text-center text-white mb-2">
        Recent Blogs
      </Text>

      {/* Subtitle */}
      <Text className="text-gray-300 text-center mb-6">
        Discover the latest insights, tips, and expert advice on skincare and
        aesthetic treatments.
      </Text>

      {/* "VIEW ALL BLOGS" Button */}
      <Link href="/pages/blogs/blogs" asChild>
        <TouchableOpacity className="px-6 py-4 bg-white rounded-md shadow-lg">
          <Text className="text-zinc-900 font-semibold text-base">
            VIEW ALL BLOGS
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
