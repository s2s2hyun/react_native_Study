import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Typography } from "./src/commonComponents/Typography";
import { LocalImage } from "./src/commonComponents/LocalImage";
import { RemoteImage } from "./src/commonComponents/RemoteImage";
import { Icon } from "./src/commonComponents/Icons";
import { Badge } from "./src/commonComponents/Badge";
import { Button } from "./src/commonComponents/Button";
import { Divider } from "./src/commonComponents/Divider";
import { Spacer } from "./src/commonComponents/Spacer";
import { TabIcon } from "./src/commonComponents/TabIcon";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderWithoutComponent } from "./src/reactnavigation/HeaderWithoutComponent";
import { Header } from "./src/reactnavigation/Header/Header";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <HeaderWithoutComponent title="HEADER" /> */}
        <Header>
          <Header.Group>
            <Header.Icon iconName="arrow-back"></Header.Icon>
            <Header.Title title="HEADER"></Header.Title>
          </Header.Group>
          <Header.Icon iconName="close"></Header.Icon>
        </Header>
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
