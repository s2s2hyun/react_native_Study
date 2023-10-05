import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenA } from "./src/reactnavigation/ScreenA";
import { ScreenB } from "./src/reactnavigation/ScreenB";
import { ScreenC } from "./src/reactnavigation/ScreenC";
import { NestedStackNavigation } from "./src/reactnavigation/NestedStackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabA } from "./src/reactnavigation/TabScreen/TabA";
import { TabB } from "./src/reactnavigation/TabScreen/TabB";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigation } from "./src/reactnavigation/BottomTabNavigator";
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"NestedBottomTab"}
          component={BottomTabNavigation}
        />
        <Stack.Screen name="ScreenB" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           animation: "slide_from_right", // 우측에서 나오는 애니메이션
//         }}>
//         <Stack.Screen name="ScreenA" component={ScreenA} />
//         <Stack.Screen name="ScreenB" component={ScreenB} />
//         <Stack.Screen name="Nested" component={NestedStackNavigation} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
