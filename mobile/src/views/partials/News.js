import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native';
import { SearchBar ,Header } from 'react-native-elements';


import Item from "../components/Items";
import api from "../../services/api";
import styles from '../css/styles';
 
export default class News extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, search: '' , refreshing: false};
    this.arrayholder = [];
    this.timeoutTyping = 0;
  }
  componentDidMount() {
    this.getNewsFirst();
  }

  getNewsFirst = async () => {
    let res = await api.get("getNews");
    this.setState({
        search : '',
        dataSource: res.data.news,
        isLoading : false
    },()=>{
        this.arrayholder = res.data.news;
    });
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

  SearchFilterFunction = async (text)=> {
    this.setState({
      search: text,
    });    
    if(this.timeoutTyping) clearTimeout(this.timeoutTyping);
    //#region  START Data request/response
    this.timeoutTyping = setTimeout(async ()=>{
      if(text === "" || text === null || text === undefined){
        return this.getNewsFirst();
      }
      let res = await api.get("searchNews", {
        params: {
          textInput: text
        }
      }); 
      this.setState({
        //setting the filtered newData on datasource
        //After setting the data it will automatically re-render the view
        dataSource: res.data.news,
      });
    },1000)
    //#endregion
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
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
        <SearchBar
            containerStyle={{height:"10%"}}
            round
            searchIcon={{ size: 24 }}
            onChangeText={text => this.SearchFilterFunction(text)}
            onClear={text => this.SearchFilterFunction('')}
            placeholder="Search here..."
            value={this.state.search}
        />
        <Header
          containerStyle={styles.containerStyle}
          leftContainerStyle={styles.leftContainerStyle}
          rightContainerStyle={styles.rightContainerStyle}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
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
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          keyExtractor={(item, index) => index.toString()} // or item.id base on Item's id
        />
      </View>
    );
  }
}