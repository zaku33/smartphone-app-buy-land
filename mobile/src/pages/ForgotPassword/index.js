import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import api from "../../services/api";
import styles from "./styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  async function handleSendMail() {
    if (email.length < 6) {
      return alert("Email lenght must be greater than 6");
    }
    let data = {
      email: email,
    };
    let res = await api.post("forgotPass", data);
    // if (res.data.status != 200) {
    //   return alert(res.data.message);
    // }
    navigation.navigate("SignIn");
  }

  return (
    <View style={styles.container}>
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
        <Text style={styles.loginText}>Send password to your email</Text>
      </TouchableOpacity>
    </View>
  );
}
