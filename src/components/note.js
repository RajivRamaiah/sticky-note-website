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
    this.showEditIcon = this.showEditIcon.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.showEditBox = this.showEditBox.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  onEditClick() {
    this.setState({ editing: !this.state.editing });
  }

  onDrag(event, ui) {
    this.props.updateNote(ui.x, ui.y);
  }

  updateText(event) {
    this.setState({ text: event.target.value });
    this.props.updateNote(this.state.text);
  }

  //  change icon if in editing or not.
  showEditIcon() {
    if (this.state.editing) {
      return <i className="fa fa-check" onClick={this.onEditClick} aria-hidden="true"></i>;
    } else {
      return <i className="fa fa-pencil" onClick={this.onEditClick} aria-hidden="true"></i>;
    }
  }

  showEditBox() {
    if (this.state.editing) {
      return (
        <div className="edit-box">
          <Textarea
            style={{ boxSizing: 'border-box' }}
            minRows={12}
            maxRows={12}
            defaultValue={this.state.text}
            onChange={this.updateText}
          />
        </div>
       );
    } else {
      return (
        <div className="content" dangerouslySetInnerHTML={{ __html: marked(this.state.text) }} />
      );
    }
  }

  render() {
    return (
      <Draggable
        handle=".fa-arrows"
        grid={[1, 1]}
        defaultPosition={{ x: this.props.note.x, y: this.props.note.y }}
        position={{ x: this.props.note.x, y: this.props.note.y }}
        onDrag={this.onDrag}
      >
        <div className="note">
          <div id="title_delete">
            <span className="title">{this.props.note.title}</span>
            <i className="fa fa-trash-o" onClick={this.props.deleteNote} ></i>
          </div>

          <div id="arrow_edit">
            <i className="fa fa-arrows"></i>
            {this.showEditIcon()}
          </div>
          {this.showEditBox()}
        </div>

      </Draggable>
    );
  }
}

export default Note;
