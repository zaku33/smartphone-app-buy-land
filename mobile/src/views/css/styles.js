import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  googleMap: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS == "ios" ? 30 : 0,
  },
  textStyle: {
    padding: 10,
  },
  containerStyle: {
    height: "5%",
  },
  leftContainerStyle: {
    position: "absolute",
    top: 10,
    left: 0,
    height: "5%",
  },
  rightContainerStyle: {
    position: "absolute",
    top: 10,
    right: 0,
    height: "5%",
  },
});
