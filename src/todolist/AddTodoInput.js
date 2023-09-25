import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ITEM_WIDTH, bottomSpace } from "./utils";
import { AntDesign } from "@expo/vector-icons";

export default function AddTodoInput({
  value,
  onChangeText,
  placeholder,
  onPressAdd,
  onSubmitEditing,
  onFocus,
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
        // 키보드 완료 버튼 눌렀을시 submit 게시글 작성
        onSubmitEditing={onSubmitEditing}
        // 게시글 작성후 키보드가 내려가는걸 방지
        blurOnSubmit={false}
        onFocus={onFocus}
      />
      <TouchableOpacity onPress={onPressAdd} style={{ padding: 5 }}>
        <AntDesign name="plus" size={18} color="#595959" />
      </TouchableOpacity>
    </View>
  );
}
