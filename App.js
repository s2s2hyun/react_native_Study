import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Typography } from "./src/commonComponents/Typography";
import { LocalImage } from "./src/commonComponents/LocalImage";
import { RemoteImage } from "./src/commonComponents/RemoteImage";
import { Icon } from "./src/commonComponents/Icons";
import { Badge } from "./src/commonComponents/Badge";
import { Button } from "./src/commonComponents/Button";
import { Divider, Divier } from "./src/commonComponents/Divider";
import { Spacer } from "./src/commonComponents/Spacer";
import { TabIcon } from "./src/commonComponents/TabIcon";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderWithoutComponent } from "./src/reactnavigation/HeaderWithoutComponent";
import { Header } from "./src/reactnavigation/Header/Header";
import { HookTestComponent } from "./src/commonComponents/useHook/HookTestComponent";
import { useState, useCallback } from "react";

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const doSum = useCallback(() => {
    return a + b;
  }, [a, b]);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header>
          <Header.Title title="HEADER"></Header.Title>
        </Header>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <HookTestComponent a={a} b={b} />

          <Typography>현재 useCallback 값은 : {doSum()}</Typography>

          <Button
            onPress={() => {
              console.log("press"), setA(a + 1);
            }}>
            <Typography>A 더하기 </Typography>
          </Button>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
