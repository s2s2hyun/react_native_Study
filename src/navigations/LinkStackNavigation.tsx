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
        gestureDirection: "horizontal", // 좌우로 스와이프 제스쳐 활성화
        animation: "slide_from_right", // 우측에서 좌측으로 슬라이드
      }}>
      <Stack.Screen name="LinkList" component={LinkListScreen} />
      <Stack.Screen name="LinkDetail" component={LinkDetailScreen} />
    </Stack.Navigator>
  );
};
