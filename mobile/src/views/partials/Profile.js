import React, { useState, useEffect } from "react";
import { View, AsyncStorage } from "react-native";
import { Avatar, Text, Button, Icon } from "react-native-elements";
import api from "../../services/api";

/* export default function Profile() {
  const [name, setName] = useState("Vuong");
  const [email, setEmail] = useState("nguyenhoangvuong3373@gmail.com");
  const [phone, setPhone] = useState("0981875373");

  useEffect(() => {});

  getUserDetail = async () => {
    let token = await AsyncStorage.getItem("access_token");
    let user_info = await api.get("api/details", {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

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
} */

export default class Profile extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    avatar: "test.png",
  };
  componentDidMount() {
    this.getUserDetail();
  }
  getUserDetail = async () => {
    let token = await AsyncStorage.getItem("access_token");
    let result_data = await api.get("api/details", {
      headers: { Authorization: `Bearer ${token}` },
    });
    let user_info = result_data.data.data;
    this.setState({
      name : user_info.nickname,
      email : user_info.email,
      phone : user_info.phone,
      avatar: user_info.avatar
    })
  };
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Avatar
          size="xlarge"
          rounded
          containerStyle={{ top: 30 }}
          source={{
            uri:
              this.state.avatar
          }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.2}
        />
        <View style={{ top: 50 }}>
          <Text>Name : {this.state.name} </Text>
          <Text>Email : {this.state.email} </Text>
          <Text>Phone : {this.state.phone} </Text>
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
}
