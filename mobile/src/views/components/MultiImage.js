import React, { useState } from "react";
import { Image } from "react-native-elements";
import { TouchableOpacity, ScrollView, View } from "react-native";

export default function MultiImage({ listImg }) {
  const [flagZoom,setFlagZoom] = useState(false);
  let style_zoom_in = { width: 500, height: 500, marginRight: 10 };
  let style_zoom_out = { width: 100, height: 100, marginRight: 10 };

  return (
    <ScrollView horizontal={true}>
      {listImg && listImg.map((img, index) => {
        var renderImg = () => {
          return (
            <Image
              source={{ uri: img }}
              key={index}
              style={flagZoom ? style_zoom_in : style_zoom_out}
            />
          );
        };
        return (
          <TouchableOpacity
            onPress={() => {setFlagZoom(!flagZoom)}}
            key={index}
          >
            {renderImg()}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
