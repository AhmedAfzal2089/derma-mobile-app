import { galleryImages } from "@/helpers/galleryImage";
import React, { useState } from "react";
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const galleryItems = [
  {
    id: 1,
    category: "laser-treatment",
    title: "CO2 Laser Treatment",
    description: "Skin resurfacing results",
    size: "medium",
  },
  {
    id: 2,
    category: "anti-aging",
    title: "Endolift Treatment",
    description: "Facial contouring results",
    size: "medium",
  },
  {
    id: 3,
    category: "anti-aging",
    title: "Endolift Treatment",
    description: "Skin tightening results",
    size: "small",
  },
  {
    id: 4,
    src: "/gallery/Endolift B&A1.jpeg",
    category: "anti-aging",
    title: "Endolift Treatment",
    description: "Non-surgical facelift",
    size: "medium",
  },
  {
    id: 5,
    src: "/gallery/Quad Laser B&A.jpg",
    category: "hair-removal",
    title: "Quad Laser Hair Removal",
    description: "Permanent hair reduction",
    size: "medium",
  },
  {
    id: 6,
    src: "/gallery/Quad lasier.jpg 1.jpg",
    category: "hair-removal",
    title: "Quad Laser Treatment",
    description: "Hair removal results",
    size: "medium",
  },
  {
    id: 7,
    src: "/gallery/Untitled-2.png",
    category: "skin-rejuvenation",
    title: "Skin Treatment",
    description: "Complexion improvement",
    size: "small",
  },
  {
    id: 8,
    src: "/gallery/Untitled-3.png",
    category: "skin-rejuvenation",
    title: "Skin Treatment",
    description: "Texture enhancement",
    size: "medium",
  },
  {
    id: 9,
    src: "/gallery/Untitled-4.png",
    category: "skin-rejuvenation",
    title: "Skin Treatment",
    description: "Radiance boost",
    size: "small",
  },
  {
    id: 10,
    src: "/gallery/Untitled-5.png",
    category: "skin-rejuvenation",
    title: "Skin Treatment",
    description: "Pigmentation treatment",
    size: "medium",
  },
  {
    id: 11,
    src: "/gallery/Untitled-6.png",
    category: "skin-rejuvenation",
    title: "Skin Treatment",
    description: "Tone improvement",
    size: "medium",
  },
  {
    id: 12,
    src: "/gallery/Untitled-7.png",
    category: "skin-rejuvenation",
    title: "Skin Treatment",
    description: "Overall rejuvenation",
    size: "small",
  },
  {
    id: 13,
    src: "/gallery/WhatsApp Image 2025-09-16 at 3.10.13 PM (1).jpeg",
    category: "acne-treatment",
    title: "Acne Treatment",
    description: "Clear skin transformation",
    size: "medium",
  },
  {
    id: 14,
    src: "/gallery/WhatsApp Image 2025-09-16 at 3.10.13 PM (2).jpeg",
    category: "anti-aging",
    title: "Anti-Aging Treatment",
    description: "Youthful skin restoration",
    size: "small",
  },
  {
    id: 15,
    src: "/gallery/WhatsApp Image 2025-09-16 at 3.10.13 PM (3).jpeg",
    category: "laser-treatment",
    title: "Laser Treatment",
    description: "Skin texture improvement",
    size: "medium",
  },
  {
    id: 16,
    src: "/gallery/WhatsApp Image 2025-09-16 at 3.10.13 PM (4).jpeg",
    category: "hair-removal",
    title: "Hair Removal",
    description: "Smooth skin results",
    size: "medium",
  },
  {
    id: 17,
    src: "/gallery/WhatsApp Image 2025-09-16 at 3.10.13 PM (5).jpeg",
    category: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    description: "Glowing complexion",
    size: "medium",
  },
  {
    id: 18,
    src: "/gallery/WhatsApp Image 2025-09-16 at 3.10.13 PM (6).jpeg",
    category: "acne-treatment",
    title: "Acne Treatment",
    description: "Blemish-free skin",
    size: "small",
  },
  {
    id: 19,
    src: "/gallery/WhatsApp Image 2025-09-16 at 3.10.13 PM.jpeg",
    category: "anti-aging",
    title: "Anti-Aging Care",
    description: "Age reversal results",
    size: "medium",
  },
  {
    id: 20,
    src: "/gallery/WhatsApp Image 2025-09-16 at 3.10.14 PM (1).jpeg",
    category: "laser-treatment",
    title: "Laser Therapy",
    description: "Advanced skin treatment",
    size: "medium",
  },
  {
    id: 21,
    src: "/gallery/WhatsApp Image 2025-09-16 at 3.10.14 PM.jpeg",
    category: "hair-removal",
    title: "Hair Removal Treatment",
    description: "Long-lasting results",
    size: "small",
  },
  {
    id: 22,
    src: "/gallery/WhatsApp Image 2025-09-16 at 3.12.03 PM.jpeg",
    category: "prp-hair-restoration",
    title: "PRP Hair Restoration",
    description: "Complete transformation",
    size: "medium",
  },
];

const filters = [
  { key: "all", label: "All Results" },
  { key: "acne-treatment", label: "Acne Treatment" },
  { key: "laser-treatment", label: "Laser Treatment" },
  { key: "anti-aging", label: "Anti-Aging" },
  { key: "hair-restoration", label: "Hair Restoration" },
  { key: "skin-rejuvenation", label: "Skin Rejuvenation" },
  { key: "hair-removal", label: "Hair Removal" },
];

const screenWidth = Dimensions.get("window").width;
const numColumns = 2;

export default function GalleryScreen({ showAll = true }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredItems = selectedFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedFilter);

  const displayItems = showAll ? filteredItems : filteredItems.slice(0, 8);

  const renderItem = ({ item }: any) => {
    const imageSource = galleryImages[item.id];
    if (!imageSource) return null;

    let itemHeight = 120;
    if (item.size === "medium") itemHeight = 160;
    else if (item.size === "large") itemHeight = 200;

    return (
      <View className="m-1 overflow-hidden rounded-lg bg-gray-100 shadow" style={{ flex: 1 / numColumns }}>
        <TouchableOpacity>
          <Image source={imageSource} className="w-full rounded-lg" style={{ height: itemHeight }} resizeMode="cover" />
          <View className="p-2">
            <Text className="text-sm font-semibold text-gray-800">{item.title}</Text>
            <Text className="text-xs text-gray-600">{item.description}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeader = () => (
    <View>
      {/* Header Text */}
      <View className="mb-4 px-4 mt-4">
        <Text className="text-3xl text-gray-900 mb-2 text-center font-bold">Client Success Gallery</Text>
        <Text className="text-gray-600 text-base">
          Witness the incredible transformations of our clients. These real results showcase the expertise and care that goes into every
          treatment at Derma Veritas.
        </Text>
      </View>

      <FlatList
        data={filters}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        style={{ marginBottom: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedFilter(item.key)}
            className={`px-3 py-1 rounded-full mr-2 ${selectedFilter === item.key ? "bg-gray-900" : "bg-gray-200"}`}
          >
            <Text className={`text-sm font-medium ${selectedFilter === item.key ? "text-white" : "text-gray-800"}`}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <View className="flex-1 bg-white px-2 py-4">
      <FlatList
        data={displayItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={numColumns}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* View Full Gallery Button */}
      {!showAll && (
        <TouchableOpacity
          onPress={() => {
            // navigate to full gallery screen
          }}
          className="mt-4 bg-gray-900 px-4 py-2 rounded-full self-center"
        >
          <Text className="text-white font-medium">View Full Gallery</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
