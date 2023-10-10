import React from "react";
import { Typography } from "../Component/Typography";

interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = (props) => {
  return <Typography fontSize={18}>{props.title}</Typography>;
};
