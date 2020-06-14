import * as React from "react";
import {
  Button,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import { Camera } from "expo-camera";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

import api from "../../services/api";

export default class CreateNews extends React.Component {
  state = {
    phone: "",
    title: "",
    content: "",
    image: null,
    location: {},
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  handleBack = () => {
    this.props.navigation.navigate("News", { screen: "News" });
  };

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
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ width: "98%", left: "1%", top: "1%" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Icon
            name="ban"
            type="font-awesome"
            color="red"
            iconStyle={{ paddingLeft: 10 }}
            onPress={() => this.handleBack()}
          />

          <Text style={{ textAlign: "center", fontSize: 20 }}>New Post</Text>

          <Icon
            name="check"
            type="font-awesome"
            color="green"
            iconStyle={{ paddingRight: 10 }}
            onPress={() => console.log("Create")}
          />
        </View>
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
              label="Phone"
              placeholder="Phone"
              leftIcon={{ type: "font-awesome", name: "phone" }}
              multiline={true}
              keyboardType={"phone-pad"}
              onChangeText={(text) => this.setState({ phone: text })}
            />
          </View>

          <View>
            <Input
              label="Price"
              placeholder="Price"
              leftIcon={{ type: "font-awesome", name: "money" }}
              multiline={true}
              keyboardType={"numeric"}
              onChangeText={(text) => this.setState({ phone: text })}
            />
          </View>

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Button title="Choose Photo" onPress={this._pickImage} />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}