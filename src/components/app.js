import React, { Component } from 'react';
import CreateBar from './create_bar.js';
import Welcome from './welcome';
import Immutable from 'immutable';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      notes: Immutable.Map(),
      //...
    };
  }

  addNote(text) {

  }

  render() {
    return (
      <div>
        <div id="create-bar">
          <Welcome />
          <CreateBar onSearchChange={text => this.search(text)} />
        </div>
      </div>
    );
  }
}

export default App;
