import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function FriendSection(props) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "grey" }}>친구{props.friendProfileLen}</Text>
      <TouchableOpacity onPress={props.onPressArrow}>
        <MaterialIcons
          name={props.isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="lightgrey"
        />
      </TouchableOpacity>
    </View>
  );
}
