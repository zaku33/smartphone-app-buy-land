import * as React from "react";
import {Text,View,FlatList,ActivityIndicator,AsyncStorage} from "react-native";
import { SearchBar, Header, Button, Icon } from "react-native-elements";

import Item from "../components/Items";
import api from "../../services/api";
import styles from "../css/styles";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, search: "", refreshing: false };
    this.arrayholder = [];
    this.timeoutTyping = 0;
    this.token = AsyncStorage.getItem("access_token");
  }

  componentDidMount() {
    this.getNewsFirst();
  }
  getNewsFirst = async () => {
    let token = await AsyncStorage.getItem("access_token");
    let res = await api.get("api/getNews", {
      headers: { Authorization: `Bearer ${token}` },
    });
    this.setState(
      {
        search: "",
        dataSource: res.data.news,
        isLoading: false,
      },
      () => {
        this.arrayholder = res.data.news;
      }
    );
    this.setState({
      refreshing: false,
    });
  };
  handleRefresh = () => {
    this.setState(
      {
        refreshing: true, // set refreshing = true to make screen loading first
      },
      () => {
        this.getNewsFirst();
      }
    );
  };
  handleCreateNews = () => {
    this.props.navigation.navigate("CreateNews");
  };
  searchFilterFunction = async (text) => {
    this.setState({
      search: text,
    });
    if (this.timeoutTyping) clearTimeout(this.timeoutTyping);
    //#region  START Data request/response
    this.timeoutTyping = setTimeout(async () => {
      if (text === "" || text === null || text === undefined) {
        return this.getNewsFirst();
      }
      let token = await AsyncStorage.getItem("access_token");
      let res = await api.get("api/searchNews", {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          textInput: text,
        },
      });
      this.setState({
        //setting the filtered newData on datasource
        //After setting the data it will automatically re-render the view
        dataSource: res.data.news,
      });
    }, 1000);
    //#endregion
  };

  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.viewStyle}>
        <Header
          containerStyle={styles.headerCreateNewBar}
          leftContainerStyle={styles.leftCreateNewsBar}
          rightContainerStyle={styles.rightCreateNewsBar}
          centerComponent={
            <SearchBar
              round
              containerStyle={styles.searchBar}
              searchIcon={{ size: 24 }}
              onChangeText={(text) => this.searchFilterFunction(text)}
              onClear={(text) => this.searchFilterFunction("")}
              placeholder="Search here..."
              value={this.state.search}
            />
          }
          leftComponent={
            <View>
              <Button
                icon={<Icon name="list" type="font-awesome" color="white" />}
                onPress={() => console.log("Hello")}
              />
            </View>
          }
          rightComponent={
            <View>
              <Button
                icon={<Icon name="plus" type="font-awesome" color="white" />}
                onPress={() => this.handleCreateNews()}
              />
            </View>
          }
        />
        {this.state.dataSource.length > 0 ? (
          <FlatList
            contentContainerStyle={{ width: "100%" }}
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <Item
                id={item.id}
                avatar={item.avatar}
                author={item.nickname}
                phone={item.phone}
                title={item.title}
                content={item.content}
                price={item.price}
                img={item.image}
                location={item.location}
                updated_at={item.updated_at}
              />
            )}
            // enableEmptySections={true}
            style={{ marginTop: 5 }}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            keyExtractor={(item, index) => index.toString()} // or item.id base on Item's id
          />
        ) : (
          <View>
            <Text style={{ textAlign: "center" }}>Found nothing!</Text>
          </View>
        )}
      </View>
    );
  }
}
