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
    top: -5,
    left: 50,
    textAlign: "left",
    fontSize: 14,
  },
  updated_at: {
    position: "absolute",
    top: 15,
    left: 50,
    textAlign: "left",
    fontSize: 10,
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
