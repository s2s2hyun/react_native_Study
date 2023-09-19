import { StatusBar } from "expo-status-bar";
import dayjs from "dayjs";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TodoList from "./src/todolist/TodoList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
