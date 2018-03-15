import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
    <tr className="Team">
        <td>{this.props.team.name}</td>
        <td>{this.props.team.score}</td>
    </tr>
    );
  }
}

export default Team;
