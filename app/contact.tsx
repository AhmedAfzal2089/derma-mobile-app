// app/contact.tsx
import Footer from "@/components/Common/Footer";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ContactScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="py-12 px-6">
        {/* Main Section Header */}
        <Text className="text-sm text-gray-400 font-medium text-center mb-2">
          Contact Derma Veritas
        </Text>
        <Text className="text-4xl font-bold text-center text-zinc-800 mb-4">
          Contact Us
        </Text>
        <Text className="text-gray-600 text-center mb-8">
          See below for how to contact Derma Veritas to start your journey in
          enhancing your natural beauty.
        </Text>

        {/* Contact Info and Form Container */}
        <View className="w-full">
          {/* Contact Info Section */}
          <View className="bg-white p-6 rounded-2xl mb-8">
            <Text className="text-3xl font-bold text-zinc-800 mb-6">
              Get in touch with our team today
            </Text>

            <View className="mb-6">
              <View className="flex-row items-center mb-2">
                <Feather name="mail" size={20} color="#333" />
                <Text className="text-gray-600 ml-3">
                  info@dermaveritas.com
                </Text>
              </View>
              <View className="flex-row items-center mb-2">
                <Feather name="phone" size={20} color="#333" />
                <Text className="text-gray-600 ml-3">+44-7741-340615</Text>
              </View>
            </View>

            <Link href="/bookings" asChild>
              <TouchableOpacity className="w-full bg-zinc-900 px-6 py-4 rounded-md items-center">
                <Text className="text-white font-semibold">
                  BOOK A CONSULTATION
                </Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Contact Form Section */}
          <View className="w-full bg-white p-6 rounded-2xl">
            <Text className="text-lg font-bold text-zinc-800 mb-4">
              Send us a message
            </Text>

            <Text className="text-sm text-zinc-800 mb-1">Your Name*</Text>
            <TextInput
              className="w-full p-4 border border-gray-300 rounded-md mb-4 text-zinc-800"
              placeholder="Your first & last name"
            />

            <Text className="text-sm text-zinc-800 mb-1">Email Address*</Text>
            <TextInput
              className="w-full p-4 border border-gray-300 rounded-md mb-4 text-zinc-800"
              placeholder="Your Email Address"
            />

            <Text className="text-sm text-zinc-800 mb-1">Phone No*</Text>
            <TextInput
              className="w-full p-4 border border-gray-300 rounded-md mb-4 text-zinc-800"
              placeholder="Please provide your mobile."
            />

            <Text className="text-sm text-zinc-800 mb-1">Message</Text>
            <TextInput
              className="w-full h-32 p-4 border border-gray-300 rounded-md mb-6 text-zinc-800"
              placeholder="Enter your message here"
              multiline
            />

            <View className="flex-row items-center mb-6">
              <Switch />
              <Text className="text-gray-600 ml-3 flex-1">
                I would like to occasionally receive news & offers from Derma
                Veritas.
              </Text>
            </View>

            <TouchableOpacity className="w-full bg-zinc-900 px-6 py-4 rounded-md items-center">
              <Text className="text-white font-semibold">SEND MESSAGE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
