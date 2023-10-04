import React from "react";
import { Text, View } from "react-native";
import BookmarkButton from "./BookmarkButton";
import { COLOR } from "./color";

import AlarmButton from "./AlramButton";
import NextBusInfo from "./NextBusInfo";

export default function BusInfo({
  onPress,
  isBookmarked,
  directionDescription,
  num,
  numColor,
}) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          //   flex: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "lightblue",
        }}>
        {/* 북마크 */}
        <BookmarkButton
          style={{ paddingHorizontal: 10 }}
          onPress={onPress}
          isBookmarked={isBookmarked}
        />
      </View>
      {/* 버스 번호 , 방향 */}
      <View style={{ flex: 1, backgroundColor: "pink" }}>
        <Text style={{ color: numColor, fontSize: 20, fontWeight: "bold" }}>
          {num}
        </Text>
        <Text style={{ fontSize: 13, color: COLOR.GRAY_3 }}>
          {directionDescription} 방향
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          {/* M분 S초 / N번째 전  / 여유 */}
          <NextBusInfo
            hasInfo={true}
            remainedTimeText={"8분 0초"}
            numofRemainedStops={5}
            seatStatusText={"여유"}
          />
          <NextBusInfo hasInfo={false} remainedTimeText="도착 정보 없음" />
        </View>
        {/* 알림아이콘 */}
        <AlarmButton onPress={() => {}} style={{ paddingHorizontal: 10 }} />
      </View>
    </View>
  );
}
