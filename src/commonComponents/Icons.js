import React from "react";
import { Ionicons } from "@expo/vector-icons";
export class Icon extends React.Component {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={this.props.size}
        color={this.props.color}
      />
    );
  }
}

// https://ionic.io/ionicons 웹사이트에 name string 으로 되어져 있어서 웹페이지 참고후 props 로 네임을 전달하면됨
