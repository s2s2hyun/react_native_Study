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

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color="red" fontSize={20}>
        이것은
        <Typography color="green" fontSize={20}>
          텍스트
        </Typography>
        입니다.
      </Typography>
      <Divider />
      <LocalImage
        localAssets={require("./assets/favicon.png")}
        width={50}
        height={50}
      />
      <Spacer space={20} />
      <Divider />
      <RemoteImage
        url={"https://i3.ytimg.com/vi/608r8etX_cg/maxresdefault.jpg"}
        width={200}
        height={100}
      />
      <Icon name="home" size={40} color="red" />
      <Spacer space={20} />
      <View style={{ flexDirection: "row" }}>
        <Badge fontSize={10}>
          <Typography fontSize={10}>Badge</Typography>
        </Badge>
        <Spacer space={20} />
        <Badge fontSize={10}>
          <Icon name="home" size={50} />
        </Badge>
      </View>
      <Divider />
      <Spacer space={20} />
      <View style={{ flexDirection: "row", marginTop: 32 }}>
        <Button
          onPress={() => {
            console.log("Press Button");
          }}>
          <Typography fontSize={20} color="blue">
            Text Button
          </Typography>
        </Button>
        <Spacer space={20} />
        <Button
          onPress={() => {
            console.log("Press icon Button");
          }}>
          <Icon name="home" size={50} color="green" />
        </Button>
      </View>
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
