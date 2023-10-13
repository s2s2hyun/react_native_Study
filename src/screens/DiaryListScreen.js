import React, { useCallback, useState } from "react";
import { FlatList, View, useWindowDimensions } from "react-native";
import { Header } from "../component/Header/Header";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../component/Button";
import { Icon } from "../component/Icons";
import { RemoteImage } from "../component/RemoteImage";
import { Spacer } from "../component/Spacer";
import { Typography } from "../component/Typography";

export const DiaryListScreen = () => {
  const navigation = useNavigation();

  const safeAreaInset = useSafeAreaInsets();

  const onPressSetting = useCallback(() => {
    navigation.navigate("Setting");
  }, []);

  const onPressAdd = useCallback(() => {
    navigation.navigate("AddDiary");
  }, []);
  const { width } = useWindowDimensions();
  const [data, setData] = useState([
    {
      id: 0,
      title: "TITLE_01",
      content: "CONTENT_01",
      createdAt: "2023-10-13",
      upadateAt: "2023-10-13",
      imageUrl:
        "https://docs.expo.dev/static/images/tutorial/background-image.png",
    },
    {
      id: 1,
      title: "TITLE_02",
      content: "CONTENT_03",
      createdAt: "2023-10-13",
      upadateAt: "2023-10-13",
      imageUrl:
        "https://docs.expo.dev/static/images/tutorial/background-image.png",
    },
    {
      id: 2,
      title: "TITLE_03",
      content: "CONTENT_03",
      createdAt: "2023-10-13",
      upadateAt: "2023-10-13",
      imageUrl: null,
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header>
          <Header.Group>
            <Header.Title title="DIARY LIST"></Header.Title>
          </Header.Group>

          <Header.Icon iconName="settings" onPress={onPressSetting} />
        </Header>
        <FlatList
          data={data}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingVertical: 24,
          }}
          renderItem={({ item }) => {
            return (
              <Button
                onPress={() => navigation.navigate("DiaryDetail", { item })}>
                <View style={{ paddingVertical: 12 }}>
                  {item.imageUrl !== null && (
                    <>
                      <RemoteImage
                        url={item.imageUrl}
                        width={width - 24 * 2}
                        height={(width - 24 * 2) * 0.5}
                        style={{ borderRadius: 8 }}
                      />

                      <Spacer space={4} />
                    </>
                  )}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    <View>
                      <Typography fontSize={18}>{item.title}</Typography>
                      <Spacer space={4} />
                      <Typography fontSize={14}>{item.content}</Typography>
                      <Typography fontSize={12}>{item.upadateAt}</Typography>
                    </View>
                  </View>
                </View>
              </Button>
            );
          }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          right: 12,
          bottom: safeAreaInset.bottom + 24,
        }}>
        <Button onPress={onPressAdd}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Icon name="add" color="white" size={30} />
          </View>
        </Button>
      </View>
    </View>
  );
};
