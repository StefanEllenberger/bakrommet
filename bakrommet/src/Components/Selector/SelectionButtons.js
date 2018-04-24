import React, { Component } from 'react';
import './SelectionButtons.css';

class SelectionButtons extends Component {
  constructor(props){
    super(props);
    this.state = {value: "none"};
    this.handleChange = this.handleChange.bind(this);
};

  handleChange(event) {
  this.setState({value: event.target.value}, function(){console.log(this.state.value)});
};


  render() {
    const btn1 = "__Home";
    const btn2 = "__Draw";
    const btn3 = "__Away";

    return (
      <form className="container" onChange={this.handleChange}>
        <label className="col-sm-4">{btn1}
          <input value="home" type="radio" name={this.props.id}/>
          <span className="checkmark"></span>
        </label>
        <label className="col-sm-4">{btn2}
          <input value="draw" type="radio" name={this.props.id} />
          <span className="checkmark"></span>
        </label>
        <label className="col-sm-4">{btn3}
          <input value="away" type="radio" name={this.props.id}/>
          <span className="checkmark"></span>
        </label>
      </form>
    );
  }
}

export default SelectionButtons;
