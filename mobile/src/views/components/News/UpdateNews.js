import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  AsyncStorage,
  Alert,
} from "react-native";
import { Input, Icon, Header } from "react-native-elements";

import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import api from "../../../services/api";
import styles from "../../css/styles";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

export default function UpdateNews({ route }) {
  const navigation = useNavigation();
  const [iTitle, setITitle] = useState("");
  const [iContent, setIContent] = useState("");
  const [iImage, setIImage] = useState([]);
  const [iPrice, setIPrice] = useState(0);
  const [iAddress, setIAddress] = useState("");
  const [iLocation, setILocation] = useState({});
  const [iSquare, setISquare] = useState(0);
  const [iFloor, setIFloor] = useState(0);
  var [tempLocation, setTempLocation] = useState({});
  var [showMapToSelect, setShowMapToSelect] = useState(false);

  useEffect(() => {
    getNewsUpdated();
    getPermissionAsync();
  }, []);
  function handleBack() {
    navigation.navigate("News");
  }
  async function handleUpdate() {
    let token = await AsyncStorage.getItem("access_token");
    let list_image = [];
    iImage.forEach((img) => {
      list_image.push(img);
    });
    let news_data = {
      id: route.params.id,
      title: iTitle,
      content: iContent,
      land_info: {
        square: iSquare,
        floor: iFloor,
      },
      price: iPrice,
      image: list_image,
      address: iAddress,
      location: iLocation,
    };
    let res = await api.put("/api/updateNews", news_data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return Alert.alert(
      null,
      res.data.message,
      [{ text: "OK", onPress: () => navigation.goBack() }],
      { cancelable: false }
    );
  }
  async function getNewsUpdated() {
    let token = await AsyncStorage.getItem("access_token");
    let res = await api.get("api/getNewsById", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        newsId: route.params.id,
      },
    });
    const {
      title,
      content,
      land_info,
      image,
      price,
      address,
      location,
    } = res.data.data;
    setITitle(title);
    setIContent(content);
    setIImage(image);
    setIPrice(price);
    setIFloor(land_info.floor);
    setISquare(land_info.square);
    setIAddress(address);
    setILocation(location);
    return;
  }
  async function getPermissionAsync() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }

  function handleOpenMap() {
    setShowMapToSelect(true);
  }
  function saveLocation() {
      setILocation(tempLocation);
      setShowMapToSelect(false);
  }

  return (
    <ScrollView style={{ width: "98%", left: "1%", top: "1%" }}>
      <Header
        leftContainerStyle={styles.leftCreateNewsBar}
        rightContainerStyle={styles.rightCreateNewsBar}
        centerComponent={
          <Text style={styles.centerFormCreateNews}>Update News</Text>
        }
        leftComponent={
          <Icon
            name="ban"
            type="font-awesome"
            color="red"
            iconStyle={{ paddingLeft: 10 }}
            onPress={() => handleBack()}
          />
        }
        rightComponent={
          <Icon
            name="check"
            type="font-awesome"
            color="green"
            iconStyle={{ paddingRight: 10 }}
            onPress={() => handleUpdate()}
          />
        }
      ></Header>

      <ScrollView>
        <View>
          <Input
            label="Title"
            defaultValue={iTitle != undefined ? iTitle : "Title"}
            leftIcon={{ type: "font-awesome", name: "header" }}
            maxLength={255}
            multiline={true}
            onChangeText={(text) => setITitle(text)}
          />
          <Input
            label="Address"
            defaultValue={iAddress != undefined ? iAddress : "Address"}
            leftIcon={{ type: "font-awesome", name: "map-marker" }}
            maxLength={255}
            multiline={true}
            onChangeText={(text) => setIAddress(text)}
            rightIcon={() => {
              return (
                <Button
                  onPress={() => {
                    handleOpenMap();
                  }}
                  title="Chọn vị trí"
                />
              );
            }}
          />
          {showMapToSelect && (
            <View>
              <Button title="Lưu" onPress={() => saveLocation()}></Button>
              <MapView style={styles.mapStyle} region={iLocation}>
                <Marker
                  draggable
                  onDragEnd={(e) => setTempLocation(e.nativeEvent.coordinate)}
                  coordinate={{
                    latitude: iLocation.latitude,
                    longitude: iLocation.longitude,
                  }}
                  title={iAddress ? iAddress : "Please choose location"}
                ></Marker>
              </MapView>
            </View>
          )}
          <Input
            label="Content"
            defaultValue={iContent != undefined ? iContent : "Content"}
            leftIcon={{ type: "font-awesome", name: "file-word-o" }}
            multiline={true}
            onChangeText={(text) => setIContent(text)}
          />
          <Input
            label="Square"
            defaultValue={iSquare.toString()}
            leftIcon={{ type: "font-awesome", name: "square-o" }}
            keyboardType={"numeric"}
            rightIcon={() => {
              return <Text> m2</Text>;
            }}
            onChangeText={(text) => setISquare(text)}
          />
          <Input
            label="Floor"
            defaultValue={iFloor.toString()}
            leftIcon={{ type: "font-awesome", name: "building" }}
            keyboardType={"numeric"}
            rightIcon={() => {
              return <Text> floor(s)</Text>;
            }}
            onChangeText={(text) => setIFloor(text)}
          />
          <Input
            label="Price"
            defaultValue={iPrice != undefined ? iPrice.toString() : "0"}
            leftIcon={{ type: "font-awesome", name: "money" }}
            rightIcon={() => {
              return <Text>VNĐ</Text>;
            }}
            multiline={true}
            keyboardType={"numeric"}
            onChangeText={(text) => setIPrice(text)}
          />
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {iImage &&
            iImage.map((img, idx) => {
              return (
                <Image
                  source={{ uri: img }}
                  style={{ width: 200, height: 200, marginRight: 10 }}
                  key={idx}
                />
              );
            })}
        </ScrollView>
      </ScrollView>
    </ScrollView>
  );
}
