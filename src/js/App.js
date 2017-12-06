import React, { Component } from 'react';
import $ from 'jquery';
import Input from './Components/Input.js';
import NotesList from './Components/NotesList.js';
import Categories from './Components/Categories.js';
import Settings from './Components/Settings.js';
import About from './Components/About.js';
import './extra.js';
import '../css/App.css';

class App extends Component {

  constructor(){

    super();

    /*
    * Initiating local storage objects
    * - in case of cookies deletion
    */

    // Initiate local storage for notes
    if(localStorage.getItem('notes') === null)

      localStorage.setItem('notes', '[]');

    // Initiate categories object
    let catValues = [
      {
        text: "Important",
        color: "#e74c3c"
      },
      {
        text: "for tommorow",
        color: "#3498db"
      },
      {
        text: "waiting",
        color: "#2ecc71"
      },
      {
        text: "not important",
        color: "#f1c40f"
      }
    ]

    // Initiate local storage for categories
    if(localStorage.getItem('categories') === null)

      localStorage.setItem('categories', JSON.stringify(catValues));

    // Initiate settings object
    let settings = {
      layoutSize: "container",
      firstName: "",
      noteSize: "col-md-4"
    }

    // Initiate local storage for settings
    if(localStorage.getItem('settings') === null)

      localStorage.setItem('settings', JSON.stringify(settings));

    this.state = {
      userName: '',
      nowTyping: '',
      notes: JSON.parse(localStorage.getItem('notes')),
      settings: JSON.parse(localStorage.getItem('settings')),
      catValues: [],
      colSize: 'col-md-4',
      layoutSize: 'container',
      fontSize: 13,
      noteColor: '1px solid #e7e7e7',
      statusTextId: 0,
      statusText: [
        {
          text: '',
          color: 'none'
        },
        {
          text: 'posted',
          color: 'label label-primary'
        },
        {
          text: 'edited',
          color: 'label label-success'
        },
        {
          text: 'deleted',
          color: 'label label-danger'
        }
      ]
    }

  }

  componentDidMount(){

    // Calls to the API go here...

  }

  updateLocalStorage(LCkey){

    let hold = JSON.parse(localStorage.getItem(LCkey));

    hold = this.state.notes;

    localStorage.setItem(LCkey, JSON.stringify(hold));

  }

  handleAddNote(newNote){

    this.setState({ statusTextId: 1 });

    $('#status-text').show();

    setTimeout(function(){ $('#status-text').fadeOut() }, 1000);

    let updateNotes = this.state.notes;

    updateNotes.unshift(newNote);

    this.setState({ notes: updateNotes });

    if(localStorage.getItem('notes') === null)

      // Set to Local storage
      localStorage.setItem('notes', JSON.stringify(this.state.notes));

    else

      // Reset to Local storage
      this.updateLocalStorage('notes');

  }

  handleDeleteNote(id){

    this.setState({ statusTextId: 3 });

    $('#status-text').show().delay(1100).fadeOut();

    let oldNotes = this.state.notes;

    let index = oldNotes.findIndex((i) => i.id === id);

    oldNotes.splice(index, 1);

    this.setState({ notes: oldNotes });

    // Reset to Local storage
    this.updateLocalStorage('notes');

  }

  handleEditNote(id, text){

    this.setState({ statusTextId: 2 });

    $('#status-text').show().delay(1100).fadeOut();

    let oldNotes = this.state.notes;

    for(let i=0 ; i<oldNotes.length ; i++){

      if(oldNotes[i].id === id)

        oldNotes[i].name = text;

    }

    this.setState({ notes: oldNotes });

    // Reset to Local storage
    // -- There's still a problem when note is edited to an empty note
    this.updateLocalStorage('notes');

  }

  handleChangeName(name){

        let updateName = this.state.userName;

        updateName = name + "'s";

        this.setState({ userName: updateName });

  }

  changeStatusText(){

    return (

      <span id="wda">

        write down anything

          <span className={this.state.statusText[this.state.statusTextId].color}

            id="status-text">{this.state.statusText[this.state.statusTextId].text}

          </span>

      </span>

    );

  }

  handleChangeLayoutSize(layoutSize){ this.setState({ layoutSize: layoutSize }) }

  handlePassColSiz(colSize){ this.setState({ colSize: colSize }) }

  handleChangeFontSize(fontSize){ this.setState({ fontSize: fontSize }) }

  handleChangeNoteColor(noteColor){ this.setState({ noteColor: noteColor }) }

  handlePassCatValues(newCatValues) {

    this.setState({ catValues: newCatValues }, () => {

      let hold = JSON.parse(localStorage.getItem('categories'));

      hold = this.state.catValues;

      localStorage.setItem('categories', JSON.stringify(hold));

    });

}

handlePassSettings(newSettings){

  this.setState({ settings: newSettings }, () => {

    let hold = JSON.parse(localStorage.getItem('settings'));

    hold = this.state.settings;

    localStorage.setItem('settings', JSON.stringify(hold));

  });

}

  render() {

    return (

      <div className="app">

        <div id="top-line"></div>

        <div className="container">

          <div className="row note-controls">

            <div className="col-md-8">

              <h2 id="title">

                <a href={window.location.href}>{this.state.settings.firstName} Notes.</a>

                { this.changeStatusText() }

              </h2>

            </div>

            <div id="top-options" className="col-md-4 controls-controls pull-right">

              <button id="categories-button">categories</button>

              <button id="settings-button">settings</button>

              <button id="about-button">about</button>

            </div>

          </div>

          { /* CATEGORIES */ }
          <Categories passCatValues={this.handlePassCatValues.bind(this)} />

          { /* SETTINGS */ }
          <Settings
            passSettings={this.handlePassSettings.bind(this)}
            changeName={this.handleChangeName.bind(this)}
            passLayoutSize={this.handleChangeLayoutSize.bind(this)}
            passColSize={this.handlePassColSiz.bind(this)}
            changeFontSize={this.handleChangeFontSize.bind(this)}
            changeNoteColor={this.handleChangeNoteColor.bind(this)} />

            { /* ABOUT */ }
            <About />

            { /* INPUT */ }
            <Input
              id={this.state.notes.length}
              addNote={this.handleAddNote.bind(this)} />

            </div>

            <div className="wide-layout"><div className={this.state.settings.layoutSize}>

            { /* WELL (parent) */ }
            <div className="row">

                <NotesList
                  notes={this.state.notes}
                  deleteNote={this.handleDeleteNote.bind(this)}
                  editNote={this.handleEditNote.bind(this)}
                  colSize={this.state.settings.noteSize}
                  fontSize={this.state.fontSize}
                  noteColor={this.state.noteColor}
                  catValues={this.state.catValues} />

            </div>

          </div></div>

          <footer className="footer">

            <div id="foot"></div>

          </footer>

      </div>
    );

  }

}

export default App;
