import React from "react";
import { View } from "react-native";

export class Divider extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          alignSelf: "stretch",
          borderWidth: 0.5,
          marginHorizontal: 24,
          borderColor: "gray",
        }}
      />
    );
  }
}
