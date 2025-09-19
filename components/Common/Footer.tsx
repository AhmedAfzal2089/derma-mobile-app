// components/Home/Footer.tsx
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Footer() {
  return (
    <View className="bg-zinc-800 p-6">
      {/* Derma Veritas Section */}
      <View className="mb-8">
        <Text className="text-xl font-bold text-white mb-4">Derma Veritas</Text>
        <View className="flex-row items-center mb-2">
          <Feather name="mail" size={16} color="white" />
          <Text className="text-gray-300 ml-2">info@dermaveritas.com</Text>
        </View>
        <View className="flex-row items-center mb-2">
          <Feather name="phone" size={16} color="white" />
          <Text className="text-gray-300 ml-2">+44-7741-340615</Text>
        </View>
        <View className="flex-row items-center mb-2">
          <Feather name="phone" size={16} color="white" />
          <Text className="text-gray-300 ml-2">01902243398</Text>
        </View>
      </View>

      {/* Quick Links Section */}
      <View className="mb-8">
        <Text className="text-xl font-bold text-white mb-4">Quick Links</Text>
        <Link href="/about" asChild>
          <TouchableOpacity className="mb-2">
            <Text className="text-gray-300">About Us</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/pages/membership/membership" asChild>
          <TouchableOpacity className="mb-2">
            <Text className="text-gray-300">Our Services</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/pages/treatments/treatements" asChild>
          <TouchableOpacity className="mb-2">
            <Text className="text-gray-300">Pricing Plans</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/pages/membership/membership" asChild>
          <TouchableOpacity className="mb-2">
            <Text className="text-gray-300">Membership</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/pages/blogs/blogs" asChild>
          <TouchableOpacity className="mb-2">
            <Text className="text-gray-300">Contact Us</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/pages/membership/membership" asChild>
          <TouchableOpacity className="mb-2">
            <Text className="text-gray-300">Meet Our Team</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Business Hours & Location Section */}
      <View className="mb-8">
        <Text className="text-xl font-bold text-white mb-4">
          Business Hours
        </Text>
        <View className="flex-row items-center mb-2">
          <Feather name="clock" size={16} color="white" />
          <View className="ml-2">
            <Text className="text-gray-300">
              Monday - Friday: 11:00 - 19:00
            </Text>
            <Text className="text-gray-300">Saturday: 8:00 - 18:00</Text>
            <Text className="text-gray-300">Sunday: Closed</Text>
          </View>
        </View>

        <Text className="text-xl font-bold text-white mt-4 mb-2">Location</Text>
        <View className="flex-row items-start">
          <Feather name="map-pin" size={16} color="white" />
          <Text className="text-gray-300 ml-2">
            Unit 2 Oak Tree House{"\n"}Oak Tree Rise, Codsall{"\n"}
            Wolverhampton, WV8 1DT{"\n"}United Kingdom
          </Text>
        </View>
      </View>

      {/* Follow Us Section */}
      <View className="mb-8">
        <Text className="text-xl font-bold text-white mb-4">Follow Us</Text>
        <Text className="text-gray-300 mb-4">
          Stay connected with us on social media
        </Text>
        <View className="flex-row space-x-4 gap-4">
          <TouchableOpacity className="bg-blue-600 w-10 h-10 rounded-full items-center justify-center">
            <FontAwesome5 name="facebook-f" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-fuchsia-600 w-10 h-10 rounded-full items-center justify-center">
            <FontAwesome5 name="instagram" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-black w-10 h-10 rounded-full items-center justify-center">
            <FontAwesome5 name="tiktok" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-orange-500 w-10 h-10 rounded-full items-center justify-center">
            <FontAwesome5 name="reddit" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Copyright Section */}
      <View className="border-t border-gray-700 pt-4 mt-4">
        <Text className="text-gray-500 text-sm text-center">
          © 2023 Derma Veritas. All rights reserved.
        </Text>
        <View className="flex-row justify-center mt-2">
          <Link href="/(tabs)" asChild>
            <Text className="text-gray-500 text-sm mx-2 underline">
              Privacy Policy
            </Text>
          </Link>
          <Link href="/(tabs)" asChild>
            <Text className="text-gray-500 text-sm mx-2 underline">
              Terms of Service
            </Text>
          </Link>
          <Link href="/(tabs)" asChild>
            <Text className="text-gray-500 text-sm mx-2 underline">
              Cookie Policy
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
