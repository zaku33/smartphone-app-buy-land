import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
<<<<<<< HEAD
  googleMap: {
    ...StyleSheet.absoluteFillObject,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: 250
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  viewStyle: {
    // flex: 1,
    // backgroundColor: "white",
    // marginTop: Platform.OS == "ios" ? 30 : 0,
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
    // display: "flex",
    // flex:3
  },
  centerFormCreateNews:{
    fontSize: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    width: "100%",
    // flex: -1,
    // top: "-25%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  fixToText: {
    top:0,
    right:0,
    position:"absolute"
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  bgHeader: {
    backgroundColor: "#0288D1",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    height: 90,
    shadowOpacity: 0.2,
    position: "relative",
  }
});
=======
    googleMap: {
        ...StyleSheet.absoluteFillObject,
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: 250
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
        flex: 0
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
    headerCreateNewBar: {
        display: "flex",
        flex: 3
    },
    centerFormCreateNews: {
        fontSize: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        width: "100%",
        // flex: -1,
        // top: "-25%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    fixToText: {
        top: 0,
        right: 0,
        position: "absolute"
            // flexDirection: 'row',
            // justifyContent: 'space-between',
    },

});
>>>>>>> origin/dev-company
