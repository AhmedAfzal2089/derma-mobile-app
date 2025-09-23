import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, View } from "react-native";

const NoticeBanner = () => {
  return (
    <View className="w-full my-2 bg-gradient-to-r bg-white rounded-lg from-blue-50 to-indigo-50 border-l-4 border-blue-400 p-2">
      <View className="flex flex-row items-start gap-3">
        <View className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
          <MaterialIcons name="info" size={18} color="white" />
        </View>
        <View className="flex-1 space-y-1">
          <Text className="text-sm text-gray-800 leading-relaxed text-justify">
            <Text className="font-semibold">Important Notice: </Text>
            All minor ops consultations are conducted by highly skilled
            specialist doctors. A £50 consultation fee applies, which is fully
            refundable if you proceed with the treatment.
          </Text>

          <Text className="text-xs text-gray-600 leading-relaxed">
            Derma Veritas doesot provide treatments to those individuals under 18
            years of age.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NoticeBanner;
