import React, { useState, useEffect } from "react";
import { View, AsyncStorage, TouchableOpacity, Alert } from "react-native";
import { Avatar, Text, Button, Icon, Input } from "react-native-elements";
import api from "../../services/api";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
export default class Profile extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    avatar: "",
    oldPass: "",
    newPass: "",
    conPass: "",
    canLogout: true,
  };
  componentDidMount() {
    this.getUserDetail();
    this.getPermissionAsync();
  }
  getUserDetail = async () => {
    let token = await AsyncStorage.getItem("access_token");
    let result_data = await api.get("api/details", {
      headers: { Authorization: `Bearer ${token}` },
    });
    let user_info = result_data.data.data;
    this.setState({
      name: user_info.nickname,
      email: user_info.email,
      phone: user_info.phone,
      avatar: user_info.avatar,
    });
  };

  verifyPassword() {
    if(this.state.oldPass == "" ){
      alert("Invalid old password");
      return false;
    }
    if(this.state.oldPass.length < 6 ){
      alert("Input old password");
      return false;
    }
    if (this.state.newPass == "") {
      alert("Input new password");
      return false;
    }
    if (this.state.newPass.length < 6) {
      alert("Password must be at least 6 characters");
      return false;
    }

    if (this.state.oldPass !== this.state.newPass) {
      alert("New password must be different with old password");
      return false;
    }
    return true;
  }

  handleLogOut = () => {
    AsyncStorage.clear();
    if (this.state.canLogout) {
      this.setState({ canLogout: !this.state.canLogout });
    }
    this.state.canLogout ? this.props.navigation.navigate("SignIn"): this.setState({ canLogout: true });
  };
  handleUpdate = async () => {
    let token = await AsyncStorage.getItem("access_token");
    const {avatar , name} = this.state;
    let news_data = {
      avatar: avatar,
      nickname: name,
    };
    if(this.state.oldPass && this.state.newPass){
      news_data.oldPass = this.state.oldPass;
      news_data.newPass = this.state.newPass;
    }
    let res = await api.put("/api/updateUser", news_data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if(res.data.status !=200){
      return Alert.alert(
        null,
        res.data.message,
        [{ text: "OK", onPress: () =>{}}],
        { cancelable: false }
      );
    }
    return Alert.alert(
      null,
      res.data.message,
      [{ text: "OK", onPress: () => this.props.navigation.navigate("News") }],
      { cancelable: false }
    );
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({
        avatar: result.uri,
      });
    }
  };

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Avatar
          title={this.state.name}
          size="xlarge"
          rounded
          containerStyle={{ top: 30 }}
          source={{
            uri: this.state.avatar
              ? this.state.avatar
              : "https://i.imgur.com/56NouWG.png",
          }}
          showAccessory={true}
          onPress={() => this._pickImage()}
          activeOpacity={0.2}
        />
        <View style={{ top: 50, width: "90%" }}>
          <View>
            <Input
              label="Nickname"
              defaultValue={this.state.name}
              maxLength={255}
              onChangeText={(text) => this.setState({ name: text })}
            />
          </View>
          <View>
            <Input
              secureTextEntry={true}
              label="Old password"
              onChangeText={(text) => this.setState({ oldPass: text })}
              maxLength={255}
            />
          </View>
          <View>
            <Input
              secureTextEntry={true}
              label="New password"
              onChangeText={(text) => this.setState({ newPass: text })}
              maxLength={255}
            />
          </View>
          <View>
            <Input
              disabled={true}
              label="Email"
              defaultValue={this.state.email}
              maxLength={255}
              multiline={true}
            />
          </View>
          <View>
            <Input
              disabled={true}
              label="Phone"
              defaultValue={this.state.phone}
              maxLength={255}
            />
          </View>
          <View style={{ padding: 10 }}>
            <Button
              icon={
                <Icon
                  name="download"
                  type="font-awesome"
                  size={20}
                  color="white"
                  style={{ paddingLeft: 10 }}
                />
              }
              onPress={() => {
                this.handleUpdate();
              }}
              iconRight
              title="Update"
            />
          </View>
          <View style={{ padding: 10 }}>
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
              onPress={() => {
                this.handleLogOut();
              }}
              iconRight
              title="Sign out"
            />
          </View>
        </View>
      </View>
    );
  }
}
