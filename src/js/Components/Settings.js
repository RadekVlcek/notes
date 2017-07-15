import React, {Component} from 'react';
import '../extra.js';

class Settings extends Component {

  constructor(){

    super();

    this.state = {
      colSize: "",
      fontSize: 20,
      noteColor: 'none',
      notes: {    // Note yet usable
          none: "1px solid #e7e7e7",
          blue: "2px solid #3498db",
          green: "2px solid #2ecc71",
          red: "2px solid #e74c3c",
          yellow: "2px solid #f1c40f",
          purple: "2px solid #9b59b6"
      }
    }

  }

  changeNoteToSmall(){
    this.setState({ colSize: "col-md-3" }, () => this.props.passColSize(this.state.colSize));
  }

  changeNoteToMedium(){
    this.setState({ colSize: "col-md-4" }, () => this.props.passColSize(this.state.colSize));
  }

  changeNoteToLarge(){
    this.setState({ colSize: "col-md-6" }, () => this.props.passColSize(this.state.colSize));
  }

  changeFontSize(){
    this.setState({ fontSize: this.refs.fontSize.value }, () => this.props.changeFontSize(this.state.fontSize));
  }

  changeNoteColor(e){
    this.setState({ noteColor: e.target.value }, () => this.props.changeNoteColor(this.state.noteColor));
  }

  render(){

    return (

      <div className="row">

        <div className="col-sm-11 settings">

          <div>

            { /* Note size setting */ }
            <div className="col-sm-5 uni-settings">

              <p>Note size</p>

              <ul id="note-size-settings">

                <li><button type="button" id="small" onClick={this.changeNoteToSmall.bind(this)}>small</button></li>

                <li><button type="button" id="middle" onClick={this.changeNoteToMedium.bind(this)}>medium</button></li>

                <li><button type="button" id="large" onClick={this.changeNoteToLarge.bind(this)}>large</button></li>

              </ul>

            </div>

            { /* Font size setting */ }
            <div className="col-sm-3 uni-settings">

              <p>Font size</p>

              <input type="number" max="60" min="10" id="settings-font-input" className="form-control" ref="fontSize" value={this.state.fontSize} onChange={this.changeFontSize.bind(this)}/>

            </div>

            { /* Note color setting */ }
            <div className="col-sm-4 uni-settings">

              <p>Note color</p>

              <select id="settings-note-color" className="form-control" onChange={this.changeNoteColor.bind(this)}>

                { /* Just for now */ }
                <option value="none">none</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="purple">purple</option>

              </select>

            </div>

          </div>

        </div>

      </div>

    );

  }

}

export default Settings;
