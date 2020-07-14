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
  Modal,
  AsyncStorage,
} from "react-native";

import api from "../../services/api";
import logoImg from "../../assets/logo2.png";
import bgImg from "../../assets/heroes2.png";
import styles from "./styles";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const navigation = useNavigation();

  async function handleSignIn(e) {
    if (username == "") return alert("Input username");
    if (pwd == "") return alert("Input password");

    let data = {
      username: username,
      password: pwd,
    };
    let res = await api.post("api/login", data);

    if (res.data.status != 200) {
      return alert(res.data.message);
    }
    setStatusMessage(res.data.message);
    setIsAuth(true);
    setTimeout(() => {
      setIsAuth(false);
      AsyncStorage.setItem("access_token", res.data.token);
      navigation.navigate("MainScreen");
    }, 500);
  }
  async function handleSignUp() {
    navigation.navigate("SignUp");
  }
  async function handleForgetPassword() {
    navigation.navigate("ForgotPassword");
  }

  return (
    <View style={styles.container}>
      <Modal animationType={"slide"} transparent={false} visible={isAuth}>
        <View
          style={styles.loginSuccess}
        >
          <Text style={{fontSize:30}}>{statusMessage}</Text>
        </View>
      </Modal>
      <View style={styles.logoTop}>
        <Image source={logoImg} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTextBold}>Log In Now</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#757575"
          maxLength={10}
          onChangeText={(uname) => setUsername(uname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#757575"
          maxLength={10}
          secureTextEntry={true}
          onChangeText={(pass) => setPwd(pass)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSignIn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgetPassword}>
        <Text style={styles.forgot}>Forgot PWD?</Text>
      </TouchableOpacity>
      <View style={styles.imageBG}>
        <Image source={bgImg} />
      </View>
    </View>
  );
}
