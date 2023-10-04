import {
  Alert,
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import BusInfo from "./src/kakaobus/BusInfo";
import { COLOR } from "./src/kakaobus/color";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BusInfo
        onPress={true}
        isBookmarked={() => {}}
        num={146}
        directionDescription="강남역.강남역사거리"
        numColor={COLOR.BUS_B}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: Platform.OS === "android" ? 30 : 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
