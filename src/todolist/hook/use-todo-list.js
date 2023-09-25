import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncLocalStorage } from "async_hooks";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { View } from "react-native";

const defaultMyTodoList = [];

const TODO_LIST_KEY = "TODO_LIST_KEY";

export default function useTodoList(selectedDate) {
  const [myTodoList, setMyTodoList] = useState(defaultMyTodoList);
  const [myTodoInput, setMyTodoInput] = useState("");

  const saveTodoList = (newTodoList) => {
    AsyncStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
    setMyTodoList(newTodoList);
  };

  const addMyTodo = () => {
    const len = myTodoList.length;

    const lastId = len === 0 ? 0 : myTodoList[len - 1].id;

    const newTodoList = [
      ...myTodoList,
      {
        id: lastId + 1,
        content: myTodoInput,
        date: selectedDate,
        isSuccess: false,
      },
    ];
    saveTodoList(newTodoList);
    // setMyTodoList(newTodoList);
    // AsyncStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
    // AsyncStorage.getItem(TODO_LIST_KEY)
  };

  const removeTodo = (todoId) => {
    const newTodoList = myTodoList.filter((todo) => todo.id !== todoId);
    saveTodoList(newTodoList);
  };

  const toggleTodo = (todoId) => {
    const newTodoList = myTodoList.map((todo) => {
      if (todo.id !== todoId) return todo;

      return {
        ...todo,
        isSuccess: !todo.isSuccess,
      };
    });
    // setMyTodoList(newTodoList);
    // AsyncStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
    saveTodoList(newTodoList);
  };

  const resetInput = () => setMyTodoInput("");

  const filterredTodoList = myTodoList.filter((todo) => {
    const isSameDate = dayjs(todo.date).isSame(selectedDate, " date");
    return isSameDate;
  });

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const result = await AsyncStorage.getItem(TODO_LIST_KEY);

    console.log("result", typeof result);
    if (result) {
      const newTodoList = JSON.parse(result);
      console.log("newTodoList", newTodoList);
      setMyTodoList(newTodoList);
    }
  };

  return {
    filterredTodoList,
    myTodoList,
    myTodoInput,
    setMyTodoInput,
    addMyTodo,
    removeTodo,
    toggleTodo,
    resetInput,
  };
}
