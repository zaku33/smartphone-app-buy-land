import * as React from "react";
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  AsyncStorage,
  Alert,
} from "react-native";
import { Input, Icon, Header } from "react-native-elements";

import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import api from "../../../services/api";
import styles from "../../css/styles";

export default class CreateNews extends React.Component {
  state = {
    title: "",
    content: "",
    address: "",
    floor: 0,
    square: 0,
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
    const { title, content, location, image, price, address , floor, square } = this.state;

    let list_image = [];

    image.forEach((img) => {
      list_image.push(img);
    });
    let news_data = {
      title: title,
      content: content,
      land_info: {
        floor: floor,
        square: square
      },
      price: price,
      image: list_image,
      address: address,
      location: location,
    };
    let res = await api.post("/api/createNews", news_data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (res.data.status != 200) {
      return Alert.alert(
        null,
        res.data.message,
        [{ text: "OK", onPress: () => {}}],
        { cancelable: false }
      );
    }

    return Alert.alert(
      null,
      res.data.message,
      [{ text: "OK", onPress: () => this.props.navigation.navigate("News") }],
      { cancelable: false }
    );
  };

  handleClearImg = async (index) => {
    // this.list_image
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
      <ScrollView style={{ width: "98%", left: "1%", top: "1%" }}>
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
              label="Address"
              placeholder="Address"
              leftIcon={{ type: "font-awesome", name: "map-marker" }}
              maxLength={255}
              multiline={true}
              onChangeText={(text) => this.setState({ address: text })}
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
              label="Square"
              placeholder="Square"
              leftIcon={{ type: "font-awesome", name: "square-o" }}
              keyboardType={"numeric"}
              rightIcon={() => {
                return <Text> m2</Text>;
              }}
              onChangeText={(text) => this.setState({ square : text })}
            />
             <Input
              label="Floor"
              placeholder="Floor"
              leftIcon={{ type: "font-awesome", name: "building" }}
              keyboardType={"numeric"}
              rightIcon={() => {
                return <Text> floor(s)</Text>;
              }}
              onChangeText={(text) => this.setState({ floor : text })}
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
        </ScrollView>
      </ScrollView>
    );
  }
}
