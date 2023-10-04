import React from "react";
import { Switch, Text, View } from "react-native";
import BookmarkButton from "./BookmarkButton";
import { COLOR } from "./color";

import AlarmButton from "./AlramButton";
import NextBusInfo from "./NextBusInfo";

export default function BusInfo({
  onPressBookmark,
  isBookmarked,
  directionDescription,
  num,
  numColor,
  processedNextBusInfos,
  NEWCOLOR,
}) {
  // processedNextBusInfos.forEach((info) => {
  //   console.log(info.numOfRemainedStops, " numOfRemainedStops for an item");
  // });

  return (
    <View
      style={{
        flexDirection: "row",
        height: 75,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: NEWCOLOR.WHITE_BLACK,
      }}>
      <View
        style={{
          // flex: 0.,
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: "lightblue",
        }}>
        {/* 북마크 */}
        <BookmarkButton
          style={{ paddingHorizontal: 10 }}
          onPress={onPressBookmark}
          isBookmarked={isBookmarked}
          size={20}
          NEWCOLOR={NEWCOLOR}
        />
      </View>
      {/* 버스 번호 , 방향 */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: numColor, fontSize: 20, fontWeight: "bold" }}>
          {num}
        </Text>
        <Text style={{ fontSize: 12, color: COLOR.GRAY_3, marginRight: 5 }}>
          {directionDescription} 방향
        </Text>
      </View>
      <View style={{ flex: 1.2, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          {/* M분 S초 / N번째 전  / 여유 */}
          {processedNextBusInfos.map((info, index) => (
            <NextBusInfo
              NEWCOLOR={NEWCOLOR}
              key={`next-bus-info-${index}`}
              hasInfo={info.hasInfo}
              remainedTimeText={info.remainedTimeText}
              numOfRemainedStops={info.numOfRemainedStops}
              seatStatusText={info.seatStatusText}
            />
          ))}
        </View>
        {/* 알림아이콘 */}
        <AlarmButton
          onPress={() => {}}
          style={{ paddingHorizontal: 10 }}
          NEWCOLOR={NEWCOLOR}
        />
      </View>
    </View>
  );
}
