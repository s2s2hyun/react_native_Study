import React from "react";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultAlbum = {
  id: 1,
  title: "기본",
};

const ASYNC_KEY = {
  IMAGES: "images",
  ALBUMS: "albums",
};

export default function useGallery() {
  const [images, setImages] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(defaultAlbum);
  const [albums, setAlbums] = useState([defaultAlbum]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputModalVisible, setTextInputModalVisible] = useState(false);
  const [picModalVisible, setPicModalVisible] = useState(false);
  const [albumTitle, setAlbumTitle] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const _setImages = (newImages) => {
    setImages(newImages);
    AsyncStorage.setItem(ASYNC_KEY.IMAGES, JSON.stringify(newImages));
  };

  const _setAlbums = (newAlbums) => {
    setAlbums(newAlbums);
    AsyncStorage.setItem(ASYNC_KEY.ALBUMS, JSON.stringify(newAlbums));
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      const lastId = images.length === 0 ? 0 : images[images.length - 1].id;
      const newImage = {
        id: lastId + 1,
        uri: result.assets[0].uri,
        albumId: selectedAlbum.id,
      };

      _setImages([...images, newImage]);
    }
  };

  const deleteImage = (imageId) => {
    Alert.alert("이미지를 삭제하시겠습니까?", "", [
      {
        style: "cancel",
        text: "아니요",
      },
      {
        text: "네",
        onPress: () => {
          const newImages = images.filter((image) => image.id !== imageId);
          _setImages(newImages);
        },
      },
    ]);
  };

  const filteredImages = images.filter(
    (image) => image.albumId === selectedAlbum.id
  );

  const imagesWidthAddButton = [
    ...filteredImages,
    {
      id: -1,
      uri: "",
    },
  ];

  const addAlbum = () => {
    const lastId = albums.length === 0 ? 0 : albums[albums.length - 1].id;
    const newAlbum = {
      id: lastId + 1,
      title: albumTitle,
    };

    _setAlbums([...albums, newAlbum]);
    setSelectedAlbum(newAlbum);
  };

  const deleteAlbum = (albumId) => {
    if (albumId === defaultAlbum.id) {
      Alert.alert("기본 앨범은 삭제할 수 없어요!");
      return;
    }
    Alert.alert("앨범을 삭제하시겠습니까?", "", [
      {
        style: "cancel",
        text: "아니요",
      },
      {
        text: "네",
        onPress: () => {
          const newAlbums = albums.filter((album) => album.id !== albumId);
          _setAlbums(newAlbums);
          setSelectedAlbum(defaultAlbum);
        },
      },
    ]);
  };

  // useEffect(() => {
  //   console.log(images, "images");
  // }, [images]);

  // useEffect(() => {
  //   console.log(filteredImages, "filteredImages");
  // }, [filteredImages]);

  const resetAlbumTitle = () => setAlbumTitle("");

  const selectAlbum = (album) => {
    setSelectedAlbum(album);
  };

  const selectImage = (image) => {
    setSelectedImage(image);
  };

  const moveToPreviousImage = () => {
    if (!selectedImage) return;
    const selectedImageIndex = filteredImages.findIndex(
      (image) => image.id === selectedImage.id
    );
    const previousImageIdx = selectedImageIndex - 1;

    if (previousImageIdx < 0) return;
    console.log("selectedImageIndex", selectedImageIndex);
    console.log("previousImageIndex", previousImageIdx);

    const previousImage = filteredImages[previousImageIdx];
    setSelectedImage(previousImage);
  };

  const moveToNextImage = () => {
    if (!selectedImage) return;
    const selectedImageIndex = filteredImages.findIndex(
      (image) => image.id === selectedImage.id
    );
    const nextImageIdx = selectedImageIndex + 1;

    if (nextImageIdx > filteredImages.length - 1 || nextImageIdx === -1) return;
    console.log("selectedImageIndex", selectedImageIndex);
    console.log("previousImageIndex", nextImageIdx);

    const nextImage = filteredImages[nextImageIdx];
    setSelectedImage(nextImage);
  };

  const showPreviousArrow =
    filteredImages.findIndex((image) => image.id === selectedImage?.id) !== 0;

  const showNextArrow =
    filteredImages.findIndex((image) => image.id === selectedImage?.id) !==
    filteredImages.length - 1;

  const openTextInputModal = () => setTextInputModalVisible(true);
  const closeTextInputModal = () => setTextInputModalVisible(false);

  const openPictureModal = () => setPicModalVisible(true);
  const closePictureModal = () => setPicModalVisible(false);

  const openDropDown = () => setIsDropDownOpen(true);
  const closeDropDown = () => setIsDropDownOpen(false);

  const initValues = async () => {
    // 이미지
    const imagesFromStorage = await AsyncStorage.getItem(ASYNC_KEY.IMAGES);
    if (imagesFromStorage !== null) {
      const parsed = JSON.parse(imagesFromStorage);
      setImages(parsed);
    }
    // 앨범
    const albumsFromStorage = await AsyncStorage.getItem(ASYNC_KEY.ALBUMS);
    if (albumsFromStorage !== null) {
      const parsed = JSON.parse(albumsFromStorage);
      setAlbums(parsed);
    }
    console.log(albumsFromStorage, " imagesFromStorage");
  };

  useEffect(() => {
    initValues();
  }, []);

  return {
    imagesWidthAddButton,
    pickImage,
    deleteImage,
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
    setSelectedImage,
    selectImage,
    moveToPreviousImage,
    moveToNextImage,
    showPreviousArrow,
    showNextArrow,
  };
}
