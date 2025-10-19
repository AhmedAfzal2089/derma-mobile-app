import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const slides = [
  {
    id: 1,
    title: "Special Offer",
    description: "Experience the glow you deserve with our expert care.",
    image: require("../../assets/gallery/slider_pic_1.png"),
  },
  {
    id: 2,
    title: "Special Offer",
    description: "Personalized treatments designed just for you.",
    image: require("../../assets/gallery/slider_pic_1.png"),
  },
  {
    id: 3,
    title: "Special Offer",
    description: "Let your skin shine — naturally and beautifully.",
    image: require("../../assets/gallery/slider_pic_1.png"),
  },
];

export default function ImageCarousel() {
  return (
    <View className="h-[350px]">
      <Swiper
        autoplay
        autoplayTimeout={3.5}
        showsPagination
        loop
        dot={<View className="w-2 h-2 bg-gray-300 mx-1 rounded-full" />}
        activeDot={<View className="w-3 h-2 bg-black mx-1 rounded-full" />}
      >
        {slides.map((item) => (
          <View key={item.id} className="relative flex flex-row items-center bg-gray-300 rounded-2xl overflow-hidden h-[300px]">
            {/* Left Text Section */}
            <View className="flex-1 justify-center px-5 pr-10 z-10">
              <Text className="text-3xl font-extrabold text-black mb-2">{item.title}</Text>
              <View className="pr-8">
                <Text className="text-gray-600 text-base leading-5 mb-4">{item.description}</Text>
              </View>
              <Pressable className="bg-black rounded-full w-[120px] py-2">
                <Text className="text-white text-center font-semibold">Get Offer</Text>
              </Pressable>
            </View>

            {/* Right Image Section */}
            <View className="absolute right-0 w-[65%] h-full">
              <Image source={item.image} resizeMode="cover" className="w-full h-full opacity-95" />
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
}
