import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from "../Header/Header";
import { Spacer } from "../Component/Spacer";
import { useNavigation } from "@react-navigation/native";

export const LinkDetailScreen = () => {
  const navigation = useNavigation();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName="arrow-back" onPress={onPressBack} />
          <Spacer space={12} horizontal />
          <Header.Title title="LINK DETAIL"></Header.Title>
        </Header.Group>
      </Header>
    </View>
  );
};
