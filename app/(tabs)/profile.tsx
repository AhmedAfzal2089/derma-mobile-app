import { Pressable, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { auth } from "../config/firebase";
import { useAuth } from "../context/AuthProvider";

const Profile = () => {
  const { user, profile, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      Toast.show({
        type: "success",
        text1: "You have been logged out successfully.",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Failed to logout. Please try again..",
      });
      console.error("Logout error:", error);
    }
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Text> This is Profile</Text>
      <View className="flex items-center justify-center">
        <Text>Email: {profile?.email}</Text>
        <Text>Name: {profile?.displayName || "Not set"}</Text>
        <Text>Role: {profile?.role || "User"}</Text>
        <Text>Phone: {profile?.phone || "N/A"}</Text>
      </View>
      <Pressable onPress={handleLogout} className="w-3/4 py-3 rounded-lg items-center bg-black">
        <Text className="text-white font-semibold text-base">Logout</Text>
      </Pressable>
      {/* <Pressable onPress={handleShow} className="w-3/4 py-3 rounded-lg items-center bg-black">
        <Text className="text-white font-semibold text-base">Show</Text>
      </Pressable> */}
    </View>
  );
};

export default Profile;
