import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const width = Dimensions.get("screen").width;
const minColumnSize = width >= 500 ? 200 : 130;

const divisor = width / minColumnSize;

const numColumns = Math.floor(divisor);

const columnSize = width / numColumns;

export default function ImageList({
  imagesWidthAddButton,
  onPressOpenGallery,
  onLongPressImages,
  onPressImage,
}) {
  const renderItem = ({ item: image, index }) => {
    // 구조분해 할당을 지정
    const { id, uri } = image;
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
      <TouchableOpacity
        onPress={() => onPressImage(image)}
        onLongPress={() => onLongPressImages(id)}>
        <Image
          key={index}
          source={{ uri }}
          style={{ width: columnSize, height: columnSize }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={imagesWidthAddButton}
      renderItem={renderItem}
      numColumns={3}
      style={{ zIndex: -1 }}
      onLayout={(e) => {
        // console.log("Layout.width", e.nativeEvent.layout.width);
      }}
    />
  );
}
