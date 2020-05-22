import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Constants from "expo-constants";

const DATA = [
  {
    id: "1",
    title: "1 Item",
    author: "Nguyen",
    content: "Lorem Isum",
    location: {
      lat: 0,
      long: 0,
    },
  },
  {
    id: "2",
    title: "2 Item",
    author: "Hoang",
    content: "Lorem Isum",
    location: {
      lat: 100,
      long: 100,
    },
  },
  {
    id: "3",
    title: "3 Item",
    author: "Vuong",
    content: "Lorem Isum",
    location: {
      lat: 200,
      long: 200,
    },
  },
  {
    id: "4",
    title: "4 Item",
    author: "Le",
    content: "Lorem Isum",
    location: {
      lat: 300,
      long: 300,
    },
  },
  {
    id: "5",
    title: "5 Item",
    author: "Hung",
    content: "Lorem Isum",
    location: {
      lat: 400,
      long: 400,
    },
  },
  {
    id: "6",
    title: "6 Item",
    author: "Anh",
    content: "Lorem Isum",
    location: {
      lat: 500,
      long: 500,
    },
  },
];
function Item({ id, title, author, content ,location }) {
  return (
    <View style={styles.item}>
      <Text>
        {" "}
        ID : <Text style={styles.id}> {id} </Text>
      </Text>
      <Text>
        {" "}
        Author : <Text style={styles.author}> {author} </Text>
      </Text>
      <Text>
        {" "}
        Title : <Text style={styles.title}> {title} </Text>
      </Text>
      <Text>
        {" "}
        Content : <Text style={styles.content}> {content} </Text>
      </Text>
      <Text>
        Location : Gửi api tìm vị trí vs lat - long tương ứng Lat : {location.lat} Long : {location.long}
      </Text>
    </View>
  );
}
export default function Newspaper() {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Item
          id={item.id}
          title={item.title}
          author={item.author}
          content={item.content}
          location={item.location}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
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
  author: {
    fontSize: 12,
  },
  content: {
    fontSize: 16,
  },
});
