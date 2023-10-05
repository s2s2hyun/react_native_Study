import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import { View } from "react-native";
import { ScreenC } from "./ScreenC";
import { ScreenB } from "./ScreenB";
import { ScreenA } from "./ScreenA";

const Stack = createNativeStackNavigator();

export class NestedStackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="ScreenC" component={ScreenC} />
      </Stack.Navigator>
    );
  }
}
