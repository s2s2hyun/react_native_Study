import React from "react";
import { Typography } from "../../commonComponents/Typography";

export class HeaderTitle extends React.PureComponent {
  render() {
    return <Typography fontSize={18}>{this.props.title}</Typography>;
  }
}
