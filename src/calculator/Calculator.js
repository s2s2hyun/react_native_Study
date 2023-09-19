import styled from "@emotion/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useCalculator } from "./use-calculator";
const COLOR = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};

const Button = ({ text, onPress, flex, type, isSelected }) => {
  const backgroundColor =
    type === "reset"
      ? COLOR.RESET
      : type === "operator"
      ? COLOR.OPERATOR
      : type === "num"
      ? COLOR.NUM
      : "transparent";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderWidth: isSelected ? 1 : 0.2,
        borderColor: "black",
      }}>
      <Text style={{ color: "white", fontSize: 25 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default function Calculator() {
  const {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressOperator,
    onPressReset,
  } = useCalculator();

  return (
    <View style={{ flex: 1, width: 300, justifyContent: "center" }}>
      {/* 개발 환경에서만 볼수있게 할수있는 방법이다. */}
      {__DEV__ && (
        <>
          <Text>result: {result}</Text>
          <Text>tempInput : {tempInput}</Text>
          <Text>tempOperator : {tempOperator}</Text>
          <Text>currentOperator : {currentOperator}</Text>
          <Text>input : {input}</Text>
        </>
      )}

      <InputContainer>
        <Text style={{ color: "white", fontSize: 35 }}> {input}</Text>
      </InputContainer>
      {/* [ AC ~ / ] */}
      <ButtonContainer>
        <Button
          type="reset"
          text={hasInput ? "C" : "AC"}
          onPress={onPressReset}
          flex={3}
        />
        <Button
          type="operator"
          text="/ "
          onPress={() => onPressOperator("/")}
          flex={1}
          isSelected={currentOperator === "/"}
        />
      </ButtonContainer>
      {/* [ 7 ~ x ] */}
      <ButtonContainer>
        {[7, 8, 9].map((num) => (
          <Button
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
            key={`num-${num}`}
          />
        ))}
        {/* 
        <Button type="num" text="7" onPress={() => null} flex={1} />
        <Button type="num" text="8" onPress={() => null} flex={1} />
        <Button type="num" text="9" onPress={() => null} flex={1} /> */}
        <Button
          type="operator"
          text="X"
          onPress={() => onPressOperator("*")}
          flex={1}
          isSelected={currentOperator === "*"}
        />
      </ButtonContainer>
      {/* [ 4 ~ - ] */}
      <ButtonContainer>
        {[4, 5, 6].map((num) => (
          <Button
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
            key={`num-${num}`}
          />
        ))}
        {/* <Button type="num" text="4" onPress={() => null} flex={1} />
        <Button type="num" text="5" onPress={() => null} flex={1} />
        <Button type="num" text="6" onPress={() => null} flex={1} /> */}
        <Button
          type="operator"
          text="-"
          onPress={() => onPressOperator("-")}
          flex={1}
          isSelected={currentOperator === "-"}
        />
      </ButtonContainer>
      {/* [ 1 ~ + ] */}
      <ButtonContainer>
        {[1, 2, 3].map((num) => (
          <Button
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
            key={`num-${num}`}
          />
        ))}
        {/* <Button type="num" text="1" onPress={() => null} flex={1} />
        <Button type="num" text="2" onPress={() => null} flex={1} />
        <Button type="num" text="3" onPress={() => null} flex={1} /> */}
        <Button
          type="operator"
          text="+"
          onPress={() => onPressOperator("+")}
          flex={1}
        />
      </ButtonContainer>
      {/* [ 0 ~ = ] */}
      <ButtonContainer>
        <Button type="num" text="0" onPress={() => onPressNum(0)} flex={3} />
        {/* <Button type="num" text="." onPress={() => null} flex={} /> */}
        <Button
          type="operator"
          text="="
          onPress={() => onPressOperator("=")}
          flex={1}
        />
      </ButtonContainer>
      {/* <Text>Open up App.js to start working on your calculator</Text>
    <StatusBar style="auto" /> */}
    </View>
  );
}

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

const InputContainer = styled.View`
  background-color: ${COLOR.RESULT};
  min-height: 50px;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  padding: 10px 5px;
`;