import React, { useState } from "react";
import { StyleProp, TextStyle, TextInput, View } from "react-native";

interface SingleLineInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  onSubmitEditing: any;
}

export const SingleLineInput = (props: SingleLineInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={{
        alignSelf: "stretch",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: focused ? "black" : "gray",
      }}>
      <TextInput
        autoCorrect={false}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={[props.style, { fontSize: props.fontSize ?? 20 }]}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};
