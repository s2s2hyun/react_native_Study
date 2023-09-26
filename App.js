import {
  Alert,
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import useGallery from "./src/mygallery/gallery-hook/use-gallery";
import MyDropDownPicker from "./src/mygallery/MyDropDownPicker";
import TextInputModal from "./src/mygallery/TextInputModal";
import BigImgModal from "./src/mygallery/BigImgModal";
import ImageList from "./src/mygallery/ImageList";

const statusBarHeight = getStatusBarHeight(true);

const width = Dimensions.get("screen").width;

const columnSize = width / 3;

export default function App() {
  const {
    pickImage,
    deleteImage,
    imagesWidthAddButton,
    selectedAlbum,
    textInputModalVisible,
    openTextInputModal,
    closeTextInputModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    openDropDown,
    closeDropDown,
    isDropDownOpen,
    albums,
    selectAlbum,
    deleteAlbum,
    picModalVisible,
    openPictureModal,
    closePictureModal,
    selectedImage,
    selectImage,
    moveToPreviousImage,
    moveToNextImage,
    showPreviousArrow,
    showNextArrow,
  } = useGallery();

  const onPressOpenGallery = () => {
    pickImage();
  };
  const onLongPressImages = (imageId) => {
    deleteImage(imageId);
  };

  const onPressWatchAd = () => {
    console.log("load ad");
  };

  const onPressAddAlbum = () => {
    if (albums.length >= 2) {
      Alert.alert("광고를 시청해야 앨범을 추가할 수 있습니다.", "", [
        {
          style: "cancel",
          text: "닫기",
        },
        {
          text: "광고 시청",
          onPress: onPressWatchAd,
        },
      ]);
    } else {
      openTextInputModal();
    }
  };

  const onSubmitEditing = () => {
    if (!albumTitle) {
      return;
    }

    // 1.앨범에 타이틀 추가
    addAlbum();

    // 2. 모달 닫기 , 입력 input 초기화
    closeTextInputModal();
    resetAlbumTitle();
  };

  const onPressTextInputBackdrop = () => {
    closeTextInputModal();
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

  const onLongPressAlbum = (albumId) => {
    deleteAlbum(albumId);
  };

  const onPressImage = (image) => {
    // TODO : Image
    selectImage(image);
    openPictureModal();
  };

  const onPressPictureBackdrop = () => {
    closePictureModal();
  };

  const onPressLeftArrow = () => {
    moveToPreviousImage();
  };
  const onPressRightArrow = () => {
    moveToNextImage();
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
        onLongPressAlbum={onLongPressAlbum}
      />

      {/* 앨범을 추가하는 TextInputModal */}
      <TextInputModal
        modalVisible={textInputModalVisible}
        albumTitle={albumTitle}
        setAlbumTitle={setAlbumTitle}
        onSubmitEditing={onSubmitEditing}
        onPressBackdrop={onPressTextInputBackdrop}
      />
      {/* 이미지 크게 보는 BigImgModal */}
      <BigImgModal
        modalVisible={picModalVisible}
        onPressBackdrop={onPressPictureBackdrop}
        selectedImage={selectedImage}
        onPressLeftArrow={onPressLeftArrow}
        onPressRightArrow={onPressRightArrow}
        showPreviousArrow={showPreviousArrow}
        showNextArrow={showNextArrow}
      />

      {/* 이미지 리스트 */}
      <ImageList
        imagesWidthAddButton={imagesWidthAddButton}
        onLongPressImages={onLongPressImages}
        onPressOpenGallery={onPressOpenGallery}
        onPressImage={onPressImage}
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
