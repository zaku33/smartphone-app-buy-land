import React from "react";
import { Text, View } from "react-native";

//make a Component
const CustomHeader = ({
  leftComponent,
  leftComponentStyle,
  rightComponent,
  rightComponentStyle,
}) => {
  return (
    <View style={styles.bgHeader}>
      <View style={{display:"flex",flexDirection:"row",flex:1}}>
        {leftComponent ? (
          <View
            style={
              leftComponentStyle ? leftComponentStyle : styles.leftComponent
            }
          >
            {leftComponent}
          </View>
        ) : null}

        {rightComponent ? (
          <View
            style={
              rightComponentStyle ? rightComponentStyle : styles.rigthComponent
            }
          >
            {rightComponent}
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = {
  bgHeader: {
    backgroundColor: "#0288D1",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    height: 90,
    shadowColor: "#00000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    position: "relative",
  },
  headerStyle: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    color: "#fff",
  },
};

module.exports = CustomHeader;
