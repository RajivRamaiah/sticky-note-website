import React, { Component } from 'react';
import CreateBar from './create_bar.js';
import Note from './note.js';
import Welcome from './welcome.js';
import Immutable from 'immutable';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      notes: Immutable.Map({
        1: {
          title: 'testing1',
          text: 'I is a note',
          x: 0,
          y: 0,
          zIndex: 26,
        },
      }),
      nextID: 2,
    };
  }

  addNote(text) {
    this.setState({
      notes: this.state.notes.set(this.state.nextID, {
        title: text,
        text: '',
        x: 0,
        y: 0,
        zIndex: 26,
      }),
      id: this.state.nextID++,
    });
  }

  deleteNote(noteID) {
    this.setState({
      notes: this.state.notes.delete(noteID),
    });
  }

  updateNote(text, id) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, text); }),
    });
  }

  updatePosition(x, y, id) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, { x, y }); }),
    });
  }

  displayNotes() {
    return this.state.notes.entrySeq().map(([id, note]) => {
      return (
        <Note note={note}
          deleteNote={() => this.deleteNote(id)}
          updatePosition={(x, y) => this.updatePosition(x, y, id)}
          updateNote={(text) => this.updateNote(text, id)}
          // updateSize={(width, height) => this.updateSize(width, height, id)}
          // updateLayers={() => this.updateLayers(id)}
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
          {this.displayNotes()}
        </div>
      </div>
    );
  }
}

export default App;
