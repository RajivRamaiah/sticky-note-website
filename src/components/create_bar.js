//  Rajiv Ramaiah, CS52, Summer '16
//  Sources: http://cs52.me/assignments/sa4/

import React, { Component } from 'react';

class CreateBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.createStickyNote = this.createStickyNote.bind(this);
  }

  onInputChange(event) {
    this.setState({ title: event.target.value });
  }

  //  source: https://facebook.github.io/react/docs/events.html
  createStickyNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.state.title);
    this.setState({
      title: '',
    });
  }

  render() {
    return (
      <div>
        <form id="create-note" onSubmit={this.createStickyNote}>
          <input placeholder="Add a title for your note!" onChange={this.onInputChange} value={this.state.title} />
          <button id="create-button" type="submit">Create Note!</button>
        </form>
      </div>
    );
  }
}

export default CreateBar;
