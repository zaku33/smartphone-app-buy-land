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
});
