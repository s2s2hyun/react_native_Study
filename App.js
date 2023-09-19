import { StatusBar } from "expo-status-bar";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Calculator from "./src/calculator/Calculator";

const COLOR = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};

// Button type: 'reset' | 'operator' | 'num'

const Button = ({ text, onPress, flex, type }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flex }}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
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
