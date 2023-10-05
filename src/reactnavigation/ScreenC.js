import React from "react";
import { View, Text, Button } from "react-native";

export class ScreenC extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>이것은 C Screen 입니다.</Text>
        <Button
          title="뒤로가기"
          onPress={() => {
            console.log("뒤로가기");
          }}
        />
      </View>
    );
  }
}
