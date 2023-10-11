import React from "react";

import { Button } from "../../commonComponents/Button";

import { Icon } from "../../commonComponents/Icons";

export class HeaderIcon extends React.PureComponent {
  render() {
    return (
      <Button onPress={this.props.onPress}>
        <Icon name={this.props.iconName} size={28} color="black" />
      </Button>
    );
  }
}
