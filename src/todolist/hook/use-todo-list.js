import dayjs from "dayjs";
import React, { useState } from "react";
import { View } from "react-native";

const defaultMyTodoList = [
  {
    id: 1,
    content: "운동하기",
    date: dayjs(),
    isSuccess: true,
  },
  {
    id: 2,
    content: "공부하기",
    date: dayjs(),
    isSuccess: false,
  },
  {
    id: 3,
    content: "복습하기",
    date: dayjs(),
    isSuccess: true,
  },
];

export default function useTodoList() {
  const [myTodoList, setMyTodoList] = useState(defaultMyTodoList);
  const [myTodoInput, setMyTodoInput] = useState("");

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
    setMyTodoList(newTodoList);
  };

  const removeTodo = (todoId) => {
    const newTodoList = myTodoList.filter((todo) => todo.id !== todoId);
    setMyTodoList(newTodoList);
  };

  const toggleTodo = (todoId) => {
    const newTodoList = myTodoList.map((todo) => {
      if (todo.id === todoId) return todo;

      return {
        ...todo,
        isSuccess: !todo.isSuccess,
      };
    });
    setMyTodoList(newTodoList);
  };

  return {
    myTodoList,
    myTodoInput,
    setMyTodoInput,
    addMyTodo,
    removeTodo,
    toggleTodo,
  };
}
