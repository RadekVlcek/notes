import React, {Component} from 'react';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaCheck from 'react-icons/lib/fa/check';
import GoDatabase from 'react-icons/lib/go/database';
import FaCircle from 'react-icons/lib/fa/circle';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';

class ListItem extends Component {

  constructor(props){

    super(props);

    this.state = {
      editMode: false,
      isEmpty: false,
      isEdited: false,
      oneIsEdited: false,
      isCategorized: false,
      catValues: JSON.parse(localStorage.getItem('categories')),
      selectedCat: {
        text: '',
        color: ''
      }
    }

  }

  deleteNote(){

    this.props.deleteNote(this.props.note.id);

    this.setState({ isEmpty: false });

  }

  enableEdit(){

    if(!this.state.oneIsEdited)

      this.setState({ editMode: true, isEmpty: false });

  }

  disableEdit(){

      this.setState({ editMode: false });

      this.props.editNote(this.props.note.id, this.refs.text.value);

      if(this.refs.text.value === '')

        this.setState({ isEmpty: true });

      this.setState({ isEdited: false });

  }

  enableCategories(){ this.setState({ isCategorized: true }); console.log(this.state.catValues); }

  setCategory(i){

<<<<<<< HEAD
    let hold = this.state.catValues[i];

    this.setState({ selectedCat: hold }, () => this.setState({ isCategorized: false }));
=======
    return `${d}. ${m+1}. ${y}`;
>>>>>>> ec1c840ff8611a8c3e41cf88841eddbc4a66789c

  }

  unsetCategory(){ this.setState({ selectedCat: {} }, () => this.setState({ isCategorized: false })) }

  showCategories(){

    if(this.state.isCategorized){

      let categories = this.state.catValues;
      let result;
      result = categories.map((cat, i) => {

        return (

          <span
            key={i}
            style={{color: categories[i].color}}
            title={categories[i].text}
            onClick={this.setCategory.bind(this, i)}>
          <FaCircle/>
          </span>

        );

      });

      return (

                <div id="categories">

                  <span onClick={this.unsetCategory.bind(this)} title="None"><FaTimesCircle/></span>

                  {result}

                </div>

              );

    }

    else

      return (

        <div className="buttons">

          <button id="delete-button" onClick={this.deleteNote.bind(this)}>{this.renderDeleteButton()}</button>

          <button id="edit-button" onClick={this.enableEdit.bind(this)}>{this.renderEditButton()}</button>

          <button id="category-button" onClick={this.enableCategories.bind(this)}>{this.renderCategoryButton()}</button>

        </div>

      );

  }

  changeSaveColor(e){

    if(e.target.value !== this.props.note.name)

      this.setState({ isEdited: true });

    else

      this.setState({ isEdited: false });

  }

  setSavingColor(){

    if(this.state.isEdited)

      return { color: "#28b62c" };

  }

  renderDeleteButton(){

    if(this.props.colSize !== 'col-md-3')

      return 'delete';

    else

      return <FaTrashO/>
  }

  renderEditButton(){

    if(this.props.colSize !== 'col-md-3')

      return 'edit';

    else

      return <FaPencil/>
  }

  renderSaveButton(){

    if(this.props.colSize !== 'col-md-3')

      return 'save';

    else

      return <FaCheck/>
  }

  renderCategoryButton(){

    if(this.props.colSize !== 'col-md-3')

      return 'category';

    else

      return <GoDatabase/>
  }

  normalMode(fontSizeStyle, noteColorStyle){

      if(!this.state.isEmpty){

        return (

          <div className={this.props.colSize}>

          <span className="categories-value" style={{color: this.state.selectedCat.color, fontWeight: "bold"}}>{this.state.selectedCat.text}<span style={{visibility: "hidden"}}>123</span></span>

            <div className="well note-well" style={{noteColorStyle, borderColor: this.state.selectedCat.color}}>

              <div className="row note-text">

                <p className="added-note-text" style={fontSizeStyle}>

                  <textarea disabled className="normal-textarea" ref="normText" value={this.props.note.name}></textarea>

                </p>

              </div>

              <div className="row">

              </div>

              <div className="row note-controls">

                <div className="controls-controls x col-sm-8">

                  {this.showCategories()}

                </div>

                <div className="controls-text x col-md-4">

                  <p>{this.props.date}</p>

                </div>

              </div>

            </div>

          </div>

        );

      }

      else {

        return (

          <div className={this.props.colSize}>

<span className="categories-value" style={{color: this.state.selectedCat.color}}>{this.state.selectedCat.text}<span style={{visibility: "hidden"}}>123</span></span>

            <div className="well note-well" style={noteColorStyle}>

              <div className="row note-text">

                <p>Note is empty</p>

                <button className="btn btn-danger" onClick={this.deleteNote.bind(this)}>Delete?</button>

              </div>

              <div className="row note-controls">

                <div className="controls-controls col-sm-8 pull-left">

                  <button id="delete-button" onClick={this.deleteNote.bind(this)}>delete</button>

                  <button onClick={this.enableEdit.bind(this)}>edit</button>

                  <button id="category-button" onClick={this.enableCategories.bind(this)}>category</button>

                </div>

                <div className="controls-text col-md-4 pull-right">

                  <p>{this.props.date}</p>

                </div>

              </div>

            </div>

          </div>

        );

      }

  }

    editMode(noteColorStyle){

      return (

        <div className={this.props.colSize}>

<span className="categories-value" style={{color: this.state.selectedCat.color}}>{this.state.selectedCat.text}<span style={{visibility: "hidden"}}>123</span></span>

          <div className="well note-well" style={noteColorStyle}>

            <div className="row note-text">

              <textarea className="edit-textarea" ref="text" defaultValue={this.props.note.name} onChange={this.changeSaveColor.bind(this)}></textarea>

            </div>

            <div className="row note-controls">

              <div className="controls-controls col-sm-8 pull-left">

                <button style={this.setSavingColor()} onClick={this.disableEdit.bind(this)}>{this.renderSaveButton()}</button>

              </div>

              <div className="controls-text col-md-4">

                <p>{this.props.date}</p>

              </div>

            </div>

          </div>

        </div>

      );

  }

  render(){

    const fontSizeStyle = { fontSize: this.props.fontSize };

<<<<<<< HEAD
    const noteColorStyle = { border: this.props.noteColor };
=======
    const noteColorStyle = { border: "2px solid " + this.props.noteColor };
>>>>>>> ec1c840ff8611a8c3e41cf88841eddbc4a66789c

    if(this.state.editMode)

      return this.editMode(noteColorStyle);

    else

      return this.normalMode(fontSizeStyle, noteColorStyle);

  }

}

export default ListItem;
