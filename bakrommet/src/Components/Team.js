import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
    <tr className="Team">
        <td>{this.props.name}</td>
        <td>{this.props.score}</td>

    </tr>
    );
  }
}

export default Team;
