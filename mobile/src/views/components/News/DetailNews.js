import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  AsyncStorage,
  Alert,
} from "react-native";
import { Input, Icon, Header, Avatar } from "react-native-elements";

import api from "../../../services/api";
import styles from "../../css/styles";
import { useNavigation } from "@react-navigation/native";
import { convertToMoney } from "../../../helper/convertMoney";
import MultiImage from "../MultiImage";

export default function DetailNews({ route }) {
  const navigation = useNavigation();
  const avatar = route.params.avatar;
  const [iAuthor, setIAuthor] = useState("");
  const [iTitle, setITitle] = useState("");
  const [iContent, setIContent] = useState("");
  const [iPhone, setIphone] = useState("");
  const [iImage, setIImage] = useState([]);
  const [iPrice, setIPrice] = useState(0);
  const [iAddress, setIAddress] = useState("");
  const [iLocation, setILocation] = useState({});
  const [iSquare, setISquare] = useState(0);
  const [iFloor, setIFloor] = useState(0);

  useEffect(() => {
    console.log("Vào detail");
    getNewsUpdated();
  }, []);
  function handleBack() {
    navigation.navigate("News");
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
      author,
      title,
      content,
      phone,
      land_info,
      image,
      price,
      address,
      location,
    } = res.data.data;
    setIAuthor(author);
    setITitle(title);
    setIContent(content);
    setIphone(phone);
    setIImage(image);
    setIPrice(price);
    setIFloor(land_info.floor);
    setISquare(land_info.square);
    setIAddress(address);
    setILocation(location);
    return;
  }

  return (
    <ScrollView style={{ width: "98%", left: "1%", top: "1%" }}>
      <Avatar
        title={iAuthor}
        size="xlarge"
        rounded
        containerStyle={{ top: 30 }}
        icon={{ name: "user", type: "font-awesome" }}
        source={{
          uri: avatar
            ? avatar
            : "https://imgur.com/a/10rme5G?fbclid=IwAR0zFiZpbCFOy0yus7_QrySs8fbkBfH6tRhjwKWBL7Ay9LXnh3HdxQx9wp4",
        }}
        activeOpacity={0.2}
      />
      <Text style={styles.author}>{iAuthor}</Text>
      <Text>Lầu : {iFloor}</Text>
      <Text>Diện tích : {iSquare} m2</Text>

      <Text>
        Tiêu đề : <Text style={styles.title}> {iTitle} </Text>
      </Text>
      <Text>
        Nội dung : <Text style={styles.content}> {iContent} </Text>
      </Text>
      <Text>Giá : {convertToMoney(iPrice, 2)} VNĐ</Text>
      <Text>Địa chỉ : {iAddress}</Text>
      <Text>Điện thoại : {iPhone}</Text>
      <MultiImage listImg={iImage} />
      <View style={styles.fixToText}>
        <View>
          <Button
            title="Thích"
            onPress={() => Alert.alert("Left button pressed")}
          />
          <Text>0</Text>
        </View>
        <View>
          <Button
            title="Lưu"
            onPress={() => Alert.alert("Right button pressed")}
          />
          <Text>0</Text>
        </View>
      </View>
      {/* <Icon> Like </Icon>
      <Icon> Remember </Icon> */}
    </ScrollView>
  );
}
