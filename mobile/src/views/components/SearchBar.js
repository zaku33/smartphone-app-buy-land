import React from "react";
import { SearchBar } from "react-native-elements";
import api from "../../services/api";

export default class MySearchBar extends React.Component {
  state = {
    search: "",
  };

  searchFilterFunction = async (text) => {
    let inputText = await this.setState({
      search: text,
    });
    let res = await api.get("searchNews", {
      params: {
        foo: 'bar'
      }
    });
    console.log(res.data.news);

    // clearTimeout(setTimeForRequest);
    // let setTimeForRequest = setTimeout(async ()=>{
    // },5000)
    // textFilter: inputText,
  };

  render() {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        value={this.state.search}
        onChangeText={(text) => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
    );
  }
}
