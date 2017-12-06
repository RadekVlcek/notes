import React, {Component} from 'react';

class Settings extends Component {

  constructor(){

    super();

    this.state = {
      settings: JSON.parse(localStorage.getItem('settings'))
    }

  }

  changeLayoutToNormal(){
    let hold = this.state.settings;
    hold.layoutSize = 'container';
    this.setState({ settings: hold }, () => this.props.passSettings(this.state.settings));
  }

  changeLayoutToWide(){
    let hold = this.state.settings;
    hold.layoutSize = 'container-fluid';
    this.setState({ settings: hold }, () => this.props.passSettings(this.state.settings));
  }

  changeName(e){

    let name = e.target.value;

    // Because the text field can be filled but also emptied in the same time
    if(name.length !== 0){
      
      if(name.length < 26){

        let hold = this.state.settings;
        hold.firstName = name + "'s";
        this.setState({ settings: hold }, () => this.props.passSettings(this.state.settings));

        //this.props.changeName(name);

      }

      else {
      
        alert('Nobody\'s got such a long first name.');
        name = "";
      }
    }

  }

  changeNoteToSmall(){
    let hold = this.state.settings;
    hold.noteSize = 'col-md-3';
    this.setState({ settings: hold }, () => this.props.passSettings(this.state.settings));
  }

  changeNoteToMedium(){
    let hold = this.state.settings;
    hold.noteSize = 'col-md-4';
    this.setState({ settings: hold }, () => this.props.passSettings(this.state.settings));
  }

  changeNoteToLarge(){
    let hold = this.state.settings;
    hold.noteSize = 'col-md-6';
    this.setState({ settings: hold }, () => this.props.passSettings(this.state.settings));
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

                <label id="change-name-label">First name </label><input id="change-name-input" type="text" onChange={this.changeName.bind(this)} placeholder="Type here" />

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

          </div>

      </div>

      </div>

    );

  }

}

export default Settings;
