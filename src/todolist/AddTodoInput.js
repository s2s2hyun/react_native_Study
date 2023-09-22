import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ITEM_WIDTH, bottomSpace } from "./utils";
import { AntDesign } from "@expo/vector-icons";

export default function AddTodoInput({
  value,
  onChangeText,
  placeholder,
  onPressAdd,
}) {
  return (
    <View
      style={{
        paddingBottom: bottomSpace,
        flexDirection: "row",
        alignItems: "center",
      }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ flex: 1, padding: 15 }}
        placeholder={placeholder}
      />
      <TouchableOpacity onPress={onPressAdd} style={{ padding: 5 }}>
        <AntDesign name="plus" size={18} color="#595959" />
      </TouchableOpacity>
    </View>
  );
}
