import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Switch,
  TextInput,
  ActivityIndicator,
} from "react-native";

export default function UseEffectWithFunctionalComponent() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);

  //   제일 최초로 한번만 렌더링 된다. componentDidMount 를 대처할수있다.

  useEffect(() => {
    console.log("didMount");
  }, []);

  //   classComponent 에서는 전에 값이 console 에 찍히는데 현재는 바로 증가하는 값에 바로 보여진다.
  useEffect(() => {
    console.log("didUpadte  - count ", count);
  }, [count]);

  //   classComponent 에서는 전에 값이 console 에 찍히는데 현재는 바로 증가하는 값에 바로 보여진다.
  useEffect(() => {
    console.log("didUpadte  - isOn ", isOn);
  }, [isOn]);

  useEffect(() => {
    console.log("didUpadte  - name ", name);
  }, [name]);

  useEffect(() => {
    if (isRefresh) {
      setTimeout(() => {
        setIsRefresh(false);
      }, 2000);
    }
  });

  return (
    <View>
      <Text>UseEffectWithFunctionalComponent</Text>

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
          //   console.log(v, " v");
        }}
      />

      <Text>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</Text>

      <TextInput
        value={name}
        onChangeText={(v) => {
          setName(v);
          //   console.log("v", v);
        }}
        style={{ backgroundColor: "pink" }}
      />

      <Button
        title="새로고침"
        onPress={() => {
          setIsRefresh(true);
        }}
      />
      {isRefresh && <ActivityIndicator />}
    </View>
  );
}
