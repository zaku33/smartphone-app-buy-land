import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
// import ImagePicker from "react-native-image-picker";

import api from "../../services/api";
import logoImg from "../../assets/logo2.png";
import bgImg from "../../assets/heroes2.png";

export default function CreateNews() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState({});
  const [location, setLocation] = useState({});
  const [content, setContent] = useState("");
  const [phone, setPhone] = useState("");

  const navigation = useNavigation();

  // function handleChoosePhoto() {
  //   const options = {
  //     noData: true,
  //   };
  //   ImagePicker.launchImageLibrary(options, (response) => {
  //     if (response.uri) {
  //       this.setImage({ photo: response });
  //     }
  //   });
  // }
  return (
    <View>
      <View>
        <Image/>
      </View>
      <View>
        <Text>Create new News</Text>
      </View>

      <View>
        <TextInput
          placeholder="title"
          placeholderTextColor="#757575"
          maxLength={10}
          onChangeText={(title) => setTitle(title)}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
      </View>

      <TouchableOpacity>
        <Text>
          Up News
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
}
