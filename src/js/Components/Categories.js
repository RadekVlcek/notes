import React, {Component} from 'react';

class Categories extends Component {

  constructor(){

    super();

    this.state = {
      catValues: JSON.parse(localStorage.getItem('categories'))
    }

  }

  changeCatValue(i, e){

    if(e.target.value){

      let hold = this.state.catValues;

      if(e.target.value !== hold[i].text){

        hold[i].text = e.target.value;
        
          this.setState({ catValues: hold }, () => {
        
          this.props.passCatValues(this.state.catValues);
        
        });

      }

    }

  }

  render(){

    let categories = this.state.catValues;
    let result;
    let catClass = 'catInput';

    result = categories.map((cat, i) => {

      return (

        <div className="col-md-2" key={i}>

          <input
            key={i}
            className={catClass + i}
            type="text"
            onBlur={this.changeCatValue.bind(this, i)}
            style={{backgroundColor: categories[i].color}}
            defaultValue={categories[i].text} />

        </div>

      );

    });

    return (

      <div className="row categories init-hide">

      <div className="col-md-2 x">Manage your categories</div>

        {result}

      </div>

    );

  }

}

export default Categories;
