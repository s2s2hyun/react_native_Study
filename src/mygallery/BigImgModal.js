import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const ArrowButton = ({ iconName, onPress, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        paddingHorizontal: 20,
        height: "100%",
        justifyContent: "center",
      }}>
      <SimpleLineIcons
        name={iconName}
        size={12}
        color={disabled ? "transparent" : "black"}
        style={{ marginLeft: 8 }}
      />
    </TouchableOpacity>
  );
};

export default function BigImgModal({
  modalVisible,
  onPressBackdrop,
  selectedImage,
  onPressLeftArrow,
  onPressRightArrow,
  showPreviousArrow,
  showNextArrow,
}) {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Pressable
        onPress={onPressBackdrop}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `rgba(115,115,115,0.5)`,
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* 화살표 */}

          <ArrowButton
            iconName="arrow-left"
            onPress={onPressLeftArrow}
            disabled={!showPreviousArrow}
          />
          {/* <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              height: "100%",
              justifyContent: "center",
            }}>
            <SimpleLineIcons
              name={"arrow-left"}
              size={12}
              color="black"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity> */}
          {/* 이미지 */}
          <Pressable>
            <Image
              source={{ uri: selectedImage?.uri }}
              style={{ width: 280, height: 280, backgroundColor: "#fff" }}
              resizeMode="contain"
              alt={`select ${selectedImage?.uri}`}
            />
          </Pressable>
          <ArrowButton
            iconName="arrow-right"
            onPress={onPressRightArrow}
            disabled={!showNextArrow}
          />
          {/* <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              height: "100%",
              justifyContent: "center",
            }}>
            <SimpleLineIcons
              name={"arrow-right"}
              size={12}
              color="black"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity> */}
        </View>
      </Pressable>
    </Modal>
  );
}
