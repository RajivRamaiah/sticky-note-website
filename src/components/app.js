import React, { Component } from 'react';
import CreateBar from './create_bar.js';
import Welcome from './welcome';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="search-bar">
          <Welcome />
          <h1>MyTube - @CS52 Productions</h1>
          <CreateBar onSearchChange={text => this.search(text)} />
        </div>

      </div>
    );
  }
}

export default App;
