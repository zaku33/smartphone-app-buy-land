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
  ImageBackground,
} from "react-native";

import api from "../../services/api";
import logoImg from "../../assets/logo2.png";
import bgImg from "../../assets/heroes2.png";
import styles from "./styles";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nickname, setNickname] = useState("");
  const navigation = useNavigation();

  async function handleRegister() {
    let list_error = "";
    if (!verifyPassword()) {
      return;
    }
    let data = {
      username: username,
      nickname: nickname,
      password: pwd,
      email: email,
      phone: phone,
    };
    const res = await api.post("api/register", data);
    if (res.data.status != 200) {
      for (const [key, value] of Object.entries(res.data.error)) {
        list_error += `${key}: ${value} \n`;
      }
      return alert(list_error);
    }
    alert(res.data.message);
  }
  function verifyPassword() {
    if (username == "") {
      alert("Input username");
      return false;
    }
    if (pwd == "") {
      alert("Input password");
      return false;
    }
    if (pwd.length < 6) {
      alert("Password must be at least 6 characters ");
      return false;
    }

    if (pwd !== cpwd) {
      alert("Password and confirm password not match");
      return false;
    }
    return true;
  }
  function goToSignIn() {
    navigation.navigate("SignIn");
  }
  return (
    <ImageBackground
      source={{ uri: "https://i.imgur.com/lPPRtQ5.jpg" }}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerTextBold}>Register account</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#757575"
          maxLength={10}
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#757575"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nickname"
          placeholderTextColor="#757575"
          maxLength={30}
          onChangeText={(nickname) => setNickname(nickname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone"
          keyboardType={"numeric"}
          placeholderTextColor="#757575"
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#757575"
          secureTextEntry={true}
          minLength={6}
          maxLength={12}
          onChangeText={(pwd) => setPwd(pwd)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Confirm password"
          placeholderTextColor="#757575"
          secureTextEntry={true}
          minLength={6}
          maxLength={12}
          onChangeText={(cpwd) => setCpwd(cpwd)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToSignIn}>
        <Text style={styles.signupText}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
