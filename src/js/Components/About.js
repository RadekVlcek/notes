import React, {Component} from 'react';
import github from '../../img/mark-github.png';
import '../extra.js'

class About extends Component {

  render(){

    return (

      <div>

        <div className="container about">

          <h3>Notes. <small>(alpha version)</small></h3>
          <p>Simple notes app that lets you write down anything. Inspired by <a href="https://keep.google.com/" target="_blank" rel="noopener noreferrer">Google Keep</a>.</p>
          <p>It obviously still needs a lots of tweaks + back end solution.</p>
          <p>Created by <a href="http://www.radek.tech/" target="_blank" rel="noopener noreferrer">Radoslav Vlcek</a>.</p>
          <a id="github-link" href="https://github.com/RadekVlcek/notes" target="_blank" rel="noopener noreferrer"><img src={github} alt={github} width="90" /></a>
        </div>

      </div>

    );

  }

}

export default About;
