import React, { useEffect } from "react";
import { View } from "react-native";
import { Typography } from "./component/Typography";

export const SplashView = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.onFinishLoad();
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Typography fontSize={26}>SPLASH</Typography>
    </View>
  );
};
