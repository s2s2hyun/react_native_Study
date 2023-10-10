import React, { useCallback, useState, useEffect } from "react";
import { View, Animated } from "react-native";
import { Typography } from "../../commonComponents/Typography";

export const LottoNumberView = (props) => {
  const [viewHeight, setViewHeight] = useState(0);

  const [animatedValue] = useState(new Animated.Value(1));

  const getNumberBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10) % 6;

    switch (randomNumber) {
      case 0:
        return "red";

      case 1:
        return "blue";

      case 2:
        return "green";

      case 3:
        return "pink";

      case 4:
        return "orange";

      case 5:
        return "purple";

      default:
        return "black";
    }
  }, []);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-viewHeight * 0.6, 0],
  });

  useEffect(() => {
    animatedValue.setValue(0);

    Animated.timing(animatedValue, {
      duration: 1000,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [props.numbers]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
      onLayout={({ nativeEvent }) => {
        console.log(nativeEvent, "nativeEvent");
        setViewHeight(nativeEvent.layout.height);
      }}>
      {props.numbers.map((item) => {
        return (
          <Animated.View
            key={item}
            style={{
              backgroundColor: getNumberBackgroundColor(),
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",

              transform: [
                {
                  translateY: translateY,
                },
              ],
            }}>
            <Typography fontSize={20} color="white">
              {item}
            </Typography>
          </Animated.View>
        );
      })}
    </View>
  );
};
