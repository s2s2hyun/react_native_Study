import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const headerHeight = 50;

export default function MyDropDownPicker({
  isDropDownOpen,
  selectedAlbumTitle,
  selectedAlbum,
  onPressAddAlbum,
  onPressHeader,
  albums,
  onPressAlbum,
  onLongPressAlbum,
}) {
  console.log();
  return (
    <View>
      <TouchableOpacity
        style={{
          position: "relative",
          height: headerHeight,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
        activeOpacity={1}
        onPress={onPressHeader}>
        <Text style={{ fontWeight: "bold" }}>{selectedAlbumTitle} </Text>
        <SimpleLineIcons
          name={isDropDownOpen ? "arrow-up" : "arrow-down"}
          size={12}
          color="black"
          style={{ marginLeft: 8 }}
        />
        <TouchableOpacity
          onPress={onPressAddAlbum}
          style={{
            position: "absolute",
            right: 0,
            alignItems: "cneter",
            justifyContent: "center",
            height: headerHeight,
            paddingHorizontal: 10,
          }}>
          <Text style={{ fontSize: 12 }}>앨범추가</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      {isDropDownOpen && (
        <View
          style={{
            position: "absolute",
            top: headerHeight,
            width: "100%",
            borderTopColor: "lightgrey",
            borderTopWidth: 0.5,
            borderBottomColor: "lightgrey",
            borderBottomWidth: 0.5,
          }}>
          {albums.map((album, index) => {
            const isSelectedAlbum = album.id === selectedAlbum.id;

            console.log(album.id, "albumId");
            return (
              <TouchableOpacity
                key={`albums-${index}`}
                activeOpacity={1}
                style={{
                  paddingVertical: 10,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FFF",
                }}
                onPress={() => onPressAlbum(album)}
                onLongPress={() => onLongPressAlbum(album.id)}>
                <Text
                  style={{ fontWeight: isSelectedAlbum ? "bold" : undefined }}>
                  {album.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}
