import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { NewsListScreen } from "../screens/NewsListScreen";
import { FavoriteNewsListScreen } from "../screens/FavoriteNewsListScreen";
import { TabIcon } from "../commonComponents/TabIcon";

const BottomTab = createBottomTabNavigator();

export const NewsTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          const getIconName = () => {
            if (route.name === "FavoriteNewsList") {
              return "star";
            }
            return "home";
          };

          const iconNmae = getIconName();

          return <TabIcon iconName={iconNmae} iconColor={color} />;
        },
      })}>
      <BottomTab.Screen name="NewsList" component={NewsListScreen} />
      <BottomTab.Screen
        name="FavoriteNewsList"
        component={FavoriteNewsListScreen}
      />
    </BottomTab.Navigator>
  );
};
