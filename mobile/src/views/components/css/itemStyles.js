import { StyleSheet } from "react-native";
export default StyleSheet.create({
  item: {
    backgroundColor: "yellow",
    padding: 20,
    marginTop: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  id: {
    fontSize: 12,
  },
  title: {
    fontSize: 18,
  },
  contact: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  author: {
    position: "absolute",
    top: 0,
    left: 50,
    textAlign: "left",
    fontSize: 14,
  },
  updated_at: {
    position: "absolute",
    top: 20,
    left: 50,
    textAlign: "left",
    fontSize: 10,
  },
  newType:{
    flex: 1, 
    flexDirection: 'row',
    position: "absolute",
    top: 0,
    right: 10,
    textAlign: "right",
    fontSize: 14,
  },
  content: {
    fontSize: 16,
  },
  address: {
    textAlign: "left",
  },
  phone: {
    textAlign: "left",
  },
  endList: { backgroundColor: "gray", height: 10 },
});
