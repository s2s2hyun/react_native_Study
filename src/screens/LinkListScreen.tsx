import React, { useCallback } from "react";
import { Text, View } from "react-native";
import { Header } from "../Header/Header";
import { Button } from "../Component/Button";
import { Typography } from "../Component/Typography";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../Component/Spacer";
import { NavigationProp } from "@react-navigation/native";

type LinkStackParamList = {
  LinkList: undefined;
  LinkDetail: undefined; // 여기에 필요한 파라미터를 추가할 수 있습니다.
};

type RootStackParamList = {
  LinkList: undefined;
  LinkDetail: undefined;
  AddLink: undefined;
};

export const LinkListScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressButton = useCallback(() => {
    navigation.navigate("LinkDetail");
  }, []);

  const onPressAddButton = useCallback(() => {
    navigation.navigate("AddLink");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="LINK LIST"></Header.Title>
        </Header.Group>
      </Header>
      <View style={{ flex: 1 }}>
        <Button onPress={onPressButton}>
          <Typography fontSize={18}>LINK DETAIL로 이동하기 </Typography>
        </Button>

        <Spacer space={12} />

        <Button onPress={onPressAddButton}>
          <Typography fontSize={18}>링크 등록하기</Typography>
        </Button>
      </View>
    </View>
  );
};
