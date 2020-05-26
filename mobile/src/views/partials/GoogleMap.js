import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import styles from "../css/styles";
import MapView, { Marker } from "react-native-maps";
// import {SearchBar} from "react-native-elements";

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      },
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        },
      });
    });
  }

  // gotToMyLocation() {
  //   console.log("gotToMyLocation is called");
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords }) => {
  //       console.log("curent location: ", coords);
  //       console.log(this.state.region);
  //       if (this.coords) {
  //         console.log("curent location: ", coords);
  //         this.map.animateToRegion({
  //           latitude: coords.latitude,
  //           longitude: coords.longitude,
  //           latitudeDelta: 0.005,
  //           longitudeDelta: 0.005,
  //         });
  //       }
  //     },
  //     (error) => alert("Error: Are location services on?"),
  //     { enableHighAccuracy: true }
  //   );
  // }

  receiveLocation() {

  }

  render() {
    return (
      <MapView
        style={styles.googleMap}
        region={this.state.region}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
      >
        <Marker
          coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
          }}
          draggable
          onDragEnd={(e) => {
            console.log("dragEnd", e.nativeEvent.coordinate);
          }}
          title="Your Location"
        />
      </MapView>
    );
  }
}
export default GoogleMap;
