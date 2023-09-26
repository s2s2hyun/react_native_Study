import React from "react";
import { TouchableOpacity, View, ViewBase } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "./color";

export default function BookmarkButton({ onPress, isBookmarked, style }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Ionicons
        name="star"
        size={24}
        color={isBookmarked ? COLOR.YELLOW : COLOR.GRAY_1}
      />
    </TouchableOpacity>
  );
}
