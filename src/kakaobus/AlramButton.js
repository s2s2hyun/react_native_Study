import React from "react";
import { TouchableOpacity, View, ViewBase } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "./color";

export default function AlarmButton({
  onPress,
  isBookmarked,
  style,
  NEWCOLOR,
}) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Ionicons name="alarm-outline" size={20} color={NEWCOLOR.GRAY_3_GRAY_2} />
    </TouchableOpacity>
  );
}
