import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { runPracticeDayjs } from "./practice-dayjs";
import { getCalendarColumns, getDayColor, getDayText } from "./utils";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import Margin from "./Margin";
dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
import { SimpleLineIcons } from "@expo/vector-icons";

const Column = ({ text, color, opacity }) => {
  return (
    <View
      style={{
        width: columnSize,
        height: columnSize,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ color, opacity }}>{text}</Text>
    </View>
  );
};

const ArrowButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <SimpleLineIcons name={iconName} size={15} color="black" />
    </TouchableOpacity>
  );
};

const ListHeaderComponent = () => {
  const now = dayjs();
  const currentDateText = dayjs(now).format("YYYY.MM.DD.");

  console.log(currentDateText);

  return (
    <View>
      {/* <YYYY.MM.DD> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ArrowButton iconName="arrow-left" onPress={() => {}} />

        <Text style={{ fontSize: 20, color: "#404040" }}>
          {currentDateText}
        </Text>
        <ArrowButton iconName="arrow-right" onPress={() => {}} />
      </View>
      {/* <Margin height={15} /> */}
      {/* // 일 ~ 토 */}
      <View style={{ flexDirection: "row" }}>
        {[0, 1, 2, 3, 4, 5, 6].map((day) => {
          const dayText = getDayText(day);
          const color = getDayColor(day);
          return (
            <Column
              text={dayText}
              color={color}
              opacity={1}
              key={`day-${day}`}
            />
          );
        })}
      </View>
    </View>
  );
};

export default function TodoList() {
  const now = dayjs();
  const columns = getCalendarColumns(now);

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(now, "month");
    return (
      <Column
        text={dateText}
        day={day}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.4}
      />
    );
  };

  useEffect(() => {
    runPracticeDayjs();

    // console.log("columns", columns);
  });

  return (
    <View>
      <FlatList
        data={columns}
        numColumns={7}
        keyExtractor={(_, index) => `column-${index}`}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
}

const columnSize = 30;
