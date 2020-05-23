// @ts-check

import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends React.Component {
  state = {
    gifs: [],
  };

  componentDidMount = () => {
    // I hard coded a starting search so there'd always be something on the page when it loaded for the first time.
    this.handleSearch("pineapple");
  };

  handleSearch = async (query) => {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=8zbq7RUb8mwIpWeW6ryLVcte7jWEvNTE`
    );

    let json = await response.json();
    let images = json.data;

    this.setState({ gifs: images.slice(0, 3) });
  };

  render() {
    return (
      <div>
        <GifSearch submitSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
