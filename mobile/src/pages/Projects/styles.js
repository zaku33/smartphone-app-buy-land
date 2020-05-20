import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#41414d',
    paddingTop: Constants.statusBarHeight + 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: 'white',
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold'
  },

  image: {
    marginTop: 15,
    marginLeft: 10,
    borderRadius: 152/2,
    width: 70,
    height: 45
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white'
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 1,
    display: 'flex',
    borderRadius: 8,
    backgroundColor: 'black',
    marginBottom: 12,
  },

  incidentProperty: {
    fontSize: 15,
    marginLeft:30,
    marginTop:10,
    color: 'white',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    marginLeft:30,
    fontSize: 15,
    color: 'white',
    marginBottom: 24
  },

  detailsButton: {
    flexDirection: 'row',
    margin:10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  },
});