import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  ImageBackground,
} from "react-native";

import api from "../../services/api";
import styles from "./styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [isSended, setIsSended] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const navigation = useNavigation();
  async function handleSendMail() {
    if (email.length < 6) {
      return alert("Email lenght must be greater than 6");
    }
    let data = {
      email: email,
    };
    let res = await api.post("api/forgotPass", data);
    if (res.data.status != 200) {
      return alert(res.data.message);
    }
    setStatusMessage(res.data.message);
    setIsSended(true);
    setTimeout(() => {
      setIsSended(false);
      navigation.goBack();
    }, 1000);
  }
  function handleBack() {
    navigation.goBack();
  }

  return (
    <ImageBackground
      source={{ uri: "https://i.imgur.com/lPPRtQ5.jpg" }}
      style={styles.container}
    >
      <Modal animationType={"slide"} transparent={false} visible={isSended}>
        <View style={styles.loginSuccess}>
          <Text style={{ fontSize: 30 }}>{statusMessage}</Text>
        </View>
      </Modal>

      <View style={styles.header}>
        <Text style={styles.headerTextBold}>
          Get your password through email
        </Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#757575"
          keyboardType="email-address"
          onChangeText={(i_email) => setEmail(i_email)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSendMail}>
        <Text style={styles.loginText}>Send</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBack}>
        <Text>Back</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
