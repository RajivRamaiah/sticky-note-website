// https://github.com/mzabriskie/react-draggable

import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';

class Note extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      text: this.props.note.text,
    };

    this.onEditClick = this.onEditClick.bind(this);
    this.adaptNote = this.adaptNote.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
  }

  onEditClick() {
    this.setState({ editing: !this.state.editing });
  }

  adaptNote() {
    if (this.state.editing) {
      return (
        <Textarea
          style={{ boxSizing: 'border-box' }}
          minRows={3}
          maxRows={6}
          defaultValue="Just a single line..."
        />
      );
    } else {
      return <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />;
    }
  }
  renderEdit() {
    if (this.state.editing) {
      return <i onClick={this.onEditClick} className="fa fa-check" aria-hidden="true"></i>;
    } else {
      return <i onClick={this.onEditClick} className="fa fa-pencil" aria-hidden="true"></i>;
    }
  }

  render() {
    return (
      <Draggable
        handle=".fa-arrows"
        grid={[25, 25]}
        defaultPosition={{ x: this.props.note.x, y: this.props.note.y }}
        onStart={this.onStartDrag}
        onDrag={this.onDrag}
        onStop={this.onStopDrag}
      >
        <div className="note">
          <div>
            <div id="title/delete">
              <span className="title">{this.props.note.title}</span>
              <i className="fa fa-trash-o" onClick={this.props.deleteNote} ></i>
            </div>

            <div id="arrow/edit">
              <i className="fa fa-arrows"></i>
              {this.renderEdit}
            </div>
            {this.adaptNote}
          </div>
        </div>

      </Draggable>
    );
  }
}

export default Note;
