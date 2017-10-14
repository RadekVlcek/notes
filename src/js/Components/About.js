import React, {Component} from 'react';
import '../extra.js'

class About extends Component {

  render(){

    return (

      <div>

        <div className="container about init-hide">

          <h3>Notes. <small>(testing version)</small></h3>
          <p>Simple notes app that lets you write down anything. Inspired by <a href="https://keep.google.com/" target="_blank" rel="noopener noreferrer">Google Keep</a>.</p>
          <p>Notes and all the settings are being stored in your web browser.</p>
          <p>Created by <a href="http://www.radek.tech/" target="_blank" rel="noopener noreferrer">Radoslav Vlcek</a>.</p>
          <a id="github-link" href="https://github.com/RadekVlcek/notes" target="_blank" rel="noopener noreferrer"><img src="https://octicons.github.com/img/og/mark-github.png" alt="" width="90" /></a>
        </div>

      </div>

    );

  }

}

export default About;
