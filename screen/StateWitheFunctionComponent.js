import React, { useState } from "react";
import { View, Text, Button, Switch, TextInput } from "react-native";

export default function StateWitheFunctionComponent() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("");

  const arr = [1, 2, 3];

  // const first = arr[0];
  // const second = arr[1];
  // const third = arr[2];

  // 구조분해 할당
  // const [first, second, third] = arr;

  return (
    <View>
      <Text>You Clicked {count} Number </Text>
      <Button
        title="Click me"
        onPress={() => {
          setCount(count + 1);
        }}
      />

      <Text>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</Text>
      <Switch
        value={isOn}
        onValueChange={(v) => {
          setIsOn(!isOn);
          console.log(v, " v");
        }}
      />

      <Text>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</Text>

      <TextInput
        value={name}
        onChangeText={(v) => {
          setName(v);
          console.log("v", v);
        }}
        style={{ backgroundColor: "pink" }}
      />
    </View>
  );
}
