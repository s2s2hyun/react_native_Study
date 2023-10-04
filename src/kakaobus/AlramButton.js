import React from "react";
import { TouchableOpacity, View, ViewBase } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "./color";

export default function AlarmButton({ onPress, isBookmarked, style }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Ionicons
        name="alarm-outline"
        size={24}
        color={isBookmarked ? COLOR.YELLOW : COLOR.GRAY_3}
      />
    </TouchableOpacity>
  );
}
