import React, { useState } from "react";
import { TouchableOpacity, View, ViewBase } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "./color";

const useBookmark = (initialIsBookmarked) => {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);
  const toggleIsBookmarked = () => setIsBookmarked(!isBookmarked);

  return {
    isBookmarked,
    toggleIsBookmarked,
  };
};

export default function BookmarkButton({
  onPress,
  isBookmarked: isBookmarkedProp,
  style,
  size,
  NEWCOLOR,
}) {
  const { isBookmarked, toggleIsBookmarked } = useBookmark(isBookmarkedProp);

  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        toggleIsBookmarked();
        onPress();
      }}>
      <Ionicons
        name="star"
        size={size}
        color={isBookmarked ? COLOR.YELLOW : NEWCOLOR.GRAY_1_GRAY4}
      />
    </TouchableOpacity>
  );
}
