import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class UseEffectWithClassComponet extends Component {
  constructor(props) {
    console.log("constructor", props);
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("didMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("didUnmount");
  }

  render() {
    console.log("render");
    return (
      <View>
        <Text>UseEffectWithClassComponet</Text>
        <Text>You Clicked {this.state.count} times</Text>
        <Button
          title="Click me "
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
      </View>
    );
  }
}
