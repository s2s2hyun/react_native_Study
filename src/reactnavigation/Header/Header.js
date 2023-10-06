import React from "react";
import { View, Dimensions } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { Spacer } from "../../commonComponents/Spacer";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderIcon } from "./HeaderIcon";
import { HeaderGroup } from "./HeaderGroup";

const { width } = Dimensions.get("window");

export class Header extends React.Component {
  render() {
    return (
      <SafeAreaInsetsContext.Consumer>
        {(insets) => (
          <View style={{ paddingTop: insets.top }}>
            <View
              style={{
                width: width,
                flexDirection: "row",
                height: 56,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                alignItems: "center",
              }}>
              <Spacer horizontal={true} space={12} />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                {this.props.children}
              </View>
              <Spacer horizontal={true} space={12} />
            </View>
          </View>
        )}
      </SafeAreaInsetsContext.Consumer>
    );
  }
}

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;
Header.Group = HeaderGroup;
