import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  image: {
    // flex: 1,
    width: 90,
    height: 60,
    resizeMode: 'contain'
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
    fontSize:30,
    margin:40,
    color: '#000000'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  logoTop:{
    marginTop:40,
    marginBottom:10,
    height:10,
    color:"#fb5b5a",
    marginBottom:40
  },

  imageBG:{
      fontWeight:"bold",
      height:30,
      color:"#fb5b5a",
      marginBottom:40
  },

    inputView:{
      width:"70%",
      height:40,
      borderWidth: 1,
      borderColor: "#dcdce6",
      borderStyle:"solid",
      backgroundColor:"white",
      borderRadius:8,
      marginBottom:20,
      justifyContent:"center",
      padding: 24,
    },
    
    inputText:{
      height:50,
      color: "#333",
      fontWeight:"bold"
    },

    forgot:{
      marginTop:30,
      color:"#fb5b5a",
      fontSize:20,
      fontWeight:"bold"
    },

    loginBtn:{
      width:"60%",
      backgroundColor:"#e02041",
      borderRadius:8,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },

    loginText:{
      color:"white",
      fontSize:20,
      fontWeight:"bold"
    },

    signupText:{
      marginTop:10,
      color:"#fb5b5a",
      fontSize:20,
      fontWeight:"bold"
    }
});