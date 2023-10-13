import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DiaryListScreen } from "../screens/DiaryListScreen";
import { DiaryDetailScreen } from "../screens/DiaryDetailScreen";
import { SettingScreen } from "../screens/SettingScreen";

const Stack = createNativeStackNavigator();

export const DiaryStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="DiaryList"
      screenOptions={{
        presentation: "card",
        headerShown: false,
        gestureDirection: "horizontal", // 좌우로 스와이프 제스쳐 활성화
        animation: "slide_from_right", // 우측에서 좌측으로 슬라이드
      }}>
      <Stack.Screen name="DiaryList" component={DiaryListScreen} />
      <Stack.Screen name="DiaryDetail" component={DiaryDetailScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};
