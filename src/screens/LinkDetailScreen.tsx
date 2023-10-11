import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from "../Header/Header";
import { Spacer } from "../Component/Spacer";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import WebView from "react-native-webview";

type ListItem = {
  title: string;
  image: string;
  link: string;
  createdAt: string;
};

type LinkStackParamList = {
  LinkList: undefined;
  LinkDetail: { item: ListItem }; // 이 부분에서의 ListItem 타입 참조
};

export const LinkDetailScreen = () => {
  const navigation = useNavigation();

  const routes = useRoute<RouteProp<LinkStackParamList, "LinkDetail">>();

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

      <WebView style={{ flex: 1 }} source={{ uri: routes.params.item.link }} />
    </View>
  );
};
