import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IConButton = ({ name, bgColor }) => {
  return (
    <TouchableOpacity
      hitslop={{ top: 15, bottom: 15 }}
      style={{ paddingHorizontal: 6, backgroundColor: bgColor }}>
      <Ionicons name={name} size={24} color="black" />
    </TouchableOpacity>
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구</Text>
      <View style={{ flexDirection: "row" }}>
        <IConButton name="search-outline" />
        <IConButton name="person-add-outline" style={styles.addoutline} />
        <IConButton name="musical-notes-outline" />
        <IConButton name="settings-outline" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    // backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  addoutline: {
    rotation: 360,
  },
});
