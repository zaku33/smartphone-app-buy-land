import React, { useState, useEffect } from "react";
import styles from "../css/styles";
import MapView, { Marker } from "react-native-maps";

export default function GoogleMap({route, navigation}) {
  
  const [latitude , setLatitude] = useState(0);
  const [longitude , setLongitude] = useState(0);
  const [latitudeDelta , setLatitudeDelta] = useState(0);
  const [longitudeDelta , setLongitudeDelta] = useState(0);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(route.params ? (route.params._latitude != null ? route.params._latitude : position.coords.latitude) : position.coords.latitude ),
      setLongitude(route.params ? (route.params._longitude != null ? route.params._longitude : position.coords.longitude) : position.coords.longitude),
      setLatitudeDelta(route.params ? (route.params._latitudeDelta != null ? route.params._latitudeDelta : 0.001) : 0.001),
      setLongitudeDelta(route.params ? (route.params._longitudeDelta != null ? route.params._longitudeDelta : 0.001) : 0.001)
    });
  })
    return (
      <MapView
        style={styles.googleMap}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          draggable
          onDragEnd={(e) => {
            // console.log("dragEnd", e.nativeEvent.coordinate);
          }}
          title="Your Location"
        />
      </MapView>
    );
  
}
