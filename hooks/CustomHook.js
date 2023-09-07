import React, { useState } from "react";
import { TextInput, View, Button } from "react-native";

const InputBox = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        value={props.name}
        onChangeText={props.onChangeText}
        style={{ borderBottomWidth: 1, width: 200 }}
        placeholder={props.placeholder}
      />
      <Button title="버튼초기화" onPress={props.onReset} />
    </View>
  );
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const resetValue = () => setValue(initialValue);

  return {
    value,
    setValue,
    resetValue,
  };
};

const CustomHook = () => {
  // 3번째 구조분해할당으로 한줄로 정리

  const {
    value: name,
    setValue: setName,
    resetValue: resetName,
  } = useInput("");

  const { value: age, setValue: setAge, resetValue: resetAge } = useInput("");

  const {
    value: city,
    setValue: setCity,
    resetValue: resetCity,
  } = useInput("");

  // 2주석
  //   const output = useInput("");
  //   const name = output.value;
  //   const setName = output.setValue;
  //   const resetName = output.resetValue;

  //   1주석
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [city, setCity] = useState("");

  return (
    <View>
      <InputBox
        value={name}
        onChangeText={setName}
        placeholder="이름을 입력해주세요"
        onReset={() => setName("")}
      />
      <InputBox
        value={age}
        onChangeText={setAge}
        placeholder="나이를 입력해주세요"
        onReset={() => setAge("")}
      />
      <InputBox
        value={city}
        onChangeText={setCity}
        placeholder="사는곳을 입력해주세요"
        onReset={() => setCity("")}
      />
      {/* <View style={{ flexDirection: "row" }}>
        <TextInput
          value={age}
          onChangeText={setAge}
          style={{ borderBottomWidth: 1, width: 200 }}
          placeholder="나이를 입력해주세요"
        />
        <Button title="나이초기화" onPress={() => setAge("")} />
      </View> */}
      {/* <View style={{ flexDirection: "row" }}>
        <TextInput
          value={city}
          onChange={setCity}
          style={{ borderBottomWidth: 1, width: 200 }}
          placeholder="사는곳을 입력해주세요"
        />
        <Button title="사는곳초기화" onPress={() => setCity("")} />
      </View> */}
    </View>
  );
};

export default CustomHook;
