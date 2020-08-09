import React from "react";
import { View, Text, Linking } from "react-native";
import { ListItem, Divider, Avatar, Image, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import MultiImage from "./MultiImage";

import styles from "./css/itemStyles";
import { formatNumber, convertToMoney } from "../../helper/convertMoney";
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
    let _lat = location.latitude;
    let _long = location.longitude;
    let _latDel = location.latitudeDelta;
    let _lonDel = location.longitudeDelta;
    let _address = location.name;

    navigation.navigate("GoogleMap", {
      _latitude: _lat,
      _longitude: _long,
      _latitudeDelta: _latDel,
      _longitudeDelta: _lonDel,
    });
  }
  function handlePhoneClick(phone) {
    Linking.openURL(`tel:${phone}`);
  }
  function converTimeShort(time) {
    return time;
  }

  function handleEdit(id){
    navigation.navigate("UpdateNews", { id: id });
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
                // showAccessory
                source={{ uri: avatar ? avatar : 'https://imgur.com/a/10rme5G?fbclid=IwAR0zFiZpbCFOy0yus7_QrySs8fbkBfH6tRhjwKWBL7Ay9LXnh3HdxQx9wp4' }}
                // onPress={() => console.log(id)}
                // onAccessoryPress={() => console.log("Edit ")}
                icon={{ name: "user", type: "font-awesome" }} // use this to setup hidden backgroud avatar to icon
                title={author} // use this to setup hidden backgroud avatar to name of author
              />
              <Text style={styles.author}>{author}</Text>
              <Text style={styles.updated_at}>
                {converTimeShort(updated_at)}
              </Text>
              <View style={styles.newType}>
                {is_editable ? (
                  <Icon
                    name="pencil"
                    type="font-awesome"
                    color="black"
                    onPress={() => handleEdit(id)}
                  ></Icon>
                ) : null}
                <Icon
                  name={priority_icon}
                  type="font-awesome"
                  color="#f50"
                ></Icon>
              </View>

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
                Address : {address != null ? address : ""}
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
