import React, { useState , useEffect} from "react";
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

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const navigation = useNavigation();

  async function handleRegister(){
    console.warn(username,email ,phone , pwd , cpwd);
    if(!verifyPassword()){
      return;
    }
    let datas = {
      username : username,
      email : email ,
      phone : phone ,
      password : pwd,
      confirmPassword : cpwd
    }
    const response = await api.post('/register', datas);
    if(response.status != 200){
      alert("Help")
    }
  };
  function verifyPassword(){
    if(pwd == ""){
      alert("Fill password");
      return false;
    }
    if(pwd.length < 6 || cpwd.length < 6 ){
      alert("Password must be at least 6 characters ");
      return false;
    }
    if(pwd !== cpwd){
      alert("Password and confirm password not match");
      return false;
    }
    return true;
   
  }
  function goToSignIn(){
    navigation.navigate("SignIn");
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoTop}>
        <Image source={logoImg} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTextBold}>Register account</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#757575"
          maxLength={10}
          onChangeText={username => setUsername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#757575"
          onChangeText={email=> setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone"
          placeholderTextColor="#757575"
          onChangeText={phone=> setPhone(phone)}
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
          onChangeText={pwd => setPwd(pwd)}
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
          onChangeText={cpwd => setCpwd(cpwd)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text
          //onClick={handleLogin}
          style={styles.loginText}
          onPress={handleRegister}
        >
          Register
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.signupText} onPress={goToSignIn}>
          Login
        </Text>
      </TouchableOpacity>

      <View style={styles.imageBG}>
        <Image source={bgImg} />
      </View>
    </View>
  );
}
