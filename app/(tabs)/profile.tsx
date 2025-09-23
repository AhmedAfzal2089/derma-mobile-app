import AccountStatus from "@/components/Profile/AccountStatus";
import ProfileForm from "@/components/Profile/ProfileForm";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Pressable, ScrollView, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { auth } from "../config/firebase";
import { useAuth } from "../context/AuthProvider";
const Profile = () => {
  const { profile, loading } = useAuth();

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
    <ScrollView className="flex-1 pb-20">
      <View className="flex items-center justify-center">
        <Text className="text-2xl font-bold mt-3 mb-1">Profile Settings</Text>
        <ScrollView className="flex-1 w-full px-1 pb-28">
          <ProfileForm profile={profile} />
          <AccountStatus profile={profile} />
          <View className="w-full py-3 rounded-xl mt-2 flex flex-row justify-center items-center bg-black gap-2">
            <SimpleLineIcons name="logout" size={16} color="white" />
            <Pressable onPress={handleLogout}>
              <Text className="text-white font-semibold text-base">Logout</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Profile;
