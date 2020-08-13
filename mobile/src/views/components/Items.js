import React from "react";
import {
  View,
  Text,
  Linking,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from "react-native";
import { ListItem, Divider, Avatar, Image, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

import MultiImage from "./MultiImage";

import styles from "./css/itemStyles";
import { formatNumber, convertToMoney } from "../../helper/convertMoney";
import { converTimeShort } from "../../helper/convertTime";
import api from "../../services/api";

const { width, height } = Dimensions.get("window");
export default function Item({
  id,
  avatar,
  author,
  address,
  phone,
  title,
  content,
  price,
  img,
  location,
  priority_icon,
  updated_at,
  is_editable,
}) {
  const navigation = useNavigation();

  function handleAddressClick(location) {
    // navigation.navigate("GoogleMap", {
    //   _latitude: location.latitude,
    //   _longitude: location.longitude,
    //   _latitudeDelta: location.latitudeDelta,
    //   _longitudeDelta: location.longitudeDelta,
    //   _address: address,
    // });
  }
  function handlePhoneClick(phone) {
    Linking.openURL(`tel:${phone}`);
  }

  function handleEdit(id) {
    navigation.navigate("UpdateNews", { id: id });
  }
  function handleDetail(id) {
    navigation.navigate("DetailNews", {
      id: id,
      avatar: avatar,
      phone: phone,
      author: author,
    });
  }
  async function handleDelete(id) {
    let dataReq = {
      news_id: id,
    };
    let token = await AsyncStorage.getItem("access_token");
    let res = await api.post("/api/deleteNews", dataReq, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return Alert.alert(
      null,
      res.data.message,
      [
        {
          text: "OK",
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'News' }],
            })
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View>
      <ListItem
        Component={() => {
          return (
            <View style={{ width: "98%", left: "1%" }}>
              <Avatar
                size="small"
                rounded
                source={{
                  uri: avatar
                    ? avatar
                    : "https://imgur.com/a/10rme5G?fbclid=IwAR0zFiZpbCFOy0yus7_QrySs8fbkBfH6tRhjwKWBL7Ay9LXnh3HdxQx9wp4",
                }}
                icon={{ name: "user", type: "font-awesome" }} // use this to setup hidden backgroud avatar to icon
                title={author} // use this to setup hidden backgroud avatar to name of author
                // showAccessory
                // onPress={() => console.log(id)}
                // onAccessoryPress={() => console.log("Edit ")}
              />

              <Text style={styles.author}>{author}</Text>
              <Text style={styles.updated_at}>
                {converTimeShort(updated_at)}
              </Text>
              <View style={styles.newType}>
                {is_editable ? (
                  <>
                    <Icon
                      name="pencil"
                      type="font-awesome"
                      color="black"
                      onPress={() => handleEdit(id)}
                    ></Icon>
                    <Icon
                      name="trash"
                      type="font-awesome"
                      color="black"
                      onPress={() => handleDelete(id)}
                    ></Icon>
                  </>
                ) : null}

                <Icon
                  style={{ paddingLeft: 10 }}
                  name={priority_icon}
                  type="font-awesome"
                  color="#f50"
                  onPress={() => handleDetail(id)}
                ></Icon>
              </View>

              <Text>
                Tiêu đề : <Text style={styles.title}> {title} </Text>
              </Text>

              <Text>
                Nội dung : <Text style={styles.content}> {content} </Text>
              </Text>

              <MultiImage listImg={img} />

              <Divider />
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.price}>
                  Giá : {convertToMoney(price, 2)} VNĐ
                </Text>
                <Text
                  style={styles.address}
                  // onPress={() => {
                  //   handleAddressClick(location);
                  // }}
                >
                  Địa chỉ : {address != null ? address : ""}
                </Text>
                <Text
                  style={styles.phone}
                  onPress={() => {
                    handlePhoneClick(phone);
                  }}
                >
                  Điện thoại : {phone}
                </Text>
              </View>
            </View>
          );
        }}
        bottomDivider
      />
      <Divider style={styles.endList} />
    </View>
  );
}
