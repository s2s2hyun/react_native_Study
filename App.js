import React, { useState } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Switch,
} from "react-native";
import UseEffectWithClassComponet from "./screen/useEffect/UseEffectWithClassComponet";
import UseEffectWithFunctionalComponent from "./screen/useEffect/UseEffectWithFunctionalComponent";
import CustomHook from "./hooks/CustomHook";
// import StateWitheClassComponent from "./screen/StateWitheClassComponent";
// import StateWitheFunctionComponent from "./screen/StateWitheFunctionComponent";

export default function App() {
  const [isTure, setIsTrue] = useState(true);

  return (
    <View style={styles.container}>
      {/* <StateWitheClassComponent /> */}
      {/* <StateWitheFunctionComponent /> */}
      {/* {isTure ? <UseEffectWithClassComponet /> : null}
      <Button
        title="toggle"
        onPress={() => {
          setIsTrue(!isTure);
        }}
      /> */}
      {/* <UseEffectWithFunctionalComponent />

      <Button
        title="toggle"
        onPress={() => {
          setIsTrue(!isTure);
        }}
      /> */}
      <CustomHook />
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
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },

  local_image: {
    width: 100,
    height: 100,
  },

  url_image: {
    width: 200,
    height: 200,
  },
});
