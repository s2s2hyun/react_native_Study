import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from "../commonComponents/Header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Spacer } from "../commonComponents/Spacer";
import WebView from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { clipNewsItem } from "../commonComponents/redux/actions/news";

export const NewsDetailScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const routes = useRoute();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressFavorite = useCallback(() => {
    dispatch(clipNewsItem(routes.params.newsItem));
  }, []);

  const isClipped = useSelector(
    (state) =>
      state.news.favoriteNews.filter(
        (item) => item.link === routes.params.newsItem.link
      ).length > 0
  );

  console.log(routes.params.newsItem.link, "여기야ㅐ 지금? ");

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName="arrow-back" onPress={onPressBack} />
          <Spacer horizontal space={12} />
          <View style={{ maxWidth: 200 }}>
            <Header.Title title="NEWS_DETAIL"></Header.Title>
          </View>
        </Header.Group>
        <Header.Icon
          iconName={isClipped ? "heart" : "heart-outline"}
          onPress={onPressFavorite}
        />
      </Header>

      <WebView
        style={{ flex: 1 }}
        source={{ uri: routes.params.newsItem.link }}
      />
    </View>
  );
};
