import React, { Component } from 'react';

class Fixture extends Component {
  render() {
    return (
    <tr className="Fixture">
        <td>{this.props.team1}</td>
        <td>{this.props.team2}</td>
        <td>{this.props.date}</td>
        <td>{this.props.group}</td>



    </tr>
    );
  }
}

export default Fixture;
