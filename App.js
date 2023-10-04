import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Platform,
  RefreshControl,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import BusInfo from "./src/kakaobus/BusInfo";
import { COLOR } from "./src/kakaobus/color";
import {
  busStop,
  getBusNumColorByType,
  getRemainedTimeText,
  getSeatStatusText,
  getSections,
} from "./src/kakaobus/data";
import { SimpleLineIcons } from "@expo/vector-icons";
import Margin from "./src/kakaobus/Margin";
import BookmarkButton from "./src/kakaobus/BookmarkButton";
import { useTheme } from "./src/kakaobus/use-theme";

const busStopBookmarkSize = 20;
const busStopBookmarkPadding = 6;

export default function App() {
  const sections = getSections(busStop.buses);
  const [now, setNow] = useState(dayjs());
  const [refreshing, setRefreshing] = useState(false);

  // const now = dayjs();

  const { isDark, NEWCOLOR, toggleIsDark } = useTheme();

  const onPressBusStopBookmarked = () => {
    // Todo
  };

  const ListHeaderComponent = () => {
    return (
      <View
        style={{
          backgroundColor: COLOR.GRAY_3,
          height: 170,
          justifyContent: "center",
          alignItems: "center",
        }}>
        {/* 정류소 번호 , 이름 ,방향*/}
        <Margin height={10} />
        <Text style={{ color: NEWCOLOR.WHITE_BLACK, fontSize: 13 }}>
          {busStop.id}
        </Text>
        <Margin height={4} />
        <Text style={{ color: NEWCOLOR.WHITE_BLACK, fontSize: 24 }}>
          {busStop.name}
        </Text>
        <Margin height={4} />
        <Text style={{ color: NEWCOLOR.GRAY_1_GRAY_2, fontSize: 14 }}>
          {busStop.directionDescription}
        </Text>
        <Margin height={24} />

        {/*북마크*/}
        <BookmarkButton
          onPress={onPressBusStopBookmarked}
          isBookmarked={busStop.isBookmarked}
          size={busStopBookmarkSize}
          NEWCOLOR={NEWCOLOR}
          style={{
            borderWidth: 0.3,
            borderColor: NEWCOLOR.GRAY_1_GRAY_4,
            borderRadius:
              busStopBookmarkSize + (busStopBookmarkPadding * 2) / 2,
            padding: busStopBookmarkPadding,
          }}
        />
        {/* <Margin height={28} /> */}
        <Switch
          value={isDark}
          onValueChange={(v) => {
            console.log("changed switch value ", v);
            toggleIsDark();
          }}
        />
      </View>
    );
  };

  const renderItem = ({ item: bus }) => {
    const numColor = getBusNumColorByType(bus.type);

    /**
     * Start
     */
    // undefined ?? null -> null
    // { ... } ?? null -> { ... }
    const firstNextBusInfo = bus.nextBusInfos?.[0] ?? null;
    const secondNextBusInfo = bus.nextBusInfos?.[1] ?? null;
    const newNextBusInfos =
      !firstNextBusInfo && !secondNextBusInfo
        ? [null]
        : [firstNextBusInfo, secondNextBusInfo];

    // if (bus.num === 2000) {
    //   console.log(bus.num, 'newNextBusInfos', newNextBusInfos); // TODO: 확인
    // }

    const processedNextBusInfos = newNextBusInfos.map((info) => {
      if (!info)
        return {
          hasInfo: false,
          remainedTimeText: "도착 정보 없음",
        };

      const { arrivalTime, numOfRemainedStops, numOfPassengers } = info;
      const remainedTimeText = getRemainedTimeText(now, arrivalTime);
      const seatStatusText = getSeatStatusText(bus.type, numOfPassengers);
      return {
        hasInfo: true,
        remainedTimeText,
        numOfRemainedStops,
        seatStatusText,
      };
    });
    /**
     * End
     */

    return (
      <BusInfo
        isBookmarked={bus.isBookmarked}
        onPressBookmark={() => {}} // TODO
        num={bus.num}
        directionDescription={bus.directionDescription}
        numColor={numColor}
        processedNextBusInfos={processedNextBusInfos}
        NEWCOLOR={NEWCOLOR}
      />
    );
  };

  const ItemSeparatorComponent = () => (
    <View
      style={{
        width: "100%",
        height: 1,
        backgroundColor: COLOR.GRAY_1,
      }}
    />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View
      style={{
        paddingLeft: 13,
        paddingVertical: 3,
        backgroundColor: NEWCOLOR.GRAY_1_GRAY_4,
        borderTopWidth: 0.5,
        borderBottom: 0.5,
        borderTopColor: NEWCOLOR.GRAY_2_GRAY_3,
        borderBottomColor: NEWCOLOR.GRAY_2_GRAY_3,
      }}>
      <Text style={{ fontSize: 12, color: NEWCOLOR.GRAY_4_GRAY_1 }}>
        {title}
      </Text>
    </View>
  );

  const ListFooterComponent = () => {
    <Margin height={30} />;
  };

  const onRefresh = () => {
    console.log("call onRefresh");

    setRefreshing(true);
  };

  useEffect(() => {
    if (refreshing) {
      setRefreshing(false);
      setNow(dayjs());
      // setTimeout(() => {
      //   // API refetch 완료되는 시점.
      //   setRefreshing(false);
      //   setNow(dayjs());
      // }, 2500);
    }
  }, [refreshing]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNow = dayjs();
      setNow(newNow);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
    // setInterval 로 시작을 했으면 꼭 끝맺음을 꼭 해줘야한다.
    // clearInterval
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: NEWCOLOR.GRAY_3_GRAY_2, width: "100%" }}>
        {/* 헤더 아이콘  뒤로가기 + 홈 아이콘*/}
        <SafeAreaView
          style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={{ padding: 10 }}>
            <SimpleLineIcons name="arrow-left" size={20} color={COLOR.WHITE} />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <SimpleLineIcons name="home" size={20} color={COLOR.WHITE} />
          </TouchableOpacity>
        </SafeAreaView>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 500,
            backgroundColor: NEWCOLOR.GRAY_3_GRAY_2,
            zIndex: -1,
          }}
        />
      </View>

      <SectionList
        style={{ flex: 1, width: "100%" }}
        sections={sections}
        ListHeaderComponent={ListHeaderComponent}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
        refreshControl={
          <RefreshControl
            //refresh control used for the Pull to Refresh
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 30 : 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
