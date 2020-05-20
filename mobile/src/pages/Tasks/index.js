import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';


import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const project = route.params.project;

  function navigateBack() {
    navigation.goBack()
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>Case:</Text>
        <Text style={styles.incidentValue}>{project.Name}</Text>
      </View>
    </View>
  );
}