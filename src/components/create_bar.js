//  Rajiv Ramaiah, CS52, Summer '16
//  Sources: http://cs52.me/assignments/sa4/

import React, { Component } from 'react';

class CreateBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ name: event.target.value });
    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <div>
        <input placeholder="Add a title for your note!" onChange={this.onInputChange} value={this.state.name} />
        <button id="create-button" type="submit">Create Note!</button>
      </div>
    );
  }
}

export default CreateBar;
