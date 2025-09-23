import { Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";

const CustomHeader = () => {
  const onLogoClick = () => {
    router.replace("/");
  };

  return (
    <View className="flex-row items-center justify-between px-4 py-3 mt-10 bg-zinc-900 border-b">
      {/* Logo */}
      <TouchableOpacity onPress={onLogoClick}>
        <Image
          source={require("../assets/logos/logo_white.png")}
          className="w-24 h-8"
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Cart Icon */}
      <Link href="/cart" asChild>
        <TouchableOpacity>
          <Feather name="shopping-cart" size={24} color="white" />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default CustomHeader;
