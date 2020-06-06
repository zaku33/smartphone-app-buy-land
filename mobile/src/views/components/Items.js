import React from "react";
import { View, Text, Linking} from "react-native";
import { ListItem, Divider, Avatar , Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import styles from "./css/itemStyles";

export default function Item({
  id,
  avatar,
  author,
  phone,
  title,
  content,
  image,
  location,
  created_at,
  updated_at,
}) {
  const navigation = useNavigation();

  function handleAddressClick(location) {
    let _lat = location.lat;
    let _long = location.long;
    let _address = location.name;

    navigation.navigate('GoogleMap',{
      params:{
        lat: _lat,
        long: _long,
        address : _address
      }
    })

    console.log(_lat, _long, _address);
  }
  function handlePhoneClick(phone) {
    Linking.openURL(`tel:${phone}`);
  }
  return (
    <View>
      <ListItem
        Component={() => {
          return (
            <View
              containerStyle={{
                width: "100%",
              }}
            >
              <Avatar
                size="small"
                rounded
                showAccessory
                source={{uri: avatar}}
                onPress={() => console.log(id)}
                onAccessoryPress={() => console.log("Edit ")}
                icon={{name: 'user', type: 'font-awesome'}} // use this to setup hidden backgroud avatar to icon
                // title={author} // use this to setup hidden backgroud avatar to name of author
              />
              <Text style={styles.author}>{author}</Text>
              <Text style={styles.updated_at}>{updated_at}</Text>

              <Text>
                Tag : <Text style={styles.title}> {title} </Text>
              </Text>
              <Text>
                Content : <Text style={styles.content}> {content} </Text>
                {/* <Image/> */}
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