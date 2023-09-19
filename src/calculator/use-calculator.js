import { useState } from "react";

export const useCalculator = () => {
  const [input, setInput] = useState(0);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null);
  const [isClickedOperator, setIsClickedOperator] = useState(false);
  const [isClickedEqual, setIsClickedEqual] = useState(false);

  //   const hasInput = input ? true : false;
  const hasInput = !!input;

  const onPressNum = (num) => {
    // 애초에 생각을 잘해한다. 왜냐면 처음에 둘다 Number 타입이다 보니 더하면 진짜 숫자를 더하게 되어서 예를 들어 1을 누르고 2를 누르면 12가 나와야하는데 둘다 Number 타입이면 3으로 결과값이 나온다.
    // 하지만 또 생각을 해볼수있는게 맨 앞에 0이 올수없다는점이다. 소수점을 제외하고  그래서 백틱 앞에 Number 타입을 표기를 해주면된다.

    if (currentOperator && isClickedOperator) {
      setResult(input);
      setInput(num);
      setIsClickedOperator(false);
    } else {
      const newInput = Number(`${input}${num}`);
      setInput(newInput);
    }
  };

  const onPressOperator = (operator) => {
    if (operator !== "=") {
      setCurrentOperator(operator);
      setIsClickedOperator(true);
      setIsClickedEqual(false);
    } else {
      let finalResult = result;
      const finalInput = isClickedEqual ? tempInput : input;
      const finalOperator = isClickedEqual ? tempOperator : currentOperator;

      switch (finalOperator) {
        case "+":
          finalResult = result + finalInput;
          break;
        case "-":
          finalResult = result - finalInput;
          break;
        case "*":
          finalResult = result * finalInput;
          break;
        case "/":
          finalResult = result / finalInput;
          break;
        default:
          break;
      }

      setResult(finalResult);
      setInput(finalResult);
      setTempInput(finalInput);
      setCurrentOperator(null);
      setIsClickedEqual(true);
      setTempOperator(finalOperator);
    }
  };

  const onPressReset = () => {
    if (hasInput) {
      setInput(0);
    } else {
      // 올 클리어 로직
      setInput(0);
      setCurrentOperator(null);
      setResult(null);
      setTempInput(null);
      setTempOperator(null);
    }
  };
  return (
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressOperator,
    onPressReset
  );
};
