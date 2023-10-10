import React, { useState, useCallback } from "react";
import { FlatList, View } from "react-native";
import { Header } from "../../reactnavigation/Header/Header";
import { Typography } from "../../commonComponents/Typography";
import { LottoNumberView } from "../components/LottoNumberView";
import { useSelector } from "react-redux";
export const HistoryListScreen = (props) => {
  const history = useSelector((state) => state.numbers.history);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HISTORY"></Header.Title>
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 24,
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                marginHorizontal: 24,
                height: 120,
                backgroundColor: "white",
              }}>
              <Typography fontSize={16}>{item.date}</Typography>
              {/* <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                {item.numbers.map((item) => {
                  return (
                    <View
                      key={item}
                      style={{
                        backgroundColor: getNumberBackgroundColor(),
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      <Typography fontSize={20} color="white">
                        {item}
                      </Typography>
                    </View>
                  );
                })}
              </View> */}
              <LottoNumberView numbers={item.numbers} />
            </View>
          );
        }}
      />
    </View>
  );
};
