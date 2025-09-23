import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const previewImages = [
  require("../../assets/gallery/CO2 Laser B&A 1.jpg"),
  require("../../assets/gallery/Untitled-2.png"),
  require("../../assets/gallery/Untitled-5.png"),
  require("../../assets/gallery/Untitled-7.png"),
  require("../../assets/gallery/WhatsApp Image 2025-09-16 at 3.10.13 PM (2).jpeg"),
  require("../../assets/gallery/WhatsApp Image 2025-09-16 at 3.10.13 PM (4).jpeg"),
];

const HomePageGalleryPreview = () => {
  return (
    <View className="px-4 py-6 bg-white">
      {/* Header */}
      <Text className="text-2xl font-bold text-center mb-4 text-gray-900">Client Success Gallery</Text>
      <Text className="text-center text-gray-600 mb-6 text-base">Explore a few stunning results from our clients.</Text>

      {/* Image Grid */}
      <View className="flex-row flex-wrap justify-between">
        {previewImages.slice(0, 6).map((img, index) => (
          <View
            key={index}
            className="mb-3"
            style={{
              width: "48%",
              aspectRatio: 1,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Image source={img} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
          </View>
        ))}
      </View>

      {/* View Full Gallery Button */}
      <Link href={"/gallery"} asChild>
        <TouchableOpacity className="mt-6 bg-gray-900 px-5 py-3 rounded-full self-center">
          <Text className="text-white font-semibold text-base">View Full Gallery</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default HomePageGalleryPreview;
