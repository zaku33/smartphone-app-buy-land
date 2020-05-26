import React from "react";
import { View, Text, Linking } from "react-native";
import { ListItem, Divider, Avatar } from "react-native-elements";
import styles from "./css/itemStyles";

export default function Item({
  id,
  avatar,
  author,
  phone,
  title,
  content,
  location,
  created_at,
  updated_at,
}) {
  function handleAddressClick(location) {
    let _lat = location.lat;
    let _long = location.long;
    let _address = location.name;
    console.log(_lat, _long, _address);
  }
  function handlePhoneClick(phone) {
    Linking.openURL(`tel:${phone}`);
  }
  return (
    <View>
      <ListItem
        title={() => {
          return (
            <View
              containerStyle={{
                width: "100%",
              }}
            >
              <Avatar
                size="small"
                rounded
                source={{
                  uri: avatar,
                }}
                onPress={() => console.log(id)}
                onAccessoryPress={() => console.log("Edit ")}
                title={author}
                showAccessory
              />
              <Text style={styles.author}>{author}</Text>
              <Text style={styles.updated_at}>{updated_at}</Text>

              <Text>
                Tag : <Text style={styles.title}> {title} </Text>
              </Text>
              <Text>
                Content : <Text style={styles.content}> {content} </Text>
              </Text>
              <Divider />
              <Text
                style={styles.address}
                onPress={() => {
                  handleAddressClick(location);
                }}
              >
                Address : {location.name}{" "}
              </Text>
              <Divider />
              <Text
                style={styles.phone}
                onPress={() => {
                  handlePhoneClick(phone);
                }}
              >
                Phone : {phone}{" "}
              </Text>
            </View>
          );
        }}
        bottomDivider
      />
      <Divider style={styles.endList}/>
    </View>
  );
}
