import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Avatar, Text, Button, Icon } from "react-native-elements";
import styles from "../css/styles";

export default function Profile() {
  const [name, setName] = useState("Vuong");
  const [email, setEmail] = useState("nguyenhoangvuong3373@gmail.com");
  const [phone, setPhone] = useState("0981875373");

  useEffect(() => {});

  return (
    <View style={{ alignItems: "center" }}>
      <Avatar
        size="xlarge"
        rounded
        containerStyle={{ top: 30 }}
        source={{
          uri:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.2}
      />
      <View style={{ top: 50 }}>
        <Text>Name : {name} </Text>
        <Text>Email : {email} </Text>
        <Text>Phone : {phone} </Text>
        <Button
          icon={
            <Icon
              name="sign-out"
              type="font-awesome"
              size={20}
              color="white"
              style={{ paddingLeft: 10 }}
            />
          }
          iconRight
          title="Sign out"
        />
      </View>
    </View>
  );
}
