import { View, useWindowDimensions } from "react-native";
import { Header } from "../Header/Header";
import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SingleLineInput } from "../Component/SingleLineInput";
import { Button } from "../Component/Button";
import { Typography } from "../Component/Typography";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Spacer } from "../Component/Spacer";
import { useSetRecoilState } from "recoil";
import { atomLinkList } from "../Component/states/atomLinkList";
import { getOpenGraphData } from "../utils/OpenGraphTagUtils";
import { RemoteImage } from "../Component/RemoteImage";

type ListItem = {
  title: string;
  image: string;
  link: string;
  createdAt: string;
};

type ListState = {
  list: ListItem[];
};

type MetaData = {
  image: string;
  title: string;
  description: string;
};

export const AddLinkScreen = () => {
  const navigation = useNavigation();
  const [metaData, setMetaData] = useState<MetaData | null>(null);

  console.log(metaData, "metadata ");

  const safeAreaInput = useSafeAreaInsets();

  const updateList = useSetRecoilState(atomLinkList);
  const { width } = useWindowDimensions();
  const [url, setUrl] = useState("");

  const onPressClose = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressSave = useCallback(() => {
    if (url === "") return;

    updateList((prevState) => {
      const list = [
        {
          title: "",
          image: "",
          link: url,
          createdAt: new Date().toISOString(),
        },
        ...prevState.list,
      ];

      return {
        list,
      };
    });
    setUrl("");
  }, [url]);

  const onSubmitEditing = useCallback(async () => {
    const result = await getOpenGraphData(url);
    setMetaData(result);
  }, [url]);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="ADDLINK"></Header.Title>
        </Header.Group>
        <Header.Icon iconName="close" onPress={onPressClose} />
      </Header>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 32,
          paddingHorizontal: 24,
        }}>
        <SingleLineInput
          value={url}
          onChangeText={setUrl}
          placeholder="https://google.com"
          onSubmitEditing={onSubmitEditing}
        />
        {metaData !== null && (
          <>
            <Spacer space={20} />
            <View
              style={{ borderWidth: 1, borderRadius: 4, borderColor: "gray" }}>
              <RemoteImage
                url={metaData.image}
                width={width - 48}
                height={(width - 48) * 0.5}
              />
              <View style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
                <Spacer space={10} />
                <Typography fontSize={20} color="black">
                  {metaData.title}
                </Typography>
                <Spacer space={4} />
                <Typography fontSize={16} color="gray">
                  {metaData.description}
                </Typography>
              </View>
            </View>
          </>
        )}
      </View>

      <Button onPress={onPressSave}>
        <View
          style={{
            backgroundColor: url === "" ? "gray" : "black",
          }}>
          <View
            style={{
              height: 52,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Typography color="white" fontSize={18}>
              저장하기
            </Typography>
          </View>
          <Spacer space={safeAreaInput.bottom} />
        </View>
      </Button>
    </View>
  );
};
