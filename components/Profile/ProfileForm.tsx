import { auth } from "@/app/config/firebase";
import { UserProfile } from "@/app/models/user-profile.model";
import { formatDate } from "@/app/utils/formatDate";
import { parseDateOrNull } from "@/app/utils/parseDateOrNull";
import { Feather } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

type Props = {
  profile: UserProfile | null;
};

const ProfileForm: React.FC<Props> = ({ profile }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formData, setFormData] = useState({
    name: profile?.name || "",
    phone: profile?.phone || "",
    address: profile?.address || "",
    dateOfBirth: parseDateOrNull(profile?.dateOfBirth),
  });

  const handleDiscard = () => {
    setFormData({
      name: profile?.name || "",
      phone: profile?.phone || "",
      address: profile?.address || "",
      dateOfBirth: profile?.dateOfBirth ? new Date(profile.dateOfBirth) : new Date(),
    });
    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const token = await auth.currentUser?.getIdToken();
      console.log("Token", token);
      console.log("Form Data", formData);
      const res = await fetch(`https://derma-veritas.vercel.app/api/user/profile/${profile?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update profile");
      const data = await res.json();

      Toast.show({
        type: "success",
        text1: `Profile Edited Successfully`,
      });
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      Toast.show({
        type: "error",
        text1: `Error updating profile`,
      });
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <View className="flex-1">
      <ScrollView className={`flex-1 bg-white px-2 rounded-xl py-2 ${isSaving ? "opacity-30" : "opacity-100"}`} scrollEnabled={!isSaving}>
        <ScrollView className="flex-1 bg-white px-2 rounded-xl py-2">
          <View className="d-flex flex-row justify-between items-center">
            <View className="self-start flex flex-row justify-center items-center gap-2 mb-2">
              <View className="w-16 h-16 rounded-full bg-black flex flex-row justify-center items-center">
                <Text className="text-4xl text-white">{profile?.name?.slice(0, 1)}</Text>
              </View>
              <View>
                <Text className="font-bold text-lg">{profile?.name}</Text>
                <View className="flex flex-row justify-center items-center gap-1">
                  <Ionicons name="calendar" size={16} color="black" />
                  <Text className="text-sm">Member since {formatDate(profile?.createdAt)}</Text>
                </View>
              </View>
            </View>
            {/* Icons */}
            <View className="pl-2">
              {!isEditing ? (
                <TouchableOpacity onPress={() => setIsEditing(true)}>
                  <Feather name="edit" size={28} color="black" />
                </TouchableOpacity>
              ) : (
                <View className="flex flex-row gap-2">
                  <TouchableOpacity className="bg-red-600 h-10 w-10 flex justify-center items-center rounded-full" onPress={handleDiscard}>
                    <Entypo name="cross" size={28} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-green-600 h-10 w-10 flex justify-center items-center rounded-full" onPress={handleSave}>
                    <MaterialIcons name="done" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          <View>
            <Text className="font-bold mb-1">Full Name:</Text>
            <TextInput
              placeholder="Full Name"
              editable={isEditing}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              className="w-full border border-zinc-300 rounded-lg px-2 py-3 mb-4 text-base text-zinc-900"
              value={formData.name}
            />
          </View>
          <View>
            <Text className="font-bold mb-1">Email:</Text>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              className="w-full border border-zinc-300 bg-gray-200 rounded-lg px-2 py-3 mb-4 text-base text-zinc-900"
              value={profile?.email}
              editable={false}
            />
          </View>
          <View>
            <Text className="font-bold mb-1">Phone Number:</Text>
            <TextInput
              editable={isEditing}
              placeholder="Phone Number"
              className="w-full border border-zinc-300 rounded-lg px-2 py-3 mb-4 text-base text-zinc-900"
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
            />
          </View>

          <View>
            <Text className="font-bold mb-1">Date of Birth</Text>
            <View className="border border-gray-300 rounded-lg flex flex-row justify-between items-center py-3 px-4">
              <Text>{formData?.dateOfBirth ? formData.dateOfBirth.toLocaleDateString("en-GB") : "DD/MM/YYYY"}</Text>

              {isEditing && (
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                  <Ionicons name="calendar" size={24} color="black" />
                </TouchableOpacity>
              )}
            </View>

            {showDatePicker && (
              <DateTimePicker
                value={formData?.dateOfBirth ?? new Date()}
                mode="date"
                display="default"
                onChange={(e, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    setFormData({ ...formData, dateOfBirth: selectedDate });
                  }
                }}
              />
            )}
          </View>

          <View>
            <Text className="font-bold mb-1">Address:</Text>
            <TextInput
              placeholder="Enter your Address"
              editable={isEditing}
              onChangeText={(text) => setFormData({ ...formData, address: text })}
              className="w-full border border-zinc-300 rounded-lg px-2 py-3 mb-4 text-base text-zinc-900"
              value={formData?.address}
            />
          </View>
        </ScrollView>
      </ScrollView>

      {isSaving && (
        <View className="absolute inset-0 flex justify-center items-center bg-black/20">
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </View>
  );
};

export default ProfileForm;
