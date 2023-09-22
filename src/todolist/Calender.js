import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { getDayColor, getDayText } from "./utils";
import dayjs from "dayjs";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Calender({
  columns,
  statusBarHeight,
  selectedDate,
  setSelectedDate,
  onPressDate,
  onPressLeftArrow,
  onPressRightArrow,
  onPressHeaderDate,
}) {
  const ArrowButton = ({ iconName, onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
        <SimpleLineIcons name={iconName} size={15} color="black" />
      </TouchableOpacity>
    );
  };

  // 헤더 컴포넌트
  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.");

    console.log(currentDateText);

    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ArrowButton iconName="arrow-left" onPress={onPressLeftArrow} />

          <TouchableOpacity onPress={onPressHeaderDate}>
            <Text style={{ fontSize: 20, color: "#404040" }}>
              {currentDateText}
            </Text>
          </TouchableOpacity>
          <ArrowButton iconName="arrow-right" onPress={onPressRightArrow} />
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
                disabled={true}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const Column = ({ text, color, opacity, disabled, onPress, isSelected }) => {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={{
          width: columnSize,
          height: columnSize,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isSelected ? "#c2c2c2" : "transparent",
          borderRadius: columnSize / 2,
        }}>
        <Text style={{ color, opacity }}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");

    const onPress = () => onPressDate(date);
    const isSelected = dayjs(date).isSame(selectedDate, "date");

    return (
      <Column
        text={dateText}
        day={day}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPress}
        isSelected={isSelected}
      />
    );
  };

  return (
    <FlatList
      data={columns}
      scrollEnabled={false}
      numColumns={7}
      keyExtractor={(_, index) => `column-${index}`}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}

const columnSize = 30;
