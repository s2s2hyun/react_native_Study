import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { Header } from "../../reactnavigation/Header/Header";
import { Spacer } from "../../commonComponents/Spacer";
import { Button } from "../../commonComponents/Button";
import { Typography } from "../../commonComponents/Typography";
import { LottoNumberView } from "../components/LottoNumberView";
import { getRandomSixNumber } from "../utils/Utils";
import { useDispatch, useSelector } from "react-redux";
import { createNewNumbers } from "../../commonComponents/redux/actions/lottoNumbers";

export const HomeScreen = (props) => {
  const numbers = useSelector((state) => state.numbers.currentNumber);

  const dispatch = useDispatch();

  const onPressGetNumber = useCallback(() => {
    // const randomNumbers = getRandomSixNumber();
    // setNumbers(randomNumbers);

    dispatch(createNewNumbers());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HOME"></Header.Title>
      </Header>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          paddingHorizontal: 12,
        }}>
        <View
          style={{
            height: 250,
            flexDirection: "column",
            paddingHorizontal: 24,
            backgroundColor: "white",
            borderColor: "gray",
          }}>
          {numbers.length === 6 && <LottoNumberView numbers={numbers} />}

          {/* <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>


            {[1, 2, 3, 4, 5].map((item) => {
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
        </View>
        <Spacer space={20} />
        <Button onPress={onPressGetNumber}>
          <View
            style={{
              backgroundColor: "black",
              paddingVertical: 24,
              alignItems: "center",
            }}>
            <Typography color="white" fontSize={18}>
              로또 번호 추출하기
            </Typography>
          </View>
        </Button>
      </View>
    </View>
  );
};
