import React from "react";
import { Image } from "react-native-elements";
import ImageViewer from "react-native-image-zoom-viewer";
import { View, TouchableOpacity, Modal, ScrollView } from "react-native";

export default function MultiImage({ listImg }) {
  return (
    <ScrollView horizontal={true}>
      {listImg.map((img, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              return (
                <Modal visible={true} transparent={true}>
                  <ImageViewer imageUrls={listImg} />
                </Modal>
              );
            }}
            key={index}
          >
            <Image
              source={{ uri: img }}
              key={index}
              style={{ width: 100, height: 100, marginRight: 10 }}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
