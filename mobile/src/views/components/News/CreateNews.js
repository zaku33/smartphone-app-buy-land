import * as React from "react";
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  AsyncStorage,
} from "react-native";
import { Input, Icon, Header } from "react-native-elements";

import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import api from "../../../services/api";
import styles from "../../css/styles";
import MapView from "react-native-maps";

export default class CreateNews extends React.Component {
  state = {
    title: "",
    content: "",
    image: [],
    price: 0,
    location: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
  };
  componentDidMount() {
    this.getCurrentPosition();
    this.getPermissionAsync();
  }
  handleCreate = async () => {
    let token = await AsyncStorage.getItem("access_token");
    const { title, content, location, image, price } = this.state;

    let list_image = [];

    /* image.forEach((img) => {
      let img_name = img.substring(img.lastIndexOf("/") + 1);
      let body = new FormData();
      body.append("image", {
        uri: img.replace("file://", ""),
        name: img_name,
        type: "image/jpg",
      });
      list_image.push(body);
    });

    let news_data = {
      title: title,
      content: content,
      price: price,
      image: list_image,
      location: location,
    };
    let res = await api.post("/api/createNews", news_data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data;application/json",
      },
    });
    if (res.data.status != 200) {
      return alert(res.data.message);
    }
    alert(res.data.message); */
  };
  handleBack = () => {
    this.props.navigation.navigate("News");
  };
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  getCurrentPosition = () => {
    return navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        },
      });
    });
  };
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({
        image: [...this.state.image, result.uri],
      });
    }
  };
  render() {
    let { image } = this.state;

    return (
      <View style={{ width: "98%", left: "1%", top: "1%" }}>
        <Header
          leftContainerStyle={styles.leftCreateNewsBar}
          rightContainerStyle={styles.rightCreateNewsBar}
          centerComponent={
            <Text style={styles.centerFormCreateNews}>New Post</Text>
          }
          leftComponent={
            <Icon
              name="ban"
              type="font-awesome"
              color="red"
              iconStyle={{ paddingLeft: 10 }}
              onPress={() => this.handleBack()}
            />
          }
          rightComponent={
            <Icon
              name="check"
              type="font-awesome"
              color="green"
              iconStyle={{ paddingRight: 10 }}
              onPress={() => this.handleCreate()}
            />
          }
        ></Header>

        <ScrollView>
          <View>
            <Input
              label="Title"
              placeholder="Title"
              leftIcon={{ type: "font-awesome", name: "header" }}
              maxLength={255}
              multiline={true}
              onChangeText={(text) => this.setState({ title: text })}
            />
          </View>

          <View>
            <Input
              label="Content"
              placeholder="Content"
              leftIcon={{ type: "font-awesome", name: "file-word-o" }}
              multiline={true}
              onChangeText={(text) => this.setState({ content: text })}
            />
          </View>

          <View>
            <Input
              label="Price"
              placeholder="Price"
              leftIcon={{ type: "font-awesome", name: "money" }}
              rightIcon={() => {
                return <Text>VNĐ</Text>;
              }}
              multiline={true}
              keyboardType={"numeric"}
              onChangeText={(text) => this.setState({ price: text })}
            />
          </View>
          <Button title="Choose Photo" onPress={this._pickImage} />
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {image &&
              image.map((img, idx) => {
                return (
                  <Image
                    source={{ uri: img }}
                    style={{ width: 200, height: 200, marginRight: 10 }}
                    key={idx}
                  />
                );
              })}
          </ScrollView>

          <View>
            <MapView
              style={styles.googleMap}
              region={this.state.location}
              showsUserLocation={true}
              showsMyLocationButton={true}
              showsCompass={true}
              onRegionChange={() => {}}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
