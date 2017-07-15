import React, {Component} from 'react';

class ListItem extends Component {

  constructor(props){

    super(props);
    this.state = {
      editMode: false,
      isEmpty: false,
      isEdited: false,
      setColor: this.props.noteColor
    }

  }

  deleteNote(){

    this.props.deleteNote(this.props.note.id);

    this.setState({ isEmpty: false });

  }

  enableEdit(){

    this.setState({ editMode: true, isEmpty: false });

  }

  disableEdit(){

    this.setState({ editMode: false });

    this.props.editNote(this.props.note.id, this.refs.text.value);

    if(this.refs.text.value === '')

      this.setState({ isEmpty: true });

    this.setState({ isEdited: false });

  }

  getDate(){

    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth();
    let y = date.getFullYear();

    return d + '. ' + (m+1) + '. ' + y;

  }

  normalMode(fontSizeStyle, noteColorStyle){

    if(!this.state.isEmpty){

      return (

        <div className={this.props.colSize}>

          <div className="well note-well" style={noteColorStyle}>

            <div className="row note-text">

              <p className="added-note-text" style={fontSizeStyle}>

                <textarea disabled className="normal-textarea" ref="normText" value={this.props.note.name}></textarea>

              </p>

            </div>

            <div className="row note-controls">

              <div className="controls-controls col-sm-8 pull-left">

                <button id="delete-button" onClick={this.deleteNote.bind(this)}>delete</button>

                <button id="edit-button" onClick={this.enableEdit.bind(this)}>edit</button>

            </div>

              <div className="controls-text col-md-4 pull-right">

                <p>{this.getDate()}</p>

              </div>

            </div>

          </div>

        </div>

      );

    }

    else {

      return (

        <div className={this.props.colSize}>

          <div className="well note-well">

            <div className="row note-text">

              <p>Note is empty</p>

              <button className="btn btn-danger" onClick={this.deleteNote.bind(this)}>Delete?</button>

            </div>

            <div className="row note-controls">

              <div className="controls-controls col-sm-8 pull-left">

                <button id="delete-button" onClick={this.deleteNote.bind(this)}>delete</button>

                <button onClick={this.enableEdit.bind(this)}>edit</button>

              </div>

              <div className="controls-text col-md-4 pull-right">

                <p>{this.getDate()}</p>

              </div>

            </div>

          </div>

        </div>

      );

    }

  }

  changeSaveColor(e){

    if(e.target.value !== this.props.note.name)

      this.setState({ isEdited: true });

  }

  setSavingColor(){

    if(this.state.isEdited)

      return {color: "#158cba"};

  }

  editMode(){

    return (

      <div className={this.props.colSize}>

        <div className="well note-well">

          <div className="row note-text">

            <textarea className="edit-textarea" ref="text" defaultValue={this.props.note.name} onChange={this.changeSaveColor.bind(this)}></textarea>

          </div>

          <div className="row note-controls">

            <div className="controls-controls col-sm-8 pull-left">
              <button id="delete-button" onClick={this.deleteNote.bind(this)}>delete</button>
              <button style={this.setSavingColor()} onClick={this.disableEdit.bind(this)}>save</button>
            </div>
            <div className="controls-text col-md-4">
              <p>{this.getDate()}</p>
            </div>

          </div>

        </div>

      </div>

    );

  }

  render(){

      const fontSizeStyle = {
        fontSize: this.props.fontSize
      };

      const noteColorStyle = {
        border: "2px solid " + this.props.noteColor
      };

    if(this.state.editMode){

      return this.editMode();

    }

    else {

        return this.normalMode(fontSizeStyle, noteColorStyle);

    }

  }

}

export default ListItem;
