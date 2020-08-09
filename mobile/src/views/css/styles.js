import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  googleMap: {
    ...StyleSheet.absoluteFillObject,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: 250,
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  viewStyle: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS == "ios" ? 30 : 0,
  },
  textStyle: {
    padding: 10,
  },
  containerStyle: {
    flex : 0
  },
  leftCreateNewsBar: {
    position: "absolute",
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightCreateNewsBar: {
    position: "absolute",
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCreateNewBar:{
    display: "flex",
    flex: -1
  },
  centerFormCreateNews:{
    fontSize: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    width: "80%",
    flex: -1,
    top: "-25%",
    justifyContent: "center",
    alignItems: "center"
  },
  
});
