import React from "react";
import { View, Text, Linking } from "react-native";
import { ListItem, Divider, Avatar, Image, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import MultiImage from "./MultiImage";

import styles from "./css/itemStyles";
import { formatNumber, convertToMoney } from "../helper/convertMoney";

export default function Item({
  id,
  avatar,
  author,
  phone,
  title,
  content,
  price,
  img,
  location,
  created_at,
  updated_at,
}) {
  const navigation = useNavigation();
  
  function handleAddressClick(location) {
    let _lat = location.lat;
    let _long = location.long;
    let _address = location.name;

    navigation.navigate("GoogleMap", {
      params: {
        lat: _lat,
        long: _long,
        address: _address,
      },
    });

    console.log(_lat, _long, _address);
  }
  function handlePhoneClick(phone) {
    Linking.openURL(`tel:${phone}`);
  }
  function labelForPrice(price) {
    if (price <= 5000000) {
      return <Icon name="fire" type="font-awesome" color="#f50"></Icon>;
    }
    if (price > 5000000 && price <= 10000000) {
      return <Icon name="fire" type="font-awesome" color="#f50"></Icon>;
    }
    if (price > 10000000) {
      return <Icon name="fire" type="font-awesome" color="#f50"></Icon>;
    }
  }
  function converTimeShort(time){

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
                showAccessory
                source={{ uri: avatar }}
                onPress={() => console.log(id)}
                onAccessoryPress={() => console.log("Edit ")}
                icon={{ name: "user", type: "font-awesome" }} // use this to setup hidden backgroud avatar to icon
                // title={author} // use this to setup hidden backgroud avatar to name of author
              />
              <Text style={styles.author}>{author}</Text>
              <Text style={styles.updated_at}>{converTimeShort(updated_at)}</Text>
              <View style={styles.newType}>{labelForPrice(price)}</View>

              <Text>
                Title : <Text style={styles.title}> {title} </Text>
              </Text>
              <View>
                <Text>
                  Content : <Text style={styles.content}> {content} </Text>
                </Text>
                <MultiImage listImg={img} />
              </View>

              <Divider />
              <Text style={styles.price}>
                Price : {formatNumber(price)} VNĐ
              </Text>
              <Divider />

              <Text
                style={styles.address}
                onPress={() => {
                  handleAddressClick(location);
                }}
              >
                Address : {location != null ? location.name : ""}
              </Text>
              <Divider />
              <Text
                style={styles.phone}
                onPress={() => {
                  handlePhoneClick(phone);
                }}
              >
                Phone : {phone}
              </Text>
            </View>
          );
        }}
        bottomDivider
      />
      <Divider style={styles.endList} />
    </View>
  );
}
