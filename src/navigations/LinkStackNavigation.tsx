import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinkListScreen } from "../screens/LinkListScreen";
import { LinkDetailScreen } from "../screens/LinkDetailScreen";

const Stack = createNativeStackNavigator();

export const LinkStackNavigation = () => {
  return (
    // 최초 처음 페이지 이니셜루트네임으로 정해준다.
    <Stack.Navigator
      initialRouteName="LinkList"
      screenOptions={{
        presentation: "card",
        headerShown: false,
      }}>
      <Stack.Screen name="LinkList" component={LinkListScreen} />
      <Stack.Screen name="LinkDetail" component={LinkDetailScreen} />
    </Stack.Navigator>
  );
};
