import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type CustomCheckboxProps = {
  checked: boolean;
  onToggle: (checked: boolean) => void;
  label: string;
};

const CustomCheckbox = ({ checked, onToggle, label }: CustomCheckboxProps) => {
  return (
    <TouchableOpacity
      onPress={() => onToggle(!checked)}
      className="flex-row items-center px-4 py-2 rounded-xl mb-3"
      activeOpacity={0.8}
    >
      <View
        className={`w-5 h-5 mr-3 rounded border border-zinc-400 items-center justify-center ${
          checked ? "bg-black border" : "bg-white"
        }`}
      >
        {checked && <Entypo name="check" size={16} color="white" />}
      </View>

      <Text className="flex-1 text-zinc-800 text-sm">{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
