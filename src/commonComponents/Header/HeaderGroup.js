import React from "react";

import { View } from "react-native";

export class HeaderGroup extends React.PureComponent {
  render() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {this.props.children}
      </View>
    );
  }
}
