import { StatusBar } from "expo-status-bar";
import dayjs from "dayjs";
import {
  Alert,
  Button,
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import useGallery from "./src/mygallery/gallery-hook/use-gallery";
import MyDropDownPicker from "./src/mygallery/gallery-hook/MyDropDownPicker";
import TextInputModal from "./src/mygallery/TextInputModal";

const statusBarHeight = getStatusBarHeight(true);

const width = Dimensions.get("screen").width;

const columnSize = width / 3;

export default function App() {
  const {
    pickImage,
    deleteImage,
    imagesWidthAddButton,
    selectedAlbum,
    modalVisible,
    openModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    closeModal,
    openDropDown,
    closeDropDown,
    isDropDownOpen,
    albums,
    selectAlbum,
  } = useGallery();

  const onPressOpenGallery = () => {
    pickImage();
  };
  const onLongPressImages = (imageId) => {
    deleteImage(imageId);
  };

  const onPressAddAlbum = () => {
    openModal();
  };

  const onSubmitEditing = () => {
    if (!albumTitle) {
      return;
    }

    // 1.앨범에 타이틀 추가
    addAlbum();

    // 2. 모달 닫기 , 입력 input 초기화
    closeModal();
    resetAlbumTitle();
  };

  const onPressBackdrop = () => {
    closeModal();
  };

  const onPressHeader = () => {
    if (isDropDownOpen) {
      closeDropDown();
    } else {
      openDropDown();
    }
  };

  const onPressAlbum = (album) => {
    selectAlbum(album);
    closeDropDown();
  };

  const renderItem = ({ item: { id, uri }, index }) => {
    if (id === -1) {
      return (
        <TouchableOpacity
          onPress={onPressOpenGallery}
          style={{
            width: columnSize,
            height: columnSize,
            backgroundColor: "lightgrey",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{ fontWeight: "100", fontSize: 45 }}>+</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onLongPress={() => onLongPressImages(id)}>
        <Image
          key={index}
          source={{ uri }}
          style={{ width: columnSize, height: columnSize }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 앨범 DropDown , 앨범 추가 버튼 */}
      <MyDropDownPicker
        selectedAlbumTitle={selectedAlbum.title}
        onPressAddAlbum={onPressAddAlbum}
        onPressHeader={onPressHeader}
        isDropDownOpen={isDropDownOpen}
        albums={albums}
        onPressAlbum={onPressAlbum}
        selectedAlbum={selectedAlbum}
      />

      {/* 앨범을 추가하는 TextInputModal */}
      <TextInputModal
        modalVisible={modalVisible}
        albumTitle={albumTitle}
        setAlbumTitle={setAlbumTitle}
        onSubmitEditing={onSubmitEditing}
        onPressBackdrop={onPressBackdrop}
      />
      {/* 이미지 리스트 */}
      <FlatList
        data={imagesWidthAddButton}
        renderItem={renderItem}
        numColumns={3}
        style={{ zIndex: -1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});
