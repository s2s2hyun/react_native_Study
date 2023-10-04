import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { COLOR } from "./color";

export default function NextBusInfo({
  hasInfo, // seatStatusText="도착정보 없음" => 일때 true
  remainedTimeText, // 8분 0초 , 곧 도착 , 도착 정보 없음
  numOfRemainedStops, // 1, 2 , 15
  seatStatusText, // 1석 , 여유  , 보통
  NEWCOLOR,
}) {
  if (!hasInfo)
    return <Text style={{ color: NEWCOLOR.GRAY_2_GRAY3 }}>도착 정보 없음</Text>;

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text
        style={{ color: NEWCOLOR.BLACK_WHITE, marginRight: 2, fontSize: 14 }}>
        {remainedTimeText}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: NEWCOLOR.GRAY_1_GRAY_4,
          borderRadius: 3,
          padding: 2,
        }}>
        <Text
          style={{
            color: NEWCOLOR.GRAY_3_GRAY2,
            marginRight: 3,
            fontSize: 12,
          }}>
          {numOfRemainedStops}번째전
        </Text>
        <Text style={{ color: COLOR.CORAL, fontSize: 12 }}>
          {seatStatusText}
        </Text>
      </View>
    </View>
  );
}
