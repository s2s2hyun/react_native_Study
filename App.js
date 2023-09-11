import React, { useState } from "react";

import { FlatList, StyleSheet, View } from "react-native";
import Header from "./src/Layout/Header";
import Footer from "./src/Layout/Footer";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProfileComponent from "./src/ProfileComponents";
import { friendProfiles, myProfile } from "./src/constans/data";
import Margin from "./src/styles/Margin";
import Division from "./src/styles/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import TabBar from "./src/TabBar";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpen(!isOpen);
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;

  const renderItem = ({ item }) => (
    <View>
      <ProfileComponent
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />
      <Margin height={10} />
      <ProfileComponent
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />

      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpen={isOpen}
      />
      <Margin height={5} />
    </View>
  );

  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={isOpen ? friendProfiles : []}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        ItemSeparatorComponent={ItemSeparatorComponent}
        // 사용되지 않는 매개변수는 _ 언더바로 표현해줍니다. item => _
        keyExtractor={(_, index) => index}
        // 대신에 한번 오브젝트로 온다는점 주의!
        renderItem={renderItem}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        // showsVerticalScrollIndicator={false} 스크롤
      />
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Header />

        <Margin height={10} />

        <ProfileComponent
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
        <Margin height={15} />
        <Division />

        <Margin height={12} />

        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpen={isOpen}
        />

        <FriendList data={friendProfiles} isOpen={isOpen} />
      </View>
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },

  local_image: {
    width: 100,
    height: 100,
  },

  url_image: {
    width: 200,
    height: 200,
  },
});
