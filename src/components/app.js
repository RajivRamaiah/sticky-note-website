import React, { Component } from 'react';
import CreateBar from './create_bar.js';
import Note from './note.js';
import Welcome from './welcome.js';
import Immutable from 'immutable';
import * as firebase from '../firebasedb';

//  received Firebase implementaion help during office hours
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: Immutable.Map(),
    };

    this.handleNotes = this.handleNotes.bind(this);
  }

  componentDidMount() {
    firebase.onNotesChanged(this.handleNotes);
  }

  handleNotes(notes) {
    this.setState({
      notes: Immutable.Map(notes),
    });
  }

  addNote(text) {
    firebase.addNote(
      {
        title: text,
        text: '',
        x: 0,
        y: 0,
        zIndex: 0,
      }
    );
  }

  deleteNote(noteID) {
    firebase.deleteNote(noteID);
  }

  updateText(text, id) {
    firebase.updateNote(id, { text });
  }

  updatePosition(x, y, id) {
    firebase.updateNote(id, { x, y });
  }

  displayNotes() {
    return this.state.notes.entrySeq().map(([id, note]) => {
      return (
        <Note note={note} key={id}
          deleteNote={() => this.deleteNote(id)}
          updateText={(text) => this.updateText(text, id)}
          updatePosition={(x, y) => this.updatePosition(x, y, id)}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div id="create-bar">
          <Welcome />
          <CreateBar createNote={title => this.addNote(title)} />
        </div>
        {this.displayNotes()}
      </div>
    );
  }
}

export default App;
