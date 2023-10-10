import * as React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { useState, useCallback } from "react";
import { CounterScreen } from "./src/commonComponents/redux/screens/CounterScreen";
import { Provider } from "react-redux";
import { store, persistor } from "./src/commonComponents/redux/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigation } from "./src/lotto/navigation/BottomTabNavigation";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <BottomTabNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
