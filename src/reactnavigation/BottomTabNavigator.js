import React from "react";
import { Button, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabA } from "./TabScreen/TabA";
import { NestedStackNavigation } from "./NestedStackNavigator";

const BottomTab = createBottomTabNavigator();

export class BottomTabNavigation extends React.Component {
  render() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          name={"TabA"}
          component={TabA}
          options={{ tabBarIcon: () => <Ionicons name="home" size={20} /> }}
        />
        <BottomTab.Screen
          name={"TabB"}
          component={NestedStackNavigation}
          options={{ tabBarIcon: () => <Ionicons name="settings" size={20} /> }}
        />
      </BottomTab.Navigator>
    );
  }
}
