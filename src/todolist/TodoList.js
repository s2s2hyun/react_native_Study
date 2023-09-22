import React, { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { runPracticeDayjs } from "./practice-dayjs";
import {
  ITEM_WIDTH,
  getCalendarColumns,
  getDayColor,
  getDayText,
  statusBarHeight,
} from "./utils";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import DateTimePickerModal from "react-native-modal-datetime-picker";
dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
import { SimpleLineIcons } from "@expo/vector-icons";
import { useCalender } from "./hook/use-calender";
import useTodoList from "./hook/use-todo-list";
import Calender from "./Calender";
import { Ionicons } from "@expo/vector-icons";
import Margin from "./Margin";
import AddTodoInput from "./AddTodoInput";

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

  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1Month,
  } = useCalender(now);

  const {
    myTodoList,
    myTodoInput,
    setMyTodoInput,
    addMyTodo,
    removeTodo,
    toggleTodo,
  } = useTodoList(selectedDate);

  // const [selectedDate, setSelectedDate] = useState(now);
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const columns = getCalendarColumns(selectedDate);

  const onPressLeftArrow = subtract1Month;
  const onPressHeaderDate = showDatePicker;
  const onPressRightArrow = add1Month;
  const onPressDate = setSelectedDate;

  // 헤더 컴포넌트
  // const ListHeaderComponent = () => {
  //   const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.");

  //   console.log(currentDateText);

  //   return (
  //     <View>
  //       {/* <YYYY.MM.DD> */}
  //       <View
  //         style={{
  //           flexDirection: "row",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}>
  //         <ArrowButton iconName="arrow-left" onPress={onPressLeftArrow} />

  //         <TouchableOpacity onPress={showDatePicker}>
  //           <Text style={{ fontSize: 20, color: "#404040" }}>
  //             {currentDateText}
  //           </Text>
  //         </TouchableOpacity>
  //         <ArrowButton iconName="arrow-right" onPress={onPressRightArrow} />
  //       </View>
  //       {/* <Margin height={15} /> */}
  //       {/* // 일 ~ 토 */}
  //       <View style={{ flexDirection: "row" }}>
  //         {[0, 1, 2, 3, 4, 5, 6].map((day) => {
  //           const dayText = getDayText(day);
  //           const color = getDayColor(day);
  //           return (
  //             <Column
  //               text={dayText}
  //               color={color}
  //               opacity={1}
  //               key={`day-${day}`}
  //               disabled={true}
  //             />
  //           );
  //         })}
  //       </View>
  //     </View>
  //   );
  // };

  // const renderItem = ({ item: date }) => {
  //   const dateText = dayjs(date).get("date");
  //   const day = dayjs(date).get("day");
  //   const color = getDayColor(day);
  //   const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");

  //   const onPress = () => {
  //     setSelectedDate(date);
  //   };

  //   const isSelected = dayjs(date).isSame(selectedDate, "date");

  //   return (
  //     <Column
  //       text={dateText}
  //       day={day}
  //       color={color}
  //       opacity={isCurrentMonth ? 1 : 0.4}
  //       onPress={onPress}
  //       isSelected={isSelected}
  //     />
  //   );
  // };

  const ListHeaderComponent = () => {
    <View>
      <Margin height={10} />
    </View>;
  };

  const renderItem = ({ item: todo }) => {
    const isSuccess = todo.isSuccess;

    return (
      <View
        style={{
          width: ITEM_WIDTH,
          alignSelf: "center",
          flexDirection: "row",
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomWidth: 0.2,
          borderColor: "#a6a6a6",
        }}>
        <Text style={{ fontSize: 14, color: "#595959", flex: 1 }}>
          {todo.content}
        </Text>
        <Ionicons
          name="ios-checkmark"
          size={17}
          color={isSuccess ? "#595959" : "#bfbfbf"}
        />
      </View>
    );
  };

  const onPressAdd = () => {};

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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <FlatList
          data={myTodoList}
          contentContainerStyle={{ paddingTop: statusBarHeight }}
          ListHeaderComponent={
            <View>
              <Calender
                columns={columns}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                onPressDate={onPressDate}
                onPressLeftArrow={onPressLeftArrow}
                onPressRightArrow={onPressRightArrow}
                onPressHeaderDate={onPressHeaderDate}
              />
              <Margin height={16} />
              <View
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 20 / 2,
                  backgroundColor: "#a3a3a3",
                  // alignItems: "center",
                  // justifyContent: "center",
                  alignSelf: "center",
                }}
              />
              <Margin height={16} />
            </View>
          }
          renderItem={renderItem}
        />
        <AddTodoInput
          value={myTodoInput}
          onChangeText={setMyTodoInput}
          placeholder={`${dayjs(selectedDate).format("MM.D")}에 추가할 투두`}
          onPressAdd={onPressAdd}
        />
      </KeyboardAvoidingView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
