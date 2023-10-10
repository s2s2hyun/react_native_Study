import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LinkStackNavigation } from "./LinkStackNavigation";
import { AddLinkScreen } from "../screens/AddLinkScreen";

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LinkStack"
      screenOptions={{
        presentation: "containedModal",
        headerShown: false,
        gestureDirection: "horizontal", // 좌우로 스와이프 제스쳐 활성화
        animation: "slide_from_right", // 우측에서 좌측으로 슬라이드
      }}>
      <Stack.Screen name="LinkStack" component={LinkStackNavigation} />
      <Stack.Screen name="AddLink" component={AddLinkScreen} />
    </Stack.Navigator>
  );
};
