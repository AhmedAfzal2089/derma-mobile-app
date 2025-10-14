import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ScrollView, Text, View } from "react-native";
import { UserProfile } from "../../models/user-profile.model";

type Props = {
  profile: UserProfile | null;
};

const AccountStatus: React.FC<Props> = ({ profile }) => {
  return (
    <ScrollView className="flex-1 my-3">
      <View className="w-full rounded-xl bg-white shadow-2xl py-2 px-6">
        <View className="flex flex-row justify-center items-center gap-1">
          <FontAwesome6 name="shield-halved" size={24} color="black" />
          <Text>Account Status</Text>
        </View>
        <View className="flex flex-row justify-between items-center my-2">
          <Text>Status</Text>
          <Text className="bg-green-300 rounded-2xl px-4 py-1">{profile?.isBanned ? "Inactive" : "Active"}</Text>
        </View>
        <View className="flex flex-row justify-between items-center my-2">
          <Text>Role</Text>
          <Text className="bg-green-300 rounded-2xl px-4 py-1">
            {profile?.role ? profile.role.charAt(0).toUpperCase() + profile.role.slice(1) : ""}
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center my-2">
          <Text>Membership</Text>
          <Text className="bg-green-300 rounded-2xl px-4 py-1">None</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountStatus;
