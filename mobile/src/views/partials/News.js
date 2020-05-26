import React from "react";
import { FlatList } from "react-native";

import Item from "../components/Items";
import MySearchBar from "../components/SearchBar";

import styles from "../css/styles";
import api from "../../services/api";

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

  render() {
    return (
      <FlatList
        data={this.state.news}
        ListHeaderComponent={MySearchBar}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            avatar={item.avatar}
            author={item.author}
            phone={item.phone}
            title={item.title}
            content={item.content}
            location={item.location}
            created_at={item.created_at}
            updated_at={item.updated_at}
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
