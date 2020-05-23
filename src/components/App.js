// @ts-check
import React from "react";

import NavBar from "./NavBar";
import GifListContainer from "../containers/GifListContainer";

// the App component should render out the GifListContainer component

const App = () => {
  return (
    <div>
      <NavBar color="black" title="Giphy Search a la Mode" />
      <GifListContainer />
    </div>
  );
};

export default App;

// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=8zbq7RUb8mwIpWeW6ryLVcte7jWEvNTE

// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=8zbq7RUb8mwIpWeW6ryLVcte7jWEvNTE&rating=g

// fetch(
//   "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=8zbq7RUb8mwIpWeW6ryLVcte7jWEvNTE&rating=g"
// )
//   .then((data) => data.json())
//   .then((data) => console.log([data[0], data[1].data[2]]));
