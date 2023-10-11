import React, { useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import { Header } from "../Header/Header";
import { Button } from "../Component/Button";
import { Typography } from "../Component/Typography";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../Component/Spacer";
import { NavigationProp } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "../Component/Icons";
import { useRecoilValue } from "recoil";
import { atomLinkList } from "../Component/states/atomLinkList";

type LinkStackParamList = {
  LinkList: undefined;
  LinkDetail: ListItem; // 여기에 필요한 파라미터를 추가할 수 있습니다.
};

type RootStackParamList = {
  LinkList: undefined;
  LinkDetail: { item: ListItem };
  AddLink: undefined;
};

type ListItem = {
  title: string;
  image: string;
  link: string;
  createdAt: string;
};

export const LinkListScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const safeAreaInset = useSafeAreaInsets();
  const data = useRecoilValue(atomLinkList);

  const onPressListItem = useCallback((item: ListItem) => {
    navigation.navigate("LinkDetail", { item });
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

      <FlatList
        style={{ flex: 1 }}
        data={data.list}
        renderItem={({ item }) => {
          return (
            <Button onPress={() => onPressListItem(item)}>
              <View>
                <Typography fontSize={20}>{item.link}</Typography>
                <Spacer space={4} />
                <Typography fontSize={16} color="gray">
                  {item.title !== "" ? `${item.title.slice(0, 20)} | ` : ""}
                  {new Date(item.createdAt).toLocaleString()}
                </Typography>
              </View>
            </Button>
          );
        }}
      />

      <View
        style={{
          position: "absolute",
          right: 24,
          bottom: 24 + safeAreaInset.bottom,
        }}>
        <Button onPress={onPressAddButton}>
          <View
            style={{
              width: 52,
              height: 52,
              borderRadius: 32,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
            }}>
            <Icon name="add" color="white" size={32} />
          </View>
        </Button>
      </View>
    </View>
  );
};
