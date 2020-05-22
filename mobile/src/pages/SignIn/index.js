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

import api from "../../services/api";
import logoImg from "../../assets/logo2.png";
import bgImg from "../../assets/heroes2.png";
import styles from "./styles";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const navigation = useNavigation();

  async function handleSignIn(e) {
    // e.preventDefault();
    navigation.navigate("MainScreen");
  }
  async function handleSignUp(e) {
    navigation.navigate("SignUp");
  }
  async function handleForgetPassword(e) {
    // navigation.navigate("ForgotPassword");
  }

  return (
    <View style={styles.container}>
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
          onChange={(e) => setUsername(e.target.value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#757575"
          maxLength={10}
          secureTextEntry={true}
          onChange={(e) => setPwd(e.target.value)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={handleSignIn}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signupText} onPress={handleSignUp}>
          SIGN UP
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot} onPress={handleForgetPassword}>
          Forgot PWD?
        </Text>
      </TouchableOpacity>
      <View style={styles.imageBG}>
        <Image source={bgImg} />
      </View>
    </View>
  );
}
