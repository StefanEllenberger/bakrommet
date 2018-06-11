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
    return (
      <div>
      <select name="homescore">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      ------
      <select name="awayscore">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      </div>
    );
  }
}

export default SelectionButtons;
