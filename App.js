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

export default function App() {
  return (
    <View style={styles.container}>
      <TabIcon iconName="home"></TabIcon>
      <TabIcon iconName="home" visibleBadge></TabIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
