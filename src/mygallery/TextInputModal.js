import React, { useRef, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function TextInputModal({
  modalVisible,
  albumTitle,
  setAlbumTitle,
  onSubmitEditing,
  onPressBackdrop,
}) {
  const textInputRef = useRef(null);

  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => {
        textInputRef.current.focus();
      }, 100);
    }
  }, [modalVisible]);

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}>
        <Pressable onPress={onPressBackdrop} style={{ flex: 1 }}>
          <SafeAreaView
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
            }}>
            <TextInput
              ref={textInputRef}
              placeholder="앨범명을 입력해주세요"
              style={{
                width: "100%",
                padding: 10,
                borderWidth: 0.5,
                borderColor: "lightgrey",
              }}
              value={albumTitle}
              onChangeText={setAlbumTitle}
              onSubmitEditing={onSubmitEditing}
              //   autoFocus={true}
            />
          </SafeAreaView>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
