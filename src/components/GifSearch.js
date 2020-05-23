// @ts-check

import React from "react";

export default class GifSearch extends React.Component {
  state = {
    query: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitSearch(this.state.query);
  };

  render() {
    return (
      <div>
        <h4>Enter a Search Term</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="query"
            id="query"
            value={this.state.query}
            onChange={(event) => this.setState({ query: event.target.value })}
          />
        </form>
      </div>
    );
  }
}
