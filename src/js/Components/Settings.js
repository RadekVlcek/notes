import React, {Component} from 'react';

class Settings extends Component {

  constructor(){

    super();

    this.state = {
      layoutSize: '',
      colSize: '',
      fontSize: 13,
      noteColor: 'none',
    }

  }

  changeName(e){

    this.props.changeName(e.target.value);

  }

  changeLayoutToNormal(){
    this.setState({ layoutSize: 'container' }, () => this.props.passLayoutSize(this.state.layoutSize));
  }

  changeLayoutToWide(){
    this.setState({ layoutSize: 'container-fluid' }, () => this.props.passLayoutSize(this.state.layoutSize));
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

      <div className="container settings init-hide">

      <div className="row">

          <div className="settings-second">

            { /* Layout size settings */ }
            <div className="col-sm-4 uni-settings">

              <p>Layout size</p>

              <ul className="size-settings layout">

                <li><button type="button" id="normal" onClick={this.changeLayoutToNormal.bind(this)}>normal</button></li>

                <li><button type="button" id="wide" onClick={this.changeLayoutToWide.bind(this)}>wide</button></li>

              </ul>

            </div>

            { /* Name change */ }
            <div className="col-sm-4 uni-settings">

              <span id="name">

                <label id="change-name-label">First name </label><input id="change-name-input" type="text" onChange={this.changeName.bind(this)} placeholder="type here" />

              </span>

            </div>

            { /* Note size setting */ }
            <div className="col-sm-4 uni-settings">

              <p>Note size</p>

              <ul className="size-settings note">

                <li><button type="button" id="small" onClick={this.changeNoteToSmall.bind(this)}>small</button></li>

                <li><button type="button" id="middle" onClick={this.changeNoteToMedium.bind(this)}>medium</button></li>

                <li><button type="button" id="large" onClick={this.changeNoteToLarge.bind(this)}>large</button></li>

              </ul>

            </div>


             { /* Font size setting
            <div className="col-sm-3 uni-settings">

              <p>Font size</p>

              <input type="number" max="60" min="10" id="settings-font-input" className="form-control" ref="fontSize" value={this.state.fontSize} onChange={this.changeFontSize.bind(this)}/>

            </div>

             Note color setting
            <div className="col-sm-4 uni-settings">

              <p>Note color</p>

              <select id="settings-note-color" className="form-control" onChange={this.changeNoteColor.bind(this)}>


                <option value="1px solid #e7e7e7">none</option>
                <option value="3px solid #3498db">blue</option>
                <option value="3px solid #2ecc71">green</option>
                <option value="3px solid #e74c3c">red</option>
                <option value="3px solid #f1c40f">yellow</option>
                <option value="3px solid #9b59b6">purple</option>

              </select>

            </div>

              */ }

          </div>

      </div>

      </div>

    );

  }

}

export default Settings;
