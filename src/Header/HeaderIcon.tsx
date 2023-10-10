import React from "react";
import { Button } from "../Component/Button";
import { Icon } from "../Component/Icons";

interface HeaderIconProps {
  onPress: () => void;
  iconName: string;
}

export const HeaderIcon: React.FC<HeaderIconProps> = (props) => {
  return (
    <Button onPress={props.onPress}>
      <Icon name={props.iconName} size={28} color="black" />
    </Button>
  );
};
