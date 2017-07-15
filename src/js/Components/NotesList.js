import React, {Component} from 'react';
import ListItem from './ListItem';

class NotesList extends Component {

  passDeleteNote(idToDelete){
    this.props.deleteNote(idToDelete);
  }

  passEditNote(id, text){
    this.props.editNote(id, text);
  }

  passFontSize(fontSize){
    this.props.fontSize(fontSize);
  }

  render(){


    let propsNotes = this.props.notes;
    let notesList;

    if(propsNotes){

      notesList = propsNotes.map((note, i) => {

        return (

          <ListItem
            key={i}
            note={note}
            deleteNote={this.passDeleteNote.bind(this)}
            saveEdit={this.passSaveEdit}
            editNote={this.passEditNote.bind(this)}
            colSize={this.props.colSize}
            fontSize={this.props.fontSize}
            noteColor={this.props.noteColor} />

        );

      })

    }


    return (

      <div>

        {notesList}

      </div>

    );

  }

}

export default NotesList;
