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
          title: 'Hello',
          text: 'I\'m a note, you can add more of me by typing a title and pressing the create button above!',
          x: 0,
          y: 0,
          zIndex: 1,
        },
        2: {
          title: 'Tips',
          text: 'Move me around by dragging me from the arrows, or edit me by pressing the pencil button',
          x: 300,
          y: 150,
          zIndex: 2,
        },
        3: {
          title: 'Add Cool GIFs!',
          text: '![](http://i.giphy.com/gyRWkLSQVqlPi.gif)',
          x: 400,
          y: 250,
          zIndex: 3,
        },
      }),
      nextID: 4,
      zAxis: 4,
    };
  }

  addNote(text) {
    this.setState({
      notes: this.state.notes.set(this.state.nextID, {
        title: text,
        text: '',
        x: 0,
        y: 0,
        zIndex: this.state.nextID,
      }),
      nextID: this.state.nextID + 1,
      zAxis: this.state.zAxis + 1,
    });
  }

  deleteNote(noteID) {
    this.setState({
      notes: this.state.notes.delete(noteID),
    });
  }

  updateText(text, id) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, { text }); }),
    });
  }

  updatePosition(x, y, id) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, { x, y }); }),
    });
  }

  updateZAxis(currentID) {
    if (this.state.zIndex !== this.state.notes.get(currentID).zIndex) {
      this.setState({
        notes: this.state.notes.update(currentID, (n) => {
          return Object.assign({}, n, { zIndex: this.state.zIndex + 1 });
        }),
        zIndex: this.state.zIndex + 1,
      });
    }
  }

  displayNotes() {
    return this.state.notes.entrySeq().map(([id, note]) => {
      return (
        <Note note={note} key={id}
          deleteNote={() => this.deleteNote(id)}
          updateText={(text) => this.updateText(text, id)}
          updatePosition={(x, y) => this.updatePosition(x, y, id)}
          updateZAxis={() => this.updateZAxis(id)}
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
