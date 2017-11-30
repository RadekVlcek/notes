import React, {Component} from 'react';
import $ from 'jquery';
import uuid from 'uuid';

class Input extends Component {

  constructor(){

    super();

    this.state = {
      inputText: '',
      newNote: {}
    }

  }

  addNote(){

    if(this.refs.text.value){

      $('#input-empty').attr('placeholder', 'Take your note...');
      $('#input-empty').css('border-color', '#e7e7e7');

      let date = new Date();
      let d = date.getDate();
      let m = date.getMonth();
      let y = date.getFullYear();

      let finalDate = `${d}. ${m+1}. ${y}`;

      this.setState({

        newNote: {
          id: uuid.v4(),
          name: this.refs.text.value,
          date: finalDate,
          category: ''
        }

      }, () => {

        this.refs.text.value = '';

        this.props.addNote(this.state.newNote);

      });

    }

    else {

      var errWords = [
        "You need to write something down",
        "That's not much of a words, is it?",
        "Why would you add an empty note :/",
        "You don't like me?",
        "c'moooooooon",
        "Did you forget about something?",
        "-_-"
      ]

      var min = Math.ceil(0);
      var max = Math.floor(errWords.length);
      var x = Math.floor(Math.random() * (max - min + 1));

      $('#input-empty').attr('placeholder', errWords[x]);
      $('#input-empty').css('border-color', '#e74c3c');

    }

  }

  addByEnter(e){

    if(e.key === 'Enter')

      this.addNote();

  }

  preventSub(e){

    e.preventDefault();

  }

  render(){

    return (
      <div className="row" id="input-row">

        <div className="col-md-11">

          <form className="form" onSubmit={this.preventSub}>

            <div className="form-group">

              <input id="input-empty" className="form-control" onKeyPress={this.addByEnter.bind(this)} placeholder="Take your note..." type="text" ref="text" />

            </div>

          </form>

        </div>

        <div className="col-md-1">

          <button id="post-button" className="btn btn-primary" onClick={this.addNote.bind(this)}>Post</button>

        </div>

      </div>

    );

  }

}

export default Input;
