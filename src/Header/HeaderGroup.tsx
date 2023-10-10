import React from "react";
import { View } from "react-native";

interface HeaderGroupProps {
  children: React.ReactNode;
}

export const HeaderGroup: React.FC<HeaderGroupProps> = (props) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {props.children}
    </View>
  );
};
