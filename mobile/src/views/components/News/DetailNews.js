import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, AsyncStorage, Alert } from "react-native";
import { Input, Icon, Header, Avatar, Button } from "react-native-elements";

import api from "../../../services/api";
import styles from "../../css/styles";
import { useNavigation } from "@react-navigation/native";
import { convertToMoney } from "../../../helper/convertMoney";
import MultiImage from "../MultiImage";
import { converTimeShort } from "../../../helper/convertTime";

export default function DetailNews({ route }) {
  const navigation = useNavigation();
  const avatar = route.params.avatar;
  const phone = route.params.phone;
  const author = route.params.author;
  const [iAuthor, setIAuthor] = useState("");
  const [iTitle, setITitle] = useState("");
  const [iContent, setIContent] = useState("");
  const [iPhone, setIphone] = useState("");
  const [iImage, setIImage] = useState([]);
  const [iPrice, setIPrice] = useState(0);
  const [iAddress, setIAddress] = useState("");
  const [iUpdatedAt, setIUpdateAt] = useState("");
  const [iLocation, setILocation] = useState({});
  const [iSquare, setISquare] = useState(0);
  const [iFloor, setIFloor] = useState(0);

  useEffect(() => {
    getNewsUpdated();
  }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", () => {
      getNewsUpdated();
    });
    return unsubscribe;
  }, [navigation]);
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
      title,
      content,
      land_info,
      image,
      price,
      address,
      location,
      updated_at,
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
    setIUpdateAt(updated_at);
    return;
  }

  async function handleLikeNews() {
    let dataReq = {
      news_id: route.params.id,
    };
    let token = await AsyncStorage.getItem("access_token");
    let res = await api.post("/api/likeThisNews", dataReq, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    Alert.alert(res.data.message);
  }

  return (
    <ScrollView style={{ width: "98%", left: "1%", top: "1%" }}>
      <View style={{ alignItems: "center", backgroundColor: "gray" }}>
        <Avatar
          title={iAuthor}
          size="xlarge"
          rounded
          containerStyle={{ top: 10 }}
          icon={{ name: "user", type: "font-awesome" }}
          source={{
            uri: avatar
              ? avatar
              : "https://imgur.com/a/10rme5G?fbclid=IwAR0zFiZpbCFOy0yus7_QrySs8fbkBfH6tRhjwKWBL7Ay9LXnh3HdxQx9wp4",
          }}
          activeOpacity={0.2}
        />

        <Text style={{ paddingTop: 20 }}>{iAuthor.toLocaleUpperCase()}</Text>
        <Text style={{ paddingBottom: 5 }}>{iPhone}</Text>
        <View style={styles.fixToText}>
          <View>
            <Button valu title="Thích" onPress={() => handleLikeNews()} />
          </View>
        </View>
      </View>
      <View>
        <Text>Lầu : {iFloor}</Text>
        <Text>Diện tích : {iSquare} m2</Text>
        <Text>Giá : {convertToMoney(iPrice, 2)} VNĐ</Text>
        <Text>Địa chỉ : {iAddress}</Text>
        <Text>
          Ngày cập nhật : <Text>{converTimeShort(iUpdatedAt)}</Text>
        </Text>
        <Text>
          Tiêu đề : <Text style={styles.title}> {iTitle} </Text>
        </Text>
        <Text>
          Sđt : <Text style={styles.title}> {iPhone} </Text>
        </Text>
        <Text>
          Nội dung : <Text style={styles.content}> {iContent} </Text>
        </Text>
        <MultiImage listImg={iImage} />
      </View>
    </ScrollView>
  );
}
