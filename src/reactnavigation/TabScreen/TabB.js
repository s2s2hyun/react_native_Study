import React from "react";
import { Button, Text, View } from "react-native";

export class TabB extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text>이것은 TabB 입니다.</Text>
      </View>
    );
  }
}
