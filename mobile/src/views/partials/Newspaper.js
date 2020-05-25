import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

import Constants from "expo-constants";
import api from "../../services/api";

function Item({ id, title, author, content, location }) {
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
        Lat : {location.lat} Long : {location.long}
      </Text>
    </View>
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
class Newspaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      refreshing: false,
      search: "",
    };
  }
  componentDidMount() {
    this.getNewsFirst();
  }

  getNewsFirst = async () => {
    let res = await api.get("getNews");
    this.setState({
      news: res.data.news,
    });
    this.setState({
      refreshing: false,
    });
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => {
        this.getNewsFirst();
      }
    );
  };

  ///////// Đang test



  searchFilterFunction = (text) => {
    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.name.title.toUpperCase()}   
      ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ news: newData });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={(text) => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.news}
        ListHeaderComponent={this.renderHeader}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            author={item.author}
            content={item.content}
            location={item.location}
          />
        )}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
export default Newspaper;
