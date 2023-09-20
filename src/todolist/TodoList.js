import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { runPracticeDayjs } from "./practice-dayjs";
import { getCalendarColumns, getDayColor, getDayText } from "./utils";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import DateTimePickerModal from "react-native-modal-datetime-picker";
dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
import { SimpleLineIcons } from "@expo/vector-icons";

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

const ArrowButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <SimpleLineIcons name={iconName} size={15} color="black" />
    </TouchableOpacity>
  );
};

export default function TodoList() {
  const now = dayjs();

  const [selectedDate, setSelectedDate] = useState(now);

  const columns = getCalendarColumns(selectedDate);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    setSelectedDate(dayjs(date));
    hideDatePicker();
  };

  const onPressLeftArrow = () => {
    const newSelectedDate = dayjs(selectedDate).subtract(1, "month");
    setSelectedDate(newSelectedDate);
  };

  const onPressRightArrow = () => {
    const newSelectedDate = dayjs(selectedDate).add(1, "month");
    setSelectedDate(newSelectedDate);
  };

  // 헤더 컴포넌트
  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.");

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
          <ArrowButton iconName="arrow-left" onPress={onPressLeftArrow} />

          <TouchableOpacity onPress={showDatePicker}>
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

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");

    const onPress = () => {
      setSelectedDate(date);
    };

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

  useEffect(() => {
    runPracticeDayjs();

    // console.log("columns", columns);
  });

  useEffect(() => {
    console.log(
      "change selectedDate",
      dayjs(selectedDate).format("YYYY.MM.DD")
    );
  }, [selectedDate]);

  return (
    <View>
      <FlatList
        data={columns}
        numColumns={7}
        keyExtractor={(_, index) => `column-${index}`}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const columnSize = 30;
