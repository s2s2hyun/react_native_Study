import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface IconProps {
  name: any;
  size: number;
  color: string;
}

export const Icon = (props: IconProps) => {
  return <Ionicons name={props.name} size={props.size} color={props.color} />;
};
