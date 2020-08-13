import * as React from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
<<<<<<< HEAD
  AsyncStorage,
} from "react-native";
import { SearchBar, Header, Button, Icon, Input } from "react-native-elements";
=======
  AsyncStorage
} from "react-native";
import { SearchBar, Header, Button, Icon ,Input} from "react-native-elements";
>>>>>>> origin/dev-company

import Item from "../components/Items";
import api from "../../services/api";
import styles from "../css/styles";

export default class News extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      isLoading: true,
      search: "",
      refreshing: false,
      price_from: "",
      price_to: "",
    };
=======
    this.state = { isLoading: true, search: "", refreshing: false , fromPrice: "", toPrice: "" } ;
>>>>>>> origin/dev-company
    this.arrayholder = [];
    this.timeoutTyping = 0;
    this.token = AsyncStorage.getItem("access_token");
    this.getNewsFirst();
  }

  componentDidUpdate() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.getNewsFirst();
    });
  }

  getNewsFirst = async () => {
    let token = await AsyncStorage.getItem("access_token");
    let res = await api.get("api/getNews", {
      headers: { Authorization: `Bearer ${token}` },
    });
    this.setState(
      {
        search: "",
        dataSource: res.data.data,
        isLoading: false,
      },
      () => {
        this.arrayholder = res.data.data;
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
        dataSource: res.data.data,
      });
    }, 1000);
    //#endregion
  };
  searchByPrice = () => {
    let dataReq = {
      price_from: this.state.price_from,
      price_to: this.state.price_to,
    };
  };

  handleSearchPrice = async()=>{
    let token = await AsyncStorage.getItem("access_token");
    let res = await api.get("api/getNewsByPrice", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        price_from : this.state.fromPrice,
        price_to : this.state.toPrice
      },
    });
    this.setState({
      dataSource: res.data.data,
    });
  }

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
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content"
          containerStyle={{
            display: "flex",
            // flex: 1,
            height: 50,
            justifyContent: "space-around",
          }}
          containerStyle={styles.headerCreateNewBar}
          leftContainerStyle={styles.leftCreateNewsBar}
          rightContainerStyle={styles.rightCreateNewsBar}
          // leftComponent={
          //   <View style={{ width: "50%" }}>
          //     <Input
          //       placeholder="Input price from"
          //       label="Price from"
          //       onChangeText={(text) => this.setState({ price_from: text })}
          //     />
          //     <Input
          //       placeholder="Input price to"
          //       label="Price to"
          //       onChangeText={(text) => this.setState({ price_top: text })}
          //     />
          //     <Button
          //       title="Tìm theo giá"
          //       onPress={() => {
          //         this.searchByPrice();
          //       }}
          //     />
          //   </View>
          // }
          centerComponent={
<<<<<<< HEAD
            <View style={{ width: "70%" }}>
              <Input
                placeholder="Search here..."
                label="Search land"
                onChangeText={(text) => this.searchFilterFunction(text)}
=======
            <View>
              <SearchBar
                  round
                  lightTheme
                  containerStyle={styles.searchBar}
                  searchIcon={{ size: 24 }}
                  onChangeText={(text) => this.searchFilterFunction(text)}
                  onClear={(text) => this.searchFilterFunction("")}
                  placeholder="Search here..."
                  value={this.state.search}
              />
              <Input
                  placeholder='giá từ'
                  onChangeText={(text)=> {this.setState({fromPrice: text})}}
              />
              <Input
                  placeholder='đến'
                  onChangeText={(text)=> {this.setState({toPrice: text})}}
              />
              <Button title="Tìm theo giá" onPress={this.handleSearchPrice()}/>
            </View>

          }
          leftComponent={
            <View>
              <Button
                icon={<Icon name="list" type="font-awesome" color="white" />}
                onPress={() => console.log("Hello")}
>>>>>>> origin/dev-company
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
                address={item.address}
                content={item.content}
                price={item.price}
                img={item.image}
                location={item.location}
                priority_icon={item.type_post.priority_icon}
                updated_at={item.updated_at}
                is_editable={item.is_editable}
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
