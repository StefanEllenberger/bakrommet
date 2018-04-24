import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
    <tr className="Team">
      <td>Game {this.props.gameN}</td>
      <td>{this.props.team1}</td>
      <td>{this.props.team2}</td>
      <td>{this.props.date}</td>
      <td>{this.props.group}</td>
    </tr>
    );
  }
}

export default Team;
