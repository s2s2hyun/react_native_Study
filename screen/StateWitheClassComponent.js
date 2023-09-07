import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class StateWitheClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View>
        <Text>You Clicked {this.state.count} times</Text>
        <Button
          title="Click me "
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
      </View>
    );
  }
}
