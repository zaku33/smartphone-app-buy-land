import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../css/styles";
import MapView, { Marker } from "react-native-maps";

export default function GoogleMap() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <MapView
      style={styles.googleMap}
      region={region}
      onRegionChangeComplete={(region) => setRegion(region)}
    >
      <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
    </MapView>
  );
}
