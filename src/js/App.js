import React, { Component } from 'react';
import Input from './Components/Input.js';
import NotesList from './Components/NotesList.js';
import Settings from './Components/Settings.js';
import About from './Components/About.js';
import './extra.js';
import '../css/App.css';

class App extends Component {

  constructor(){

    super();
    
    this.state = {
      nowTyping: '',
      notes: [],
      statusText: [],
      colSize: "col-md-4",
      fontSize: 20,
      noteColor: 'none'
    }

  }

  componentDidMount(){

    // Calls to the API go here...

  }


  handleAddNote(newNote){

    let oldNotes = this.state.notes;

    oldNotes.push(newNote);

    this.setState({ notes: oldNotes });

  }


  handleDeleteNote(id){

    let oldNotes = this.state.notes;

    let index = oldNotes.findIndex((i) => i.id === id);

    oldNotes.splice(index, 1);

    this.setState({ notes: oldNotes });

  }

  handleEditNote(id, text){

    let oldNotes = this.state.notes;

    for(let i=0 ; i<oldNotes.length ; i++){

      if(oldNotes[i].id === id)

        oldNotes[i].name = text;

    }

    this.setState({ notes: oldNotes });

  }

  handlePassColSiz(colSize){
    this.setState({ colSize: colSize });
  }

  handleChangeFontSize(font){
    this.setState({ fontSize: font });
  }

  handleChangeNoteColor(color){
    this.setState({ noteColor: color });
  }

  render() {

    return (

      <div className="app">

        <div id="top-line"></div>

        <div className="container">

          <div className="row note-controls">

            <div className="col-md-9">

              <h2 id="title">

                <a href={window.location.href}>Notes.</a>
                <span id="status-text">write down anything</span>

              </h2>

            </div>

            <div id="top-options" className="col-md-3 controls-controls pull-right">

              <button id="settings-button">settings</button>
              <button id="about-button">about</button>

            </div>

          </div>

          { /* SETTINGS */ }
          <Settings
            passColSize={this.handlePassColSiz.bind(this)}
            changeFontSize={this.handleChangeFontSize.bind(this)}
            changeNoteColor={this.handleChangeNoteColor.bind(this)} />

          { /* ABOUT */ }
          <About />

          { /* INPUT */ }
            <Input
              id={this.state.notes.length}
              addNote={this.handleAddNote.bind(this)} />

          { /* WELL (parent) */ }
          <div id="notes-parent" className="row">

              <NotesList
                notes={this.state.notes}
                deleteNote={this.handleDeleteNote.bind(this)}
                editNote={this.handleEditNote.bind(this)}
                colSize={this.state.colSize}
                fontSize={this.state.fontSize}
                noteColor={this.state.noteColor} />

          </div>

          <footer className="footer">

            <div id="foot"></div>

          </footer>

        </div>

      </div>
    );

  }

}

export default App;
