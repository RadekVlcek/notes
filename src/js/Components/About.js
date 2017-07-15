import React, {Component} from 'react';
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
        </div>

      </div>

    );

  }

}

export default About;
