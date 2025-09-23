import React from "react";
import { ActivityIndicator, View } from "react-native";

type SpinnerProps = {
  size?: "small" | "large";
  color?: string;
};

const Spinner: React.FC<SpinnerProps> = ({ size = "small", color = "#fff" }) => {
  return (
    <View className="flex justify-center items-center">
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Spinner;
