import { Alert, Pressable, Text, View } from "react-native";
import { auth } from "../config/firebase";

const Profile = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      Alert.alert("Logged out", "You have been logged out successfully.");
    } catch (error) {
      Alert.alert("Logout Error", "Failed to logout. Please try again.");
      console.error("Logout error:", error);
    }
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Text> This is Profile</Text>
      <Pressable onPress={handleLogout} className="w-3/4 py-3 rounded-lg items-center bg-black">
        <Text className="text-white font-semibold text-base">Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
