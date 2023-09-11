import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import ProfileComponent from "./ProfileComponents";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./styles/Margin";

const bottomSpace = getBottomSpace();

export default function FriendList(props) {
  if (!props.isOpen) return null;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.data.map((item, index) => (
        <View key={index}>
          <ProfileComponent
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  );
}
