import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Text, TouchableWithoutFeedback, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const reviews = [
  {
    id: 1,
    name: "Sapna Panesar",
    rating: 5,
    text: "Dr. Mofasher Nawaz was fantastic, couldn't recommend him more. Extremely professional and knowledgeable, highly trusted!",
  },
  {
    id: 2,
    name: "Holly Newland",
    rating: 5,
    text: "I came to see Mr. A Singh for my dermal filler treatment and I am over the moon with the results!",
  },
  {
    id: 3,
    name: "Emma Thompson",
    rating: 5,
    text: "Highly recommend Derma Veritas. Dr. Mofasher's consultation was thorough and painless.",
  },
  {
    id: 4,
    name: "Jessica Parker",
    rating: 5,
    text: "The consistency in quality is outstanding. They really know what they're doing.",
  },
];

const AUTO_SCROLL_INTERVAL = 4000;

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollInterval = useRef<NodeJS.Timer | null>(null);

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    scrollInterval.current = setInterval(() => {
      let nextIndex = (currentIndex + 1) % reviews.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, AUTO_SCROLL_INTERVAL);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [currentIndex]);

  const handleScrollEnd = (e: any) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }: any) => (
    <View style={{ width: screenWidth }} className="px-4">
      <View className="bg-gray-100 rounded-2xl p-6 shadow-md min-h-[280px] justify-between">
        <View>
          <View className="flex-row mb-3">
            {[...Array(item.rating)].map((_, i) => (
              <FontAwesome key={i} name="star" size={18} color="#f59e0b" />
            ))}
          </View>
          <Text className="text-lg font-semibold text-gray-800 mb-2">{item.name}</Text>
          <Text className="text-base text-gray-700 leading-relaxed">{item.text}</Text>
        </View>
        <View className="mt-4 flex-row items-center">
          <Text className="text-xs font-semibold text-gray-400">— Google Review</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View className="py-10">
      <Text className="text-2xl font-semibold text-gray-900 text-center mb-6">What our clients have to say...</Text>

      <TouchableWithoutFeedback onPressIn={stopAutoScroll} onPressOut={startAutoScroll}>
        <FlatList
          ref={flatListRef}
          data={reviews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollEnd}
          snapToInterval={screenWidth}
          decelerationRate="fast"
          getItemLayout={(data, index) => ({
            length: screenWidth,
            offset: screenWidth * index,
            index,
          })}
          initialScrollIndex={currentIndex}
          onScrollToIndexFailed={() => {
            setTimeout(() => {
              flatListRef.current?.scrollToIndex({ index: 0, animated: true });
            }, 500);
          }}
        />
      </TouchableWithoutFeedback>

      {/* Pagination Dots */}
      <View className="flex-row justify-center mt-4 space-x-2">
        {reviews.map((_, i) => (
          <View key={i} className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-gray-800" : "bg-gray-300"}`} />
        ))}
      </View>
    </View>
  );
}
